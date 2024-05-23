"use client";

import { motion } from "framer-motion";

const posts = {
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

export default function Blogs() {
  const postsData = posts.data.publication.posts.edges;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {postsData.map((edge) => {
            const post = edge.node;
            return (
              <motion.div
                key={post.url}
                className="flex flex-col items-start justify-between"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * postsData.indexOf(edge) }}
              >
                <article
                  key={post.url}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:underline"
                      >
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.brief}
                    </p>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
