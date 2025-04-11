"use client";

import { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/app/team/types";
import Image from "next/image";
import Link from "next/link";

interface TeamDisplayProps {
  teamMembers: TeamMember[];
}

export default function TeamDisplay({ teamMembers }: TeamDisplayProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (teamMembers.length > 0) {
      setSelectedMember(teamMembers[0]);
    }
  }, [teamMembers]);

  return (
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet the passionate individuals behind our success. Our diverse team
          brings together expertise from various fields to deliver exceptional
          results.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Team members list */}
        <div className="lg:w-1/3">
          <div className="grid grid-cols-1 gap-4">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`p-4 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                  selectedMember?.id === member.id
                    ? "bg-primary/10"
                    : "hover:bg-primary/5"
                }`}
                onClick={() => setSelectedMember(member)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 relative rounded-xl overflow-hidden ring-2 ring-primary/20 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected member details */}
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3 bg-card rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-64 h-64 relative rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-xl mx-auto md:mx-0">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  sizes="256px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {selectedMember.role}
                </p>
                <p className="text-muted-foreground mb-6">
                  {selectedMember.bio}
                </p>
                <div className="flex gap-4">
                  {selectedMember.social.twitter && (
                    <a
                      href={selectedMember.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaTwitter size={24} />
                    </a>
                  )}
                  {selectedMember.social.linkedin && (
                    <a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {selectedMember.social.github && (
                    <a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Join Our Team section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl transform -skew-y-2" />
        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-16 border border-primary/10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h3 className="text-4xl font-bold mb-4">
                Join Our <span className="text-primary">Team</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're always looking for talented individuals to join our team.
                If you're passionate about what we do, we'd love to hear from
                you.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px]
                shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.4)]
                transition-all duration-300 text-lg font-semibold"
            >
              <Link href="/positions">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
