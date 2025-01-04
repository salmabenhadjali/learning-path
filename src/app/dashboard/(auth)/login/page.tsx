"use client";

import { signIn } from "next-auth/react";
import styles from "./page.module.css";
import { FormEvent } from "react";

export default function Login() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    try {
      signIn("credentials", {
        email,
        password,
      });
    } catch (error) {
      throw Error("wrong credentials !");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>

      <button className={styles.button} onClick={() => signIn("google")}>
        Login with Google
      </button>
    </div>
  );
}
