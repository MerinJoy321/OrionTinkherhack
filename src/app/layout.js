import "antd/dist/reset.css";
import "./globals.css";
import { Poppins, Inter, Sora } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Labour Connect",
  description: "Real People. Real Skills. Reliable Service — On Your Schedule.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}
