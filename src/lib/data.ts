export type Project = {
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  link: string;
  color: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "AI Roadmap Generator",
    subtitle: "Curate Learning Roadmaps with AI",
    description:
      "Curate Learning Roadmaps with AI and share them with the world.",
    coverImage: "/assets/project_banners/airoadmapgenerator.png",
    link: "https://www.airoadmapgenerator.com",
    color: "bg-orange-500",
    tags: ["Next", "Prisma", "OpenAI", "Langchain"],
  },
  {
    title: "100xdocs",
    subtitle: "Documentation Platform for Developers",
    description: "100xdocs is a documentation platform for developers.",
    coverImage: "/assets/project_banners/100xdocs.png",
    link: "https://www.100xdocs.com",
    color: "bg-blue-500",
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

export const posts = {
  data: {
    publication: {
      isTeam: false,
      title: "Milind's Blog",
      posts: {
        edges: [
          {
            node: {
              title: "Types of Software Engineers",
              brief:
                "In today's fast-paced technological world, software engineering has become a critical part of nearly every industry. Software engineers are responsible for designing, developing, and maintaining software programs and applications that help businesses...",
              url: "https://milind.hashnode.dev/types-of-software-engineers",
            },
          },
          {
            node: {
              title:
                "Enhance Your Production Workflow with PM2 Process Manager Automation",
              brief:
                "As web developers, we often find ourselves dealing with complex web applications that require continuous monitoring and management of server processes. One such popular process manager in the Node.js ecosystem is pm2. In this article, we will explore...",
              url: "https://milind.hashnode.dev/enhance-your-production-workflow-with-pm2-process-manager-automation",
            },
          },
          {
            node: {
              title: "Abstract Equality and Special Types!",
              brief:
                "To better understand equality and its use cases let's see the available types in Javascript. JavaScript has several special types that are used to represent specific types of data.\nVarious Types available in JavaScript\n\nUndefined: A variable that has...",
              url: "https://milind.hashnode.dev/abstract-equality-and-special-types",
            },
          },
          {
            node: {
              title: "[object Object]",
              brief:
                "To handle this kind of error let's step back and understand the ToPrimitive Abstract Operation. The ToPrimitive abstract operation is a fundamental concept in the ECMAScript language specification, which is the standard for modern JavaScript. It is u...",
              url: "https://milind.hashnode.dev/object-object",
            },
          },
          {
            node: {
              title: "Wait, so you're saying JavaScript isn't weird!",
              brief:
                "Type coercion is the process of converting one data type to another. In JavaScript, type coercion is a common feature that allows the interpreter to implicitly convert values from one type to another when necessary. This can sometimes lead to unexpec...",
              url: "https://milind.hashnode.dev/wait-so-youre-saying-javascript-isnt-weird",
            },
          },
          {
            node: {
              title: "React Router v6 Basics & Migration guide from v5",
              brief:
                "React Router is a popular library for handling routing in React applications. It allows you to easily specify the relationship between different parts of your application and provides a way for users to navigate between them.\nIf you are using an olde...",
              url: "https://milind.hashnode.dev/react-router-v6-basics-migration-guide-from-v5",
            },
          },
          {
            node: {
              title:
                "useContext & useReducer 🪝from component level state to global state!",
              brief:
                "The useContext hook is a way for a React component to access the context, or shared state, of a parent component. It is a convenient way to pass data down the component tree without having to use props at every level.\nHere's an example of how to use ...",
              url: "https://milind.hashnode.dev/usecontext-usereducer-from-component-level-state-to-global-state",
            },
          },
          {
            node: {
              title: "useState & useEffect 🪝 from counter to data fetching!",
              brief:
                "Introduction to useState and useEffect in React\nuseState and useEffect are two of the most commonly used Hooks in React. They allow you to add state and side effects to functional components, which were previously only possible with class-based compo...",
              url: "https://milind.hashnode.dev/usestate-useeffect-from-counter-to-data-fetching",
            },
          },
          {
            node: {
              title: "🛍 (Amazon.in) Price Tracker using Puppeteer",
              brief:
                "JavaScript quick-start project for amazon.in price tracking.\n🛠 Tools required to develop the price-tracker\n\nNodeJs\nPuppeteer\nSendGrid/Mail\nCronJob\n\n🤝 Requirements\nIn order to utilise this project you need to have the following installed locally:\n\nn...",
              url: "https://milind.hashnode.dev/price-tracker",
            },
          },
          {
            node: {
              title: "Higher Order Functions - (II) & Beyond ⚡️",
              brief:
                "Lets start with a quick revision of map() and filter() and some exercises 🔥\n\nmap() iterates over each element of the array and returns a new array with the results of the callback function\nfilter() returns true false for each element of the array an...",
              url: "https://milind.hashnode.dev/higher-order-functions-ii-and-beyond",
            },
          },
        ],
      },
    },
  },
};
