import ShimmerButton from "@/components/ui/shimmer-button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import WordRotate from "@/components/ui/word-rotate";
import { motion } from "framer-motion";

export default function About() {
  const words = [
    {
      text: "MILAN PATEL",
      className: "font-light text-xl sm:text-2xl md:text-3xl lg:text-5xl font-oxanium text-gray-300"
    },
    // {
    //   text: "Patel",
    // },
    {
      text: "Full-Stack",
      className: "font-oxanium font-light text-md sm:text-2xl md:text-3xl lg:text-3xl animate-gradient-x",
    },
    {
      text: "Developer",
      className: "font-oxanium font-light text-md sm:text-2xl md:text-3xl lg:text-3xl animate-gradient-x",
    },
  ];
  
  return (
    <div className="bg-transparent text-white w-full flex flex-col justify-center items-center relative py-8">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Animated Mouse Scroll Icon */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-8 h-14 border-2 border-white/30 rounded-full mx-auto">
          <motion.div
            className="absolute left-1/2 top-3 w-1.5 h-1.5 bg-white/60 rounded-full"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.div
          className="text-sm text-white/40 mt-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Scroll
        </motion.div>
      </motion.div>

      <TypewriterEffectSmooth words={words}/>
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 whitespace-nowrap overflow-hidden">
          <span className="inline-flex items-center">
            I<div className="border rounded-full m-4 w-32"><WordRotate
              className="text-gray-200 rounded-full mx-4"
              words={["Code", "Create", "Develop", "Innovate"]}
            /></div> & Explore Tech 🚀
          </span>
        </h2>
        <p className="text-gray-300 text-sm md:text-lg lg:text-xl mb-8"> 
          Versatile Fullstack Developer with a passion for learning and
          exploring new technologies. Quick learner dedicated to crafting
          innovative solutions across the entire tech stack.
        </p>
        <div className="flex justify-center">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-gray-200 dark:from-white dark:to-slate-900/10 lg:text-lg">
              Contact Me
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
