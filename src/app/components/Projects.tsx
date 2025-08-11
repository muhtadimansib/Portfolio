import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Set initial state
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Fitness Tracking (Admin Module)",
      description: "A scalable fitness tracking backend system with AI-driven insights, modular messaging, and role-based access control for enhanced user engagement and professional support",
      image: "./Fitness_Tracking.jpg",
      tech: ["React", "Node.js", "PostgrSQL", "Postman", "Next.js", "Typescript", "Nest.js", "API together"],
      github: "https://github.com/muhtadimansib/FItTrack_Admin_module",
      live: "https://f-it-track-admin-module-sigma.vercel.app",
    },
    {
      title: "Delivery Management App (Dropify)",
      description: "A secure desktop-based courier management system with dynamic booking, payment, and tracking features, built using .NET and MSSQL.",
      image: "./Dropify.jpg",
      tech: ["C#", ".NET Framework", "MSSQL", "Winforms"],
      github: "https://github.com/muhtadimansib/Dropify",
      live: "#",
    },
    {
      title: "Learning Management System (Backend)",
      description: "A Learning Management System using .NET and MSSQL with REST APIs, 3-tier architecture, and core features like student enrollment and course tracking.",
      image: "./LMS.jpg",
      tech: ["C#", "ASP.NET", "MVC", "Postman", "MSSQL"],
      github: "https://github.com/muhtadimansib/Learning_Management_System",
      live: "#",
    },
    {
      title: " Gas Detection System",
      description: "A real-time gas and smoke detection system with alert mechanisms and C# interface ",
      image: "./Gas Detection.jpg",
      tech: ["C", "Arduino", "C#", "Winform", "Proteus"],
      github: "https://github.com/muhtadimansib/Gas_Sensor_Arduino_C-",
      live: "#",
    },

  ];

  return (
    <section
      id="projects"
      className={`py-20 
 ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p
            className={`text-xl max-w-3xl mx-auto 
                        ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 
                          ${isDark ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t 
                              ${isDark ? "from-black/70 to-transparent" : "from-black/50 to-transparent"}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6`}
                >
                  <div className="flex space-x-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-3 py-1 rounded-md text-sm transition-colors duration-200
                ${isDark
                            ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <button
                        onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}//noopener for security purpose and noreferrer for privacy purpose
                        className="flex items-center px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p
                  className={`mb-4 leading-relaxed
                              ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full
                                  ${isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-blue-100 text-blue-800"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
