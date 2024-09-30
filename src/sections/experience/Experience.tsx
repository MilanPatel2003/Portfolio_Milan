import BlurFade from "@/components/ui/blur-fade";
import { ResumeCard } from "@/components/ui/resume-card";
import { experienceData } from "@/portfolioData.ts/data";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.1;

const Experience = () => {
  const [iseExperienceBlurred, setiseExperienceBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setiseExperienceBlurred(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="work"
      className={`w-full transition-all duration-1000 ${
        iseExperienceBlurred ? "blur-sm" : "blur-none"
      }`}
    >
      <span className="text-4xl text-gray-500 sm:text-4xl md:text-4xl lg:text-5xl font-thin mb-4">
        <div className="flex justify-center">EXPERIENCE</div>
      </span>

      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
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
