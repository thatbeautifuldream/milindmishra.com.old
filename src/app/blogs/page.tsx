import { AnimateBlur } from "~/components/animation/animate-blur";
import { posts } from "~/lib/data";

export default function Blogs() {
  const postsData = posts.data.publication.posts.edges;

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {postsData.map((edge) => {
            const post = edge.node;
            return (
              <AnimateBlur key={post.url}>
                <article
                  key={post.url}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-primary/80">
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
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-primary/80">
                      {post.brief}
                    </p>
                  </div>
                </article>
              </AnimateBlur>
            );
          })}
        </div>
      </div>
    </div>
  );
}
