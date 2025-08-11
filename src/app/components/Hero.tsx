import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Loader } from "lucide-react";
import Image from "next/image";
import { ProjectsModal } from "./ProjectsModal";

export function Hero() {
    const [isDark, setIsDark] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);


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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section
            id="home"
            className={`min-h-screen flex items-center justify-center pt-20 
            ${isDark
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100"
                    : "bg-gradient-to-br from-green-50 via-teal-50 to-sky-50"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >

                    <div className="w-40 h-40 md:w-70 md:h-70 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500">
                        <Image
                            src="/profile.jpg"
                            alt="Profile picture"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />

                    </div>


                    <h1 className="typewriter text-4xl md:text-6xl lg:text-7xl font-bold">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Muhtadi Mansib
                        </span>
                    </h1>

                    <motion.p
                        variants={itemVariants}
                        className={`text-xl md:text-2xl max-w-3xl mx-auto 
                                   ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                        Full-Stack Developer & UI/UX Designer passionate about creating
                        beautiful, functional digital experiences
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex justify-center space-x-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button
                                className="flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-lg"
                            >
                                <Mail className="mr-2 h-5 w-5" />
                                Get In Touch
                            </button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button
                                onClick={() => setIsProjectsOpen(true)} // ⬅ Open modal
                                className={`flex items-center px-4 py-2 rounded-md border ${isDark
                                    ? "border-gray-500 text-gray-300 hover:bg-gray-800"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                                    } transition-colors duration-200 text-lg`}
                            >
                                View My Work
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center space-x-6"
                    >
                        {[
                            { icon: Github, link: "https://github.com/muhtadimansib" },
                            { icon: Linkedin, link: "https://www.linkedin.com/in/muhtadi-mansib-9336192a1/" },
                        ].map(({ icon: Icon, link }, index) => (
                            <motion.a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 
                 ${isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}
                            >
                                <Icon className="h-6 w-6" />
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        animate={isProjectsOpen ? {} : { y: [0, 15, 0] }}

                        transition={{ duration: 1, repeat: Infinity }}
                        className="pt-8"
                    >
                        <ArrowDown
                            className={`h-8 w-8 mx-auto ${isDark ? "text-gray-500" : "text-gray-400"}`}
                        />
                    </motion.div>
                </motion.div>
            </div>
            {/* Modal */}
            <ProjectsModal isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} />
        </section>
    );
}



