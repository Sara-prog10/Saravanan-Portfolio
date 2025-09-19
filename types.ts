
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: ('AI' | 'Data' | 'IoT')[];
  caseStudy: {
    problem: string;
    role: string;
    solution: string;
    techStack: string[];
    githubUrl?: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  preview: string;
  link: string;
}
