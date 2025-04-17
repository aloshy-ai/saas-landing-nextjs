"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      orbitRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-10 md:pt-0"
          >
            <h1 className="heading-xl mb-6">
              Simplify your cloud infrastructure management
            </h1>
            <p className="paragraph mb-8 max-w-lg">
              AutoCloud helps enterprises understand and manage their public cloud infrastructure across AWS, Microsoft Azure, and Google Cloud Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#signup" className="btn-primary">
                Start Free Trial
              </Link>
              <Link href="#demo" className="btn-outline">
                Request a Demo
              </Link>
            </div>
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-primary-600 flex items-center justify-center"
                  >
                    <span className="text-xs font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-accent-100">
                Trusted by 2,000+ enterprises worldwide
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              ref={orbitRef}
              className="relative w-full aspect-square rounded-full flex items-center justify-center transition-transform duration-300 ease-out"
            >
              <div className="absolute inset-0 rounded-full border border-accent-100/20 animate-pulse"></div>
              
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary-600 shadow-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-secondary-900 shadow-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 16l-8-8-8 8" />
                  <path d="M16 4h4v4" />
                  <path d="M20 10v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6" />
                </svg>
              </div>
              
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary-700 shadow-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-accent-900 shadow-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 8l8 4 8-4-8-4-8 4" />
                  <path d="M4 12l8 4 8-4" />
                  <path d="M4 16l8 4 8-4" />
                </svg>
              </div>
              
              <div className="w-64 h-64 rounded-full bg-primary-600/20 backdrop-blur-md flex items-center justify-center text-center p-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Unified Cloud Management</h3>
                  <p className="text-sm text-accent-100/80">One platform for all your cloud needs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-700/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;