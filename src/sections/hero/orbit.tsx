import OrbitingCircles from "@/components/ui/orbiting-circles";
import { FiGithub } from "react-icons/fi";
import { RiNotionFill } from "react-icons/ri";
import { FaNode, FaReact, FaAws, FaFigma } from "react-icons/fa";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { SiNextdotjs, SiTypescript, SiPostman, SiTailwindcss } from "react-icons/si";

export function OrbitingSkills() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={0}
        radius={80}
      >
        <Icons.react />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={6.67}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={13.33}
        radius={80}
      >
        <Icons.threejs />
      </OrbitingCircles>

      {/* Middle Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={130}
        duration={25}
        delay={0}
        reverse
      >
        <Icons.node />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={130}
        duration={25}
        delay={8.33}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={130}
        duration={25}
        delay={16.67}
        reverse
      >
        <Icons.figma />
      </OrbitingCircles>

      {/* Outer Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={30}
        delay={0}
      >
        <Icons.framer />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={30}
        delay={7.5}
      >
        <Icons.nextJS />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={30}
        delay={15}
      >
        <Icons.postman />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={30}
        delay={22.5}
      >
        <Icons.tailwind />
      </OrbitingCircles>

      {/* Existing outer circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={210}
        duration={35}
        delay={0}
      >
        <Icons.typescript />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={210}
        duration={35}
        delay={17.5}
      >
        <Icons.aws />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <FiGithub className="text-white" size={25} />
  ),
  notion: () => (
    <RiNotionFill className="text-white" size={30} />
  ),
  framer: () => (
    <TbBrandFramerMotion className="text-white" size={30} />
  ),
  node: () => (
    <FaNode className="text-white" size={50} />
  ),
  react: () => (
    <FaReact className="text-white" size={45} />
  ),
  nextJS: () => (
    <SiNextdotjs className="text-white" size={30} />
  ),
  typescript: () => (
    <SiTypescript className="text-white" size={25} />
  ),
  aws: () => (
    <FaAws className="text-white" size={25} />
  ),
  threejs: () => (
    <TbBrandThreejs className="text-white" size={30} />
  ),
  figma: () => (
    <FaFigma className="text-white" size={30} />
  ),
  postman: () => (
    <SiPostman className="text-white" size={30} />
  ),
  tailwind: () => (
    <SiTailwindcss className="text-white" size={30} />
  ),
};
