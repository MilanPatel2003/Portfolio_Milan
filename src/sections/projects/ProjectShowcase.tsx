import React from 'react';
import { projectsData } from '@/portfolioData.ts/data';
import { PlayCircle } from 'lucide-react';

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(project => (
            <div
              key={project.title}
              className={`
                group relative rounded-2xl border border-white/20
                bg-gradient-to-br from-white/10 via-black/10 to-black/20
                backdrop-blur-lg
                shadow-lg hover:shadow-2xl transition-all duration-300
                overflow-hidden flex flex-col min-h-[420px]
                hover:border-white
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-black/10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
              `}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.10) 100%)",
                boxShadow:
                  "0 8px 32px 0 rgba(31, 38, 135, 0.10), 0 1.5px 4px 0 rgba(0,0,0,0.04)",
              }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-normal text-white mb-1">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-3 leading-relaxed line-clamp-4">{project.description}</p>
        
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map(tech => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-white px-2 py-1 rounded-full backdrop-blur"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3 flex-wrap opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {project.links?.map(link => (
                    <a
                      key={link.type}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs font-medium transition"
                      aria-label={link.type}
                    >
                      {link.icon && React.createElement(link.icon, { className: "w-4 h-4" })}
                      <span>
                        {link.type === "source" ? "GitHub" : link.type}
                      </span>
                    </a>
                  ))}

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs font-medium transition"
                      aria-label="Demo Video"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Demo Video</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 