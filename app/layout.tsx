import { Metadata } from "next";
import { Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const openSans = Open_Sans({
  display: "swap", //default behaviour when no font is set.
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  display: "swap", //default behaviour when no font is set.
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s / WanderStay",
    default: "WanderStay / Smart Hotel Booking for Modern Travelers",
  },
  description:
    "Book hotels worldwide with WanderStay — a sleek, intuitive booking platform for smart travelers. Compare prices, read reviews, and find your perfect stay.",
  keywords:
    "hotel booking platform, online hotel reservations, book hotels online, best hotel booking website, WanderStay, hotel deals, cheap hotel rooms, last-minute hotel booking, find hotels near me, hotel comparison site, modern travel booking, mobile hotel booking, luxury hotel deals, affordable stays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.variable} ${openSans.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 relative grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
