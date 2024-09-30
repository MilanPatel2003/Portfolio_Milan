// Define types for our data structures
type Education = {
  degree: string;
  institution: string;
  year: string;
  description?: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
};

// Define the structure of our portfolio data
interface PortfolioData {
  aboutMe: {
    name: string;
    title: string;
    description: string;
    skills: string[];
  };
  education: Education[];
  projects: Project[];
}

// Export the data
export const portfolioData: PortfolioData = {
  aboutMe: {
    name: "Milan Patel",
    title: "Full Stack Developer",
    description: "I'm a passionate developer with a keen interest in creating innovative web solutions. With a strong foundation in both front-end and back-end technologies, I strive to build efficient, scalable, and user-friendly applications.",
    skills: ["React", "Node.js", "TypeScript", "Python", "Docker", "AWS"],
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Example",
      year: "2019 - 2023",
      description: "Focused on software engineering, data structures, and algorithms. Participated in various hackathons and coding competitions.",
    },
    // Add more education entries as needed
  ],
  projects: [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Three.js, showcasing my projects and skills.",
      technologies: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://your-portfolio-url.com",
      image: "/images/portfolio-preview.jpg",
    },
    // Add more project entries as needed
  ],
};
