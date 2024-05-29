import { AnimateBlur } from "~/components/animation/animate-blur";

export default function NotFound() {
  return (
    <AnimateBlur>
      <div className="flex flex-col items-center justify-center space-y-4">
        OOPS! 404 - Page Not Found
      </div>
    </AnimateBlur>
  );
}
