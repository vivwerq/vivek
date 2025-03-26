
import React from "react";
import { Shield, Bug, Code, Cpu, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-hacker-background-alt relative">
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%2300ff8c' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")"
        }}
      />
      
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <div className="glass rounded-lg p-6 h-full border border-hacker-muted transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,179,255,0.3)]">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-hacker-primary to-hacker-secondary flex items-center justify-center text-black text-3xl font-bold">
                  V
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-center">
                <span className="text-hacker-accent">First-year</span> B.Tech Cybersecurity Student
              </h3>
              
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Shield size={20} className="text-hacker-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Passionate about offensive security and finding vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <Bug size={20} className="text-hacker-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Active Bug Bounty Hunter (currently hacking Starbucks Japan)</span>
                </li>
                <li className="flex items-start">
                  <Code size={20} className="text-hacker-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Loves low-level hacking, reverse engineering, and assembly programming</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <div className="glass rounded-lg p-6 h-full border border-hacker-muted">
            <h3 className="text-2xl font-bold mb-6 text-white">
              My <span className="text-hacker-primary">Mission</span>
            </h3>
            
            <p className="text-gray-300 mb-6">
              To be among the top 100 hackers in the world by mastering offensive security,
              developing cutting-edge tools, and pushing the boundaries of what's possible
              in cybersecurity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col">
                <h4 className="text-lg font-bold text-hacker-secondary mb-3 flex items-center">
                  <Cpu size={20} className="mr-2" /> Technical Exploration
                </h4>
                <p className="text-gray-300">
                  Currently exploring Linux OS development, kernel hacking, and developing
                  custom security tools with a focus on performance and efficiency.
                </p>
              </div>
              
              <div className="flex flex-col">
                <h4 className="text-lg font-bold text-hacker-accent mb-3 flex items-center">
                  <Brain size={20} className="mr-2" /> AI Research
                </h4>
                <p className="text-gray-300">
                  Applying AI to cybersecurity challenges, including developing AI-powered
                  X-ray scanning technology, ultrasound diagnostics, and automated penetration testing.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-hacker-muted">
              <p className="text-gray-300 italic">
                "The only way to discover the limits of the possible is to go beyond them into the impossible." 
                <span className="text-hacker-primary block mt-1 text-right">— Arthur C. Clarke</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
