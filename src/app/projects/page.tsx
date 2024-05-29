import { projects } from "~/lib/data";
import ProjectCard from "./_components/project-card";
import { AnimateBlur } from "~/components/animation/animate-blur";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {projects.map((project, index) => (
        <AnimateBlur key={index}>
          <ProjectCard key={index} project={project} />
        </AnimateBlur>
      ))}
    </div>
  );
}
