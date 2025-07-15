
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";


// export function Navigation() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navItems = [
//         { label: "Home", href: "#home" },
//         { label: "About", href: "#about" },
//         { label: "Skills", href: "#skills" },
//         { label: "Projects", href: "#projects" },
//         { label: "Contact", href: "#contact" },
//     ];

//     return (
//         <motion.nav
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center py-4">
//                     <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                     >
//                         Portfolio
//                     </motion.div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex space-x-8">
//                         {navItems.map((item, index) => (
//                             <motion.a
//                                 key={item.label}
//                                 href={item.href}
//                                 initial={{ opacity: 0, y: -20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1 }}
//                                 whileHover={{ scale: 1.1 }}
//                                 className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
//                             >
//                                 {item.label}
//                             </motion.a>
//                         ))}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
//                         >
//                             {isMobileMenuOpen ? <X /> : <Menu />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {isMobileMenuOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="md:hidden pb-4"
//                     >
//                         {navItems.map((item) => (
//                             <a
//                                 key={item.label}
//                                 href={item.href}
//                                 className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                                 {item.label}
//                             </a>
//                         ))}
//                     </motion.div>
//                 )}
//             </div>
//         </motion.nav>
//     );
// }




import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Load dark mode from localStorage on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ✅ Watch for changes in darkMode and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80"
          : "bg-transparent dark:bg-gray-900/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-gray-1000 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 mr-4"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

