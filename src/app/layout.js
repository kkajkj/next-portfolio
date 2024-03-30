import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionProvider from "@/components/TransitionProvider";
import StateProvider from "../../StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animated Portfolio App",
  description: "The best Animated Portfoliyo page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </StateProvider>
      </body>
    </html>
  );
}
