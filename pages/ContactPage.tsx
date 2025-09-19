import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '../components/common';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);


const ContactForm: React.FC = () => (
  <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
      <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
      <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
      <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
    </div>
    <div>
      <motion.button
        type="submit"
        className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </div>
    <div className="text-center pt-6">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Or connect with me here:</p>
        <div className="flex justify-center items-center gap-6">
            <a href="mailto:sarvanrsd@gmail.com" className="p-2 rounded-full hover:bg-primary/20 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors"><MailIcon className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/saravananravi17" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/20 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
            <a href="https://github.com/Sara-prog10" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/20 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors"><GithubIcon className="w-6 h-6" /></a>
        </div>
    </div>
  </form>
);

const ContactPage: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionTitle subtitle="Get In Touch">Contact Me</SectionTitle>
      <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                  Have a question or want to work together? Feel free to reach out.
              </p>
          </div>
          <ContactForm />
      </div>
    </SectionWrapper>
  );
};

export default ContactPage;