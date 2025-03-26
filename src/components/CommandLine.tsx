
import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface CommandResult {
  output: string[];
  isError?: boolean;
}

interface CommandLineProps {
  isVisible: boolean;
  onClose: () => void;
}

const CommandLine: React.FC<CommandLineProps> = ({ isVisible, onClose }) => {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<JSX.Element[]>([
    <div key="welcome" className="text-gray-300 mb-2">
      Welcome to the hacker terminal! Type <span className="text-hacker-primary">help</span> for available commands.
    </div>,
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle CLI with backtick
      if (e.key === "`" && e.ctrlKey) {
        e.preventDefault();
        if (isVisible) {
          onClose();
        } else {
          // Show CLI
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, onClose]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!command.trim()) return;
    
    // Add command to history
    setHistory([...history, command]);
    setHistoryIndex(-1);
    
    // Show command in output
    setOutput([
      ...output,
      <div key={`cmd-${Date.now()}`} className="flex">
        <span className="text-hacker-primary mr-2">$</span>
        <span>{command}</span>
      </div>,
    ]);
    
    // Process command
    const result = processCommand(command);
    
    // Add command output to terminal
    setOutput((prev) => [
      ...prev,
      ...result.output.map((line, i) => (
        <div 
          key={`output-${Date.now()}-${i}`}
          className={`ml-4 ${result.isError ? "text-red-500" : "text-gray-300"}`}
        >
          {line}
        </div>
      )),
    ]);
    
    // Clear input
    setCommand("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand("");
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const processCommand = (cmd: string): CommandResult => {
    const trimmed = cmd.trim().toLowerCase();
    const parts = trimmed.split(" ");
    const main = parts[0];
    
    switch (main) {
      case "help":
        return {
          output: [
            "Available commands:",
            "- help: Show this help message",
            "- about: Display information about me",
            "- skills: List my skills",
            "- projects: Show my key projects",
            "- contact: How to get in touch",
            "- clear: Clear the terminal",
            "- whoami: Display user info",
            "- hack: Simulate a hacking sequence (try: hack website)",
            "- exit: Close the terminal",
          ],
        };
        
      case "about":
        return {
          output: [
            "Vivwerq - Cybersecurity Expert, Ethical Hacker, and Developer",
            "------------------------------------------------------------",
            "First-year B.Tech Cybersecurity student passionate about offensive security.",
            "Currently active in bug bounty programs, including Starbucks Japan.",
            "Goal: To be among the top 100 hackers in the world.",
            "Interests: Low-level hacking, reverse engineering, OS development, and AI security.",
          ],
        };
        
      case "skills":
        return {
          output: [
            "Skills & Expertise:",
            "----------------",
            "Programming: C, C++, Python, x86 Assembly, JavaScript/TypeScript",
            "Security: Malware development, Kernel rootkits, Network hacking",
            "Tech Stack: Linux (Fedora), Next.js, React, Tailwind CSS, TensorFlow",
            "Research: AI-powered security tools, ultrasound diagnostics, X-ray scanning",
          ],
        };
        
      case "projects":
        return {
          output: [
            "Key Projects:",
            "------------",
            "🛡 AI_Sleuth - AI-powered pentesting toolkit for Fedora",
            "🔑 Keylogger - Captures keystrokes, clipboard, and screenshots",
            "🎨 HoloDraw - AR Drawing tool with gesture recognition",
            "🐧 Linux & Security - Custom Linux security modules and hardening",
          ],
        };
        
      case "contact":
        return {
          output: [
            "Contact Information:",
            "-------------------",
            "GitHub: github.com/yourusername",
            "LinkedIn: linkedin.com/in/yourusername",
            "Bug Bounty: hackerone.com/yourusername",
            "Use the contact form on this site to send me a message directly.",
          ],
        };
        
      case "clear":
        setOutput([]);
        return { output: [] };
        
      case "whoami":
        return {
          output: [
            "Visitor@vivwerq-portfolio:~",
            "Welcome, cybersecurity enthusiast!",
          ],
        };
        
      case "exit":
        onClose();
        return { output: ["Closing terminal..."] };
        
      case "hack":
        if (parts.length > 1) {
          const target = parts.slice(1).join(" ");
          return {
            output: [
              `Initiating hack on ${target}...`,
              "[■□□□□□□□□□] 10% Scanning for vulnerabilities...",
              "[■■■□□□□□□□] 30% Found potential SQL injection...",
              "[■■■■■□□□□□] 50% Bypassing authentication...",
              "[■■■■■■■□□□] 70% Escalating privileges...",
              "[■■■■■■■■■□] 90% Covering tracks...",
              "[■■■■■■■■■■] 100% Complete!",
              "Access granted to target system. This is a simulation for educational purposes only.",
            ],
          };
        } else {
          return {
            output: ["Please specify a target to hack. Example: hack website"],
            isError: true,
          };
        }
        
      default:
        return {
          output: [`Command not found: ${main}. Type 'help' for available commands.`],
          isError: true,
        };
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-3xl bg-hacker-background border border-hacker-muted rounded-lg shadow-2xl">
        <div className="flex items-center justify-between p-2 border-b border-hacker-muted bg-hacker-background-alt rounded-t-lg">
          <div className="flex items-center">
            <TerminalIcon size={16} className="text-hacker-primary mr-2" />
            <span className="text-sm text-gray-300">Terminal</span>
          </div>
          
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            ✕
          </button>
        </div>
        
        <div 
          ref={containerRef}
          className="p-4 h-[400px] overflow-y-auto font-mono text-sm"
        >
          {output}
        </div>
        
        <form onSubmit={handleCommandSubmit} className="border-t border-hacker-muted p-2">
          <div className="flex items-center">
            <span className="text-hacker-primary mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm"
              placeholder="Type a command..."
              aria-label="Command input"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommandLine;
