import React from 'react';
// FIX: Explicitly typed `animationProps` with `MotionProps` from `framer-motion` to resolve a TypeScript error where the `ease` property in the `transition` object was being inferred as a generic `string` instead of the required `Easing` type.
import { motion, MotionProps } from 'framer-motion';
import type { Project } from '../types';

export const SectionWrapper: React.FC<{
  children: React.ReactNode,
  className?: string,
  id?: string,
  animateOnLoad?: boolean
}> = ({ children, className = '', id, animateOnLoad = false }) => {
  const animationProps: MotionProps = animateOnLoad
    ? {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' }
      }
    : {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, ease: 'easeOut' }
      };

  return (
    <motion.section
      id={id}
      className={`w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
      {...animationProps}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};


export const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
  <motion.div 
    className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-sky-300 text-sm font-medium px-4 py-1 rounded-full"
    whileHover={{ scale: 1.05 }}
  >
    {skill}
  </motion.div>
);

export const ProjectCard: React.FC<{ project: Project, onClick: () => void }> = ({ project, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
    className="rounded-xl overflow-hidden glassmorphism cursor-pointer group"
    onClick={onClick}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
  >
    <div className="relative">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold font-serif text-slate-800 dark:text-white mb-2">{project.title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const SectionTitle: React.FC<{ children: React.ReactNode, subtitle?: string }> = ({ children, subtitle }) => (
    <div className="text-center mb-12">
        {subtitle && <p className="text-primary font-semibold mb-2">{subtitle}</p>}
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 dark:text-white">{children}</h2>
    </div>
);