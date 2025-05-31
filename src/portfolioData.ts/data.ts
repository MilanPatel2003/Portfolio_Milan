import { FaGlobe, FaGithub } from "react-icons/fa";

import tatacyber from  "../assets/img/certificates/tatacyber.png"
import cisco from  "../assets/img/certificates/cisco.png"

export interface Project {
  title: string;
  url: string;
  description: string;
  technologies: string[];
  features: string[];
}



export const experienceData = [
  {
    company: "Webcreta Technologies",
    title: "Full-stack developer Intern",
    logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQEZveUmhVzdOA/company-logo_200_200/company-logo_200_200/0/1689250217110/webcreta_technologies_logo?e=1753920000&v=beta&t=FCDLYAkREXOUCXUgBVMXoP44qr75B66wDTVBpSoUnsY", // Replace with actual logo URL
    href: "https://webcreta.com", // Replace with actual website
    badges: ["React", "TypeScript", "Redux Toolkit", "NestJS", "Node.js", "Redis", "JWT"],
    start: "April 2025",
    end: "Present",
    description: `Developing React/TypeScript interfaces with Redux Toolkit for state management.
    Building NestJS/Node.js APIs with JWT authentication (learning backend architecture).
    Learning performance optimization through Redis caching and advanced database queries.
    Collaborating in Agile teams to deploy production-ready features.
    Debugging full-stack issues to improve system reliability.
    Contributing to scalable design decisions (learning best practices).`
  },
  {
    company: "Codefencers Pvt. Ltd.",
    title: "ReactJS developer",
    logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFxipfNAr19GQ/company-logo_200_200/company-logo_200_200/0/1732108173631/codefencer_logo?e=1753920000&v=beta&t=NB6bLx4vOxkCLNdAUh-OzajKUELR5gecXWRCm6HVqro",
    href: "https://codefencers.com",
    badges: ["React", "TypeScript", "Tailwind CSS", "Axios"],
    start: "June 2024",
    end: "Sept 2024",
    description: `Developed reusable React components to improve code efficiency.
    Built frontend for a Restaurant POS system using Tailwind CSS for responsive interfaces.
    Implemented infinite scrolling and optimized API calls with Axios.
    Debugged and resolved frontend issues to enhance system reliability.`
  }
];

