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
    description: "AI-powered SaaS platform for mock interviews, course creation, and PDF summarization. Built with React, Firebase, and generative AI.",
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
    image: "https://res.cloudinary.com/ddjqhdvrk/image/upload/v1748714520/Screenshot_2025-05-31_231747_q1jk5s.png",
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106878/prepOnyx-phase1-demo1-latest2_-_Made_with_Clipchamp_1_1_ysmkbl.mp4",
  },
  {
    title: "React ScreenFlow (NPM PACKAGE)",
    href: "https://www.npmjs.com/package/react-screenflow",
    dates: "2024",
    active: true,
    description: "Developed a performant React animation library using TypeScript and Framer Motion. Features smooth transitions, spring physics, and 3D transforms. Published as an npm package with ESM/CommonJS support.",
    technologies: [
      "React",
      "TypeScript",
      "Framer Motion"
    ],
    links: [
      {
        type: "Website",
        href: "https://www.npmjs.com/package/react-screenflow",
        icon: FaGlobe as React.ElementType,
      }
    ],
    image: "https://res.cloudinary.com/ddjqhdvrk/image/upload/v1748714521/Screenshot_2025-05-31_232502_svath0.png",
    video: "",
  },
  {
    title: "Mini Ecom - Modern E-commerce Platform",
    href: "https://github.com/yourusername/MINI-ECOM-REDUX-LEARN",
    dates: "2024",
    active: true,
    description: "Modern e-commerce platform with product catalog, cart, and secure checkout. Built using React, Redux Toolkit, and TypeScript.",
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
    image: "https://res.cloudinary.com/ddjqhdvrk/image/upload/v1748714520/Screenshot_2025-05-31_232051_oq5wq9.png",
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748115794/mini-ecom-demo-1748115548798_1_gxkpkt.mp4"
},

  {
    title: "Logic Ledger AI MATHNOTES",
    href: "https://logic-ledger.vercel.app/",
    dates: "2024",
    active: true,
    description: "AI-powered web app for solving math problems from digital drawings. Built with React, Node.js, and Gemini API.",
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
    image: "https://res.cloudinary.com/ddjqhdvrk/image/upload/v1748714520/Screenshot_2025-05-31_232120_aepq9b.png",
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106713/logic_ledger_final_kaan2q.mp4",
  },

  {
    title: "Tawkist - Real-Time Chat Application",
    href: "https://tawkist-chat-application.onrender.com",
    dates: "2024",
    active: true,
    description: "Real-time messaging platform with JWT auth, WebSockets, and online status. Built using React, Node.js, and Zustand.",
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
        href: "https://tawkist-chat-application.onrender.com",
        icon: FaGlobe as React.ElementType,
      },
      {
        type: "source",
        href: "https://github.com/MilanPatel2003/Tawkist-Chat-App-MERN-",
        icon: FaGithub as React.ElementType,
      },
    ],
    image: "https://res.cloudinary.com/ddjqhdvrk/image/upload/v1748714521/Screenshot_2025-05-31_232236_mv12as.png",
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106713/TawkistVideo_exsq6b.mp4" ,
  },
  {
    title: "Sci-Fi 3D Avatar Customization",
    href: "https://milanpatel2003.github.io/ThreeJS/",
    dates: "2024",
    active: true,
    description: "3D avatar customization tool with real-time controls. Built using Three.js and JavaScript.",
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
    image: "https://res.cloudinary.com/ddjqhdvrk/image/upload/v1748714520/Screenshot_2025-05-31_232304_okk4s3.png",
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106710/3davatar_kuh0cd.mp4",
  },


  {
    title: "Tin Dog - Bootstrap Practice Website",
    href: "https://milanpatel2003.github.io/bootstrap-practice-website/",
    dates: "2023",
    active: true,
    description: "Single-page website for a fictional dog dating app. Built with Bootstrap for responsive design.",
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
    image: "https://res.cloudinary.com/ddjqhdvrk/image/upload/v1748714521/Screenshot_2025-05-31_232313_dmxf5k.png",
    video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106713/tindog_demo_mr6cpq.mp4",
      },

  // {
  //   title: "Akash Travel",
  //   href: "",
  //   dates: "2024",
  //   active: true,
  //   description: "Full-stack travel booking app with user management and Razorpay payments. Built using React, Node.js, and MongoDB.",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "MongoDB",
  //     "Bootstrap",
  //     "Razorpay",
  //   ],
  //   links: [
  //     {
  //       type: "source",
  //       href: "https://github.com/MilanPatel2003/MERN-TRAVEL",
  //       icon: FaGithub as React.ElementType,
  //     },
  //   ],
  //   image: "https://res.cloudinary.com/ddjqhdvrk/image/upload/v1748714523/Screenshot_2025-05-31_232344_hhxpjl.png",
  //   video: "https://res.cloudinary.com/ddjqhdvrk/video/upload/v1748106713/akashTravel_ldgbgy.mp4",
  // },
  



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






