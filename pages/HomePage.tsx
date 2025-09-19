import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionWrapper, SkillBadge, ProjectCard, SectionTitle } from '../components/common';
import { PROJECTS, TECH_STACK } from '../constants';
import { useNavigate } from 'react-router-dom';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const HeroSection: React.FC = () => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-dark-bg">
            {/* The background image and parallax effect div has been removed. */}
            <motion.div 
                className="relative z-10 text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <motion.img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHO3LlLiw68rw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711929710250?e=1761177600&v=beta&t=n-vkbENzMWKONembDiOZzYxBePCWC5qgsdD2p5a6xvA"
                    alt="Saravanan Ravi Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-200 dark:border-slate-700 shadow-lg"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                />
                <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-800 dark:text-white mb-4">
                    I build production-ready data systems & AI assistants.
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
                    Data Analyst · AI Engineer — RAG systems, Power BI dashboards, and embedded AI for real problems.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/demos">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform">
                            Try RAG Demo
                        </motion.button>
                    </Link>
                    <Link to="/projects">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform">
                            View Projects
                        </motion.button>
                    </Link>
                    <a href="/resume.pdf" download>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-transparent border-2 border-slate-400 text-slate-700 dark:border-slate-500 dark:text-slate-300 font-bold py-3 px-6 rounded-lg shadow-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                            Download Résumé
                        </motion.button>
                    </a>
                </div>
            </motion.div>

            <AnimatePresence>
                {showScrollIndicator && (
                    <motion.div
                        className="absolute bottom-20 inset-x-0 z-10 flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.5 } }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <motion.div
                            className="flex flex-col items-center text-slate-500 dark:text-slate-400 cursor-pointer"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
                        >
                            <span className="text-sm font-medium mb-1">Scroll to discover</span>
                            <ChevronDownIcon className="w-6 h-6" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const featuredProjectIds = [1, 3, 4]; // RAG Agent, Power BI, IoT System
    const featuredProjects = PROJECTS.filter(p => featuredProjectIds.includes(p.id));

    return (
        <>
            <HeroSection />

            <SectionWrapper className="bg-slate-50 dark:bg-dark-bg">
                <SectionTitle subtitle="My Work">Featured Projects</SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} onClick={() => navigate('/projects')} />
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto">
                    <SectionTitle subtitle="About Me">Saravanan Ravi</SectionTitle>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        I’m a Data Analyst & AI Engineer based in Singapore. I build retrieval-augmented systems, AI assistants that automate service workflows, and operational dashboards that turn raw data into decisions.
                    </p>
                </div>
            </SectionWrapper>
            
            <SectionWrapper className="bg-slate-50 dark:bg-dark-bg">
                <SectionTitle subtitle="My Toolbox">Tech Stack</SectionTitle>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {TECH_STACK.map(skill => (
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
};

export default HomePage;