import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSON Processor | Fortune Zviregei",
  description: "Format and validate JSON with ease",
  authors: [{ name: "Fortune Zviregei", url: "https://fortunezviregei.com" }],
  creator: "Fortune Zviregei",
  applicationName: "JSON Processor",
  keywords: [
    "JSON",
    "Processor",
    "Format",
    "Validate",
    "JSON Processor",
    "JSON Formatter",
    "Fortune Zviregei",
    "JSON Processor | Fortune Zviregei",
  ],
  openGraph: {
    title: "JSON Processor",
    description: "Format and validate JSON with ease",
    url: "https://jsonprocessor.fortunezviregei.com",
    siteName: "JSON Processor",
  },
  twitter: {
    title: "JSON Processor | Fortune Zviregei",
    description: "Format and validate JSON with ease",
    card: "summary_large_image",
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: [`fortunechainz@gmail.com`, `${process.env.NEXT_PUBLIC_SITE_URL}`],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-background flex flex-col">
          <div className="flex-grow">{children}</div>
          <Footer />
          <Toaster position="bottom-right" />
        </main>
      </body>
    </html>
  );
}
