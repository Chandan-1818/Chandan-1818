import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div className="relative min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-brand-blue/30 dark:selection:bg-brand-cyan/30">
            {/* Global floating decoration blur bubbles */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
              <div className="absolute top-1/4 left-[10%] w-[40vw] h-[40vw] max-w-[600px] bg-brand-blue/5 rounded-full blur-[120px] dark:bg-brand-blue/10" />
              <div className="absolute bottom-1/4 right-[10%] w-[40vw] h-[40vw] max-w-[600px] bg-brand-cyan/5 rounded-full blur-[120px] dark:bg-brand-cyan/8" />
            </div>

            {/* Content layout */}
            <div className="relative z-10">
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Certifications />
              <Contact />
              <Footer />
            </div>
            <SpeedInsights />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
