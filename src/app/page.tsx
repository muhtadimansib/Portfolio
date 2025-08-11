"use client"
import { motion } from "framer-motion";
import { Hero } from "../app/components/Hero";
import { About } from "../app/components/About";
import { Skills } from "../app/components/Skills";
import { Projects } from "../app/components/Projects";
import { Contact } from "../app/components/Contact";
import { Navigation } from "../app/components/Navigation";
import { Education } from "./components/Education";


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </motion.div>
    </div>
  );
};

export default Index;
