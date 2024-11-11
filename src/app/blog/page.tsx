import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

const Blog: FC<{ params: { category: string } }> = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="blog/id">
          <div className={styles.content}>
            <h1 className={styles.contentTitle}>Creative Portfolio</h1>
            <p className={styles.contentDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos blanditiis tenetur molestias excepturi dolorem porro
              voluptatibus nihil consequuntur numquam sed atque perspiciatis
              nisi dolore aut temporibus nesciunt quaerat, ad quos.
            </p>
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

        <Link className={styles.item} href="blog/id">
          <div className={styles.content}>
            <h1 className={styles.contentTitle}>Creative Portfolio</h1>
            <p className={styles.contentDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos blanditiis tenetur molestias excepturi dolorem porro
              voluptatibus nihil consequuntur numquam sed atque perspiciatis
              nisi dolore aut temporibus nesciunt quaerat, ad quos.
            </p>
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
      </div>
    </div>
  );
};

export default Blog;
