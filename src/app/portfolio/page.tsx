import Link from "next/link";
import styles from "./page.module.css"
import { categories } from "@/data/categories"
import { categoriesType } from "@/types/portfolioCategoriesType";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}></h1>
      <div className={styles.items}>
        { categories.map( (category: categoriesType) => (
          <Link key={category.id} href={category.url} className={styles.item}>
            <span className={styles.itemTitle}>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
 