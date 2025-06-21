import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from "framer-motion";
import Footer from './sections/footer/footer';
import { certificateData } from './portfolioData.ts/data';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ProjectShowcase from './sections/projects/ProjectShowcase';
import Navbar from './components/Navbar';
import { Spotlight } from './components/ui/spotlight-new';
import ScrollProgressButton from './components/ui/ScrollProgressButton';

const Hero = lazy(() => import('./sections/hero/Hero'));
const Experience = lazy(() => import('./sections/experience/Experience'));
const CertificateShowcase = lazy(() => import('./sections/certificates/CertificateShowcase'));
const CharacterSpotlight = lazy(() => import('./sections/avatar/CharacterSpotlight'));
const ContactForm = lazy(() => import('./sections/contact/ContactForm'));

function AppContent() {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {/* <SmoothCursor /> */}

      <div className="h-full w-full relative overflow-hidden">
        {/* <ScrollProgressBar /> */}
        <ScrollProgressButton/>
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
              {/* <div className="py-12">
                <GitHubContributions 
                  username="MilanPatel2003"
                />
              </div> */}

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
