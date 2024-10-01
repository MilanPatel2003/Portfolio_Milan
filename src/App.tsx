import { BrowserRouter as Router } from 'react-router-dom';
import StarsCanvas from "./components/ui/StarBackground";
import bgPattern from "./assets/img/bg_pattern.png"; // Import the image
import Navbar from "./sections/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Experience from '@/sections/experience/Experience'; // Add this import
import Projects from "./sections/projects/Projects";
import { motion } from "framer-motion"; // Add this import

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-slate-950 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgPattern})` }}>
        <div className="relative">
          <StarsCanvas />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <motion.main // Change this from <main> to <motion.main> // Change this from <main> to <motion.main>
              className="relative z-10"
              initial={{ opacity: 0 }} // Add initial opacity
              animate={{ opacity: 1 }} // Animate to full opacity
              transition={{ duration: 0.5 }} // Set duration for the transition // Set duration for the transition
            >
              <Hero />
              <Experience />
              <Projects />
              {/* Add other sections here */}
              {/* <Banner /> */}
              {/* <About /> */}
              {/* <Experience /> */}
            </motion.main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
