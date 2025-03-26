
import React, { useState } from "react";
import { ExternalLink, Github, Shield, KeyRound, PenTool, Terminal } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  tags: string[];
  link?: string;
  github?: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: "ai-sleuth",
      title: "AI_Sleuth",
      description: "AI-powered penetration testing toolkit for Fedora. Automates vulnerability scanning with ML-based exploit suggestion and detection avoidance.",
      icon: <Shield size={24} />,
      iconColor: "text-hacker-primary",
      tags: ["Python", "TensorFlow", "Fedora", "Cybersecurity"],
      github: "#",
    },
    {
      id: "keylogger",
      title: "Keylogger",
      description: "Advanced keylogger with clipboard monitoring, screenshot capabilities, and encrypted data exfiltration. Designed for educational purposes.",
      icon: <KeyRound size={24} />,
      iconColor: "text-hacker-accent",
      tags: ["C++", "Windows API", "Encryption", "Stealth"],
      github: "#",
    },
    {
      id: "holodraw",
      title: "HoloDraw",
      description: "Augmented reality drawing tool with gesture recognition. Creates persistent 3D drawings in physical space using computer vision.",
      icon: <PenTool size={24} />,
      iconColor: "text-hacker-secondary",
      tags: ["Python", "OpenCV", "AR", "Computer Vision"],
      link: "#",
      github: "#",
    },
    {
      id: "linux-security",
      title: "Linux & Security",
      description: "Custom Linux security modules with kernel hardening patches and rootkit detection. Includes a secure bootloader and integrity monitoring.",
      icon: <Terminal size={24} />,
      iconColor: "text-purple-500",
      tags: ["C", "Kernel", "Linux", "Security"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="section bg-hacker-background-alt relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{ 
          backgroundImage: "radial-gradient(rgba(0, 255, 140, 0.1) 2px, transparent 2px), radial-gradient(rgba(0, 179, 255, 0.1) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px"
        }}
      />
      
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card group relative"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-hacker-primary via-hacker-secondary to-hacker-accent rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative bg-hacker-background-alt rounded-lg p-6 h-full z-10">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-lg glass flex items-center justify-center ${project.iconColor}`}>
                  {project.icon}
                </div>
                
                <div className="flex space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-gray-500 hover:text-hacker-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-gray-500 hover:text-hacker-secondary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full glass text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div 
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-hacker-primary to-hacker-secondary transform scale-x-0 transition-transform duration-500 origin-left rounded-b-lg ${
                  hoveredProject === project.id ? "scale-x-100" : ""
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center"
        >
          <Github size={18} className="mr-2" />
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
