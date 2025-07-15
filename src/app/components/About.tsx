import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Listen for changes to <html> class attribute
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

  return (
    <section
      id="about"
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
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a passionate full-stack developer currently doing my undergraduation in American International 
              University-Bangladesh (AIUB), and creating digital solutions that matter. I love turning complex problems
              into simple, beautiful, and intuitive designs.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "Projects Completed", value: "5+" },
                { label: "Years Experience", value: "5+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-2xl
                           bg-gradient-to-br from-blue-500 to-purple-600 p-8"
              >
                <div
                  className={`rounded-xl p-6 text-center ${
                    isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
                  }`}
                >
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-4">
                    Let's Build Something Amazing
                  </h3>
                  <p>
                    Ready to bring your ideas to life with cutting-edge technology
                    and creative solutions.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform rotate-6 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
