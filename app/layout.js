import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RJannat | Portfolio",
  description: "This is Riazull Jannat's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-root">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[90%] mx-auto bg-root `}
      >
        <ToastContainer autoClose={1000}></ToastContainer>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
