import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__section}>
        <h1 className={styles.container__title}>Better design for your degital products.</h1>
        <p className={styles.container__description}>
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={styles.container__section}>
        <Image
          src="/hero.png"
          alt="homepage"
          className={styles.img}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
