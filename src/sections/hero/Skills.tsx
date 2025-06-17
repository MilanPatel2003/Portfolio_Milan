import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaNodeJs, FaFigma, FaGithub } from 'react-icons/fa';
import { RiJavascriptFill, RiNextjsFill } from 'react-icons/ri';
import { SiBootstrap, SiMongodb, SiMongoose, SiPostman, SiTailwindcss, SiTypescript, SiMysql } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { SiThreedotjs } from 'react-icons/si';
import BlurFade from '@/components/ui/blur-fade';

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: 'React.js', icon: <FaReact />, color: 'text-blue-500' },
      { name: 'Next.js', icon: <RiNextjsFill />, color: 'text-white' },
      { name: 'JavaScript', icon: <RiJavascriptFill />, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-blue-500' },
      { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-500' },
      { name: 'Framer Motion', icon: <TbBrandFramerMotion />, color: 'text-purple-600' },
      { name: 'Three.js', icon: <SiThreedotjs />, color: 'text-white' },
      { name: 'Spline', icon: <SiThreedotjs />, color: 'text-pink-500' },
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
      { name: 'Mongoose', icon: <SiMongoose />, color: 'text-red-500' },
      { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800' },
      { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
      { name: 'Figma', icon: <FaFigma />, color: 'text-purple-500' },
    ]
  }
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  return (
    <section ref={sectionRef} className="mb-10 py-16 bg-transparent">
      <BlurFade delay={0.1}>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-4"
          >
            Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Technical expertise and proficiency in modern web development technologies
          </motion.p>
        </div>
      </BlurFade>

      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light text-white/90 border-b border-white/10 pb-2">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <motion.div 
                    className={`text-2xl transition-colors duration-300 ${skill.color}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {skill.icon}
                  </motion.div>
                  <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
