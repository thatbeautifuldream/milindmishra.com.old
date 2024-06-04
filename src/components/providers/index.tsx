import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster richColors position="top-center" />
      {children}
    </>
  );
}
