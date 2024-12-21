import Image from "next/image";
import styles from "./page.module.css";
import { FC } from "react";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store", //default caching in Version 15+
    // cache: "force-cache", //default caching in Version 13
    // next: { revalidate: 10 }, //Change lifetime is 10s
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost: FC<{ params: { id: string } }> = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.desription}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis, quia, ad iste culpa, eius accusamus obcaecati tempore
          aliquam facilis id ipsam doloremque impedit. Perferendis fugiat
          repellendus dolor nihil enim maxime!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
