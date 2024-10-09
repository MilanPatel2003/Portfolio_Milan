import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

interface CertificateContent {
  title: string;
  description: string;
  imageUrl: string;
}

interface CertificateScrollProps {
  content: CertificateContent[];
  contentClassName?: string;
}

export const CertificateScroll: React.FC<CertificateScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardHeight = 1 / cardLength;
    const newActiveCard = Math.min(Math.floor(latest / cardHeight), cardLength - 1);
    setActiveCard(newActiveCard);
  });

  const backgroundColors = [
    "bg-slate-900",
    "bg-black",
    "bg-neutral-900",
  ];

  return (
    <section id="certificates" className={`w-full transition-all duration-1000`}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <span className="text-4xl text-gray-500 sm:text-4xl md:text-4xl lg:text-5xl font-thin mb-4">
            <div className="flex justify-center p-8">CERTIFICATES</div>
          </span>
        </div>
      </div>
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          <motion.img
            key={activeCard}
            src={content[activeCard].imageUrl}
            alt={content[activeCard].title}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CertificateScroll;