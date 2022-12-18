import "./globals.css";
import { Lato } from "@next/font/google";
import { AnalyticsWrapper } from "./components/Analytics";
import NavBar from "./components/NavBar";
const lato = Lato({
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
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
