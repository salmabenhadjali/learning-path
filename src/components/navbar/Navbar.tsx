"use client";
import Link from "next/link";
import { menuItems } from "@/data/menuItems";
import styles from "./navbar.module.css";
import DarkModeToogle from "../DarkModeToogle/DarkModeToogle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
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
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
