import "./globals.css";
import type { Metadata } from "next";
import NavbarWrapper from "../components/ui/NavbarWrapper";
import Footer from "../components/ui/Footer";

export const metadata: Metadata = {
  title: "Kenny Soon | Lead Software Architect & Open-Source Builder",
  description:
    "Personal portfolio of Kenny Soon — Lead Software Architect specializing in high-concurrency microservices, cloud systems, and open-source software engineering.",
  keywords: [
    "Kenny Soon",
    "Software Architect",
    "Full Stack Engineer",
    "Open Source",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Malaysia",
  ],
  authors: [{ name: "Kenny Soon" }],
  openGraph: {
    title: "Kenny Soon | Lead Software Architect & Open-Source Builder",
    description:
      "Personal portfolio of Kenny Soon — Lead Software Architect specializing in high-concurrency microservices, cloud systems, and open-source software engineering.",
    url: "https://kennysoonjianxin.com",
    siteName: "Kenny Soon Portfolio",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground font-sans antialiased min-h-screen flex flex-col selection:bg-indigo-500/20">
        <NavbarWrapper />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
