import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting Award winning digital expseriences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.textTitle}>Who Are We ?</h1>
          <p className={styles.textDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            inventore incidunt, hic fugiat, voluptate unde dignissimos vel
            voluptates pariatur asperiores et nisi vero! Eius nemo tempore
            deleniti odio repudiandae officia!
          </p>
        </div>
        <div className={styles.item}>
          <h1>What We Do ?</h1>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            delectus quam repellendus excepturi quibusdam earum expedita amet
            obcaecati corrupti adipisci et id ducimus, minus autem non.
            Laudantium dignissimos alias unde.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}
