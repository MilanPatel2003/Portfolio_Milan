import { Terminal, AnimatedSpan } from "@/components/magicui/terminal";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { SiLeetcode, SiDevdotto } from "react-icons/si";
import Spline from '@splinetool/react-spline';

import About from "./About";
import Skills from "./Skills";


export default function Hero() {

  const words = [
    {
      text: "MILAN PATEL",
      className: "font-light text-xl sm:text-2xl md:text-3xl lg:text-3xl font-oxanium text-gray-300 break-words"
    },
    {
      text: "SOFTWARE DEVELOPER",
        className: "font-light text-lg sm:text-2xl md:text-3xl lg:text-2xl font-oxanium text-gray-300 break-words"
    },
    // {
    //   text: "DEVELOPER",
    //     className: "font-light text-lg sm:text-2xl md:text-3xl lg:text-2xl font-oxanium text-gray-300 break-words"
    // },
  ];
  return (
    <section className="relative flex flex-col items-center justify-start p-2 sm:p-4 md:p-8 lg:p-10 mt-28 overflow-hidden animate-fade-in" id="home">
      <div className="relative z-10 w-full flex flex-col items-center justify-center mb-8 overflow-hidden">
        <Terminal className="w-full max-w-5xl mx-auto bg-black max-h-fit border-2 border-gray-500/50 bg-clip-padding shadow-[0_0_15px_rgba(255,255,255,0.2)] rounded-2xl overflow-hidden">
          {/* Terminal Header with Name */}
          <div className="max-w-[460px] overflow-x-hidden">
            <TypewriterEffectSmooth words={words} className="w-full" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-bold text-lg text-gray-300 tracking-widest">MILAN</span>
            <span className="text-xs text-gray-400 ml-2">~$</span>
          </div>
          {/* Terminal Content: Always horizontal, text fits on mobile */}
          <div className="flex flex-row w-full gap-4 items-start">
            {/* Terminal Text (About Me) with lots of code-style commands */}
            <div className="flex-1 min-w-0 w-full px-1 sm:px-2 md:px-4" style={{fontSize: 'clamp(0.8rem, 2.5vw, 1.05rem)'}}>
              <AnimatedSpan delay={600} className="font-mono text-gray-200">$ whoami</AnimatedSpan>
              <AnimatedSpan delay={900} className="font-mono text-gray-400">Milan Patel (Software Developer)</AnimatedSpan>
              <AnimatedSpan delay={1200} className="font-mono text-gray-200">$ location</AnimatedSpan>
              <AnimatedSpan delay={1500} className="font-mono text-gray-400">Ahmedabad, GJ, India</AnimatedSpan>
              <AnimatedSpan delay={1800} className="font-mono text-gray-200">$ stack --list</AnimatedSpan>
              <AnimatedSpan delay={2100} className="font-mono text-gray-400">React, Next.js, Node.js, MongoDB, SQL, Python</AnimatedSpan>
              <AnimatedSpan delay={2400} className="font-mono text-gray-200">$ summary</AnimatedSpan>
              <AnimatedSpan delay={2700} className="font-mono text-gray-400">Passionate about building web applications that blend creativity with functionality. MCA student, hands-on with React, Node.js, Python, SQL. Eager to contribute and grow as a developer!</AnimatedSpan>
              <AnimatedSpan delay={3000} className="font-mono text-gray-200">$ contact --all</AnimatedSpan>
              <AnimatedSpan delay={3300} className="font-mono text-gray-400">
                <a href="mailto:milanpatel6454@gmail.com" className="underline hover:text-blue-400 flex items-center gap-2">
                  <MdEmail className="text-lg" /> milanpatel6454@gmail.com
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={3600} className="font-mono text-gray-400">
                <a href="https://www.linkedin.com/in/milan-patel-37650330b" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <FaLinkedin className="text-lg" /> linkedin.com/in/milan-patel-37650330b
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={3900} className="font-mono text-gray-400">
                <a href="https://github.com/MilanPatel2003" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <FaGithub className="text-lg" /> github.com/MilanPatel2003
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={4200} className="font-mono text-gray-400">
                <a href="https://milanpatel.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <FaGlobe className="text-lg" /> milanpatel.vercel.app
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={4500} className="font-mono text-gray-400">
                <a href="https://leetcode.com/u/MilanPatel2003/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <SiLeetcode className="text-lg" /> leetcode.com/u/MilanPatel2003/
                </a>
              </AnimatedSpan>
              <AnimatedSpan delay={4800} className="font-mono text-gray-400">
                <a href="https://dev.to/milanpatel2003" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 flex items-center gap-2">
                  <SiDevdotto className="text-lg" /> dev.to/milanpatel2003
                </a>
              </AnimatedSpan>
            </div>
            {/* Spline Scene (Right Side) - hidden on small screens */}
            <div className="hidden md:flex flex-1 justify-center items-center min-w-[220px] max-w-full w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[400px] relative">
            <Spline scene="https://prod.spline.design/FSaZWDPW39gK1TyX/scene.splinecode" />
            </div>
          </div>
        </Terminal>
      </div>
      <div className="w-full relative z-10">
        <About />
        <Skills />
      </div>
      <div className="hidden lg:block absolute bottom-0 -z-10 w-full">
        <video
          className="w-full h-auto"
          preload="auto"
        >
          <source src="./video/grid.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}


// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <Spline scene="https://prod.spline.design/FSaZWDPW39gK1TyX/scene.splinecode" />
//   );
// }
