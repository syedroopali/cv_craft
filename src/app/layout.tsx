import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s - CV Craft",
    default: "CV Craft",
  },

  description:
    "Looking to land your dream job? Our CV Builder helps you craft a polished, professional resume in minutes. Whether you are a recent graduate, a seasoned professional, or making a career shift, our intuitive platform provides customizable templates and expert tips to showcase your skills, experience, and achievements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
