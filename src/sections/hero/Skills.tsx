import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaGithub, FaAws } from 'react-icons/fa';
import { RiJavascriptFill, RiNextjsFill } from 'react-icons/ri';
import { SiBootstrap, SiMongodb, SiMongoose, SiPostman, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { SiThreedotjs } from 'react-icons/si';
import { FaStar } from 'react-icons/fa';
import BlurFade from '@/components/ui/blur-fade';

const skills = [
  { name: 'React', icon: <FaReact />, color: 'text-blue-500', proficiency: 5 },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', proficiency: 4 },
  { name: 'JavaScript', icon: <RiJavascriptFill />, color: 'text-yellow-400', proficiency: 5 },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600', proficiency: 4 },
  { name: 'Next.js', icon: <RiNextjsFill />, color: 'text-white', proficiency: 3 },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500', proficiency: 4 },
  { name: 'Mongoose', icon: <SiMongoose />, color: 'text-red-500', proficiency: 4 },
  { name: 'Figma', icon: <FaFigma />, color: 'text-purple-500', proficiency: 2 },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800', proficiency: 5 },
  { name: 'AWS', icon: <FaAws />, color: 'text-orange-500', proficiency: 3 },
  { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500', proficiency: 4 },
  { name: 'Framer Motion', icon: <TbBrandFramerMotion />, color: 'text-purple-600', proficiency: 5 },
  { name: 'Three.js', icon: <SiThreedotjs />, color: 'text-white', proficiency: 4 },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-blue-500', proficiency: 5 },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-500', proficiency: 5 },
];

export default function SkillsSection() {
  return (
    <section className="mb-10 py-16 bg-transparent">
      <BlurFade delay={0.1}>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-4"
          >
            Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Technical expertise and proficiency in modern web development technologies
          </motion.p>
        </div>
      </BlurFade>
      <motion.div 
        className="max-w-6xl mx-auto px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-transparent shadow-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div 
              className="text-4xl sm:text-5xl md:text-6xl text-white transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ color: 'inherit' }}
                className="group"
              >
                <span className="group-hover:hidden">
                  {skill.icon}
                </span>
                <span className={`hidden group-hover:block ${skill.color}`}>
                  {skill.icon}
                </span>
              </motion.div>
            </motion.div>
            <p className="mt-2 text-sm font-medium text-gray-100">{skill.name}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`w-3 h-3 ${
                    index < skill.proficiency ? 'text-gray-300' : 'text-black'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
