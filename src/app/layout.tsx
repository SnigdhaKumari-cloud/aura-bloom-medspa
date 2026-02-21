import React from "react";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "Aura Bloom Medspa | Premium Aesthetics & Wellness",
    description: "Experience the ultimate in luxury medspa treatments at Aura Bloom Medspa. Expert lash, laser, and skin care services.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${cormorantGaramond.variable} antialiased bg-cream text-charcoal font-sans`}
            >
                <Navbar />
                <main className="pt-[130px]">{children}</main>
            </body>
        </html>
    );
}
