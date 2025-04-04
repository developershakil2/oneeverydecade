import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ContextComponent from "@/app/utilities";
import {WalletProvider, openModal} from './WalletProvider'
// Define fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "One Every Decade",
  description: "One Every Decade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          
          <WalletProvider cookies={''}>
          <ContextComponent>
            {children}
          </ContextComponent>
          </WalletProvider>
      
      </body>
    </html>
  );
}
