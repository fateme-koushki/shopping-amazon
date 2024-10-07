import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ReactQueryProvider } from "./queryProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageButton from "@/components/PageButton";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Shopping amazon",
  description: "shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-display">
        <ReactQueryProvider>
          <Layout>
            <Navbar />
            <PageButton />
            {children}
            <Footer />
          </Layout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
