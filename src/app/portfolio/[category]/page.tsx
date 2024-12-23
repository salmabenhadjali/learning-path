import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { FC } from "react";
import { itemsByCategory } from "@/data/categories";
import { notFound } from "next/navigation";

const getData = (category: string) => {
  const data = itemsByCategory[category];
  if (data) return data;
  return notFound();
};

const Category: FC<{ params: { category: string } }> = async ({ params }) => {
  const { category } = await params;
  const data = getData(category);
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{category}</h1>
      <div className={styles.items}>
        {data.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.content}>
              <h1 className={styles.contentTitle}>{item.title}</h1>
              <p className={styles.contentDescription}>{item.desc}</p>
              <Button url="#" text="See More" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={item.image}
                fill={true}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
