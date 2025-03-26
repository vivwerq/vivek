
import React, { useEffect, useState } from "react";
import Terminal from "./Terminal";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const terminalCommands = [
    {
      command: "whoami",
      output: ["Vivwerq: Cybersecurity Enthusiast | Ethical Hacker | OS Developer"],
      delay: 500,
    },
    {
      command: "ls projects",
      output: ["[X-RayNow] [EchoLens] [ZenZones] [AI_Sleuth]"],
      delay: 500,
    },
    {
      command: "cat mission.txt",
      output: [
        "Mission: To become one of the top 100 hackers in the world.",
        "Currently: Bug hunting on Starbucks Japan & developing AI-powered security tools.",
      ],
      delay: 700,
    },
    {
      command: "sudo hack --target=world --mode=ethical",
      output: ["Permission granted. Operation in progress..."],
      delay: 1000,
    },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-10"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 255, 140, 0.1) 0%, transparent 50%)",
        backgroundSize: "100% 100%",
      }}
    >
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff8c' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px" 
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            className={`md:w-1/2 transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-sm font-mono mb-4 text-hacker-secondary">
              &lt; welcome to my world /&gt;
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              I'm <span className="neon-text">Vivwerq</span>, a{" "}
              <div 
                data-text="Cybersecurity Expert" 
                className="glitch-text inline-block"
              >
                Cybersecurity Expert
              </div>
              , <span className="text-hacker-accent">Ethical Hacker</span>, and{" "}
              <span className="text-hacker-secondary">Developer</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              On a mission to dominate the hacking world with innovative security solutions
              and cutting-edge AI technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div 
            className={`md:w-1/2 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Terminal 
              commands={terminalCommands}
              prompt="$"
              className="shadow-[0_0_30px_rgba(0,255,140,0.15)]"
              speedFactor={1.5}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
