import { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll';
import StarsCanvas from "./components/ui/StarBackground";
import Navbar from "./sections/navbar/Navbar";
import Footer from './sections/footer/footer';
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

const useLocomotiveScroll = (start = true) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!start || !scrollRef.current) return;

    const locomotive = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      tablet: {
        smooth: true,
        breakpoint: 768,
      },
    });

    locomotive.on('scroll', (event) => {
      const progress = event.scroll.y / (document.body.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty('--scroll', progress.toString());
    });

    return () => {
      if (locomotive) locomotive.destroy();
    };
  }, [start]);

  return scrollRef;
};

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

function AppContent() {
  const locomotiveScrollRef = useLocomotiveScroll();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <span ref={locomotiveScrollRef} data-scroll-container>
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollbarCustomizer 
          width="8px"
          trackColor="#1a202c"
          thumbGradient={[
            "rgba(38, 38, 38, 0.8)",
            "rgba(58, 58, 58, 0.8)",
          ]}
        />
        <div 
          className="h-full w-full bg-slate-950 bg-no-repeat relative overflow-hidden
                     bg-[length:750%_auto] sm:bg-[length:200%_auto] md:bg-[length:250%_auto]
                     bg-top sm:bg-center"
          style={{
            backgroundImage: `url(${bgpattern})`,
            backgroundRepeat: 'inherit',
          }}
        >
          <StarsCanvas />
          <motion.div
            className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
            style={{ scaleX }}
          />
          <div className="relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Navbar />
              <FadeInSection>
                <Hero />
              </FadeInSection>
              <FadeInSection>
                <Experience />
              </FadeInSection>
              <FadeInSection>
                <Projects />
              </FadeInSection>
              <FadeInSection>
                <div className="py-12">
                  <GitHubContributions username="MilanPatel2003" />
                </div>
              </FadeInSection>
              <FadeInSection>
                <CertificateScroll content={certificateData} />
              </FadeInSection>
              <FadeInSection>
                <CharacterSpotlight />
              </FadeInSection>
            </div>
            <FadeInSection>
              <Footer />
            </FadeInSection>
          </div>
          <CursorChanger />
        </div>
      </Suspense>
    </span>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
