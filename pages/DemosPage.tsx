import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '../components/common';

const RAGDemo: React.FC = () => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-serif text-center mb-6">RAG Demo Chat</h3>
            <div className="glassmorphism rounded-xl p-4 h-96 flex flex-col shadow-lg">
                <div className="flex-grow space-y-4 overflow-y-auto p-2">
                    {/* Placeholder for chat messages */}
                     <div className="flex justify-start">
                        <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-3 max-w-xs">
                            <p className="text-sm">Welcome! How can I help you with the knowledge base today?</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex gap-2">
                    <input type="text" placeholder="Ask the knowledge base..." className="flex-grow bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white font-semibold px-4 py-2 rounded-lg"
                    >
                        Send
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

const PowerBIDemo: React.FC = () => (
    <div className="w-full">
        <h3 className="text-2xl font-bold font-serif text-center mb-6">Embedded Power BI Report</h3>
        <div className="aspect-video w-full max-w-4xl mx-auto bg-slate-200 dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-slate-500">Power BI Iframe Placeholder</p>
        </div>
    </div>
);


const EmbeddedWebsiteDemo: React.FC = () => (
    <div className="w-full">
        <h3 className="text-2xl font-bold font-serif text-center mb-6">Embedded Website</h3>
        <div className="aspect-video w-full max-w-4xl mx-auto bg-slate-200 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            {/* You can replace this src with any website you want to embed */}
            <iframe 
                src="https://datavizproject.com/" 
                title="Embedded Website Demo"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin"
            ></iframe>
        </div>
    </div>
);


const DemosPage: React.FC = () => {
  return (
    <SectionWrapper>
        <SectionTitle subtitle="Interactive Examples">Live Demos</SectionTitle>
        <div className="space-y-24">
            <RAGDemo />
            <PowerBIDemo />
            <EmbeddedWebsiteDemo />
        </div>
    </SectionWrapper>
  );
};

export default DemosPage;
