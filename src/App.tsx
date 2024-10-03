import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StarsCanvas from "./components/ui/StarBackground";
import bgPattern from "./assets/img/bg_pattern.png"; // Import the image
import Navbar from "./sections/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Experience from '@/sections/experience/Experience'; // Add this import
import Projects from "./sections/projects/Projects";
import { motion } from "framer-motion"; // Add this import
import Footer from './sections/footer/footer';
import SpaceLoadingScreen from './components/ui/SpaceLoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentBlurred, setIsContentBlurred] = useState(true);
  const pixieText = "Hey there! I'm Pixie, your friendly robot companion. 🤖 My master and I are stranded in space 🚀, but while we're stuck, why not explore this portfolio? Dive into the creativity that powers our journey through the stars!";
  const typingDuration = 20; // Changed from 40 to 20ms per character

  useEffect(() => {
    const totalDuration = pixieText.length * typingDuration;

    const timer = setTimeout(() => {
      setIsContentBlurred(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [pixieText]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading ? (
        <SpaceLoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
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
                <div className={`transition-all duration-1000 ${isContentBlurred ? 'blur-sm' : 'blur-none'}`}>
                  <Experience />
                  <Projects />
             
                  {/* Add other sections here */}
                  {/* <Banner /> */}
                  {/* <About /> */}
                  {/* <Experience /> */}

                </div>
              </motion.main>
            </div>
            <div className={`transition-all duration-1000 ${isContentBlurred ? 'blur-sm' : 'blur-none'}`}>
              <Footer />
            </div>
          </div>

        </div>
      )}
    </Router>
  );
}
