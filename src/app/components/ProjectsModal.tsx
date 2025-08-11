"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

 const projects = [
  {
    title: "Fitness Tracking (Admin Module)",
    description:
      "A scalable fitness tracking backend system with AI-driven insights, modular messaging, and role-based access control for enhanced user engagement and professional support.",
    technologies: "React, Node.js, PostgreSQL, Postman, Next.js, TypeScript, Nest.js, API Together",
    images: [
      "/FitTrack/Home.png",
      "/FitTrack/Home_2.png",
      "/FitTrack/Service_1.png",
      "/FitTrack/Service_2.png",
      "/FitTrack/Login.png",
      "/FitTrack/Dashboard.png",
      "/FitTrack/Users.png",
      "/FitTrack/Inbox.png",
      "/FitTrack/Performances.png",
      "/FitTrack/Stats.png",
      "/FitTrack/Exercises.png",
      "/FitTrack/Ai_Suggestions.png"

    ],
  },
  {
    title: "Delivery Management App (Dropify)",
    description:
      "A secure desktop-based courier management system with dynamic booking, payment, and tracking features, built using .NET and MSSQL.",
    technologies: "C#, .NET Framework, MSSQL, WinForms",
    images: [
        "/Dropify/Login.jpg",
        "/Dropify/Login_2.jpg",
        "/Dropify/User_UI.jpg",
        "/Dropify/Tracking_UI.png",
        "/Dropify/Account_deletion.png",
        "/Dropify/admin_UI.png",
        "/Dropify/User_management.png"
        
    ],
  },
  {
    title: "Learning Management System (Backend)",
    description:
      "A Learning Management System using .NET and MSSQL with REST APIs, 3-tier architecture, and core features like student enrollment and course tracking.",
    technologies: "C#, ASP.NET, MVC, Postman, MSSQL",
    images: [
      "/LMS.jpg"
    ],
  },
  {
    title: "Gas Detection System",
    description:
      "A real-time gas and smoke detection system with alert mechanisms and C# interface.",
    technologies: "C, Arduino, C#, WinForms, Proteus",
    images: [
      "/Gas Detection/No_Alert.jpg",
      "/Gas Detection/Alert.jpg",
      "/Gas Detection/Simulation.png",
      "/Gas Detection/Hardware_Setup.jpg",
      "/Gas Detection/Hardware_Setup_2.jpg"
    ],
  },
];

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Load theme from localStorage on mount
useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
  
  // Also listen for changes on <html> class attribute (in case theme changes dynamically)
  const observer = new MutationObserver(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
  
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
  return () => observer.disconnect();
}, []);




  // Auto-slide images every 3 seconds
  useEffect(() => {
    if (!isOpen) return;

    const images = projects[currentProjectIndex].images;
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, currentProjectIndex]);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const project = projects[currentProjectIndex];
  const images = project.images;

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  // Theme-based colors
  const bgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className={`${bgClass} rounded-xl shadow-2xl relative overflow-hidden`}
        style={{
          width: "1500px",
          height: "750px",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center p-4 border-b ${borderClass} md:absolute md:top-0 md:left-0 md:right-0 md:z-10 ${bgClass}`}
        >
          <h2 className="text-xl font-bold">My Projects</h2>
          <button
            onClick={onClose}
            className="hover:opacity-80 transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div
          className="flex flex-col md:flex-row flex-grow items-center justify-center overflow-hidden pt-16 md:pt-0"
          style={{
            width: "1500px",
            height: "750px",
            maxWidth: "90vw",
            maxHeight: "90vh",
          }}
        >
          {/* Left: Image Slider */}
          <div className="relative w-full md:w-[520px] flex-shrink-0 flex items-center justify-start p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative w-[500px] h-[350px] rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 500px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Title + Description */}
          <div
            className="flex flex-col justify-center p-6 text-center md:text-left overflow-auto max-h-[650px] md:max-h-[unset]"
            style={{
              width: "600px",
              height: "300px",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
            <p className="mb-6">{project.description}</p>
            <span>{project.technologies}</span>
          </div>
        </div>

        {/* Project navigation */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block">
          <button
            onClick={prevProject}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition"
            aria-label="Previous project"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
          <button
            onClick={nextProject}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition"
            aria-label="Next project"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
