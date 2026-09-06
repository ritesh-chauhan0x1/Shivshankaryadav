"use client";

import { Footer4Col } from "@/components/ui/footer-column";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-foreground bg-background">
        <Navigation />
        <main>{children}</main>
        <Footer4Col />
      </body>
    </html>
  );
}
