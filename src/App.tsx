import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from "framer-motion";
import Footer from './sections/footer/footer';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import ScrollbarCustomizer from "./components/ui/ScrollbarCustomizer";
import { certificateData } from './portfolioData.ts/data';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { SmoothCursor } from './components/ui/smooth-cursor';
import ProjectShowcase from './sections/projects/ProjectShowcase';
import Navbar from './components/Navbar';
import { useLocomotiveScroll } from './hooks/useLocomotiveScroll';
import { Spotlight } from './components/ui/spotlight-new';

const Hero = lazy(() => import('./sections/hero/Hero'));
const Experience = lazy(() => import('./sections/experience/Experience'));
const GitHubContributions = lazy(() => import('./components/ui/GitHubContributions'));
const CertificateShowcase = lazy(() => import('./sections/certificates/CertificateShowcase'));
const CharacterSpotlight = lazy(() => import('./sections/avatar/CharacterSpotlight'));
const ContactForm = lazy(() => import('./sections/contact/ContactForm'));

function AppContent() {
  const scrollRef = useLocomotiveScroll();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SmoothCursor />

      <ScrollbarCustomizer 
        width="6px"
        trackColor="#1a202c"
        thumbGradient={[
          "rgba(38, 38, 38, 0.8)",
          "rgba(58, 58, 58, 0.8)",
        ]}
      />
      <div ref={scrollRef} data-scroll-container className="h-full w-full relative overflow-hidden bg-grid">
        <ScrollProgressBar />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Spotlight/>
            <motion.main
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Experience />
              {/* <Projects /> */}
              <ProjectShowcase/>
              <div className="py-12">
                <GitHubContributions 
                  username="MilanPatel2003"
                />
              </div>

              <CertificateShowcase certificates={certificateData} />
              <CharacterSpotlight />
              <ContactForm/>

            </motion.main>

          </div>
          <div>

            <Footer />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <AppContent />
    </Router>
  );
}
