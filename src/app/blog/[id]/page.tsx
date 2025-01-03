import Image from "next/image";
import styles from "./page.module.css";
import { FC } from "react";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store", //default caching in Version 15+
    // cache: "force-cache", //default caching in Version 13
    // next: { revalidate: 10 }, //Change lifetime is 10s
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getData(id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost: FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = await params;
  const data = await getData(id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desription}>{data.desc}</p>
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
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
