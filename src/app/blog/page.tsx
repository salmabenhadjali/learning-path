import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
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
          <Link key={item.id} className={styles.item} href={`blog/${item.id}`}>
            <div className={styles.content}>
              <h1 className={styles.contentTitle}>{item.title}</h1>
              <p className={styles.contentDescription}>{item.body}</p>
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                fill={true}
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
