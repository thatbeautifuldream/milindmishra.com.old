export type Project = {
  title: string;
  coverImage: string;
  url: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "AI Roadmap Generator",
    coverImage: "/assets/project_banners/airoadmapgenerator.png",
    url: "https://www.airoadmapgenerator.com",
    description:
      "Curate Learning Roadmaps with AI and share them with the world.",
    tags: ["Next", "Prisma", "OpenAI", "Langchain"],
  },
  {
    title: "100xdocs",
    coverImage: "/assets/project_banners/100xdocs.png",
    url: "https://www.100xdocs.com",
    description: "100xdocs is a documentation platform for developers.",
    tags: ["Next", "Nextra"],
  },
];

export type Skill = {
  src: string;
  alt: string;
  label: string;
  description: string;
};

export const skills: Skill[] = [
  {
    src: "/assets/tool_icons/javascript.svg",
    alt: "JavaScript icon",
    label: "JavaScript",
    description:
      "JavaScript is a programming language that adds interactivity to your website.",
  },
  {
    src: "/assets/tool_icons/typescript.svg",
    alt: "TypeScript icon",
    label: "TypeScript",
    description:
      "TypeScript is a superset of JavaScript that adds static types to your code.",
  },
  {
    src: "/assets/tool_icons/reactjs.svg",
    alt: "ReactJS icon",
    label: "ReactJS",
    description:
      "ReactJS is a JavaScript library for building user interfaces.",
  },
  {
    src: "/assets/tool_icons/nextjs.svg",
    alt: "NextJS icon",
    label: "NextJS",
    description:
      "NextJS is a React framework for building server-side rendered applications.",
  },
  {
    src: "/assets/tool_icons/postgresql.svg",
    alt: "PostgreSQL icon",
    label: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open-source object-relational database system.",
  },
  {
    src: "/assets/tool_icons/tailwindcss.svg",
    alt: "TailwindCSS icon",
    label: "TailwindCSS",
    description:
      "TailwindCSS is a utility-first CSS framework for building custom designs.",
  },
  {
    src: "/assets/tool_icons/figma.svg",
    alt: "Figma icon",
    label: "Figma",
    description:
      "Figma is a web-based design tool that allows for real-time collaboration.",
  },
];
