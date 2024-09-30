import { useRef } from "react";
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
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaFigma, FaDocker, FaGithub, FaAws, FaPython, FaJenkins, FaVuejs, FaPhp } from "react-icons/fa"; // Example icons
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiGoland, SiMongodb, SiMongoose, SiPostgresql, SiPostman, SiTypescript } from "react-icons/si";
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
  const directionFactor = useRef<number>(1);

  useAnimationFrame(( t,delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
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
  const iconColors = {
    FaReact: "#61DAFB",
    FaNodeJs: "#339933",
    FaFigma: "#F24E1E",
    FaDocker: "#2496ED",
    FaGithub: "#181717",
    RiNextjsFill: "#000000",
    FaAws: "#FF9900",
    SiTypescript: "#3178C6",
    FaPython: "#3776AB",
    FaJenkins: "#D24939",
    SiPostman: "#FF6C37",
    RiJavascriptFill: "#F7DF1E",
    FaVuejs: "#4FC08D",
    TbBrandFramerMotion: "#0055FF",
    SiGoland: "#00ADD8",
    FaJsSquare: "#F7DF1E",
    FaDatabase: "#4479A1",
    SiMongodb: "#47A248",
    SiMongoose: "#880000",
    FaPhp: "#777BB4",
    SiPostgresql: "#4169E1",
  };

  const coloredIcons = [
    <FaReact style={{ color: iconColors.FaReact }} />,
    <FaNodeJs style={{ color: iconColors.FaNodeJs }} />,
    <FaFigma style={{ color: iconColors.FaFigma }} />,
    <FaDocker style={{ color: iconColors.FaDocker }} />,
    <FaGithub style={{ color: iconColors.FaGithub }} />,
    <RiNextjsFill style={{ color: iconColors.RiNextjsFill }} />,
    <FaAws style={{ color: iconColors.FaAws }} />,
    <SiTypescript style={{ color: iconColors.SiTypescript }} />,
    <FaPython style={{ color: iconColors.FaPython }} />,
    <FaJenkins style={{ color: iconColors.FaJenkins }} />,
    <SiPostman style={{ color: iconColors.SiPostman }} />,
    <RiJavascriptFill style={{ color: iconColors.RiJavascriptFill }} />,
    <FaVuejs style={{ color: iconColors.FaVuejs }} />,
    <TbBrandFramerMotion style={{ color: iconColors.TbBrandFramerMotion }} />,
    <SiGoland style={{ color: iconColors.SiGoland }} />,
    <FaJsSquare style={{ color: iconColors.FaJsSquare }} />,
    <FaDatabase style={{ color: iconColors.FaDatabase }} />,
    <SiMongodb style={{ color: iconColors.SiMongodb }} />,
    <SiMongoose style={{ color: iconColors.SiMongoose }} />,
    <FaPhp style={{ color: iconColors.FaPhp }} />,
    <SiPostgresql style={{ color: iconColors.SiPostgresql }} />,
  ];

  return (
    <section>
      <ParallaxText baseVelocity={-5} >
        {coloredIcons}
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        {coloredIcons}
      </ParallaxText>
    </section>
  );
}
