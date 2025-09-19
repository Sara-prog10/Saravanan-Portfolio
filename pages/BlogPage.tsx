
import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from '../components/common';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <motion.a 
        href={post.link}
        className="block p-6 glassmorphism rounded-xl group"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{post.date}</p>
        <h3 className="text-xl font-bold font-serif text-slate-800 dark:text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{post.preview}</p>
        <span className="font-semibold text-primary group-hover:underline">Read more &rarr;</span>
    </motion.a>
);

const BlogPage: React.FC = () => {
  return (
    <SectionWrapper>
        <SectionTitle subtitle="Thoughts & Insights">My Blog</SectionTitle>
        <div className="max-w-3xl mx-auto space-y-8">
            {BLOG_POSTS.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <BlogPostCard post={post} />
                </motion.div>
            ))}
        </div>
    </SectionWrapper>
  );
};

export default BlogPage;
