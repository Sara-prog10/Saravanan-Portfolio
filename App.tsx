import React, { useState, createContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Transition } from 'framer-motion';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import DemosPage from './pages/DemosPage';
import BlogPage from './pages/BlogPage';
import CareerPage from './pages/CareerPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

export const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | null>(null);

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // FIX: This effect runs when the new page component mounts.
    // Due to AnimatePresence's mode="wait", this happens AFTER the old page
    // has finished its exit animation. This is the correct, reliable timing
    // to reset the scroll position.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures it runs once on mount.

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
                <Route path="/demos" element={<PageWrapper><DemosPage /></PageWrapper>} />
                <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
                <Route path="/career" element={<PageWrapper><CareerPage /></PageWrapper>} />
                <Route path="/resume" element={<PageWrapper><ResumePage /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        {/* The ScrollToTop component has been removed; its logic is now in PageWrapper */}
        <Layout>
            <AnimatedRoutes />
        </Layout>
      </Router>
    {/* FIX: Corrected a typo in the closing tag of ThemeContext.Provider. It was incorrectly written as Theme.Context.Provider. */}
    </ThemeContext.Provider>
  );
};

export default App;