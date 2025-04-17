"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container-custom">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 to-primary-600 p-8 md:p-16"
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="relative z-10 max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-lg mb-6 text-white">
              Ready to simplify your cloud management?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Join thousands of companies already using AutoCloud to optimize their cloud infrastructure. Start your free trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#signup"
                className="bg-white text-primary-900 hover:bg-accent-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="#demo"
                className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Request Demo
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/60">
              No credit card required. 14-day free trial.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-2xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-xl -z-0"></div>
          
          {/* Animated Particles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 z-0"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-white/20"
                initial={{
                  x: Math.random() * 100 - 50 + "%",
                  y: Math.random() * 100 - 50 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [
                    Math.random() * 100 - 50 + "%",
                    Math.random() * 100 - 50 + "%",
                  ],
                  x: [
                    Math.random() * 100 - 50 + "%",
                    Math.random() * 100 - 50 + "%",
                  ],
                  scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
          }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: "Customers Worldwide", value: "2,000+" },
            { label: "Cloud Resources Managed", value: "1M+" },
            { label: "Customer Satisfaction", value: "99.8%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-accent-100/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;