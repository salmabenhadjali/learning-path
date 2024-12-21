"use client";
import Link from "next/link";
import { menuItems } from "@/data/menuItems";
import styles from "./navbar.module.css";
import DarkModeToogle from "../DarkModeToogle/DarkModeToogle";

const Navbar = () => {
  const logout = () => {
    console.log("logged out !");
  };
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        NextFolio
      </Link>
      <div className={styles.links}>
        <DarkModeToogle />
        {menuItems.map((item) => (
          <Link key={item.id} href={item.url} className={styles.link}>
            {item.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
