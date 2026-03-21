import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Sthitpragya - Stable in Wisdom. Unstoppable in Life.",
  description: "Sthitpragya - Transform your students emotionally, physically, and mentally with our research-based platform and in-school programs.",
  keywords: "school programs, student wellness, emotional growth, mental health, physical fitness, digital platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#03030A" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
