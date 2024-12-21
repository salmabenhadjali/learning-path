"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // Provide the QueryClient context only for the Dashboard page and its children
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
