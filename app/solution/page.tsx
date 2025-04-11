import {
  Code,
  Palette,
  Zap,
  CheckCircle,
  RefreshCcw,
  Layers,
  MonitorSmartphone,
  Globe,
} from "lucide-react";
import { Metadata } from "next";

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Modern Web Solutions | Sera Programmer",
  description:
    "Elevating your digital presence with cutting-edge technology and stunning design. We deliver complete digital experiences that help your business stand out and succeed.",
  keywords:
    "web solutions, digital experiences, performance optimization, web design, web development, modern technology",
  openGraph: {
    title: "Modern Web Solutions",
    description:
      "Elevating your digital presence with cutting-edge technology and stunning design.",
    images: [
      {
        url: "/imgs/Solution.webp",
        width: 1024,
        height: 768,
        alt: "Modern web design illustration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Web Solutions",
    description:
      "Elevating your digital presence with cutting-edge technology and stunning design.",
    images: ["/imgs/Solution.webp"],
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

export default function Solution() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section with animated gradient background */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] animate-pulse"></div>
          <div
            className="absolute bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[100px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/4 left-1/2 h-[200px] w-[200px] rounded-full bg-accent/10 blur-[80px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="inline-flex items-center py-1.5 px-3 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary">
              <span className="text-sm font-medium">Web Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient">
                Modern Web Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Elevating your digital presence with cutting-edge technology and
              stunning design that drives real business growth
            </p>
          </div>

          <div className="relative mt-10 mb-20 md:mb-32">
            <div className="absolute -inset-px bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-xl blur-md opacity-80"></div>
            <div className="relative overflow-hidden rounded-xl border border-accent/30 shadow-2xl p-8 md:p-16 min-h-[440px] bg-background/30 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 z-0 opacity-60"></div>

              {/* Cool Devices Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                <div className="lg:col-span-3 space-y-6">
                  <div className="rounded-lg bg-background/80 p-6 border border-accent/20 shadow-lg">
                    <div className="flex items-center mb-3">
                      <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-muted-foreground ml-3">
                        development.tsx
                      </div>
                    </div>
                    <div className="font-mono text-sm">
                      <div className="text-blue-500 dark:text-blue-400">
                        import{" "}
                        <span className="text-green-500 dark:text-green-400">
                          {"{"} useState, useEffect {"}"}
                        </span>{" "}
                        from{" "}
                        <span className="text-amber-500 dark:text-amber-400">
                          'react'
                        </span>
                        ;
                      </div>
                      <div>
                        <span className="text-purple-500 dark:text-purple-400">
                          function
                        </span>{" "}
                        <span className="text-yellow-500 dark:text-yellow-400">
                          Application
                        </span>
                        () {"{"}
                      </div>
                      <div className="pl-4 text-blue-500 dark:text-blue-400">
                        const{" "}
                        <span className="text-green-500 dark:text-green-400">
                          [data, setData]
                        </span>{" "}
                        = useState([]);
                      </div>
                      <div className="pl-4">...</div>
                      <div className="pl-4 text-purple-500 dark:text-purple-400">
                        return
                      </div>
                      <div className="pl-8">
                        <span className="text-blue-500 dark:text-blue-400">
                          {"<"}
                        </span>
                        <span className="text-green-500 dark:text-green-400">
                          Dashboard
                        </span>{" "}
                        <span className="text-yellow-500 dark:text-yellow-400">
                          data
                        </span>
                        ={"{"}
                        <span className="text-red-500 dark:text-red-400">
                          data
                        </span>
                        {"}"}{" "}
                        <span className="text-blue-500 dark:text-blue-400">
                          {"/>"}
                        </span>
                      </div>
                      <div className="pl-4">);</div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-background/80 p-6 border border-accent/20 shadow-lg">
                    <div className="flex items-center mb-3">
                      <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-muted-foreground ml-3">
                        design.css
                      </div>
                    </div>
                    <div className="font-mono text-sm">
                      <div>
                        <span className="text-pink-500 dark:text-pink-400">
                          .container
                        </span>{" "}
                        {"{"}
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-500 dark:text-purple-400">
                          display
                        </span>
                        :{" "}
                        <span className="text-blue-500 dark:text-blue-400">
                          flex
                        </span>
                        ;
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-500 dark:text-purple-400">
                          backdrop-filter
                        </span>
                        :{" "}
                        <span className="text-blue-500 dark:text-blue-400">
                          blur
                        </span>
                        (
                        <span className="text-amber-500 dark:text-amber-400">
                          10px
                        </span>
                        );
                      </div>
                      <div>{"}"}</div>
                      <div className="mt-2">
                        <span className="text-pink-500 dark:text-pink-400">
                          .animation
                        </span>{" "}
                        {"{"}
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-500 dark:text-purple-400">
                          transform
                        </span>
                        :{" "}
                        <span className="text-blue-500 dark:text-blue-400">
                          translateY
                        </span>
                        (
                        <span className="text-amber-500 dark:text-amber-400">
                          0
                        </span>
                        );
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-500 dark:text-purple-400">
                          transition
                        </span>
                        :{" "}
                        <span className="text-blue-500 dark:text-blue-400">
                          all 0.5s ease
                        </span>
                        ;
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gradient-to-br from-background/90 to-background/50 backdrop-blur-md rounded-lg p-6 border border-primary/20 shadow-lg h-full flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="bg-primary/20 text-primary inline-flex items-center justify-center p-3 rounded-lg mb-4">
                        <Globe className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Web Presence</h3>
                      <p className="text-muted-foreground text-sm">
                        Optimized for all platforms and devices with responsive
                        design principles.
                      </p>
                    </div>

                    <div className="flex space-x-3 mt-4">
                      <div className="flex-1 h-24 bg-background/80 rounded-lg border border-border flex items-center justify-center">
                        <MonitorSmartphone className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1 h-24 bg-background/80 rounded-lg border border-border flex items-center justify-center">
                        <Globe className="h-8 w-8 text-secondary" />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-4 gap-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="h-3 rounded-full bg-gradient-to-r from-primary/60 to-accent/60"
                          style={{ opacity: 0.1 + i * 0.1 }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 h-20 w-20 rounded-full bg-primary/10 blur-xl animate-pulse"></div>
              <div
                className="absolute bottom-10 left-10 h-16 w-16 rounded-full bg-secondary/10 blur-xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Digital Experiences
            </h2>
            <p className="text-xl text-muted-foreground">
              Our approach goes beyond just building websites. We deliver
              comprehensive solutions that help your business stand out and
              succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Performance Optimization",
                description:
                  "Lightning-fast websites optimized for speed and exceptional user experiences that keep visitors engaged.",
              },
              {
                icon: <Palette className="h-8 w-8 text-accent" />,
                title: "Creative Design",
                description:
                  "Beautiful, intuitive interfaces that reflect your brand identity and resonate with your target audience.",
              },
              {
                icon: <Code className="h-8 w-8 text-secondary" />,
                title: "Advanced Development",
                description:
                  "Clean, maintainable code using the latest technologies to ensure your project stands the test of time.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-green-500" />,
                title: "Quality Assurance",
                description:
                  "Rigorous testing methodologies to ensure your digital products work flawlessly across all devices.",
              },
              {
                icon: <RefreshCcw className="h-8 w-8 text-blue-500" />,
                title: "Continuous Improvement",
                description:
                  "Ongoing optimization and updates to keep your digital presence ahead of the competition.",
              },
              {
                icon: <Layers className="h-8 w-8 text-purple-500" />,
                title: "Scalable Architecture",
                description:
                  "Future-proof solutions that grow with your business and adapt to changing market demands.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm rounded-xl p-8 border border-accent/10 bg-background/50 hover:bg-accent/5 shadow-md hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="rounded-xl bg-background/80 p-4 mb-5 w-fit shadow-sm border border-border group-hover:border-accent/30 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="backdrop-blur-md rounded-2xl p-10 border border-primary/20 bg-background/30 shadow-lg">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Our Approach
              </h2>
              <p className="text-xl text-muted-foreground text-center">
                We follow a proven methodology to ensure your project exceeds
                expectations and delivers measurable results.
              </p>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-secondary/50 hidden md:block"></div>

              {[
                {
                  number: "01",
                  title: "Discovery & Strategy",
                  description:
                    "We start by understanding your business goals, target audience, and unique challenges to develop a tailored strategy.",
                },
                {
                  number: "02",
                  title: "Design & Prototyping",
                  description:
                    "Our creative team designs intuitive user interfaces and creates interactive prototypes for your approval.",
                },
                {
                  number: "03",
                  title: "Development & Implementation",
                  description:
                    "We build your solution using cutting-edge technologies and best practices for optimal performance.",
                },
                {
                  number: "04",
                  title: "Testing & Launch",
                  description:
                    "Rigorous quality assurance ensures your product is flawless before we help you successfully launch.",
                },
                {
                  number: "05",
                  title: "Ongoing Support",
                  description:
                    "Our relationship continues with maintenance, updates, and strategic guidance to support your growth.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 md:gap-12 relative"
                >
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border border-accent/30 shadow-md shrink-0 z-10">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 md:pt-2">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
