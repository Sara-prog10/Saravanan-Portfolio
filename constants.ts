
import type { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "RAG Agent — Fault Reporting & Knowledge Assistant",
    description: "An intelligent assistant for diagnosing and resolving equipment faults using a vast knowledge base.",
    longDescription: "This Retrieval-Augmented Generation (RAG) agent streamlines fault reporting and provides instant knowledge support. It ingests technical manuals and historical data to offer precise solutions, reducing downtime and improving technician efficiency.",
    imageUrl: "https://picsum.photos/seed/rag/600/400",
    tags: ['AI', 'Data'],
    caseStudy: {
      problem: "Technicians spent excessive time searching through manuals and past reports to diagnose equipment failures, leading to prolonged downtime.",
      role: "Lead AI Engineer",
      solution: "Developed a RAG-based chatbot using FastAPI and OpenAI's API. The system indexes technical documents into a vector database, allowing technicians to ask natural language questions and receive accurate, context-aware answers with source references.",
      techStack: ['Python', 'FastAPI', 'OpenAI API', 'Vector DB', 'React'],
      githubUrl: "https://github.com/yourgithub/rag-agent",
    },
  },
  {
    id: 2,
    title: "AI Virtual Assistant — Voice & Image Recognition",
    description: "A multi-modal AI assistant for hands-free service scheduling and parts identification.",
    longDescription: "This virtual assistant understands voice commands and can recognize equipment parts from images, enabling field service engineers to schedule jobs and order parts without manual data entry. It integrates with existing CRM and inventory systems.",
    imageUrl: "https://picsum.photos/seed/ai-assistant/600/400",
    tags: ['AI', 'IoT'],
    caseStudy: {
      problem: "Field engineers required a faster, hands-free method for logging job details, identifying parts, and scheduling follow-up appointments.",
      role: "AI Developer",
      solution: "Built a virtual assistant with voice recognition (via Whisper API) and image recognition (via a custom-trained OpenCV model). The assistant processes inputs, extracts intent, and interacts with backend APIs to manage schedules and inventory.",
      techStack: ['Python', 'OpenCV', 'Whisper API', 'Flask', 'SQL'],
      githubUrl: "https://github.com/yourgithub/virtual-assistant",
    },
  },
  {
    id: 3,
    title: "Power BI Dashboard — Construction & Maintenance",
    description: "An interactive dashboard for tracking project progress, resource allocation, and maintenance schedules.",
    longDescription: "This Power BI dashboard consolidates data from multiple sources (Excel, SQL databases, IoT sensors) to provide a real-time, 360-degree view of construction project operations. It helps stakeholders make informed decisions by visualizing key performance indicators.",
    imageUrl: "https://picsum.photos/seed/powerbi/600/400",
    tags: ['Data'],
    caseStudy: {
      problem: "Project managers lacked a centralized view of project metrics, leading to inefficient resource allocation and delayed responses to issues.",
      role: "Data Analyst",
      solution: "Designed and developed a comprehensive Power BI dashboard. This involved creating a data model, writing DAX queries for complex calculations, and designing intuitive visualizations for tracking budget, schedule adherence, and equipment status.",
      techStack: ['Power BI', 'SQL', 'DAX', 'Power Query', 'Azure Data Factory'],
    },
  },
  {
    id: 4,
    title: "IoT Predictive Maintenance System",
    description: "A system that uses sensor data to predict equipment failure before it occurs.",
    longDescription: "This IoT solution leverages real-time sensor data from machinery to predict potential failures using machine learning models. It alerts maintenance teams proactively, reducing unplanned downtime and maintenance costs.",
    imageUrl: "https://picsum.photos/seed/iot/600/400",
    tags: ['IoT', 'Data', 'AI'],
    caseStudy: {
        problem: "Reactive maintenance led to unexpected equipment failures, causing significant operational disruptions and high repair costs.",
        role: "Data Scientist / IoT Specialist",
        solution: "Implemented an end-to-end predictive maintenance pipeline. Collected sensor data (vibration, temperature) using IoT devices, streamed it to the cloud, and trained a time-series forecasting model to predict failures. Built a dashboard to display machine health scores.",
        techStack: ['Python', 'TensorFlow', 'MQTT', 'Firebase', 'Grafana'],
        githubUrl: "https://github.com/yourgithub/predictive-maintenance",
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Building a RAG System from Scratch",
    date: "August 15, 2024",
    preview: "A deep dive into the architecture and components of a Retrieval-Augmented Generation system, from data ingestion to response generation...",
    link: "#",
  },
  {
    id: 2,
    title: "The Art of Data Storytelling with Power BI",
    date: "July 22, 2024",
    preview: "Learn how to turn raw data into compelling narratives and actionable insights using advanced features in Power BI...",
    link: "#",
  },
  {
    id: 3,
    title: "Real-time Anomaly Detection with IoT and Python",
    date: "June 05, 2024",
    preview: "A practical guide to building an anomaly detection system for IoT sensor data using Python and machine learning techniques...",
    link: "#",
  },
];

export const TECH_STACK = ['Python', 'SQL', 'Power BI', 'OpenAI', 'FastAPI', 'React', 'OpenCV', 'Azure', 'TensorFlow'];
