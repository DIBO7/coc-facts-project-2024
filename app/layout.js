import { Montserrat } from "next/font/google";
import "./globals.css";

const fnt = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "COC Facts 2024",
  description: "project of ioweb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fnt.className}>{children}</body>
    </html>
  );
}
