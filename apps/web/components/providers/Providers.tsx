"use client";
import { dark } from '@clerk/themes'
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    // dark mode
    <ClerkProvider appearance={{ layout: { logoPlacement: "inside" }, baseTheme: dark }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster position="bottom-right" />
      </ThemeProvider>
    </ClerkProvider>
  );
}
