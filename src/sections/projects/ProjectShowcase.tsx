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
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project, index) => {
            // Find the live website link if present
            const liveLink = project.links?.find(l => l.type.toLowerCase() === 'website');
            const sourceLink = project.links?.find(l => l.type.toLowerCase() === 'source');
            return (
              <Card
                key={index}
                className="flex flex-col h-full rounded-2xl shadow-xl bg-white/5 border border-white/10 overflow-hidden transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl group"
              >
                {/* Image at the top with overlay arrow */}
                <div className="relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-56 bg-gray-800 flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  {/* Arrow overlay at center on hover, links to live website if available */}
                  {liveLink && (
                    <a
                      href={liveLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      aria-label="Open Live Website"
                      tabIndex={-1}
                    >
                      <span className="bg-black/70 hover:bg-black/90 text-white rounded-full p-3 flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="h-6 w-6" />
                      </span>
                    </a>
                  )}
                </div>
                {/* Content always visible */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech) => (
                      <span key={tech} className="bg-white/10 text-xs text-gray-100 px-2 py-1 rounded font-mono border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {/* Live Website Button */}
                    {liveLink && (
                      <a
                        href={liveLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white shadow border border-white/20 transition-colors"
                        title="Live Website"
                        aria-label="Live Website"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {/* Source Button */}
                    {sourceLink && (
                      <a
                        href={sourceLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white shadow border border-white/20 transition-colors"
                        title="Source Code"
                        aria-label="Source Code"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {/* Demo Video Button */}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white shadow border border-white/20 transition-colors"
                        title="Demo Video"
                        aria-label="Demo Video"
                      >
                        <PlayCircle className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 