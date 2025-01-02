import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store", //default caching in Version 15+
    // cache: "force-cache", //default caching in Version 13
    // next: { revalidate: 10 }, //Change lifetime is 10s
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {data.map((item) => (
          <Link
            key={item._id}
            className={styles.item}
            href={`blog/${item._id}`}
          >
            <div className={styles.content}>
              <h1 className={styles.contentTitle}>{item.title}</h1>
              <p className={styles.contentDescription}>{item.desc}</p>
            </div>
            <div className={styles.imgContainer}>
              <Image className={styles.img} src={item.img} fill={true} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
