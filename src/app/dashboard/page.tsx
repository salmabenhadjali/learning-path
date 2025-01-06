"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
    "https://jsonplaceholder.typicode.com/posts",
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

  if (session.status === "loading") {
    // add singleton
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session?.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>;
  }
}
