import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/themeContext";
import Head from "next/head";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Darel News Network',
  description: 'News Network',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <ThemeProvider>
            <Head>
              <link
                rel="icon"
                href="../assets/dnn-logo.png"
                type="image/png"
                sizes="32x32"
              />
            </Head>
            <Navbar />
            <main className="min-h-screen px-8">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
