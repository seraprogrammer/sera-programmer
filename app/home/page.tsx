import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Braces,
  Code,
  Layers,
  Zap,
  Rocket,
  Server,
  Eye,
  Laptop,
  LayoutGrid,
  Globe,
  Atom,
  Cpu,
  Boxes,
  Lightbulb,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import Image from "next/image";
import MouseGradient from "@/app/components/mouse-gradient";
import { IndustriesSection } from "@/app/components/industries-section";
import FooterSection from "@/app/components/footer";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Creative & Modern Web Design Solutions | Sera Programmer",
  description:
    "Unlock the power of creativity with cutting-edge web design solutions tailored for modern experiences. Build stunning, responsive, and user-friendly websites that captivate and engage your audience effortlessly.",
  keywords:
    "web design, modern web, responsive design, UI/UX, web development, creative design",
  openGraph: {
    title: "Creative & Modern Web Design Solutions",
    description:
      "Unlock the power of creativity with cutting-edge web design solutions tailored for modern experiences.",
    images: [
      {
        url: "/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern web design application interface",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative & Modern Web Design Solutions",
    description:
      "Unlock the power of creativity with cutting-edge web design solutions tailored for modern experiences.",
    images: ["/imgs/og-image.jpg"],
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

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const blurTransitionVariants = {
  item: {
    hidden: {
      filter: "blur(12px)",
    },
    visible: {
      filter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
};

// Tech features
const techFeatures = [
  {
    title: "AI-Powered Solutions",
    description:
      "Harness the power of artificial intelligence to create smart, adaptive web experiences.",
    icon: Cpu,
    color: "bg-gradient-to-r from-[#C84E89] to-[#F15F79]",
    textColor: "text-white",
  },
  {
    title: "Blazing Fast",
    description:
      "Lightning-quick performance that keeps users engaged and boosts your search rankings.",
    icon: Zap,
    color: "bg-gradient-to-r from-[#4776E6] to-[#8E54E9]",
    textColor: "text-white",
  },
  {
    title: "Beautiful UI",
    description:
      "Stunning visuals and intuitive interfaces that delight users and elevate your brand.",
    icon: Eye,
    color: "bg-gradient-to-r from-[#2193b0] to-[#6dd5ed]",
    textColor: "text-white",
  },
  {
    title: "Scalable Architecture",
    description:
      "Build on a foundation that grows with your business, from startup to enterprise.",
    icon: Boxes,
    color: "bg-gradient-to-r from-[#834d9b] to-[#d04ed6]",
    textColor: "text-white",
  },
  {
    title: "SEO Optimized",
    description:
      "Get found online with websites engineered to rank higher in search results.",
    icon: Rocket,
    color: "bg-gradient-to-r from-[#FF512F] to-[#DD2476]",
    textColor: "text-white",
  },
  {
    title: "Revenue Focused",
    description:
      "Solutions that don't just look good, but drive conversions and generate real business value.",
    icon: DollarSign,
    color: "bg-gradient-to-r from-[#11998e] to-[#38ef7d]",
    textColor: "text-white",
  },
];

// Featured projects
const featuredProjects = [
  {
    title: "SwiftCommerce",
    description:
      "Next-gen e-commerce platform with AI-powered product recommendations and seamless payment flow.",
    highlight: "98% conversion rate increase",
    icon: <LayoutGrid className="h-5 w-5" />,
    color: "from-[#00c6ff] to-[#0072ff]",
  },
  {
    title: "MediSync",
    description:
      "Revolutionary healthcare platform connecting patients and doctors with secure data sharing.",
    highlight: "50,000+ users in 3 months",
    icon: <Eye className="h-5 w-5" />,
    color: "from-[#f857a6] to-[#ff5858]",
  },
  {
    title: "EduVerse",
    description:
      "Immersive learning environment with interactive lessons and real-time collaboration.",
    highlight: "Used by top universities",
    icon: <Laptop className="h-5 w-5" />,
    color: "from-[#7F00FF] to-[#E100FF]",
  },
];

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <MouseGradient />
        <section className="relative">
          {/* Hero Background with 3D shapes */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 -left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 rounded-full blur-[120px] opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-[120px] opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-chart-1/10 to-chart-2/10 rounded-full blur-[150px] opacity-50"></div>
            <div className="absolute inset-0 bg-[url('/imgs/grid.svg')] bg-repeat opacity-10"></div>
          </div>

          {/* Hero Section */}
          <div className="relative mx-auto max-w-7xl px-6 pt-24 md:pt-32">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5">
                  <Zap className="h-4 w-4 mr-2 text-[#FF3CAC]" />
                  <span className="text-sm font-medium bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] bg-clip-text text-transparent">
                    Next-Gen Web Solutions
                  </span>
                </div>

                <h1 className="mt-4 text-start text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  Build the Future of the Web
                </h1>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-6 max-w-2xl text-balance text-lg opacity-70"
                >
                  Create next-level web experiences with our cutting-edge
                  development stack. Fast, responsive, and engineered for
                  tomorrow's challenges.
                </TextEffect>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] hover:opacity-90 border-0 rounded-xl px-7 text-base font-medium"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl border border-zinc-800/30 backdrop-blur-sm bg-zinc-800/5 hover:bg-zinc-800/10 px-7 text-base font-medium"
                  >
                    <span>See Demo</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-r from-chart-1 to-chart-2 flex items-center justify-center text-xs font-bold text-white"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm opacity-70">
                    <span className="font-semibold">500+</span> projects
                    launched
                  </div>
                </div>
              </div>

              {/* 3D Mockup */}
              <div className="lg:w-1/2 relative">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF3CAC]/10 via-[#784BA0]/10 to-[#2B86C5]/10"></div>
                  <div className="absolute top-0 left-0 w-full h-8 bg-black/20 backdrop-blur-md flex items-center px-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="absolute left-[10%] top-[15%] w-[80%] h-32 rounded-xl bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] opacity-70 blur-md"></div>
                  <div className="absolute left-[15%] top-[40%] w-[70%] h-8 rounded-full bg-white/20"></div>
                  <div className="absolute left-[15%] top-[50%] w-[40%] h-8 rounded-full bg-white/15"></div>
                  <div className="absolute left-[15%] top-[60%] w-[60%] h-8 rounded-full bg-white/10"></div>
                  <div className="absolute right-[10%] bottom-[15%] w-20 h-10 rounded-lg bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] flex items-center justify-center">
                    <div className="w-10 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-xl bg-gradient-to-r from-[#11998e] to-[#38ef7d] flex items-center justify-center shadow-lg transform rotate-12">
                  <Zap className="text-white h-10 w-10" />
                </div>

                <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-xl bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] flex items-center justify-center shadow-lg transform -rotate-12">
                  <Lightbulb className="text-white h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Features Section - 3D Cards */}
          <div className="relative mx-auto max-w-7xl px-6 mt-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <Rocket className="h-4 w-4 mr-2 text-[#2B86C5]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#2B86C5] to-[#784BA0] bg-clip-text text-transparent">
                  Supercharged Features
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Everything You Need
              </h2>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                delay={0.3}
                as="p"
                className="mx-auto mt-4 max-w-2xl text-balance text-lg opacity-70"
              >
                Our platform includes everything you need to build modern web
                applications that stand out from the competition.
              </TextEffect>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {techFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-zinc-800/30 backdrop-blur-sm bg-zinc-800/5 hover:bg-zinc-800/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>

                  <div className="relative p-8">
                    <div
                      className={`inline-flex p-4 rounded-xl mb-5 ${feature.color} shadow-lg`}
                    >
                      <feature.icon className="size-6" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FF3CAC] group-hover:via-[#784BA0] group-hover:to-[#2B86C5] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {feature.title}
                    </h3>
                    <p className="opacity-70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </AnimatedGroup>
          </div>

          {/* CTA Section */}
          <div className="relative mx-auto max-w-7xl px-6 mt-24 mb-24">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] opacity-90"></div>
              <div className="absolute inset-0 bg-[url('/imgs/grid.svg')] bg-repeat opacity-10"></div>

              <div className="relative z-10 p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Ready to build something amazing?
                  </h2>
                  <p className="text-white/80">
                    Let's transform your vision into a stunning digital
                    experience. Our team is ready to help you succeed.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-xl bg-white text-[#784BA0] hover:bg-white/90 px-6 text-base font-medium shadow-xl"
                  >
                    <span>Start Project</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-xl border-white bg-transparent hover:bg-white/10 text-white px-6 text-base font-medium"
                  >
                    <span>Contact Us</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <IndustriesSection />
      </main>
      <FooterSection />
    </>
  );
}
