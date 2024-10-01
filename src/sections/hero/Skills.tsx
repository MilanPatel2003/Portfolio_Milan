import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaFigma,
  FaDocker,
  FaGithub,
  FaAws,
  FaPython,
  FaJenkins,
  FaVuejs,
  FaPhp,
} from "react-icons/fa"; // Example icons
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import {
  SiGoland,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

interface ParallaxProps {
  children: React.ReactNode; // Accept React nodes instead of strings
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    const moveBy = baseVelocity * (delta / 1000) * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {Array.isArray(children) ? (
          <>
            {children.map((child, index) => (
              <span key={index} className="icon">
                {child}
              </span>
            ))}
            {children.map((child, index) => (
              <span key={`duplicate-${index}`} className="icon">
                {child}
              </span>
            ))}
          </>
        ) : null}
      </motion.div>
    </div>
  );
}

export default function App() {
  const smSize = "text-2xl";
  const mdSize = "md:text-4xl";
  const lgSize = "lg:text-6xl";

  const coloredIcons = [
    <FaReact key="react" className={`text-blue-500 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaNodeJs key="nodejs" className={`text-green-500 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaFigma key="figma" className={`text-red-500 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaDocker key="docker" className={`text-blue-700 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaGithub key="github" className={`text-gray-800 ${smSize} ${mdSize} ${lgSize}`} />,
    <RiNextjsFill key="nextjs" className={`text-black ${smSize} ${mdSize} ${lgSize}`} />,
    <FaAws key="aws" className={`text-yellow-500 ${smSize} ${mdSize} ${lgSize}`} />,
    <SiTypescript key="typescript" className={`text-blue-500 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaPython key="python" className={`text-blue-600 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaJenkins key="jenkins" className={`text-red-600 ${smSize} ${mdSize} ${lgSize}`} />,
    <SiPostman key="postman" className={`text-orange-500 ${smSize} ${mdSize} ${lgSize}`} />,
    <RiJavascriptFill key="javascript" className={`text-yellow-400 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaVuejs key="vuejs" className={`text-green-400 ${smSize} ${mdSize} ${lgSize}`} />,
    <TbBrandFramerMotion key="framer-motion" className={`text-blue-500 ${smSize} ${mdSize} ${lgSize}`} />,
    <SiGoland key="goland" className={`text-blue-300 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaJsSquare key="javascript-square" className={`text-yellow-400 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaDatabase key="database" className={`text-blue-600 ${smSize} ${mdSize} ${lgSize}`} />,
    <SiMongodb key="mongodb" className={`text-green-600 ${smSize} ${mdSize} ${lgSize}`} />,
    <SiMongoose key="mongoose" className={`text-red-700 ${smSize} ${mdSize} ${lgSize}`} />,
    <FaPhp key="php" className={`text-blue-400 ${smSize} ${mdSize} ${lgSize}`} />,
    <SiPostgresql key="postgresql" className={`text-blue-500 ${smSize} ${mdSize} ${lgSize}`} />,
  ];

  return (
    <section>
         <span className="text-4xl text-gray-500 sm:text-4xl md:text-4xl lg:text-5xl font-thin mb-4">
        <div className="flex justify-center p-8">
          SKILLS
        </div>
      </span>

      <ParallaxText baseVelocity={-5}>
        {coloredIcons.map((icon, index) => (
          <span key={`icon-${index}`} className="icon">
            {icon}
          </span>
        ))}
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        {coloredIcons.map((icon, index) => (
          <span key={`icon-reverse-${index}`} className="icon">
            {icon}
          </span>
        ))}
      </ParallaxText>
    </section>
  );
}
