import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Oswald,Roboto } from "next/font/google";
import Header from './components/Header'
import Footer from './components/Footer';
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"],
  weight:['200','300','400','500','600','700'],
variable:'--font-oswald' });
const roboto = Roboto({ subsets: ["latin"],
  weight:['100','300','400','500','700','900'],
variable:'--font-roboto' });

export const metadata: Metadata = {
  title: "FitPhysique Gym",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable}`}>
        <Suspense>

        <Header></Header>
        {children}
        <Footer></Footer>
        </Suspense>
        </body>
    </html>
  );
}
