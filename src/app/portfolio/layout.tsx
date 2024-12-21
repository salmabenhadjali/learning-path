import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./page.module.css";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <h1 className={styles.mainTitle}>Our Works</h1>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
