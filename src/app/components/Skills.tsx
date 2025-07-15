
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Code, Palette, Server, Smartphone } from "lucide-react";

// export function Skills() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const skillCategories = [
//     {
//       icon: Code,
//       title: "Frontend Development",
//       skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: Server,
//       title: "Backend Development",
//       skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: Palette,
//       title: "UI/UX Design",
//       skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: Smartphone,
//       title: "Microsoft Office",
//       skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
//       color: "from-orange-500 to-red-500",
//     },
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Skills & Expertise
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             I specialize in building end-to-end solutions with modern technologies
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="relative group"
//             >
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
//                 <motion.div
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}
//                 >
//                   <category.icon className="h-8 w-8 text-white" />
//                 </motion.div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
//                   {category.title}
//                 </h3>
                
//                 <div className="space-y-2">
//                   {category.skills.map((skill, skillIndex) => (
//                     <motion.div
//                       key={skill}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                       transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
//                       className="flex items-center justify-center"
//                     >
//                       <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
//                         {skill}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Palette, Server, Smartphone } from "lucide-react";

export function Skills() {
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

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 
                  ${isDark 
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100" 
                    : "bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900"}`}
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto
                         ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            I specialize in building end-to-end solutions with modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full 
                            ${isDark ? "bg-gray-800" : "bg-white"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center justify-center"
                    >
                      <span
                        className={`text-sm px-3 py-1 rounded-full
                                    ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}
                      >
                        {skill}
                      </span>
                    </motion.div>
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
