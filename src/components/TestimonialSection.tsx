"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "AutoCloud has completely transformed how we manage our multi-cloud infrastructure. What used to take days now takes minutes. The visibility and control it provides is unmatched.",
    author: "Sarah Johnson",
    title: "CTO, TechInovate Inc.",
    company: "TechInovate Inc.",
  },
  {
    quote:
      "The seamless integration with all our cloud providers has eliminated silos and improved our team's productivity by 40%. AutoCloud is now an essential part of our tech stack.",
    author: "Michael Chen",
    title: "Cloud Infrastructure Lead",
    company: "DataFlow Systems",
  },
  {
    quote:
      "Security and compliance were our biggest concerns when managing multiple clouds. AutoCloud gives us peace of mind with its comprehensive security features and real-time alerts.",
    author: "Jessica Rivera",
    title: "Head of Information Security",
    company: "FinSecure Solutions",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 relative"
    >
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4">Trusted by Industry Leaders</h2>
          <p className="paragraph">
            Join thousands of satisfied customers who have transformed their cloud management with AutoCloud.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto py-6">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-0 left-0 text-8xl font-serif text-primary-600/30"
          >
            "
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative h-64 md:h-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center px-12"
              >
                <p className="text-lg md:text-xl text-accent-100 mb-6 italic">
                  {testimonials[current].quote}
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-white">{testimonials[current].author}</p>
                    <p className="text-sm text-accent-100/70">{testimonials[current].title}, {testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary-600 w-6" : "bg-accent-100/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos (Placeholder) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
          }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, index) => (
            <div
              key={index}
              className="h-12 bg-white/5 rounded-lg px-6 flex items-center justify-center"
            >
              <span className="text-accent-100/60 font-medium">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary-700/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default TestimonialSection;