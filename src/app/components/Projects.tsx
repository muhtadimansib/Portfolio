
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { ExternalLink, Github } from "lucide-react";


// export function Projects() {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     const projects = [
//         {
//             title: "E-Commerce Platform",
//             description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
//             image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
//             tech: ["React", "Node.js", "MongoDB", "Stripe"],
//             github: "#",
//             live: "#",
//         },
//         {
//             title: "Task Management App",
//             description: "A collaborative task management application with real-time updates",
//             image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
//             tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
//             github: "#",
//             live: "#",
//         },
//         {
//             title: "Weather Dashboard",
//             description: "Beautiful weather dashboard with location-based forecasts and charts",
//             image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
//             tech: ["React", "D3.js", "OpenWeather API", "CSS3"],
//             github: "#",
//             live: "#",
//         },
//         {
//             title: "Social Media App",
//             description: "A modern social media platform with real-time messaging and posts",
//             image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
//             tech: ["React Native", "Firebase", "Redux", "Expo"],
//             github: "#",
//             live: "#",
//         },
        
//     ];

//     return (
//         <section id="projects" className="py-20 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     ref={ref}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                         Featured Projects
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         Here are some of my recent projects that showcase my skills and creativity
//                     </p>
//                 </motion.div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                     {projects.map((project, index) => (
//                         <motion.div
//                             key={project.title}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                             transition={{ duration: 0.6, delay: index * 0.1 }}
//                             whileHover={{ y: -10 }}
//                             className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//                         >
//                             <div className="relative overflow-hidden">
//                                 <motion.img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-full h-64 object-cover"
//                                     whileHover={{ scale: 1.05 }}
//                                     transition={{ duration: 0.3 }}
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
//                                     <div className="flex space-x-4">
//                                         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                                             <button
//                                                 className="flex items-center px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm transition-colors duration-200"
//                                             >
//                                                 <Github className="h-4 w-4 mr-2" />
//                                                 Code
//                                             </button>
//                                         </motion.div>
//                                         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                                             <button
//                                                 className="flex items-center px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm transition-colors duration-200"
//                                             >
//                                                 <ExternalLink className="h-4 w-4 mr-2" />
//                                                 Live
//                                             </button>
//                                         </motion.div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="p-6">
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                                     {project.title}
//                                 </h3>
//                                 <p className="text-gray-600 mb-4 leading-relaxed">
//                                     {project.description}
//                                 </p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {project.tech.map((tech) => (
//                                         <span
//                                             key={tech}
//                                             className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
//                                         >
//                                             {tech}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }











import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isDark, setIsDark] = useState(false);

  // ✅ Watch for changes in the <html> classList (dark mode toggle)
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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and charts",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "OpenWeather API", "CSS3"],
      github: "#",
      live: "#",
    },
    {
      title: "Social Media App",
      description: "A modern social media platform with real-time messaging and posts",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      github: "#",
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
                      <button
                        className={`flex items-center px-3 py-1 rounded-md text-sm transition-colors duration-200
                                    ${isDark
                                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <button
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
