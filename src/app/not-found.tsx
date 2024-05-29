import AnimateChildren from "~/components/ui/animate-children";

export default function NotFound() {
  return (
    <AnimateChildren>
      <div className="flex flex-col items-center justify-center space-y-4">
        OOPS! 404 - Page Not Found
      </div>
    </AnimateChildren>
  );
}
