import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ url, text }: {url: string, text: string}) => {
  return (
    <Link href={url}>
      <div className={styles.container}>{text}</div>
    </Link>
  );
};

export default Button;