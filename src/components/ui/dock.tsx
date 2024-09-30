import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
  } from "framer-motion";
  import { useRef } from "react";
  import { IconType } from "react-icons";
  import { HiOutlineHome, HiOutlineEnvelope } from "react-icons/hi2";
  import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
  import { Separator } from "@radix-ui/react-separator";

  // Define an interface for icon data
  interface IconData {
    icon: IconType;
    href: string;
  }

  export function Dock() {
    let mouseX = useMotionValue(Infinity);

    const iconData: IconData[] = [
      { icon: HiOutlineHome, href: "#" },
      { icon: FiGithub, href: "https://github.com/MilanPatel2003" },
      { icon: FiLinkedin, href: "https://www.linkedin.com/in/milan-patel-37650330b/" },
      { icon: FiTwitter, href: "https://x.com/MILANPA30313563?t=fqfYLTQP0A8Gv8VLFwtu_w&s=08" },
      { icon: HiOutlineEnvelope, href: "mailto:your@email.com" },
    ];

    return (
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex items-center gap-4 rounded-full bg-transparent backdrop-blur-md px-4 py-2"
      >
        {iconData.map(({ icon, href }, i) => (
          <>
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              <AppIcon mouseX={mouseX} icon={icon} />
            </a>
            {i === 0 && (
              <Separator
                className="h-3 w-px bg-gray-300 mx-2"
                orientation="vertical"
              />
            )}
          </>
        ))}
      </motion.div>
    );
  }

  function AppIcon({ mouseX, icon: Icon }: { mouseX: MotionValue; icon: IconType }) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
      let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-100, 0, 100], [24, 32, 24]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
      <motion.div
        ref={ref}
        style={{ width }}
        className="flex items-center justify-center"
      >
        <Icon className="text-white" size={20} />
      </motion.div>
    );
  }
