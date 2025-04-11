import TeamDisplay from "./components/TeamDisplay";
import type { TeamMember } from "./types";
import { Metadata } from "next";

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Our Team | Sera Programmer",
  description:
    "Meet our talented team of web development experts led by Nazmul Hossain, CEO & Founder with over 7 years of industry experience. We're passionate about creating exceptional digital experiences.",
  keywords:
    "web development team, Nazmul Hossain, tech leadership, expert developers, web design team, professional web team",
  openGraph: {
    title: "Meet Our Expert Web Development Team",
    description:
      "Get to know the talented professionals behind Sera Programmer, led by Nazmul Hossain, bringing over 7 years of industry expertise.",
    images: [
      {
        url: "https://codervai.vercel.app/assets/hero-D3XrQ9qY.jpg",
        width: 800,
        height: 600,
        alt: "Nazmul Hossain - CEO & Founder",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Web Development Team",
    description:
      "Get to know the talented professionals behind Sera Programmer, led by Nazmul Hossain, bringing over 7 years of industry expertise.",
    images: ["https://codervai.vercel.app/assets/hero-D3XrQ9qY.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nazmul Hossain",
    role: "CEO & Founder",
    image: "https://codervai.vercel.app/assets/hero-D3XrQ9qY.jpg",
    bio: "Nazmul has over 7 years of experience in the industry and leads our strategic vision.",
    social: {
      twitter: "https://x.com/js_olova",
      linkedin: "https://www.linkedin.com/in/codernazmulhossain/",
      github: "https://github.com/seraprogrammer",
    },
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <TeamDisplay teamMembers={teamMembers} />
    </section>
  );
}
