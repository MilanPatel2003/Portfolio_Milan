import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { FaChevronRight } from "react-icons/fa";
import sound from "../../assets/mp3/button-click2.wav"

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

  const audio = new Audio(sound); // Add this line to create an audio instance

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardHeight = 1 / cardLength;
    const newActiveCard = Math.min(Math.floor(latest / cardHeight), cardLength - 1);
    
    if (newActiveCard !== activeCard) { // Check if the active card has changed
      setActiveCard(newActiveCard);
      audio.play(); // Play the audio only if the active card changes
    }
  });

  const backgroundColors = [
    "from-slate-900 to-black",
    "from-black to-neutral-900",
    "from-neutral-900 to-slate-900",
  ];

  return (
    <section id="certificates" className="w-full transition-all duration-1000">
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="text-4xl text-gray-500 sm:text-5xl lg:text-6xl font-thin mb-4">
              <div className="flex justify-center p-4 sm:p-8">CERTIFICATES</div>
            </span>
          </div>
        </div>
      </BlurFade>

      {/* Mobile view */}
      <div className="lg:hidden space-y-6 px-4">
        {content.map((item, index) => (
          <BlurFade key={item.title + index} delay={0.1 * (index + 1)}>
            <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-black border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <CardTitle className="absolute bottom-4 left-4 text-white text-xl font-bold z-10">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-gray-300">{item.description}</CardDescription>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>

      {/* Desktop view */}
      <motion.div
        animate={{
          backgroundImage: `linear-gradient(to bottom right, ${backgroundColors[activeCard % backgroundColors.length]})`,
        }}
        className="hidden lg:flex h-[30rem] overflow-y-auto justify-center relative space-x-10 rounded-md p-10 backdrop-blur-sm"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3, x: activeCard === index ? 0 : -20 }}
                  className="text-2xl font-bold text-cyan-300 flex items-center"
                >
                  <FaChevronRight className={`mr-2 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`} />
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3, y: activeCard === index ? 0 : 20 }}
                  className="text-lg text-gray-300 max-w-sm mt-4"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <motion.div
          className={cn(
            "h-60 w-80 rounded-md bg-transparent sticky top-10 overflow-hidden border border-cyan-500/30 shadow-lg",
            contentClassName
          )}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            key={activeCard}
            src={content[activeCard].imageUrl}
            alt={content[activeCard].title}
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <motion.div
            className="absolute bottom-4 left-4 right-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-1">{content[activeCard].title}</h3>
            <p className="text-sm text-gray-300 line-clamp-2">{content[activeCard].description}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CertificateScroll;
