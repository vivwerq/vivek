
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Roadmap from "../components/Roadmap";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CommandLine from "../components/CommandLine";
import { Terminal } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandLineVisible, setIsCommandLineVisible] = useState(false);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle command line with Ctrl + `
      if (e.key === "`" && e.ctrlKey) {
        e.preventDefault();
        setIsCommandLineVisible(prev => !prev);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-hacker-background flex flex-col items-center justify-center">
        <div className="w-16 h-16 mb-8 relative">
          <div className="absolute inset-0 border-4 border-hacker-primary/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-hacker-primary rounded-full animate-spin" style={{ borderTopColor: 'transparent' }}></div>
        </div>
        <div className="text-2xl font-bold text-white mb-2 flex items-center">
          <span className="text-hacker-primary mr-1">&gt;</span>
          <span className="neon-text">Vivwerq</span>
        </div>
        <div className="text-sm text-gray-400 font-mono">Initializing system...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hacker-background text-white overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Roadmap />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Command Line Toggle Button */}
      <button
        onClick={() => setIsCommandLineVisible(true)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white shadow-lg hover:text-hacker-primary transition-colors duration-300 border border-hacker-muted z-40"
        aria-label="Open command line"
      >
        <Terminal size={20} />
      </button>
      
      {/* Hidden "Easter Egg" Command Line Interface */}
      <CommandLine 
        isVisible={isCommandLineVisible}
        onClose={() => setIsCommandLineVisible(false)}
      />
    </div>
  );
};

export default Index;
