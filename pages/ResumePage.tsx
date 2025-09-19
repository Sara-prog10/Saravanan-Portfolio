
import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '../components/common';

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);


const ResumePage: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionTitle subtitle="My Experience">Résumé</SectionTitle>
      <div className="text-center mb-12">
        <motion.a
          href="/resume.pdf" // Placeholder link
          download="Saravanan_Ravi_Resume.pdf"
          className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DownloadIcon className="w-5 h-5" />
          Download Résumé
        </motion.a>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="aspect-[8.5/11] bg-slate-200 dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-slate-500">Inline PDF Viewer Placeholder</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResumePage;
