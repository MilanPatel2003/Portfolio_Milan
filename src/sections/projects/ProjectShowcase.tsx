import React from 'react';
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, PlayCircle, ArrowUpRight } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";
import { projectsData } from '@/portfolioData.ts/data';

const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="w-full py-10 sm:py-20 relative overflow-hidden">
      <BlurFade delay={0.1}>
        <div className="text-center mb-8 sm:mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest projects and technical achievements
          </p>
        </div>
      </BlurFade>
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {projectsData.map((project, index) => {
          const liveLink = project.links?.find(l => l.type.toLowerCase() === 'website');
          const sourceLink = project.links?.find(l => l.type.toLowerCase() === 'source');
          const isEven = index % 2 === 0;
          
          return (
            <Card
              key={index}
              className="flex flex-col sm:flex-row h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/8"
            >
              {/* Image Section - Conditionally rendered based on index */}
              {isEven && (
                <div className="relative sm:w-2/5 min-h-[200px] sm:min-h-[300px] overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800/30 to-gray-900/30 flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  {liveLink && (
                    <a
                      href={liveLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-black/30"
                      aria-label="Open Live Website"
                      tabIndex={-1}
                    >
                      <span className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-110">
                        <ArrowUpRight className="h-6 w-6" />
                      </span>
                    </a>
                  )}
                </div>
              )}

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-6 sm:p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-30"></div>
                <div className="relative z-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">{project.title}</h3>
                    <p className="text-gray-300 text-base mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies?.map((tech) => (
                        <span key={tech} className="bg-white/5 text-sm text-gray-100 px-3 py-1 rounded-full font-mono border border-white/10 hover:bg-white/10 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {liveLink && (
                      <a
                        href={liveLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white shadow-md border border-white/10 transition-all duration-300 hover:shadow-white/5 hover:scale-105"
                        title="Live Website"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Site</span>
                      </a>
                    )}
                    {sourceLink && (
                      <a
                        href={sourceLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white shadow-md border border-white/10 transition-all duration-300 hover:shadow-white/5 hover:scale-105"
                        title="Source Code"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white shadow-md border border-white/10 transition-all duration-300 hover:shadow-white/5 hover:scale-105"
                        title="Demo Video"
                      >
                        <PlayCircle className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Image Section - For odd indices */}
              {!isEven && (
                <div className="relative sm:w-2/5 min-h-[200px] sm:min-h-[300px] overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800/30 to-gray-900/30 flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  {liveLink && (
                    <a
                      href={liveLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-black/30"
                      aria-label="Open Live Website"
                      tabIndex={-1}
                    >
                      <span className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-110">
                        <ArrowUpRight className="h-6 w-6" />
                      </span>
                    </a>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectShowcase; 