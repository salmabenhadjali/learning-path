import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import { socials } from "@/data/socials";
import { socialType } from "@/types/socialType";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 <span className={styles.nowrap}>NextFolio</span>. All rights reserved.</div>
      <div className={styles.social}>
        {socials.map((social: socialType) => (
          <Link key={social.id} href={social.url} target="_blank">
            <Image
              src={social.src}
              width="15"
              height="15"
              className={styles.icon}
              alt={social.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
