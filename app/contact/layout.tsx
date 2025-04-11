import { Metadata } from "next";

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Contact Us | Sera Programmer",
  description:
    "Get in touch with our web development team. We're available from 8:00 AM to 12:00 PM (Bangladesh Time). Reach out for web design, development, or any digital solutions you need.",
  keywords:
    "contact us, web development contact, Sera Programmer contact, web design inquiry, business hours, professional web services",
  openGraph: {
    title: "Contact Sera Programmer",
    description:
      "Connect with our web development team for professional web design and development services.",
    images: [
      {
        url: "/imgs/contact.webp", // You should add a contact page image
        width: 1200,
        height: 630,
        alt: "Contact Sera Programmer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sera Programmer",
    description:
      "Connect with our web development team for professional web design and development services.",
    images: ["/imgs/contact.webp"], // You should add a contact page image
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://seraprogrammer.com/contact", // Replace with your actual domain
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
