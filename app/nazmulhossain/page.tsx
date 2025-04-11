import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://seraprogrammer.com"),
  title: "Nazmul Hossain | Creator of OlovaJS & CEO of Sera Programmer",
  description:
    "Nazmul Hossain is the creator of OlovaJS Framework and CEO of Sera Programmer. A visionary JavaScript developer building innovative web solutions and empowering developers worldwide.",
  keywords: [
    "Nazmul Hossain",
    "OlovaJS",
    "Sera Programmer",
    "JavaScript Framework Creator",
    "UI Framework Developer",
    "Tech CEO",
    "JavaScript Expert",
    "Web Development Innovation",
    "Software Company CEO",
    "Frontend Framework Creator",
    "Tech Entrepreneur",
    "Web Development Tools",
    "JavaScript Development",
    "React Developer",
    "Next.js Expert",
    "Nazmul Hossain OlovaJS",
    "Sera Programmer CEO",
    "JavaScript Solutions",
    "Tech Leadership",
    "Software Development",
    "Frontend Innovation",
  ],
  authors: [
    {
      name: "Nazmul Hossain",
      url: "https://seraprogrammer.com",
    },
  ],
  creator: "Nazmul Hossain",
  publisher: "Sera Programmer",
  category: "Technology",
  openGraph: {
    type: "profile",
    firstName: "Nazmul",
    lastName: "Hossain",
    username: "seraprogrammer",
    gender: "male",
    title: "Nazmul Hossain - Creator of OlovaJS & CEO of Sera Programmer",
    description:
      "Meet Nazmul Hossain, the innovative creator of OlovaJS Framework and CEO of Sera Programmer. Leading the future of web development with cutting-edge JavaScript solutions.",
    images: [
      {
        url: "https://codervai.vercel.app/assets/hero-D3XrQ9qY.jpg",
        width: 600,
        height: 600,
        alt: "Nazmul Hossain - Creator of OlovaJS and CEO of Sera Programmer",
      },
    ],
    locale: "en_US",
    siteName: "Nazmul Hossain - Official Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazmul Hossain - OlovaJS Creator & Sera Programmer CEO",
    description:
      "Creator of OlovaJS Framework and CEO of Sera Programmer. Building the next generation of web development tools.",
    images: ["https://codervai.vercel.app/assets/hero-D3XrQ9qY.jpg"],
    creator: "@js_olova",
    site: "@seraprogrammer",
  },
  alternates: {
    canonical: "https://seraprogrammer.com/nazmulhossain",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  other: {
    "facebook-domain-verification": "your-facebook-domain-verification",
    "google-site-verification": "your-google-site-verification",
  },
  applicationName: "Sera Programmer",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  abstract:
    "Nazmul Hossain is a pioneering JavaScript developer, creator of the OlovaJS Framework, and CEO of Sera Programmer. His work focuses on innovating web development tools and empowering developers globally.",
  classification: "Technology, Software Development, Web Development",
};

export default function nazmulhossain() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col relative overflow-hidden py-12 px-4">
      <div itemScope itemType="http://schema.org/Person">
        {/* Main heading */}
        <div className="max-w-7xl mx-auto w-full mt-20 mb-16">
          <h1
            className="text-5xl md:text-7xl font-bold text-white text-center leading-tight"
            itemProp="name"
          >
            Developer, Designer,
            <br />
            Creator, Innovator
          </h1>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Image */}
            <div className="relative rounded-3xl overflow-hidden max-w-lg mx-auto">
              <Image
                src="https://codervai.vercel.app/assets/hero-D3XrQ9qY.jpg"
                alt="Nazmul Hossain - Creator of OlovaJS and CEO of Sera Programmer"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
                itemProp="image"
              />
            </div>

            {/* Right column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p
                  className="text-xl text-gray-300 leading-relaxed"
                  itemProp="description"
                >
                  Hello! I'm Nazmul Hossain, a passionate JavaScript developer
                  specializing in creating innovative web solutions and
                  user-friendly interfaces.{" "}
                  <span className="text-green-400">
                    As the creator of the OlovaJS UI Framework
                  </span>
                  , I'm dedicated to simplifying development workflows.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  My focus is on making web development faster, easier, and
                  accessible to all developers. Currently, I'm expanding into
                  backend development to grow as a full-stack developer and
                  create seamless, robust web applications.
                </p>

                <div className="pl-6 border-l-2 border-green-400">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of OlovaJS,
                    I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p>
                </div>
              </div>

              {/* Creator signature */}
              <div className="space-y-4">
                <p
                  className="text-green-400 font-medium italic"
                  itemProp="jobTitle"
                >
                  CEO of Sera Programmer & Creator of OlovaJS
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                  <span className="text-2xl font-bold text-white">OlovaJS</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-6">
                <Link
                  href="https://x.com/js_olova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  aria-label="Twitter Profile"
                  itemProp="sameAs"
                >
                  <FaTwitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/codernazmulhossain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                  itemProp="sameAs"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="https://github.com/seraprogrammer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  aria-label="GitHub Profile"
                  itemProp="sameAs"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
