import { Code, Palette, Zap } from "lucide-react";
import Image from "next/image";
import SolutionImg from "@/imgs/Solution.webp";

export default function Solution() {
  return (
    <section className="py-24 md:py-40 bg-gradient-to-b from-background via-background/90 to-background/70 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-40 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-secondary/10 blur-2xl"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary inline-block mb-6">
            Modern web solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elevating your digital presence with cutting-edge technology and
            stunning design
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="backdrop-blur-md rounded-2xl p-8 border border-accent/20 bg-background/30 shadow-lg hover:shadow-accent/5 transition-all duration-500">
              <p className="text-xl leading-relaxed mb-6">
                Our approach goes beyond just building websites.{" "}
                <span className="text-primary font-semibold">
                  We deliver complete digital experiences
                </span>{" "}
                that help your business stand out and succeed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Zap className="size-6 text-primary" />,
                    title: "Performance",
                    description:
                      "Lightning-fast websites optimized for speed and user experience.",
                  },
                  {
                    icon: <Palette className="size-6 text-accent" />,
                    title: "Design",
                    description:
                      "Beautiful, intuitive interfaces that reflect your brand identity.",
                  },
                  {
                    icon: <Code className="size-6 text-secondary" />,
                    title: "Development",
                    description:
                      "Clean, maintainable code using the latest technologies.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group hover:bg-accent/5 p-5 rounded-xl transition-all duration-300 border border-transparent hover:border-accent/10"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="rounded-xl bg-background/80 p-3 shadow-md border border-border group-hover:border-accent/30 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 rounded-3xl blur-lg opacity-70"></div>
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <Image
                width={1024}
                height={768}
                src={SolutionImg}
                className="hidden dark:block w-full h-auto transition-transform duration-700 group-hover:scale-105"
                alt="modern web design illustration dark"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <Image
                width={1024}
                height={768}
                src={SolutionImg}
                className="dark:hidden w-full h-auto transition-transform duration-700 group-hover:scale-105"
                alt="modern web design illustration light"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
