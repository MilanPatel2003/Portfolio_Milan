import BlurFade from "@/components/ui/blur-fade";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData } from "@/portfolioData.ts/data";
import React from "react";

const Projects = () => {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <section id="projects" className="w-full">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="text-4xl text-gray-500 sm:text-4xl md:text-4xl lg:text-5xl font-thin mb-4">
                <div className="flex justify-center p-8">PROJECTS</div>
              </span>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
          {projectsData.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links.map((link) => ({
                  ...link,
                  icon: React.createElement(link.icon),
                }))}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
