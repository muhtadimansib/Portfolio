import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isDark, setIsDark] = useState(false);

  //Detect dark mode toggle on <html>
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mhtdmansib@gmail.com",
      href: "mailto:mhtdmansib@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1917787999",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mirpur, Dhaka",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
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
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Get In Touch
              </h3>
              <p className={`text-lg mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                I'm always open to discussing new opportunities and interesting projects.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                              ${isDark ? "bg-gray-800" : "bg-white"}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{item.label}</div>
                    <div className="text-lg font-semibold">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`rounded-2xl shadow-xl p-8
                        ${isDark ? "bg-gray-800" : "bg-white"}`}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className={`w-full px-4 py-2 rounded-md border 
                                ${isDark
                                  ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500"
                                  : "border-gray-300 focus:ring-blue-500"} focus:outline-none focus:ring-2 focus:border-blue-500 transition duration-200`}
                  />
                </motion.div>
                {/* Last Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className={`w-full px-4 py-2 rounded-md border 
                                ${isDark
                                  ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500"
                                  : "border-gray-300 focus:ring-blue-500"} focus:outline-none focus:ring-2 focus:border-blue-500 transition duration-200`}
                  />
                </motion.div>
              </div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="alex@example.com"
                  className={`w-full px-4 py-2 rounded-md border 
                              ${isDark
                                ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500"
                                : "border-gray-300 focus:ring-blue-500"} focus:outline-none focus:ring-2 focus:border-blue-500 transition duration-200`}
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className={`w-full px-4 py-2 rounded-md border 
                              ${isDark
                                ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500"
                                : "border-gray-300 focus:ring-blue-500"} focus:outline-none focus:ring-2 focus:border-blue-500 transition duration-200`}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`w-full px-4 py-2 rounded-md border 
                              ${isDark
                                ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500"
                                : "border-gray-300 focus:ring-blue-500"} focus:outline-none focus:ring-2 focus:border-blue-500 transition duration-200`}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-md bg-blue-600 text-white text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={`text-center mt-16 pt-8 border-t
                      ${isDark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-600"}`}
        >
          <p>
            © 2025 Muhtadi Mansib. Built with React, TypeScript, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
