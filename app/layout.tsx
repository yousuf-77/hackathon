import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import Header from "@/components/Header-component/Header";
import Footer from "@/components/footer-component/footer";
const poppins=Poppins({
  subsets:["latin"],
  weight:['300','400','500','600', '700','800','900']
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
