
import React, { useEffect, useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

interface RoadmapItem {
  title: string;
  description: string;
  completed: boolean;
  timeline: string;
}

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roadmapItems.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const roadmapItems: RoadmapItem[] = [
    {
      title: "OS Development",
      description: "Completing a custom OS with enhanced security features to challenge macOS & Windows. Building custom drivers and a secure microkernel architecture.",
      completed: false,
      timeline: "2023-2025",
    },
    {
      title: "Assembly & OS Internals",
      description: "Mastering low-level programming and OS internals for elite hacking capabilities. Focusing on x86-64 and ARM architectures.",
      completed: false,
      timeline: "2023-2024",
    },
    {
      title: "Fedora AI Integration",
      description: "Pushing Fedora beyond limits with AI-powered voice automation and intelligent security monitoring.",
      completed: false,
      timeline: "2024",
    },
    {
      title: "Bug Bounty Progression",
      description: "Working towards top 100 hacker status on major bug bounty platforms through systematic vulnerability research.",
      completed: false,
      timeline: "Ongoing",
    },
    {
      title: "Research Publications",
      description: "Publishing papers on novel security vulnerabilities and AI-powered exploit techniques in respected journals.",
      completed: false,
      timeline: "2024-2025",
    },
  ];

  return (
    <section id="roadmap" className="section relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{ 
          backgroundImage: "linear-gradient(to right, rgba(0, 255, 140, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 140, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      <h2 className="section-title">What I'm Working On</h2>
      
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto glass rounded-lg p-6 border border-hacker-muted shadow-lg">
          <div className="relative">
            <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-hacker-primary via-hacker-secondary to-hacker-accent"></div>
            
            <div className="space-y-10">
              {roadmapItems.map((item, index) => (
                <div 
                  key={index}
                  className={`pl-12 relative transition-all duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-60"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div 
                    className={`absolute left-2 transform -translate-x-1/2 transition-all duration-300 ${
                      index === activeIndex ? "text-hacker-primary scale-125" : "text-gray-500"
                    }`}
                  >
                    {item.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
                  </div>
                  
                  <div 
                    className={`text-xs font-mono mb-1 transition-colors duration-300 ${
                      index === activeIndex ? "text-hacker-secondary" : "text-gray-500"
                    }`}
                  >
                    {item.timeline}
                  </div>
                  
                  <h3 
                    className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      index === activeIndex ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    className={`transition-colors duration-300 ${
                      index === activeIndex ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 italic">
              "The best way to predict the future is to create it."
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 flex justify-center">
        <div className="inline-flex">
          {roadmapItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-hacker-primary scale-125" 
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to roadmap item ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
