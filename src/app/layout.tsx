import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const nunito = Nunito({
  subsets: ["latin"], 
  weight: ["400", "900"]
})

export const metadata: Metadata = {
  title: "Nextfolio",
  description: "Project to learn NextJS framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
