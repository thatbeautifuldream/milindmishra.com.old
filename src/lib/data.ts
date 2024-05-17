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
    coverImage: "https://www.airoadmapgenerator.com/opengraph-image.png",
    url: "https://www.airoadmapgenerator.com",
    description:
      "Curate Learning Roadmaps with AI and share them with the world.",
    tags: ["Next", "Prisma", "OpenAI", "Langchain"],
  },
  {
    title: "100xdocs",
    coverImage: "https://www.100xdocs.com/ogimage.png",
    url: "https://www.100xdocs.com",
    description: "100xdocs is a documentation platform for developers.",
    tags: ["Next", "Nextra"],
  },
];
