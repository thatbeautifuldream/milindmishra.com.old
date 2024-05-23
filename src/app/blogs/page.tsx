"use client";

import { motion } from "framer-motion";
import { posts } from "~/lib/data";

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
