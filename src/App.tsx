import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from "framer-motion";
import Footer from './sections/footer/footer';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import ScrollbarCustomizer from "./components/ui/ScrollbarCustomizer";
import { certificateData, projectsData } from './portfolioData.ts/data';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { SmoothCursor } from './components/ui/smooth-cursor';
import FloatingDock from "@/components/ui/FloatingDock";
import LocomotiveScrollWrapper from './components/ui/LocomotiveScroll';
import ProjectShowcase from './sections/projects/ProjectShowcase';

const Hero = lazy(() => import('./sections/hero/Hero'));
const Experience = lazy(() => import('./sections/experience/Experience'));
const GitHubContributions = lazy(() => import('./components/ui/GitHubContributions'));
const CertificateShowcase = lazy(() => import('./sections/certificates/CertificateShowcase'));
const CharacterSpotlight = lazy(() => import('./sections/avatar/CharacterSpotlight'));
const ContactForm = lazy(() => import('./sections/contact/ContactForm'));

function AppContent() {
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
      <LocomotiveScrollWrapper className="h-full w-full relative overflow-hidden">
        <ScrollProgressBar />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.main
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Experience />
              {/* <Projects /> */}
              <ProjectShowcase projects={projectsData}/>
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
      </LocomotiveScrollWrapper>
      <FloatingDock position="top" />
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
