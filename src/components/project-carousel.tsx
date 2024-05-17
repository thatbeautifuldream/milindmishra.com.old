import * as React from "react";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { projects } from "~/lib/data";
import ImageFade from "./image-fade";

export function ProjectCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <ImageFade src={project.coverImage} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
