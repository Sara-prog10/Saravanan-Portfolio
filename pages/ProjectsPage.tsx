import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard, SectionTitle, SectionWrapper } from '../components/common';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const FilterButton: React.FC<{
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, isActive, onClick }) => (
    <motion.button
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            isActive ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-primary/20'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {label}
    </motion.button>
);

const ProjectDetailModal: React.FC<{
    project: Project;
    onClose: () => void;
}> = ({ project, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-3xl font-bold font-serif text-slate-800 dark:text-white">{project.title}</h2>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">&times;</button>
                    </div>

                    <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6"/>
                    
                    <h3 className="text-xl font-bold font-serif mb-2">The Problem</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">{project.caseStudy.problem}</p>
                    
                    <h3 className="text-xl font-bold font-serif mb-2">My Role</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">{project.caseStudy.role}</p>

                    <h3 className="text-xl font-bold font-serif mb-2">The Solution</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">{project.caseStudy.solution}</p>
                    
                    <h3 className="text-xl font-bold font-serif mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.caseStudy.techStack.map(tech => (
                            <span key={tech} className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-sky-300 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>
                    
                    <h3 className="text-xl font-bold font-serif mb-2">Architecture</h3>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-8 my-4 flex items-center justify-center h-64">
                       <p className="text-slate-500">Architecture Diagram Placeholder</p>
                    </div>

                    {project.caseStudy.githubUrl && (
                        <a href={project.caseStudy.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                            View on GitHub
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI' | 'Data' | 'IoT'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.tags.includes(filter));
  }, [filter]);

  return (
    <SectionWrapper>
      <SectionTitle subtitle="Portfolio">My Projects</SectionTitle>
      <div className="flex justify-center items-center gap-2 md:gap-4 mb-12">
        {(['All', 'AI', 'Data', 'IoT'] as const).map(f => (
          <FilterButton key={f} label={f} isActive={filter === f} onClick={() => setFilter(f)} />
        ))}
      </div>
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedProject && <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsPage;