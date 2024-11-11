import Image from "next/image";
import styles from "./page.module.css";

export default function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.desription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem
            laboriosam consectetur ipsam aliquid iste neque, perspiciatis totam
            fugit architecto. Nesciunt architecto atque totam ipsam quidem
            magnam. Ullam, saepe aspernatur!
          </p>
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
}
