import "./globals.css";
import { Lato } from "next/font/google";
import NavBar from "./components/NavBar";
import Script from "next/script";
const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
      <Script
        async
        src="https://us.umami.is/script.js"
        data-website-id="8401aa20-ed82-46cd-8c02-80949b573910"
      ></Script>
    </html>
  );
}
