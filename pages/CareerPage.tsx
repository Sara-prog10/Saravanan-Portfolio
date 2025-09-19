import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '../components/common';

// --- SVG Icons ---
const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const CertificateIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21l-8-4.5v-9l8 4.5 8-4.5v9L12 21z"></path>
    <path d="M12 12l8-4.5"></path>
    <path d="M12 12L4 7.5"></path>
    <path d="M12 12v9"></path>
  </svg>
);

const GraduationCapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"></path>
    </svg>
);


// --- Data Definitions ---
type CareerEvent = {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'Work' | 'Project' | 'Certification' | 'Education';
};

const careerData: CareerEvent[] = [
    // Work Experience
    { date: "May 2024 - Present", title: "AI Engineer", subtitle: "The Intellect, Singapore (Remote)", description: "Designing and deploying AI-powered RAG agents, building workflow automations, and enabling multi-channel user interactions.", type: "Work" },
    { date: "October 2023 - April 2024", title: "Data Science Consultant", subtitle: "Rubixe, Bangalore", description: "Developed ML models, conducted data preprocessing and feature engineering, and created interactive dashboards using Power BI/Tableau.", type: "Work" },
    { date: "August 2023 - October 2023", title: "IoT Trainer", subtitle: "Skill Lync, Chennai", description: "Conducted training sessions on IoT, developed hands-on projects, and taught microcontroller programming and sensor interfacing.", type: "Work" },
    { date: "October 2022 - November 2022", title: "Firmware Development (Internship)", subtitle: "Boodskap IoT, Chennai", description: "Developed and optimized firmware for ESP32 in C/C++, implemented sensor interfacing, and worked on LoRa WAN communication.", type: "Work" },
    // Projects
    { date: "July 2025", title: "AI RAG Agent", subtitle: "The Intellect", description: "Developed an AI-powered agent for intelligent fault reporting and service queries using a custom knowledge base.", type: "Project" },
    { date: "March 2025", title: "AI-Powered Virtual Assistant", subtitle: "The Intellect", description: "Implemented OpenAI for NLP, integrated speech-to-text, and developed image recognition with OpenCV for on-demand home services.", type: "Project" },
    { date: "January 2025 - February 2025", title: "Building Maintenance & Construction Tracking Dashboard", subtitle: "The Intellect", description: "Developed a Power BI dashboard for tracking maintenance and construction projects with real-time data integration.", type: "Project" },
    // Certifications
    { date: "February 2024", title: "Data Science Certificate", subtitle: "Datamites", description: "Demonstrated proficiency in data analysis, machine learning, statistical modeling, and tools like Python, SQL, and Power BI.", type: "Certification" },
    { date: "April 2024", title: "Google Data Analytics Professional Certificate", subtitle: "Coursera", description: "Gained practical skills in data analytics through interactive labs and an industry-relevant curriculum.", type: "Certification" },
    { date: "March 2024", title: "Python Certificate", subtitle: "Guvi", description: "Completed a structured curriculum covering Python from fundamentals to advanced topics through hands-on exercises.", type: "Certification" },
    // Education
    { date: "May 2023", title: "B.E Information Technology", subtitle: "Annamalai University, Tamilnadu, India", description: "Completed Bachelor of Engineering in Information Technology, providing a strong foundation in computer science and software development principles.", type: "Education" },
];

const ICONS: { [key in CareerEvent['type']]: React.FC<{ className?: string }> } = {
  Work: BriefcaseIcon,
  Project: CodeIcon,
  Certification: CertificateIcon,
  Education: GraduationCapIcon,
};

const COLORS: { [key in CareerEvent['type']]: string } = {
  Work: "bg-sky-500",
  Project: "bg-emerald-500",
  Certification: "bg-amber-500",
  Education: "bg-rose-500",
};

// --- Sorting Logic ---
const parseDate = (dateStr: string): Date => {
    const endDateStr = dateStr.split(' - ')[1] || dateStr.split(' ')[1] + " " + dateStr.split(' ')[2] || dateStr;
    if (endDateStr === 'Present') return new Date();
    const dateToParse = dateStr.includes('-') ? dateStr.split(' - ')[0] : dateStr;
    const parsed = new Date(dateToParse);
    parsed.setDate(parsed.getDate() + 1);
    return parsed;
};

const sortedCareerData = careerData.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.000] } },
};

// --- Reusable Components for Timeline ---
const TimelineIcon: React.FC<{ item: CareerEvent }> = ({ item }) => {
    const IconComponent = ICONS[item.type];
    const iconBgColor = COLORS[item.type];
    return (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-dark-bg ${iconBgColor} dark:bg-opacity-100 bg-opacity-100 md:dark:${iconBgColor} md:bg-slate-200`}>
            <IconComponent className="w-5 h-5 text-white md:dark:text-white md:text-slate-800" />
        </div>
    );
};

const CardContent: React.FC<{ item: CareerEvent }> = ({ item }) => (
    <div className="glassmorphism rounded-xl p-4 md:p-6">
        <p className="md:hidden font-semibold text-primary mb-1">{item.date}</p>
        <h3 className="text-lg font-bold font-serif text-slate-800 dark:text-white">{item.title}</h3>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">{item.subtitle}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
    </div>
);


const CareerPage: React.FC = () => {
    return (
        <SectionWrapper animateOnLoad={true}>
            <SectionTitle subtitle="My Journey">Career Roadmap</SectionTitle>
            <div className="relative max-w-5xl mx-auto mt-12">
                {/* Vertical line for both mobile and desktop */}
                <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2"></div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {sortedCareerData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                             <motion.div key={index} variants={itemVariants} className="relative md:grid md:grid-cols-2 md:gap-x-16 mb-8">
                                {/* Mobile view: Simple column */}
                                <div className="md:hidden pl-12">
                                    <CardContent item={item} />
                                </div>

                                {/* Desktop view: Alternating grid */}
                                {isEven ? (
                                    <>
                                        <div className="hidden md:flex justify-end items-center text-right">
                                            <p className="font-semibold text-primary">{item.date}</p>
                                        </div>
                                        <div className="hidden md:block"><CardContent item={item} /></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="hidden md:block text-right"><CardContent item={item} /></div>
                                        <div className="hidden md:flex justify-start items-center">
                                            <p className="font-semibold text-primary">{item.date}</p>
                                        </div>
                                    </>
                                )}
                                
                                {/* Icon positioned absolutely on the timeline */}
                                <div className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2">
                                    <TimelineIcon item={item} />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default CareerPage;