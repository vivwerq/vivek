
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-hacker-background flex flex-col items-center justify-center p-4">
      <div className="text-9xl font-bold text-hacker-primary animate-glow mb-4">404</div>
      
      <h1 className="text-4xl font-bold mb-6 text-white">
        <span className="text-hacker-secondary">Access</span> Denied
      </h1>
      
      <div className="max-w-md w-full glass rounded-lg p-6 border border-hacker-muted mb-8">
        <div className="font-mono text-sm text-gray-300 mb-4">
          <div className="flex">
            <span className="text-hacker-primary mr-2">$</span>
            <span>access {location.pathname}</span>
          </div>
          <div className="ml-4 text-red-500">
            Error: Permission denied. File not found.
          </div>
          <div className="flex mt-2">
            <span className="text-hacker-primary mr-2">$</span>
            <span>_</span>
          </div>
        </div>
      </div>
      
      <a
        href="/"
        className="btn-secondary flex items-center group"
      >
        <ArrowLeft size={18} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
        Return to Base
      </a>
      
      <div className="mt-8 text-gray-500 text-sm font-mono">
        <span className="text-hacker-accent">SYSTEM:</span> Unauthorized access attempt logged.
      </div>
    </div>
  );
};

export default NotFound;
