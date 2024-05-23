import Image from "next/image";
import { type Project } from "~/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-2 py-4 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-indigo-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">
                  {project.title}
                  <span className="text-indigo-200">.</span>
                </span>
              </h2>
              <span className="mt-4 text-lg font-semibold tracking-tight text-indigo-200">
                {project.subtitle}
              </span>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
              >
                Visit Website
              </a>
            </div>
          </div>
          <div className="aspect-h-3 aspect-w-5 md:aspect-h-1 md:aspect-w-2 -mt-6">
            <Image
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={project.coverImage}
              alt={project.title}
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
