import Hero from "~/components/hero";
import LineTabs from "~/components/linetabs";
import { ProjectCarousel } from "~/components/project-carousel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LineTabs />
      <ProjectCarousel />
    </>
  );
}
