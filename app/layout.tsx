import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/app/header/page";
import Logo from "@/imgs/logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Sera Programmer | Creative Web Design & Development Agency | Custom Solutions",
  description:
    "Sera Programmer delivers cutting-edge web design & development solutions for businesses across multiple industries. From responsive websites to custom applications, our expert team brings your digital vision to life. Get a free consultation today!",
  keywords:
    "web development agency, React development, Next.js development, Vue.js development, AI chatbot integration, Figma to React conversion, API integration, Bangladesh web agency, tailwind CSS development, modern web design, UI/UX design, custom web solutions, frontend development, full-stack development, web development Bangladesh",
  openGraph: {
    title:
      "Sera Programmer | Creative Web Design & Development Agency | Custom Solutions",
    description:
      "Sera Programmer delivers cutting-edge web design & development solutions for businesses across multiple industries. From responsive websites to custom applications, our expert team brings your digital vision to life. Get a free consultation today!",
    url: "https://seraprogrammer.com",
    siteName: "SeraProgrammer",
    images: [
      {
        url: Logo.src, // Make sure to add your OG image
        width: 1200,
        height: 630,
        alt: "Sera Programmer | Creative Web Design & Development Agency | Custom Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SeraProgrammer - Modern Web Development & AI Solutions | Bangladesh",
    description:
      "Leading web development agency in Bangladesh specializing in React, Next.js, Vue.js, and AI chatbot integration.",
    images: [Logo.src], // Make sure to add your Twitter card image
  },
  verification: {
    google: "tsnQshEK1h05sFupVY7YurYFdnhwMFB0tAQIFqhUw8A",
  },
  alternates: {
    canonical: "https://seraprogrammer.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
