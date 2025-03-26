
import React, { useState, useEffect, useRef } from "react";

interface Command {
  command: string;
  output: string[];
  delay: number;
}

interface TerminalProps {
  commands: Command[];
  prompt?: string;
  autoStart?: boolean;
  loop?: boolean;
  className?: string;
  speedFactor?: number;
}

const Terminal: React.FC<TerminalProps> = ({
  commands,
  prompt = ">",
  autoStart = true,
  loop = false,
  className = "",
  speedFactor = 1,
}) => {
  const [displayedContent, setDisplayedContent] = useState<JSX.Element[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoStart) {
      startTyping();
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedContent]);

  const startTyping = () => {
    if (isTyping) return;
    setIsTyping(true);
    typeCommand();
  };

  const typeCommand = async () => {
    if (currentCommandIndex >= commands.length) {
      if (loop) {
        setCurrentCommandIndex(0);
        setDisplayedContent([]);
        typeCommand();
      } else {
        setIsTyping(false);
      }
      return;
    }

    const command = commands[currentCommandIndex];
    const commandText = command.command;
    
    // Type command character by character
    for (let i = 0; i < commandText.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50 / speedFactor));
      
      setDisplayedContent((prev) => [
        ...prev.slice(0, -1),
        <div key={`cmd-${currentCommandIndex}-${i}`} className="flex">
          <span className="terminal-prompt">{prompt}</span>
          <span className="terminal-command">{commandText.substring(0, i + 1)}</span>
        </div>,
      ]);
    }

    // Wait before showing output
    await new Promise((resolve) => setTimeout(resolve, command.delay / speedFactor));

    // Display output
    setDisplayedContent((prev) => [
      ...prev,
      ...command.output.map((line, idx) => (
        <div key={`output-${currentCommandIndex}-${idx}`} className="terminal-output">
          {line}
        </div>
      )),
      <div key={`prompt-${currentCommandIndex + 1}`} className="flex">
        <span className="terminal-prompt">{prompt}</span>
        <span className="terminal-command"></span>
      </div>,
    ]);

    // Move to next command
    setCurrentCommandIndex(currentCommandIndex + 1);
    
    // Short pause before next command
    await new Promise((resolve) => setTimeout(resolve, 1000 / speedFactor));
    
    // Continue with next command
    typeCommand();
  };

  return (
    <div
      ref={containerRef}
      className={`terminal h-64 overflow-y-auto ${className}`}
      onClick={startTyping}
    >
      <div className="terminal-header">
        <div className="terminal-btn bg-red-500"></div>
        <div className="terminal-btn bg-yellow-500"></div>
        <div className="terminal-btn bg-green-500"></div>
        <div className="ml-2 text-xs text-gray-400">terminal@vivwerq:~</div>
      </div>
      
      {displayedContent.length > 0 ? (
        displayedContent
      ) : (
        <div className="flex">
          <span className="terminal-prompt">{prompt}</span>
          <span className="terminal-command"></span>
          <span className="typewriter-cursor"></span>
        </div>
      )}
      
      {!isTyping && (
        <div className="mt-4 text-gray-400 text-xs italic">
          Click to {displayedContent.length > 0 ? "replay" : "start"}
        </div>
      )}
    </div>
  );
};

export default Terminal;
