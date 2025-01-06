"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import connect from "@/utils/db";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();

  // option 1
  // fetch data on client side using useEffet
  // not the best way
  // NOT handling automatically errors and loading state
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // fetcher funnction
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store", //default caching in Version 15+
  //       // cache: "force-cache", //default caching in Version 13
  //       // next: { revalidate: 10 }, //Change lifetime is 10s
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  // option 2
  // fetch data using SWR
  // handles automatically errors and loading state
  // fetcher function
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  // option 3
  // fetch data using React Query
  // add QueryClient on the root component
  // fetcher function
  // const getData = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     cache: "no-store", //default caching in Version 15+
  //     // cache: "force-cache", //default caching in Version 13
  //     // next: { revalidate: 10 }, //Change lifetime is 10s
  //   });
  //   if (!res.ok) {
  //     throw new Error("Error fetching data");
  //   }
  //   return res.json();
  // };

  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["posts"], // The query key as part of the object
  //   queryFn: getData,
  // });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data?.user?.name,
        }),
      });
    } catch (e) {
      throw new Error(error instanceof Error ? error.message : "Unkown Error");
    }
  };

  if (session.status === "loading") {
    // add singleton
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session?.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading ..."
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.delete}>X</span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add new Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
          />
          <input type="text" placeholder="Image URL" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textarea}
            cols={30}
            rows={10}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
}
