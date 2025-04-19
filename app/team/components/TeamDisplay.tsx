"use client";

import { useState, useEffect } from "react";
import type { TeamMember } from "@/app/team/types";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface TeamDisplayProps {
  teamMembers: TeamMember[];
}

export default function TeamDisplay({ teamMembers }: TeamDisplayProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [showTeamInfo, setShowTeamInfo] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    if (teamMembers.length > 0) {
      setSelectedMember(teamMembers[0]);
    }
  }, [teamMembers]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.165, 0.84, 0.44, 1] },
    },
  };

  return (
    <div>
      {/* Abstract shapes - enhanced with subtle animations */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          <motion.div
            className="absolute top-[10%] right-[15%] w-[150px] h-[150px] bg-foreground/5 rounded-full"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-[15%] left-[10%] w-[100px] h-[100px] border-2 border-foreground/5"
            animate={{
              rotate: [0, 10, 0],
              opacity: [0.03, 0.07, 0.03],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 pt-16 pb-10">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide text-foreground/60">
              Exceptional talent driving digital excellence. A team of dedicated
              professionals united by passion for innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team grid - High contrast black & white photos */}
      <section className="py-10 md:py-16">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group cursor-pointer relative"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => {
                  setSelectedMember(member);
                  setShowTeamInfo(true);
                }}
              >
                {/* Main image container */}
                <div className="relative overflow-hidden bg-muted">
                  {/* Black and white high contrast image */}
                  <div className="aspect-[4/5]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover brightness-90 contrast-125 grayscale will-change-transform transition-all duration-700 ease-out"
                      style={{
                        transform:
                          hoverIndex === index ? "scale(1.05)" : "scale(1)",
                        filter:
                          hoverIndex === index
                            ? "brightness(0.95) contrast(1.25) grayscale(0.9)"
                            : "brightness(0.9) contrast(1.25) grayscale(1)",
                      }}
                    />
                  </div>

                  {/* Name and role overlay */}
                  <div
                    className={`absolute bottom-0 right-0 p-3 pointer-events-none transition-all duration-500 ease-out ${
                      hoverIndex === index ? "bg-primary" : "bg-card"
                    } ${
                      hoverIndex === index
                        ? "text-primary-foreground"
                        : "text-card-foreground"
                    }`}
                  >
                    <h3 className="font-medium text-sm sm:text-base tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wide opacity-70 mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Hover overlay with reveal */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ease-out"
                  style={{
                    opacity: hoverIndex === index ? 1 : 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))",
                  }}
                >
                  <span
                    className="w-10 h-10 border border-foreground/40 flex items-center justify-center text-xl transform transition-transform duration-500"
                    style={{
                      transform:
                        hoverIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Member details modal - with improved animations */}
      <AnimatePresence>
        {showTeamInfo && selectedMember && (
          <motion.div
            className="fixed inset-0 bg-background/98 z-50 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-screen flex items-center justify-center">
              <motion.div
                className="max-w-[1200px] w-full mx-auto px-4 md:px-8 py-16 md:py-0 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
              >
                <button
                  className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-border text-xl font-light hover:bg-muted transition-colors z-30"
                  onClick={() => setShowTeamInfo(false)}
                >
                  ×
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                  {/* Image section */}
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-full h-full border border-border"></div>
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        priority
                        className="object-cover brightness-90 contrast-125 grayscale"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="pt-0 md:pt-10">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="inline-block px-3 py-1.5 border border-border text-xs uppercase tracking-widest text-foreground/60 mb-8">
                        {selectedMember.role}
                      </div>

                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 tracking-tight leading-[0.9]">
                        {selectedMember.name}
                      </h2>
                    </motion.div>

                    <motion.div
                      className="leading-relaxed space-y-4 mb-12 text-lg text-foreground/70"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <p>{selectedMember.bio}</p>
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {selectedMember.profile && (
                        <Link
                          href={`/${selectedMember.profile}`}
                          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors group"
                        >
                          <span className="flex items-center">
                            VIEW PROFILE
                            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </span>
                        </Link>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentIndex = teamMembers.findIndex(
                            (m) => m.id === selectedMember.id
                          );
                          const nextIndex =
                            (currentIndex + 1) % teamMembers.length;
                          setSelectedMember(teamMembers[nextIndex]);
                        }}
                        className="inline-block px-8 py-3 border border-border hover:bg-muted transition-colors"
                      >
                        NEXT MEMBER
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join our team section - enhanced */}
      <section className="py-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <span className="inline-block text-sm uppercase tracking-widest text-foreground/40 mb-4 font-light">
                Careers
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] uppercase tracking-tight">
                Join
                <br />
                Our Team
              </h2>

              <p className="text-foreground/60 text-lg max-w-xl mb-10 leading-relaxed">
                We're always looking for exceptional talent to join our team. If
                you're passionate about innovation and excellence, we want to
                hear from you.
              </p>

              <Link
                href="/positions"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors group"
              >
                <span className="flex items-center">
                  VIEW POSITIONS
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Competitive salary", icon: "💰" },
                  { label: "Remote work", icon: "🌎" },
                  { label: "Health benefits", icon: "🏥" },
                  { label: "Professional growth", icon: "📈" },
                  { label: "Team events", icon: "🎉" },
                  { label: "Work-life balance", icon: "⚖️" },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    className="p-4 border border-border flex items-center group hover:bg-muted transition-colors cursor-default"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-3">
                      {benefit.icon}
                    </span>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                      {benefit.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <div className="p-4 border border-border text-center">
                  <span className="text-foreground/80 font-light tracking-wide">
                    Our team grew by <span className="font-normal">40%</span>{" "}
                    last year
                  </span>
                </div>
                <div className="p-4 border border-border text-center">
                  <span className="text-foreground/80 font-light tracking-wide">
                    <span className="font-normal">12+</span> positions opening
                    this quarter
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
