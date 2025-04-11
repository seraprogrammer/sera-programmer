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
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (teamMembers.length > 0) {
      setSelectedMember(teamMembers[0]);
    }
  }, [teamMembers]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? -150 : -250;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? 150 : 250;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    setActiveIndex((prev) => Math.min(teamMembers.length - 1, prev + 1));
  };

  return (
    <div className="container mx-auto px-4 relative z-10">
      {/* Simplified background gradients - reduced number and complexity */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-95"></div>
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-green-400/15 filter blur-[120px]"></div>
        <div className="absolute bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-teal-200/15 filter blur-[130px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-24 pt-8 md:pt-16"
      >
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-7xl font-extrabold mb-4 md:mb-6 text-white">
            Our Team
          </h2>
          <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-20 md:w-32 bg-white rounded-full"></div>
        </div>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-xl leading-relaxed mt-6 md:mt-10 px-4">
          Meet the passionate individuals behind our success. Our diverse team
          brings together expertise from various fields to deliver exceptional
          results.
        </p>
      </motion.div>

      {/* Responsive carousel */}
      <div className="relative mb-16 md:mb-32">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={scrollLeft}
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white p-1.5 sm:p-2 md:p-4 rounded-full backdrop-blur-md hover:bg-white/30 transition-all duration-300 border-0"
        >
          <FaArrowLeft className="text-xs sm:text-sm md:text-base" />
        </motion.button>
        <div
          ref={carouselRef}
          className="flex gap-3 sm:gap-4 md:gap-10 overflow-x-auto scrollbar-hide py-4 sm:py-6 md:py-10 px-6 sm:px-8 md:px-16 snap-x snap-mandatory"
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
            <div
              key={member.id}
              className={`flex-shrink-0 snap-center w-32 sm:w-40 md:w-60 cursor-pointer group`}
              onClick={() => {
                setSelectedMember(member);
                setActiveIndex(index);
              }}
            >
              <div
                className={`relative h-32 w-32 sm:h-40 sm:w-40 md:h-60 md:w-60 rounded-full overflow-hidden mb-3 sm:mb-4 md:mb-6 
                  transition-all duration-300 transform group-hover:scale-105`}
                style={{
                  background: "transparent",
                  backgroundClip: "padding-box",
                  border: "2px solid transparent",
                  position: "relative",
                  isolation: "isolate",
                }}
              >
                {/* Gradient border - simplified */}
                <div
                  className={`absolute inset-0 rounded-full -z-10 ${
                    selectedMember?.id === member.id
                      ? "bg-white/80"
                      : "bg-white/40"
                  } opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 240px"
                  className="object-cover"
                  {...(index < 3 ? { priority: true } : { loading: "lazy" })}
                />

                {/* Simplified hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 sm:pb-3 md:pb-6">
                  <Badge className="bg-white/20 backdrop-blur-md text-white border-0 py-0.5 sm:py-1 md:py-1.5 text-[10px] sm:text-xs md:text-sm">
                    View details
                  </Badge>
                </div>

                {/* Simplified selection indicator */}
                {selectedMember?.id === member.id && (
                  <div className="absolute inset-[-3px] rounded-full border-2 border-white/80"></div>
                )}
              </div>
              <div
                className="text-center relative"
                style={{
                  transform:
                    selectedMember?.id === member.id
                      ? "scale(1.05)"
                      : "scale(1)",
                }}
              >
                <p
                  className={`font-semibold text-xs sm:text-sm md:text-lg truncate mb-0.5 md:mb-1 ${
                    selectedMember?.id === member.id
                      ? "text-white"
                      : "text-white/80"
                  }`}
                >
                  {member.name}
                </p>
                <p
                  className={`text-[10px] sm:text-xs md:text-sm ${
                    selectedMember?.id === member.id
                      ? "text-white/90"
                      : "text-white/60"
                  } truncate`}
                >
                  {member.role}
                </p>

                {/* Simplified selected indicator */}
                {selectedMember?.id === member.id && (
                  <div className="h-0.5 w-3/5 bg-white mx-auto rounded-full mt-1 sm:mt-2" />
                )}
              </div>
            </div>
          ))}
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={scrollRight}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white p-1.5 sm:p-2 md:p-4 rounded-full backdrop-blur-md hover:bg-white/30 transition-all duration-300 border-0"
        >
          <FaArrowRight className="text-xs sm:text-sm md:text-base" />
        </motion.button>

        {/* Responsive carousel indicators */}
        <div className="flex justify-center gap-1 sm:gap-1.5 md:gap-2 mt-3 sm:mt-4 md:mt-8">
          {teamMembers.map((_, index) => (
            <div
              key={`indicator-${index}`}
              className="h-1 sm:h-1.5 md:h-2 rounded-full cursor-pointer transition-all duration-300 border border-white/30 backdrop-blur-sm"
              style={{
                width: index === activeIndex ? "16px" : "6px",
                backgroundColor:
                  index === activeIndex ? "#ffffff" : "transparent",
                opacity: index === activeIndex ? 1 : 0.4,
              }}
              onClick={() => {
                setActiveIndex(index);
                setSelectedMember(teamMembers[index]);
              }}
            />
          ))}
        </div>
      </div>

      {/* Responsive selected member details */}
      <AnimatePresence mode="wait">
        {selectedMember && (
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-20 md:mb-36 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden border-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              isolation: "isolate",
            }}
          >
            {/* Simplified gradient border */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl -z-10 bg-white/20 opacity-80"></div>

            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 items-center md:items-start relative z-10">
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 relative rounded-xl md:rounded-2xl overflow-hidden mx-auto md:mx-0"
                style={{
                  backgroundClip: "padding-box",
                  border: "2px solid transparent",
                  position: "relative",
                  isolation: "isolate",
                }}
              >
                {/* Simplified gradient border */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl -z-10 bg-white/30 opacity-80"></div>

                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
                  className="object-cover"
                  priority
                />

                {/* Simplified decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div
                  className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="text-sm sm:text-lg md:text-xl font-black text-white">
                    {selectedMember.name.charAt(0)}
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-3 flex flex-col md:flex-row md:items-center md:gap-4 text-white">
                  {selectedMember.name}
                  {selectedMember.profile && (
                    <Link
                      href={`/${selectedMember.profile}`}
                      className="mt-2 md:mt-0 inline-block"
                    >
                      <Badge className="cursor-pointer bg-white/20 hover:bg-white/30 text-white transition-all duration-300 border border-white/30 py-0.5 sm:py-1 md:py-1.5 px-2 md:px-3 text-xs md:text-sm">
                        View Profile
                      </Badge>
                    </Link>
                  )}
                </h3>

                <p className="text-white font-medium mb-2 sm:mb-3 md:mb-6 text-base sm:text-lg md:text-xl">
                  {selectedMember.role}
                </p>

                <p className="text-gray-300 mb-3 sm:mb-4 md:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                  {selectedMember.bio}
                </p>

                {/* Social links and profile button */}
                <div className="flex items-center justify-end mt-auto">
                  {/* Profile button */}
                  {selectedMember.profile && (
                    <Link href={`/${selectedMember.profile}`}>
                      <div className="px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 text-xs md:text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-1.5">
                        <span>Profile</span>
                        <span className="text-white transform translate-y-[1px] group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance optimized Team Grid Layout */}
      <div className="mb-20 md:mb-40">
        <div className="relative inline-block mx-auto text-center w-full mb-8 md:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white relative">
            Meet Our Entire Team
          </h3>
          <div className="h-1 md:h-1.5 w-20 sm:w-24 md:w-32 mx-auto mt-2 md:mt-4 rounded-full bg-white"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12">
          {teamMembers.map((member, index) => (
            <div
              key={`grid-${member.id}`}
              className="rounded-2xl md:rounded-[30px] overflow-hidden group cursor-pointer relative h-[380px] sm:h-[420px] md:h-[470px] bg-[#1a1a1a]/90 mx-auto sm:mx-0 max-w-[320px] sm:max-w-none w-full flex flex-col"
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
              <div className="absolute inset-0 rounded-2xl md:rounded-[30px] -z-10 bg-white/20 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Optimized image container */}
              <div className="absolute inset-x-0 top-0 h-[65%] overflow-hidden rounded-t-2xl md:rounded-t-[30px]">
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center"
                    {...(index < 4 ? { priority: true } : { loading: "lazy" })}
                    quality={index < 8 ? 75 : 60}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>
              </div>

              {/* Content area */}
              <div className="absolute bottom-0 left-0 right-0 h-[42%] px-5 sm:px-6 md:px-7 py-4 md:py-6 flex flex-col justify-between bg-[#1a1a1a]/95 rounded-b-2xl md:rounded-b-[28px]">
                {/* Top content section */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-xl md:text-2xl font-extrabold tracking-tight text-white leading-tight">
                      {member.name.split(" ")[0]}
                      <span className="block -mt-1 text-white">
                        {member.name.split(" ").slice(1).join(" ")}
                      </span>
                    </div>

                    {/* Role tag */}
                    <div className="px-2 sm:px-2.5 md:px-3.5 py-1 md:py-1.5 rounded-full bg-white/10 text-xs font-medium text-white/80 mt-1 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 truncate max-w-[90px] sm:max-w-[120px] md:max-w-[150px]">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Bottom content area */}
                <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3.5">
                  {/* Bio preview */}
                  <p className="text-xs md:text-sm text-white/60 line-clamp-2 max-w-[95%] mt-1">
                    {member.bio.substring(0, 100)}...
                  </p>

                  {/* Social links and profile button */}
                  <div className="flex items-center justify-end mt-auto">
                    {/* Profile button */}
                    {member.profile && (
                      <Link href={`/${member.profile}`}>
                        <div className="px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 text-xs md:text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-1.5">
                          <span>Profile</span>
                          <span className="text-white transform translate-y-[1px] group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Member letter badge */}
              <div className="absolute top-3 right-3 md:top-5 md:right-5 z-20 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="text-sm sm:text-base md:text-xl font-black text-white">
                    {member.name.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Join Our Team section */}
      <div className="mt-20 md:mt-40 relative mb-12 md:mb-24">
        <div className="absolute inset-0 bg-white/10 rounded-xl md:rounded-3xl transform -skew-y-2" />
        <div
          className="relative backdrop-blur-lg rounded-xl md:rounded-3xl p-6 sm:p-8 md:p-16 lg:p-20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2))",
            isolation: "isolate",
          }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-xl md:rounded-3xl -z-10 bg-white/20"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 relative z-10">
            <div className="text-center md:text-left max-w-full md:max-w-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                Join Our <span className="text-white">Team</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                We're always looking for talented individuals to join our team.
                If you're passionate about what we do, we'd love to hear from
                you.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button
                size="lg"
                className="relative overflow-hidden bg-white/20 hover:bg-white/30 text-white min-w-[180px] sm:min-w-[200px] md:min-w-[250px]
                  group transition-all duration-300 text-base sm:text-lg md:text-xl font-semibold py-3 sm:py-4 md:py-5 lg:py-7 px-4 sm:px-6 md:px-8 rounded-lg md:rounded-xl border-0"
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full -translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <Link href="/positions" className="relative z-10">
                  View Open Positions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
