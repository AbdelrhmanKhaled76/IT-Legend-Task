import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="this is a task for IT legend company" />
        <title>IT Legend</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/images/IT LEGEND logo-02.png"
          sizes="any"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export { inter , spartan};
