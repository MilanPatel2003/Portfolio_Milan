import { FaGlobe, FaGithub } from "react-icons/fa";

export const experienceData = [
  {
    company: "Codefencers Pvt. Ltd.",
    title: "React developer",
    logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQGCmQexMC0IJA/company-logo_200_200/company-logo_200_200/0/1706005868462/codefencer_logo?e=1735776000&v=beta&t=o-upd0b9mYpuieN1v68PLNMgnjWIdwEs-nENM5MQCe0", // Replace with actual logo path
    href: "https://codefencers.com", // Replace with actual website
    badges: ["React", "TypeScript", "Tailwind CSS"],
    start: "June 2024",
    end: "Sept 2024",
    description: `Developed and maintained live Hotel Management Systems (HMS) and Restaurant POS Systems using React and TypeScript.
    Built reusable components and set up complex routing for role-based access and permissions.
    Created dynamic user interfaces with Tailwind CSS, implemented infinite scrolling API calling, Zustand for state management, and Axios for API calls.
    Handled authentication and token management using interceptors, and gained proficiency in debugging specific errors to enhance system reliability.
    Learned to set up Husky for automated code quality checks and gained skills in project documentation, enhancing team collaboration and project management.`
  },
  
  // Add more experiences here if needed
];

export const projectsData = [

  {
    title: "Tawkist - Real-Time Chat Application",
    href: "https://your-tawkist-link.com", // Replace with the actual link
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
    video:  "https://cdn-useast1.kapwing.com/teams/66fbc26a580eb79f946be376/jobs/66fbc278a0ba2d5d631c855c/final_66fbc26b46d1c4540cae0887_301979.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1727804347&Signature=JGZ1QmIKIEeDyg9%2BLyB6psiwyRAxE9uDN46jc3yys8sv4VFCHwOkZPCLgSar2oCiqDbKLkWBqnZbExToTfHxsXiVHAXzMBg5G0SYW7SMhQ%2B0amou6rx16mezxjlDxWGjGV5Km0p3tw9L1bB9Rltjme9mFnw1nkjN%2FMKyBAhpJdlXbd2eyIagNWaPG51zDAK9kJuxWMCaUPPVg3JLNdEOuqwnBjdv2kwX8wUSbf%2BRJvD%2BF184PfbtHt%2FQOZ5ohF8mpxYKk0%2BfGi5W6LpXErUg8eM6TpGB%2BzPNlbM8AGBw7Ngu69PfW5dAc1Kk2ps%2Bq7XDYMLLFNjmTXVADzHoIFM%2B7A%3D%3D#t=0.01", // Add a video URL if available
  },
  {
    title: "Portfolio Website",
    href: "https://milanpatel2003.github.io/My-portfolio/",
    dates: "2024", // Update with the correct date if needed
    active: true,
    description:
      "Designed and developed a personal portfolio website using vanilla HTML, CSS, and JavaScript. The site showcases my projects, skills, and experience in a clean, responsive layout. Implemented smooth scrolling, dynamic content loading, and interactive elements to enhance user experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    links: [
      {
        type: "Website",
        href: "https://milanpatel2003.github.io/My-portfolio/",
        icon: FaGlobe as React.ElementType,
      },
      {
        type: "source",
        href: "https://github.com/MilanPatel2003/My-portfolio",
        icon: FaGithub as React.ElementType,
      },
    ],
    image: "", // Add an image URL if available
    video: "https://cdn-useast1.kapwing.com/teams/66fbc26a580eb79f946be376/jobs/66fbcbc874b9f4924f5a685b/final_66fbcba1dc8801511ac6f912_306292.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1727806556&Signature=dBk%2FRUsOoHnx%2BFsfsttAiyfeZ%2F4%2FqGBt4PdT62vaUShDUW32Povcru4cpMKGVTALYBDhRfFQx%2BUUboygY%2F70NJ0yxnxtucwEN5%2BYeB0VacHetIdLL1NK4TLFCxORh3eP7TirHikc1%2FGSZsGIBJxAcbC2G5HhWTCq9I4NJloCNs2lHUYqKQrhllAieyKcLmWQW8So4%2FVKjcqPuozcG49bMRMWu17dO6tKnVgraW5ykAcNVf1VR8FozHOVNIvo3beAbXFvnTCmkiPS9reO4m6qudVXVKCiXlNcu%2FG0vP7c90lFsHWYTuuxePM%2Brj9rEOPYB9b7kSmtspdDcKpmzUe7zw%3D%3D#t=0.01", // Add a video URL if available
  },
  // Add more projects here following the same structure
];