export const projectsData = [
  {
    title: "PrepOnyx AI powered SaaS platform",
    href: "https://preponyx.web.app/",
    dates: "2025",
    active: true,
    description: "Built an AI-driven SaaS platform with Firebase, React, and generative AI models (Google AI, OpenAI, LLaMA 3.0). Features include AI-powered mock interviews, a scribble-to-AI converter, personalized course creation, and a PDF summarizer. Integrated a free credit system with Stripe/Razorpay for seamless payments. Optimized frontend with Tailwind CSS and backend using Firestore and Cloud Functions for AI processing.",
    technologies: [
      "React",
      "Node",
      "Firebase",
      "Langchain",
      "LLM models",
      "Tailwind CSS",
      "Stripe/Razorpay"
    ],
    links: [
      {
        type: "Website",
        href: "https://preponyx.web.app/",
        icon: FaGlobe as React.ElementType,
      },
      {
        type: "source",
        href: "https://github.com/MilanPatel2003/preponyx",
        icon: FaGithub as React.ElementType,
      },
    ],
    image: "",
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106878/prepOnyx-phase1-demo1-latest2_-_Made_with_Clipchamp_1_1_ysmkbl.mp4",
  },
  {
    title: "Mini Ecom - Modern E-commerce Platform",
    href: "https://github.com/yourusername/MINI-ECOM-REDUX-LEARN",
    dates: "2024",
    active: true,
    description: "Developed a modern e-commerce platform using React, Redux Toolkit, and TypeScript. Features include a responsive product catalog with category filtering, real-time cart management, secure checkout process, and user authentication. Implemented a clean and intuitive UI using Shadcn UI components and Tailwind CSS. Integrated with a RESTful API for product data and implemented state management using Redux Toolkit for efficient data flow. Added features like product search, pagination, and a cart modal for enhanced user experience.",
    technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "Shadcn UI",
        "React Router",
        "Axios"
    ],
    links: [
        {
            type: "Website",
            href: "https://mini-ecom-redux-learn.vercel.app/",
            icon: FaGlobe as React.ElementType,
        },
        {
            type: "source",
            href: "https://github.com/MilanPatel2003/MINI-ECOM-REDUX-LEARN",
            icon: FaGithub as React.ElementType,
        }
    ],
    image: "",
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748115794/mini-ecom-demo-1748115548798_1_gxkpkt.mp4"
},

  {
    title: "Logic Ledger AI MATHNOTES",
    href: "https://logic-ledger.vercel.app/",
    dates: "2024", // Update with the correct date if needed
    active: true,
    description:
      "Created an AI-powered web app for solving mathematical equations, graphs, and geometric shapes through a digital drawing interface. Built with React, TypeScript, Node.js, and Gemini API(flash-1.5 model), LogicLedger features an interactive canvas, real-time problem analysis, and responsive design. Currently refining AI prompts to enhance accuracy for complex problems.",
    technologies: [
      "React",
      "shadCN",
      "Typescript",
      "Tailwind",
      "Node",
      "Gemini-flash-1.5"
    ],
    links: [
      {
        type: "Website",
        href: "https://logic-ledger.vercel.app/",
        icon: FaGlobe as React.ElementType,
      },
      {
        type: "source",
        href: "https://github.com/MilanPatel2003/ai-calculator",
        icon: FaGithub as React.ElementType,
      },
    ],
    image: "", // Add an image URL if available
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106713/logic_ledger_final_kaan2q.mp4", // Add a video URL if available
  },

  {
    title: "Tawkist - Real-Time Chat Application",
    href: "https://tawkist-chat-application.onrender.com", // Replace with the actual link
    dates: "2024", // Update with the correct date range
    active: true,
    description:
      "Developed Tawkist, a real-time messaging platform hosted on Render. Implemented secure user authentication with JSON Web Tokens and Zod validation, and used WebSockets for instant messaging. Utilised Zustand for state management and Context API for protected routing. Features include real-time online status and optimization for larger screens, with plans for full responsiveness.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "WebSockets",
      "Zustand",
      "Context API",
      "JWT",
      "Zod",
    ],
    links: [
      {
        type: "Website",
        href: "https://tawkist-chat-application.onrender.com", // Replace with the actual link
        icon: FaGlobe as React.ElementType,
      },
      {
        type: "source",
        href: "https://github.com/MilanPatel2003/Tawkist-Chat-App-MERN-",
        icon: FaGithub as React.ElementType,
      },
    ],
    image: "", // Add an image URL if available
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106713/TawkistVideo_exsq6b.mp4" , // Add a video URL if available
  },
  {
    title: "Sci-Fi 3D Avatar Customization",
    href: "https://milanpatel2003.github.io/ThreeJS/",
    dates: "2024", // Update with the correct date if needed
    active: true,
    description:
      "Developed an interactive 3D avatar customization tool using Three.js. Users can personalize a sci-fi character model with various options for hair, clothing, and accessories. Implemented a user-friendly interface with lil-gui for easy customization controls.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js",
      "lil-gui",
    ],
    links: [
      {
        type: "Website",
        href: "https://milanpatel2003.github.io/ThreeJS/",
        icon: FaGlobe as React.ElementType,
      },
      {
        type: "source",
        href: "https://github.com/MilanPatel2003/ThreeJS",
        icon: FaGithub as React.ElementType,
      },
    ],
    image: "", // Add an image URL if available
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106710/3davatar_kuh0cd.mp4", // Add a video URL if available
  },


  {
    title: "Tin Dog - Bootstrap Practice Website",
    href: "https://milanpatel2003.github.io/bootstrap-practice-website/",
    dates: "2023",
    active: true,
    description:
      "Developed 'Tin Dog,' a single-page website using Bootstrap for practice purposes. The site features a responsive design, showcasing essential information about a fictional dog dating app in a clean and organized manner. This project demonstrates proficiency in using Bootstrap for creating modern, mobile-friendly web layouts.",
    technologies: [
      "HTML",
      "Bootstrap",
    ],
    links: [
      {
        type: "Website",
        href: "https://milanpatel2003.github.io/bootstrap-practice-website/",
        icon: FaGlobe as React.ElementType,
      },
      {
        type: "source",
        href: "https://github.com/MilanPatel2003/bootstrap-practice-website",
        icon: FaGithub as React.ElementType,
      },
    ],
    image: "", // Add an image URL if available
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106713/tindog_demo_mr6cpq.mp4", // Add a video URL if available
      },

  {
    title: "Akash Travel",
    href: "", // Add the project URL if available
    dates: "2024", // Update with the correct date if needed
    active: true,
    description:
      "A full-stack web application for travel bookings. Features include user management, package customization, and integrated Razorpay payments. The project demonstrates proficiency in building secure, feature-rich applications with modern web technologies.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "Razorpay",
    ],
    links: [
      {
        type: "source",
        href: "https://github.com/MilanPatel2003/MERN-TRAVEL", // Add the GitHub repository URL if available
        icon: FaGithub as React.ElementType,
      },
    ],
    image: "", // Add an image URL if available
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106713/akashTravel_ldgbgy.mp4", // Add a video URL if available
  },
  
  // Add more projects here following the same structure


  // ... other projects ...
];

export const certificateData = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and more.",
    imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-26baac76-9708-432b-9fea-2c0f5741721e.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-26baac76-9708-432b-9fea-2c0f5741721e.jpg"
  },
  

  {
    title: "Cisco Intro to Software Engineering Virtual Experience Program on Forage - October 2024",
    description: `Set up a React application and stitch together a series of reusable React components to create a dashboard frontend.
    Used WebSocket to connect to an external service and display packet latency.
    Recorded a sprint review video showcasing the frontend features I've developed in React.`,
    imageUrl: cisco,
    link: cisco
  },
  {
    title: "Tata Group Cybersecurity Analyst",
    description: `The "Tata Cybersecurity Analyst" job simulation involved completing a project focused on identity and access management (IAM) for Tata Consultancy Services. It included collaboration with a cybersecurity team, gaining expertise in IAM principles and best practices, and delivering documentation and presentations to effectively communicate technical concepts.`,
    imageUrl: tatacyber,
    link: tatacyber
  }

  // Add more certificates as needed
];






