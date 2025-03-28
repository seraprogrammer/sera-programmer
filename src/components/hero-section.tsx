import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { TextEffect } from "./ui/text-effect";
import { AnimatedGroup } from "./ui/animated-group";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero.webp";

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

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />

          <div
            className="absolute size-96 rounded-full bg-primary/5 blur-[120px] opacity-60 transition-transform duration-1000 ease-out"
            style={{
              left: `calc(${mousePosition.x * 100}% - 12rem)`,
              top: `calc(${mousePosition.y * 100}% - 12rem)`,
            }}
          />
          <div
            className="absolute size-64 rounded-full bg-chart-1/10 blur-[80px] opacity-50 transition-transform duration-700 ease-out"
            style={{
              right: `calc(${(1 - mousePosition.x) * 100}% - 8rem)`,
              bottom: `calc(${(1 - mousePosition.y) * 100}% - 8rem)`,
            }}
          />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    ...transitionVariants.item.hidden,
                    ...blurTransitionVariants.item.hidden,
                  },
                  visible: {
                    ...transitionVariants.item.visible,
                    filter: blurTransitionVariants.item.visible.filter,
                    transition: {
                      ...transitionVariants.item.visible.transition,
                      filter: blurTransitionVariants.item.visible.transition,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 opacity-40" />
              <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
              <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[100px] animate-pulse-slower" />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-6xl font-bold tracking-tight md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  Creative & Modern Web Design Solutions
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground"
                >
                  Unlock the power of creativity with cutting-edge web design
                  solutions tailored for modern experiences. Build stunning,
                  responsive, and user-friendly websites that captivate and
                  engage your audience effortlessly.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 shadow-sm relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base font-medium relative overflow-hidden"
                    >
                      <a href="#link" className="flex items-center gap-2">
                        <Sparkles className="size-4 text-primary-foreground/70" />
                        <span className="text-nowrap">Start Building</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>

                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 text-base relative overflow-hidden group"
                  >
                    <a href="#link" className="flex items-center gap-2">
                      <span className="text-nowrap">Request a demo</span>
                      <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-12 overflow-hidden px-2 sm:mr-0 sm:mt-16 md:mt-24">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-xl shadow-zinc-950/15 ring-1 transition-all duration-300 hover:shadow-2xl group">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,var(--color-primary)/5_0%,transparent_70%)] blur-xl"></div>

                  <img
                    className="aspect-15/8 relative hidden rounded-2xl dark:block"
                    src={heroImage}
                    alt="app screen"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src={heroImage}
                    alt="app screen"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}
