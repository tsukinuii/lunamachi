import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/store/providers";
import { sarabun, inter } from "@/lib/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "LunaMachi",
  description: "E-commerce marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`dark ${sarabun.variable} ${inter.variable}`}
      data-theme="moon"
    >
      <body className={"font-sans"}>
        <ReduxProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
