import HyperText from "@/components/ui/hyper-text";
import ShimmerButton from "@/components/ui/shimmer-button";
import WordRotate from "@/components/ui/word-rotate";

export default function About() {
  
  return (
    <div className="bg-transparent text-white w-full flex flex-col justify-center items-center relative py-8">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative z-10 text-center max-w-3xl px-4">
        <HyperText
          text="Milan Patel"
          animateOnLoad={true}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-thin font-oxanium mb-4 mx-auto text-center animate-gradient-x"
        />
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 whitespace-nowrap overflow-hidden">
          <span className="inline-flex items-center">
            I<WordRotate
              className="text-purple-400 mx-4"
              words={["Code", "Create", "Develop", "Innovate"]}
            /> & Explore Tech 🚀
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
