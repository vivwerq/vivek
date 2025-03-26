
import React, { useEffect, useState } from "react";
import { Code, Globe, Cpu, ShieldAlert, ServerCrash, Braces } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const Skills = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      color: "text-hacker-primary",
      skills: [
        { name: "C", level: 95 },
        { name: "C++", level: 90 },
        { name: "Python", level: 92 },
        { name: "x86 Assembly", level: 80 },
        { name: "JavaScript/TypeScript", level: 85 },
      ],
    },
    {
      title: "Cybersecurity",
      icon: <ShieldAlert size={24} />,
      color: "text-hacker-accent",
      skills: [
        { name: "Malware Development", level: 88 },
        { name: "Kernel Rootkits", level: 75 },
        { name: "Reverse Engineering", level: 85 },
        { name: "Network Hacking", level: 92 },
        { name: "Bug Bounty Hunting", level: 80 },
      ],
    },
    {
      title: "Tech Stack",
      icon: <Cpu size={24} />,
      color: "text-hacker-secondary",
      skills: [
        { name: "Linux (Fedora)", level: 95 },
        { name: "Next.js / React", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Supabase", level: 85 },
        { name: "TensorFlow", level: 75 },
      ],
    },
    {
      title: "AI & Research",
      icon: <Brain size={24} />,
      color: "text-purple-500",
      skills: [
        { name: "AI-powered X-ray scanning", level: 80 },
        { name: "Ultrasound diagnostics", level: 75 },
        { name: "AI-assisted pentesting", level: 85 },
        { name: "Machine Learning", level: 70 },
        { name: "Data Analysis", level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2300b3ff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
          backgroundSize: "4px 4px"
        }}
      />
      
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="glass rounded-lg p-6 border border-hacker-muted transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,179,255,0.2)]"
          >
            <div className="flex items-center mb-6">
              <div className={`mr-3 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className={`text-sm ${category.color}`}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress transition-all duration-1000 ease-out"
                      style={{ 
                        width: isInView ? `${skill.level}%` : "0%",
                        transitionDelay: `${skillIndex * 100}ms` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-white text-center">
          Additional <span className="text-hacker-primary">Expertise</span>
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "OS Development", "API Security", "Cloud Security", 
            "Cryptography", "IoT Hacking", "Binary Exploitation",
            "Web Security", "Mobile Security", "OSINT", 
            "Social Engineering", "Firmware Analysis", "Hardware Hacking"
          ].map((skill, index) => (
            <div 
              key={index}
              className="glass px-4 py-2 rounded-full text-sm border border-hacker-muted hover:border-hacker-primary transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// External component for the Brain icon
const Brain = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    <path d="M14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
    <path d="M21 8.5c0 1.38-1.12 2.5-2.5 2.5S16 9.88 16 8.5 17.12 6 18.5 6 21 7.12 21 8.5Z" />
    <path d="M3 8.5C3 7.12 4.12 6 5.5 6S8 7.12 8 8.5 6.88 11 5.5 11 3 9.88 3 8.5Z" />
    <path d="M9.5 17a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
    <path d="M14.5 17a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    <path d="M18.5 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
    <path d="M5.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    <path d="M12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    <path d="M12 8v4" />
    <path d="m9 10 3-2 3 2" />
    <path d="m15 16-3 2-3-2" />
    <path d="M9 14 7 12l2-2" />
    <path d="m15 10 2 2-2 2" />
  </svg>
);

export default Skills;
