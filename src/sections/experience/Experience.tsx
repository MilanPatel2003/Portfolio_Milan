import BlurFade from "@/components/ui/blur-fade";
import { experienceData } from "@/portfolioData.ts/data";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BLUR_FADE_DELAY = 0.1;

const Experience = () => {
  return (
    <section id="work" className="w-full py-20">
      <BlurFade delay={0.1}>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-4"
          >
            Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and work experience across various roles and industries
          </motion.p>
        </div>
      </BlurFade>

      <div className="relative max-w-5xl mx-auto">
        <div className="space-y-8">
          {experienceData.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
                className="relative"
              >
                <Card className="bg-black/40 backdrop-filter backdrop-blur-lg border border-white/10 shadow-xl hover:bg-black/50 transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Left Side - Logo and Basic Info */}
                    <div className="md:w-1/3 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center md:items-start">
                      <Avatar className="w-24 h-24 border-2 border-white/20 mb-4">
                        <AvatarImage
                          src={work.logoUrl}
                          alt={work.company}
                          className="object-contain bg-white/5"
                        />
                        <AvatarFallback className="text-2xl bg-white/10">{work.company[0]}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold text-white mb-1">{work.company}</h3>
                      <div className="text-lg text-white/80 mb-2">{work.title}</div>
                      
                      {/* Enhanced Time Display */}
                      <div className="mt-2 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
                        <div className="relative px-4 py-2 bg-black/30 border border-white/10 rounded-lg">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-white/60"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="text-sm font-medium text-white/90">
                              {work.start} - {work.end ?? "Present"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Details */}
                    <div className="md:w-2/3 p-6 md:p-8">
                      {work.badges && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {work.badges.map((badge, index) => (
                            <Badge 
                              key={index}
                              variant="secondary" 
                              className="text-xs bg-white/10 text-white/90 border border-white/20 hover:bg-white/20 transition-colors"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="space-y-3 text-white/80 text-sm">
                        {work.description.split('\n').map((point, index) => (
                          <p key={index} className="flex items-start">
                            <span className="text-white/40 mr-2">•</span>
                            {point}
                          </p>
                        ))}
                      </div>

                      {work.href && (
                        <div className="mt-6">
                          <a
                            href={work.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors"
                          >
                            Visit Website
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
