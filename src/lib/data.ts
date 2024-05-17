type Project = {
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

type Skill = {
  src: string;
  alt: string;
  label: string;
};

export const skills: Skill[] = [
  {
    src: "/assets/tool_icons/javascript.svg",
    alt: "JavaScript icon",
    label: "JavaScript",
  },
  {
    src: "/assets/tool_icons/typescript.svg",
    alt: "TypeScript icon",
    label: "TypeScript",
  },
  {
    src: "/assets/tool_icons/reactjs.svg",
    alt: "ReactJS icon",
    label: "ReactJS",
  },
  {
    src: "/assets/tool_icons/nextjs.svg",
    alt: "NextJS icon",
    label: "NextJS",
  },
  {
    src: "/assets/tool_icons/postgresql.svg",
    alt: "PostgreSQL icon",
    label: "PostgreSQL",
  },
  {
    src: "/assets/tool_icons/tailwindcss.svg",
    alt: "TailwindCSS icon",
    label: "TailwindCSS",
  },
  {
    src: "/assets/tool_icons/figma.svg",
    alt: "Figma icon",
    label: "Figma",
  },
];
