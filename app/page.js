"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Experience />
      <Footer />
      <ScrollTop />
    </>
  );
}
