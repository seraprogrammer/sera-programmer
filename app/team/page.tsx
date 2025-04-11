import TeamDisplay from "./components/TeamDisplay";
import type { TeamMember } from "./types";
import { Metadata } from "next";
import teamMembersData from "../../data/team-members.json";

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Our Team | Sera Programmer",
  description:
    "Meet our diverse and talented team of web development experts at Sera Programmer. Our dedicated professionals bring years of industry experience and passion for creating exceptional digital experiences.",
  keywords:
    "web development team, tech experts, professional developers, web design team, software engineers, digital specialists, IT professionals",
  openGraph: {
    title: "Meet Our Expert Web Development Team",
    description:
      "Discover the talented professionals behind Sera Programmer. Our diverse team brings together years of industry expertise to deliver outstanding digital solutions.",
    images: [
      {
        url: "https://codervai.vercel.app/assets/hero-D3XrQ9qY.jpg",
        width: 800,
        height: 600,
        alt: "Sera Programmer Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Web Development Team",
    description:
      "Discover the talented professionals behind Sera Programmer. Our diverse team brings together years of industry expertise to deliver outstanding digital solutions.",
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

// Load team members from JSON file
const teamMembers: TeamMember[] = teamMembersData;

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
