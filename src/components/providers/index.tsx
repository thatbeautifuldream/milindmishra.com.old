import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster richColors position="top-center" />
      {children}
    </ThemeProvider>
  );
}
