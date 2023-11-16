import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Anton Koller's Resume!",
  description: "Created by Anton Koller (LoremakerEgg@GitHub) using Next.JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
