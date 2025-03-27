import { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nazmul Hossain",
    role: "CEO & Founder",
    image: "https://codervai.vercel.app/assets/hero-D3XrQ9qY.jpg",
    bio: "Nazmul has over 7 years of experience in the industry and leads our strategic vision.",
    social: {
      twitter: "https://twitter.com/alexj",
      linkedin: "https://linkedin.com/in/alexj",
      github: "https://github.com/alexj",
    },
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Set the first team member as default on component mount
  useEffect(() => {
    if (teamMembers.length > 0) {
      setSelectedMember(teamMembers[0]);
    }
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind our success, working together to create
            exceptional experiences.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Team member selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full"
          >
            <div className="sticky top-24 space-y-4">
              <h3 className="text-2xl font-semibold mb-6 border-b border-border pb-2">
                Meet the Team
              </h3>

              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ x: 5 }}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-200 flex items-center gap-4 ${
                    selectedMember?.id === member.id
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "hover:bg-card border-l-4 border-transparent"
                  }`}
                  onClick={() => setSelectedMember(member)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team member details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full"
          >
            {selectedMember && (
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-border"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-full relative">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-center md:h-full"
                        style={{ minHeight: "300px" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 w-full">
                          <div className="flex space-x-4">
                            {selectedMember.social.twitter && (
                              <a
                                href={selectedMember.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-primary transition-colors"
                              >
                                <FaTwitter size={20} />
                              </a>
                            )}
                            {selectedMember.social.linkedin && (
                              <a
                                href={selectedMember.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-primary transition-colors"
                              >
                                <FaLinkedin size={20} />
                              </a>
                            )}
                            {selectedMember.social.github && (
                              <a
                                href={selectedMember.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-primary transition-colors"
                              >
                                <FaGithub size={20} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      {selectedMember.role}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      {selectedMember.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {selectedMember.bio}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Leadership",
                          "Strategy",
                          "Innovation",
                          "Management",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary/10 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <Button variant="outline" className="mt-6">
                        Contact {selectedMember.name.split(" ")[0]}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-card border border-border rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our growing
              team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default">View Open Positions</Button>
              <Button variant="outline">Learn About Our Culture</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
