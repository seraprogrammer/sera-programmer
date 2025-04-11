"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/app/team/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface TeamDisplayProps {
  teamMembers: TeamMember[];
}

export default function TeamDisplay({ teamMembers }: TeamDisplayProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (teamMembers.length > 0) {
      setSelectedMember(teamMembers[0]);
    }
  }, [teamMembers]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
    setActiveIndex((prev) => Math.min(teamMembers.length - 1, prev + 1));
  };

  return (
    <div className="container mx-auto px-4 relative z-10">
      {/* Enhanced background gradients with more depth and sophistication */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-95"></div>
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] bg-repeat opacity-10"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-green-400/15 filter blur-[120px] animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-300/15 filter blur-[150px]"></div>
        <div className="absolute bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-teal-200/15 filter blur-[130px] animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-green-500/10 filter blur-[100px] animate-pulse duration-[15s]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-24 pt-16"
      >
        <div className="relative inline-block">
          <h2 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
            Our Team
          </h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
          <div className="absolute -z-10 inset-0 blur-2xl bg-green-500/10 rounded-full opacity-60"></div>
        </div>
        <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed mt-10">
          Meet the passionate individuals behind our success. Our diverse team
          brings together expertise from various fields to deliver exceptional
          results.
        </p>
      </motion.div>

      {/* Enhanced story-like carousel */}
      <div className="relative mb-32">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full backdrop-blur-md hover:from-green-600 hover:to-emerald-600 transition-all duration-300 border-0"
        >
          <FaArrowLeft />
        </motion.button>
        <div
          ref={carouselRef}
          className="flex gap-10 overflow-x-auto scrollbar-hide py-10 px-16 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex-shrink-0 snap-center w-60 cursor-pointer group`}
              onClick={() => {
                setSelectedMember(member);
                setActiveIndex(index);
              }}
            >
              <div
                className={`relative h-60 w-60 rounded-full overflow-hidden mb-6 
                  transition-all duration-500 transform group-hover:scale-105`}
                style={{
                  background: "transparent",
                  backgroundClip: "padding-box",
                  border: "2px solid transparent",
                  position: "relative",
                  isolation: "isolate",
                }}
              >
                {/* Gradient border */}
                <div
                  className={`absolute inset-0 rounded-full -z-10 ${
                    selectedMember?.id === member.id
                      ? "bg-gradient-to-r from-green-500 to-emerald-400 animate-pulse"
                      : "bg-gradient-to-br from-green-400/60 to-teal-400/60"
                  } opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-700"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <Badge className="bg-white/20 backdrop-blur-md text-white border-0 py-1.5">
                    View details
                  </Badge>
                </div>

                {/* Animation for selected member */}
                {selectedMember?.id === member.id && (
                  <>
                    <div className="absolute inset-0 rounded-full border-4 border-green-500/40 animate-ping"></div>
                    <div className="absolute inset-[-3px] rounded-full border-2 border-green-400/80"></div>
                  </>
                )}
              </div>
              <motion.div
                className="text-center relative"
                animate={{
                  y: selectedMember?.id === member.id ? 0 : 8,
                  scale: selectedMember?.id === member.id ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.p
                  className="font-semibold text-lg truncate mb-1"
                  animate={{
                    color:
                      selectedMember?.id === member.id ? "#10b981" : "#ffffff",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {member.name}
                </motion.p>
                <p
                  className={`text-sm transition-all duration-300 ${
                    selectedMember?.id === member.id
                      ? "text-green-300/90"
                      : "text-muted-foreground"
                  } truncate`}
                >
                  {member.role}
                </p>

                {/* Animated underline for selected member */}
                {selectedMember?.id === member.id && (
                  <motion.div
                    className="h-0.5 w-0 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 rounded-full backdrop-blur-md hover:from-emerald-600 hover:to-green-600 transition-all duration-300 border-0"
        >
          <FaArrowRight />
        </motion.button>

        {/* Enhanced carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {teamMembers.map((_, index) => (
            <motion.div
              key={`indicator-${index}`}
              className="h-2 rounded-full cursor-pointer transition-all duration-500 border border-green-500/30 backdrop-blur-sm"
              style={{
                width: index === activeIndex ? 32 : 10,
                backgroundColor:
                  index === activeIndex ? "#10b981" : "transparent",
                opacity: index === activeIndex ? 1 : 0.4,
              }}
              whileHover={{
                scale: 1.2,
                opacity: 0.8,
              }}
              onClick={() => {
                setActiveIndex(index);
                setSelectedMember(teamMembers[index]);
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced selected member details */}
      <AnimatePresence mode="wait">
        {selectedMember && (
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-36 backdrop-blur-lg rounded-3xl p-12 relative overflow-hidden border-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              isolation: "isolate",
            }}
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl -z-10 bg-gradient-to-br from-green-400/30 via-emerald-500/20 to-teal-400/30 opacity-80"></div>

            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-3xl -z-10"></div>

            {/* Background glow */}
            <div className="absolute -z-10 left-1/4 top-1/2 transform -translate-y-1/2 w-64 h-64 rounded-full bg-green-500/10 filter blur-[80px]"></div>
            <div className="absolute -z-10 right-1/4 top-1/3 w-96 h-96 rounded-full bg-emerald-400/15 filter blur-[100px]"></div>

            <div className="flex flex-col md:flex-row gap-16 items-start relative z-10">
              <motion.div
                className="w-80 h-80 relative rounded-2xl overflow-hidden mx-auto md:mx-0 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundClip: "padding-box",
                  border: "2px solid transparent",
                  position: "relative",
                  isolation: "isolate",
                }}
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl -z-10 bg-gradient-to-br from-green-400/60 via-emerald-500/60 to-teal-400/60 opacity-80"></div>

                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.2))",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span className="text-xl font-bold text-white">
                    {selectedMember.name.charAt(0)}
                  </span>
                </div>
              </motion.div>

              <div className="flex-1">
                <motion.h3
                  className="text-4xl font-bold mb-3 flex items-center gap-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {selectedMember.name}
                  {selectedMember.profile && (
                    <Link href={`/${selectedMember.profile}`}>
                      <Badge className="cursor-pointer bg-gradient-to-r from-green-500/20 to-emerald-400/20 hover:from-green-500/30 hover:to-emerald-400/30 text-green-400 transition-all duration-300 border border-green-500/30 py-1.5 px-3 text-sm">
                        View Profile
                      </Badge>
                    </Link>
                  )}
                </motion.h3>

                <motion.p
                  className="text-green-400 font-medium mb-6 text-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {selectedMember.role}
                </motion.p>

                <motion.p
                  className="text-gray-300 mb-8 leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {selectedMember.bio}
                </motion.p>

                <motion.div
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {selectedMember.social.twitter && (
                    <motion.a
                      href={selectedMember.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 hover:bg-green-500/20 text-green-400 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaTwitter size={22} />
                    </motion.a>
                  )}
                  {selectedMember.social.linkedin && (
                    <motion.a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 hover:bg-green-500/20 text-green-400 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaLinkedin size={22} />
                    </motion.a>
                  )}
                  {selectedMember.social.github && (
                    <motion.a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 hover:bg-green-500/20 text-green-400 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaGithub size={22} />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Team Grid Layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-40"
      >
        <div className="relative inline-block mx-auto text-center w-full mb-16">
          <h3 className="text-5xl font-extrabold text-center bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent relative">
            Meet Our Entire Team
          </h3>
          <div className="h-1.5 w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
          <div className="absolute -z-10 w-64 h-16 bg-green-400/10 filter blur-[60px] left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute -right-20 top-1/3 w-96 h-96 rounded-full bg-green-400/10 filter blur-[150px] -z-10" />
        <div className="absolute -left-10 bottom-1/4 w-[500px] h-[500px] rounded-full bg-emerald-300/10 filter blur-[180px] -z-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={`grid-${member.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "none",
              }}
              className="rounded-[30px] overflow-hidden group cursor-pointer relative h-[470px] bg-gradient-to-br from-[#fafafa]/80 to-[#f3f3f3]/80 dark:from-[#1a1a1a]/90 dark:to-[#111]/90"
              onClick={() => setSelectedMember(member)}
              style={{
                boxShadow: "none",
                background: "transparent",
                backgroundClip: "padding-box",
                border: "2px solid transparent",
                position: "relative",
                isolation: "isolate",
              }}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-[30px] -z-10 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Enhanced asymmetrical image container with clip path */}
              <div className="absolute inset-x-0 top-0 h-[65%] overflow-hidden rounded-t-[30px]">
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
                    transform: "translateZ(0)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center scale-[1.01] group-hover:scale-[1.08] transition-all duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                    loading="lazy"
                    style={{ filter: "none", transform: "translateZ(0)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Enhanced modern dot pattern overlay */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <div
                    className="absolute inset-0 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
                      backgroundSize: "16px 16px",
                      transform: "translateZ(0)",
                    }}
                  />
                </div>

                {/* Glowing highlight effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-green-500/20 to-emerald-400/20 pointer-events-none"></div>
              </div>

              {/* Enhanced color accent line - fixed position */}
              <div className="absolute left-6 top-[63%] h-1.5 w-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-28 transition-all duration-500 z-10" />

              {/* Enhanced content area - asymmetrical bottom - with fixed positioning */}
              <div className="absolute bottom-0 left-0 right-0 h-[42%] px-7 py-6 flex flex-col justify-between bg-[#fafafa]/80 dark:bg-[#1a1a1a]/95 rounded-b-[28px]">
                {/* Top content section */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <div
                      className="text-2xl font-extrabold tracking-tight text-[#222] dark:text-white leading-tight"
                      style={{ fontVariationSettings: '"wght" 800' }}
                    >
                      {member.name.split(" ")[0]}
                      <span className="block -mt-1 text-green-500">
                        {member.name.split(" ").slice(1).join(" ")}
                      </span>
                    </div>

                    {/* Enhanced role tag */}
                    <div className="px-3.5 py-1.5 rounded-full bg-[#222]/5 dark:bg-white/10 text-xs font-medium text-[#222] dark:text-white/80 mt-1 backdrop-blur-sm group-hover:bg-green-500/20 transition-all duration-300">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Bottom content area */}
                <div className="flex flex-col gap-3.5">
                  {/* Bio preview with modern truncation */}
                  <p className="text-sm text-[#555] dark:text-white/60 line-clamp-2 max-w-[95%] mt-1">
                    {member.bio.substring(0, 100)}...
                  </p>

                  {/* Enhanced social links and profile button in a modern horizontal layout */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3.5">
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#222]/5 dark:bg-white/10 text-[#333] dark:text-white/70 hover:text-green-500 dark:hover:text-green-400 hover:bg-green-500/20 transition-all duration-300"
                          whileHover={{ y: -3 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <FaTwitter size={15} />
                        </motion.a>
                      )}
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#222]/5 dark:bg-white/10 text-[#333] dark:text-white/70 hover:text-green-500 dark:hover:text-green-400 hover:bg-green-500/20 transition-all duration-300"
                          whileHover={{ y: -3 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <FaLinkedin size={15} />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#222]/5 dark:bg-white/10 text-[#333] dark:text-white/70 hover:text-green-500 dark:hover:text-green-400 hover:bg-green-500/20 transition-all duration-300"
                          whileHover={{ y: -3 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <FaGithub size={15} />
                        </motion.a>
                      )}
                    </div>

                    {/* Enhanced view profile button with modern design */}
                    {member.profile && (
                      <Link href={`/${member.profile}`}>
                        <motion.div
                          className="px-4 py-1.5 rounded-full bg-[#222]/5 dark:bg-white/10 text-sm font-medium text-[#222] dark:text-white hover:bg-green-500/20 transition-all duration-300 flex items-center gap-1.5 group/button"
                          whileHover={{ x: 3 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <span>Profile</span>
                          <span className="text-green-500 transform translate-y-[1px] group-hover/button:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </motion.div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced glowing effect on hover - contained within card boundaries */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[30px] overflow-hidden">
                <div className="absolute bottom-0 h-[15%] left-0 right-0 bg-gradient-to-t from-green-500/10 to-transparent"></div>
              </div>

              {/* Enhanced member letter badge - ultra modern element */}
              <div className="absolute top-5 right-5 z-20 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.2))",
                  }}
                >
                  <div className="text-xl font-black text-white">
                    {member.name.charAt(0)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Join Our Team section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-40 relative mb-24"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-300/10 rounded-3xl transform -skew-y-2" />
        <div
          className="relative backdrop-blur-lg rounded-3xl p-20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            isolation: "isolate",
          }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl -z-10 bg-gradient-to-br from-green-400/40 via-emerald-500/30 to-teal-400/40"></div>

          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-500/15 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-400/15 rounded-full filter blur-3xl" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-left max-w-xl">
              <h3 className="text-5xl font-bold mb-6 leading-tight">
                Join Our{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Team
                </span>
              </h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                We're always looking for talented individuals to join our team.
                If you're passionate about what we do, we'd love to hear from
                you.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white min-w-[250px]
                  group transition-all duration-300 text-xl font-semibold py-7 px-8 rounded-xl border-0"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400/0 via-white/20 to-green-400/0 group-hover:translate-x-full -translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <Link href="/positions" className="relative z-10">
                  View Open Positions
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
