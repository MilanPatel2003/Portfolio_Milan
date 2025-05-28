import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";
import { projectsData } from '@/portfolioData.ts/data';

interface ProjectShowcaseProps {
  projects: typeof projectsData;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="w-full py-10 sm:py-20 relative overflow-hidden">
      <BlurFade delay={0.1}>
        <div className="text-center mb-8 sm:mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-thin text-white mb-2 sm:mb-4"
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my latest projects and technical achievements
          </motion.p>
        </div>
      </BlurFade>

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Main Project Display */}
          <div className="relative aspect-[4/3] sm:aspect-video mb-6 sm:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="h-full w-full overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="relative h-full">
                    <video
                      src={projects[activeIndex].video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                      <motion.h3 
                        className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-1 sm:mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {projects[activeIndex].title}
                      </motion.h3>
                      <motion.p
                        className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 line-clamp-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {projects[activeIndex].description}
                      </motion.p>
                      <motion.div
                        className="flex flex-wrap gap-2 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {projects[activeIndex].links.map((link, index) => (
                          <Button 
                            key={index}
                            variant="outline" 
                            size="sm"
                            className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40 backdrop-blur-sm text-xs sm:text-sm"
                            onClick={() => window.open(link.href, '_blank')}
                          >
                            {link.type === "source" ? (
                              <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            ) : (
                              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            )}
                            {link.type}
                          </Button>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative aspect-[4/3] sm:aspect-video cursor-pointer ${
                  index === activeIndex ? 'ring-2 ring-white' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full w-full overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg">
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-medium px-2 text-center">{project.title}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto"
            >
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full bg-black/50 hover:text-white hover:bg-black/70 text-white border-white/20 hover:border-white/40 backdrop-blur-sm"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto"
            >
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full bg-black/50 hover:text-white hover:bg-black/70 text-white border-white/20 hover:border-white/40 backdrop-blur-sm"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 