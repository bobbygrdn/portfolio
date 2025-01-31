import React, { useEffect, useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Code2,
  Boxes,
  Contact,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingCTA } from "./components/FloatingCTA";
import { ContactForm } from "./components/ContactForm";
import { SocialLink } from "./components/SocialLink";
const projects = [
  {
    id: 1,
    title: "Menu Scheduler",
    category: "Full Stack Application",
    featured: true,
    description:
      "This project aims to develop a comprehensive menu scheduling application that enables managers to create and share weekly menus with their staff. The application ensures that employees have clear visibility of the planned meals while accommodating specific dietary restrictions and allergies.",
    image:
      "https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "In Development",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    link: "https://github.com/chingu-voyages/V53-tier3-team-38",
  },
  {
    id: 2,
    title: "Intracom Communication Platform",
    category: "Full Stack Application",
    featured: true,
    description:
      "Intracom is an open-source communication tool developed by engineers, for engineers. Collaborate on real-world projects, showcase your contributions, and get noticed by recruitersy a global community of engineers.",
    image:
      "https://intracom.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintracom-reaction.d9cd3d6d.png&w=1920&q=75",
    status: "In Development",
    tech: ["React", "TypeScript", "TailwindCSS", "Electron.js", "Socket.io", "Express.js", "MongoDB"],
    link: "https://intracom.app/",
  },
  {
    id: 3,
    title: "Coding Learning Platform",
    category: "Full Stack Application",
    featured: true,
    description:
      "My goal was to create a comprehensive, user-friendly learning platform that empowers users to master web development skills through interactive lessons, quizzes, and hands-on projects. The platform features robust content management, progress tracking, and assessment tools, along with secure user authentication and authorization to ensure safe access.",
    image:
      "https://private-user-images.githubusercontent.com/96712943/254004702-d2e18893-8fe5-4bc5-a697-9a0c4249af65.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzMDU5ODQsIm5iZiI6MTczODMwNTY4NCwicGF0aCI6Ii85NjcxMjk0My8yNTQwMDQ3MDItZDJlMTg4OTMtOGZlNS00YmM1LWE2OTctOWEwYzQyNDlhZjY1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTMxVDA2NDEyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc4NTc0YzU5Y2IwZGMxZDdhNzA2ZmYwYjYwOTJiZWQ1YWRlZTZiYWQzMjA1NTcyNTUwMjkzZmFkOTVmNmMzNTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.y1vICEB76rZYHiiGJ3dmMsaS9c9IB0qm4eAUnhmp20M",
    status: "Completed",
    tech: ["React", "Java", "Spring Boot", "MySQL"],
    link: "https://github.com/bobbygrdn/learning_platform",
  },
  {
    id: 4,
    title: "University Ticket Management System",
    category: "Full Stack Application",
    featured: true,
    description:
      "A Ticket Management System designed to efficiently track and manage maintenance requests across company buildings. Built with React, Node.js, and PostgreSQL for a robust and scalable solution.",
    image:
      "https://camo.githubusercontent.com/fab4c6220d9f638d7f364a6618aa2ab9b38012fdcb1205b55c6461a686f24f70/68747470733a2f2f64377674653276396c346471642e636c6f756466726f6e742e6e65742f74656368706f72745f6c6f67696e706167652e6a7067",
    status: "Complete",
    tech: ["React", "Node.js", "express.js", "PostgreSQL"],
    link: "https://github.com/Team-Cache-Out/tech-port",
  },
];
export function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState<{
    [key: number]: boolean;
  }>({});
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "skills", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowFloatingCTA(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    {
      href: "#projects",
      label: "Projects",
      icon: <Code2 className="h-4 w-4" />,
    },
    {
      href: "#skills",
      label: "Skills",
      icon: <Boxes className="h-4 w-4" />,
    },
    {
      href: "#contact",
      label: "Contact",
      icon: <Contact className="h-4 w-4" />,
    },
  ];
  const getCurrentYear = () => new Date().getFullYear();
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };
  const socialLinks = [
    {
      href: "https://github.com/bobbygrdn",
      label: "GitHub",
      icon: <Github className="h-5 w-5" />,
      username: "@bobbygrdn",
    },
    {
      href: "https://linkedin.com/in/bobbygrdn",
      label: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      username: "Full Stack Engineer",
    },
  ];
  const categories = {
    Frontend: ["React", "Electron.js", "TailwindCSS", "TypeScript"],
    Backend: ["Express.js", "Spring Boot", "Node.js", "Java"],
    Database: ["PostgreSQL", "MySQL", "MongoDB"],
    DevOps: ["Husky", "Git", "Docker", "GitHub Actions"],
  };
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-100">
      <header className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="font-mono text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            RG
          </span>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className={`group flex items-center space-x-2 text-sm lg:text-base transition-colors relative ${activeSection === href.slice(1) ? "text-blue-400" : "text-zinc-400 hover:text-zinc-100"}`}
              >
                {icon}
                <span>{label}</span>
                {activeSection === href.slice(1) && (
                  <span className="absolute -bottom-[1.6rem] left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400" />
                )}
                <span className="absolute -bottom-[1.6rem] left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 animate-in slide-in-from-top-2">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeSection === href.slice(1) ? "text-blue-400 bg-blue-400/10" : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"}`}
                >
                  {icon}
                  <span className="text-base">{label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
      <main className="pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text leading-tight">
              Full Stack Software Engineer
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 leading-relaxed">
              Building robust and scalable applications with modern
              technologies. Focused on creating exceptional user experiences
              through clean, efficient code.
            </p>
            <div className="flex flex-col gap-6">
              <div className="group relative w-full sm:w-auto self-start">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                <Button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="relative w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border-0 h-12 px-8 text-base"
                >
                  Let's Collaborate
                  <Mail className="ml-2 h-4 w-4 animate-bounce" />
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {socialLinks.map((social) => (
                  <SocialLink key={social.label} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <section id="projects" className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Selected Projects
              </h2>
              <div className="mt-4 sm:mt-0 flex items-center space-x-4 text-sm text-zinc-400">
                <span className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span>Live</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span>In Development</span>
                </span>
              </div>
            </div>
            <div className="space-y-20">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="relative h-64 lg:h-full overflow-hidden">
                        {isImageLoading[project.id] && (
                          <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
                        )}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                          onLoad={() =>
                            setIsImageLoading((prev) => ({
                              ...prev,
                              [project.id]: false,
                            }))
                          }
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                      </div>
                      <div className="p-6 lg:p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-blue-400 transform group-hover:translate-x-2 transition-transform duration-300">
                            {project.category}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs flex items-center gap-1.5
                              ${project.status === "Live" ? "bg-green-400/10 text-green-400" : project.status === "In Development" ? "bg-yellow-400/10 text-yellow-400" : "bg-zinc-400/10 text-zinc-400"}`}
                          >
                            {project.status === "Live" && (
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            )}
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 mb-6">
                          {project.description}
                        </p>
                        <div className="space-y-6">
                          <div className="flex flex-wrap items-center gap-2">
                            {project.tech.map((tech, index) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm border border-zinc-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                                style={{
                                  transitionDelay: `${index * 50}ms`,
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4">
                            <a
                              href={project.link}
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link"
                            >
                              {project.status === "Live" ? "Live Demo" : "View Project"}
                              <ExternalLink className="ml-2 h-4 w-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {projects
                  .filter((p) => !p.featured)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                    >
                      <div className="h-48 relative overflow-hidden">
                        {isImageLoading[project.id] && (
                          <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
                        )}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                          onLoad={() =>
                            setIsImageLoading((prev) => ({
                              ...prev,
                              [project.id]: false,
                            }))
                          }
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-blue-400">
                            {project.category}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${project.status === "Live" ? "bg-green-400/10 text-green-400" : project.status === "In Development" ? "bg-yellow-400/10 text-yellow-400" : "bg-zinc-400/10 text-zinc-400"}`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 mb-6 text-sm">
                          {project.description}
                        </p>
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-xs border border-zinc-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.link}
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View Project{" "}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div> */}
            </div>
          </div>
        </section>
        <section id="skills" className="py-20 sm:py-24 lg:py-32 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {Object.entries(categories).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-zinc-400">{category}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item} className="text-zinc-400 flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
                I'm always interested in hearing about new projects and
                opportunities. Fill out the form below, and I'll get back to you
                as soon as possible.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
            <div className="mt-16 pt-16 border-t border-zinc-800">
              <div className="text-center">
                <p className="text-zinc-400 mb-8">
                  Connect with me on social media
                </p>
                <div className="max-w-md mx-auto flex flex-col gap-4">
                  {socialLinks.map((social) => (
                    <SocialLink key={social.label} {...social} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="border-t border-zinc-800 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-zinc-500">
            © {getCurrentYear()} Portfolio. All rights reserved.
          </div>
        </footer>
      </main>
      <FloatingCTA
        isVisible={showFloatingCTA}
        onClose={() => setShowFloatingCTA(false)}
      />
    </div>
  );
}
