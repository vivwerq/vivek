
import React, { useState } from "react";
import { Send, Github, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: "", isError: false });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ 
        text: "Message sent successfully! I'll get back to you soon.", 
        isError: false 
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ text: "", isError: false });
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="section bg-hacker-background-alt relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 179, 255, 0.1) 0%, transparent 50%)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="h-full w-full" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300b3ff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H5V0zm1 5v1H0V0h1v5h5z'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "6px 6px" 
        }}></div>
      </div>
      
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-lg p-8 border border-hacker-muted">
            <h3 className="text-2xl font-bold mb-6 text-white relative inline-block">
              <span className="relative z-10">Send a Message</span>
              <span 
                className="absolute -bottom-1 left-0 w-full h-2 bg-hacker-primary opacity-20 z-0"
                style={{ transform: "skew(-15deg)" }}
              ></span>
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field min-h-[150px]"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
              
              {submitMessage.text && (
                <div className={`mt-4 p-3 rounded-md ${
                  submitMessage.isError ? "bg-red-900/20 text-red-400" : "bg-green-900/20 text-green-400"
                }`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
          
          <div className="flex flex-col">
            <div className="glass rounded-lg p-8 border border-hacker-muted h-1/2 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-white relative inline-block">
                <span className="relative z-10">Connect</span>
                <span 
                  className="absolute -bottom-1 left-0 w-full h-2 bg-hacker-secondary opacity-20 z-0"
                  style={{ transform: "skew(-15deg)" }}
                ></span>
              </h3>
              
              <div className="space-y-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md glass border border-hacker-muted hover:border-hacker-secondary transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-hacker-secondary">
                    <Github size={24} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-400">Github</div>
                    <div className="text-white">@yourusername</div>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md glass border border-hacker-muted hover:border-hacker-primary transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-hacker-primary">
                    <Linkedin size={24} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-white">Vivwerq</div>
                  </div>
                </a>
                
                <a
                  href="https://hackerone.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md glass border border-hacker-muted hover:border-hacker-accent transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-hacker-accent">
                    <Globe size={24} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-400">Bug Bounty</div>
                    <div className="text-white">HackerOne Profile</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="glass rounded-lg p-8 border border-hacker-muted h-1/2">
              <h3 className="text-2xl font-bold mb-4 text-white relative inline-block">
                <span className="relative z-10">Location</span>
                <span 
                  className="absolute -bottom-1 left-0 w-full h-2 bg-hacker-accent opacity-20 z-0"
                  style={{ transform: "skew(-15deg)" }}
                ></span>
              </h3>
              
              <p className="text-gray-300 mb-4">
                Based in <span className="text-hacker-primary">India</span>, but connected globally.
              </p>
              
              <div className="mt-6">
                <h4 className="text-lg font-bold text-hacker-secondary mb-2">
                  Available for:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-hacker-primary rounded-full mr-2"></span>
                    Bug Bounty Collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-hacker-secondary rounded-full mr-2"></span>
                    Security Research Projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-hacker-accent rounded-full mr-2"></span>
                    Remote Security Consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
