import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import {
  Building2,
  HeartPulse,
  GraduationCap,
  Bot,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    name: "Fintech",
    description:
      "Innovative solutions for financial technology companies, from payment processing to wealth management.",
    icon: Building2,
    color: "bg-chart-1/10 text-chart-1",
  },
  {
    name: "Healthcare",
    description:
      "HIPAA-compliant platforms and interfaces for healthcare providers, patients, and medical services.",
    icon: HeartPulse,
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    name: "Education",
    description:
      "Learning management systems and educational platforms that enhance the teaching and learning experience.",
    icon: GraduationCap,
    color: "bg-chart-2/10 text-chart-2",
  },
  {
    name: "AI Chatbot",
    description:
      "Intelligent conversational interfaces powered by advanced AI to enhance customer engagement.",
    icon: Bot,
    color: "bg-chart-4/10 text-chart-4",
  },
  {
    name: "Non-Profit",
    description:
      "Digital solutions for non-profit organizations to maximize their impact and reach.",
    icon: Heart,
    color: "bg-chart-5/10 text-chart-5",
  },
  {
    name: "E-Commerce",
    description:
      "Scalable and secure online shopping experiences with seamless payment integration.",
    icon: ShoppingBag,
    color: "bg-primary/10 text-primary",
  },
];

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.2,
      },
    },
  },
};

export function IndustriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[100px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-chart-1/5 blur-[80px] opacity-50" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <TextEffect
            preset="fade-in-blur"
            as="h2"
            className="text-4xl font-bold tracking-tight md:text-5xl"
          >
            Industries We Serve
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            delay={0.3}
            as="p"
            className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground"
          >
            Our expertise spans across multiple sectors, delivering tailored
            solutions that address the unique challenges of each industry.
          </TextEffect>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            },
            ...transitionVariants,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-background/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
            >
              <div
                className={cn(
                  "absolute -z-10 inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  industry.color
                )}
                style={{ filter: "blur(20px)" }}
              />

              <div className="flex items-start gap-4">
                <div className={cn("p-3 rounded-xl", industry.color)}>
                  <industry.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
