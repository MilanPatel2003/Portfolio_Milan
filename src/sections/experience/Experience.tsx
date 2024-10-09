import BlurFade from "@/components/ui/blur-fade";
import { ResumeCard } from "@/components/ui/resume-card";
import { experienceData } from "@/portfolioData.ts/data";

const BLUR_FADE_DELAY = 0.1;

const Experience = () => {
  return (
    <section id="work" className="w-full">
      <span className="text-4xl text-gray-500 sm:text-4xl md:text-4xl lg:text-5xl font-thin mb-4">
        <div className="flex justify-center">EXPERIENCE</div>
      </span>

      <div className="flex flex-col gap-y-3 mt-12">
    
        {experienceData.map((work, id) => (
          <BlurFade
            key={work.company}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            className="w-full"
          >
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Experience;
