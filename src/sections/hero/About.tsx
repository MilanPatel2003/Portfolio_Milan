// import BlurIn from "@/components/ui/blur-in";

import ShimmerButton from "@/components/ui/shimmer-button";


export default function About() {
  return (
    <div className="bg-transparent text-white w-full flex flex-col justify-center items-center relative py-8">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative z-10 text-center max-w-3xl px-4">
        <span
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-4"
        >
          Milan Patel!
        </span>
        <h2 className="text-xl sm:text-2xl mb-6">
          I <span className="text-purple-400">Code</span> & Explore Tech 🚀
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-8">
          Versatile Fullstack Developer with a passion for learning and exploring new technologies.
          Quick learner dedicated to crafting innovative solutions across the entire tech stack.
        </p>
        <div className="flex justify-center">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-gray-200 dark:from-white dark:to-slate-900/10 lg:text-lg">
              Contact Me
            </span>
          </ShimmerButton>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 text-sm text-gray-400">
        We Are Here!
      </div>
    </div>
  );
}
