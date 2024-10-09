import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StarsCanvas from "./components/ui/StarBackground";
import Navbar from "./sections/navbar/Navbar";
import { motion } from "framer-motion";
import Footer from './sections/footer/footer';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import ScrollbarCustomizer from "./components/ui/ScrollbarCustomizer";
import CursorChanger from './components/ui/CursorChanger';
import { certificateData } from './portfolioData.ts/data';
import LoadingSpinner from './components/ui/LoadingSpinner';
import bgpattern from './assets/img/bg_pattern.webp';

const Hero = lazy(() => import('./sections/hero/Hero'));
const Experience = lazy(() => import('./sections/experience/Experience'));
const Projects = lazy(() => import('./sections/projects/Projects'));
const GitHubContributions = lazy(() => import('./components/ui/GitHubContributions'));
const CertificateScroll = lazy(() => import('./sections/certificates/CertificateScroll'));
const CharacterSpotlight = lazy(() => import('./sections/avatar/CharacterSpotlight'));

function AppContent() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ScrollbarCustomizer 
        width="6px"
        trackColor="#1a202c"
        thumbGradient={[
          "rgba(38, 38, 38, 0.8)",
          "rgba(58, 58, 58, 0.8)",
        ]}
      />
      <div 
        className="h-full w-full bg-zinc-950 bg-no-repeat relative overflow-hidden
                   bg-[length:750%_auto] sm:bg-[length:200%_auto] md:bg-[length:250%_auto]
                   bg-top sm:bg-center"
        style={{
          backgroundImage: `url(${bgpattern})`,
          backgroundRepeat: 'inherit',
        }}
      >
        <StarsCanvas />
        <ScrollProgressBar />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <motion.main
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Experience />
              <Projects />
              <div className="py-12">
                <GitHubContributions 
                  username="MilanPatel2003"
                />
              </div>
              <CertificateScroll content={certificateData} />
              <CharacterSpotlight />
            </motion.main>
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <CursorChanger />
      </div>
    </Suspense>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
