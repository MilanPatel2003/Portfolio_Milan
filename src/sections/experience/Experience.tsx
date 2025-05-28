import BlurFade from "@/components/ui/blur-fade";
import { ResumeCard } from "@/components/ui/resume-card";
import { experienceData } from "@/portfolioData.ts/data";
import { motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.1;

const Experience = () => {
  return (
    <section id="work" className="w-full">
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
