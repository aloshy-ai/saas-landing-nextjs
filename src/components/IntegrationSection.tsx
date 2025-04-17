"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const cloudProviders = [
  { name: "AWS", logo: "/aws-logo-placeholder.png" },
  { name: "Microsoft Azure", logo: "/azure-logo-placeholder.png" },
  { name: "Google Cloud", logo: "/gcp-logo-placeholder.png" },
];

const IntegrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Code window mockup */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                }}
                className="absolute inset-0 bg-primary-900 rounded-xl shadow-2xl overflow-hidden border border-primary-700/40"
              >
                {/* Window header */}
                <div className="bg-primary-800 p-4 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-accent-100/70">autocloud-config.yaml</div>
                </div>
                
                {/* Code content */}
                <div className="p-6 font-mono text-sm text-accent-100/90 overflow-hidden">
                  <div className="mb-4">
                    <span className="text-blue-400">providers</span>:
                  </div>
                  <div className="pl-4 mb-2">
                    <span className="text-green-400">aws</span>:
                  </div>
                  <div className="pl-8 mb-4">
                    <span className="text-purple-400">enabled</span>: <span className="text-yellow-400">true</span><br />
                    <span className="text-purple-400">regions</span>: [<span className="text-orange-400">"us-east-1"</span>, <span className="text-orange-400">"us-west-2"</span>]
                  </div>
                  <div className="pl-4 mb-2">
                    <span className="text-green-400">azure</span>:
                  </div>
                  <div className="pl-8 mb-4">
                    <span className="text-purple-400">enabled</span>: <span className="text-yellow-400">true</span><br />
                    <span className="text-purple-400">subscriptions</span>: [<span className="text-orange-400">"primary"</span>, <span className="text-orange-400">"dev"</span>]
                  </div>
                  <div className="pl-4 mb-2">
                    <span className="text-green-400">gcp</span>:
                  </div>
                  <div className="pl-8">
                    <span className="text-purple-400">enabled</span>: <span className="text-yellow-400">true</span><br />
                    <span className="text-purple-400">projects</span>: [<span className="text-orange-400">"project-1"</span>, <span className="text-orange-400">"project-2"</span>]
                  </div>
                </div>

                {/* Animated cursor */}
                <div className="absolute bottom-6 right-6 h-4 w-2 bg-white/70 animate-pulse"></div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <h2 className="heading-lg mb-4">Seamless Integration with All Major Cloud Providers</h2>
            <p className="paragraph mb-8">
              AutoCloud works natively with AWS, Microsoft Azure, and Google Cloud Platform, giving you a unified view and control over your entire cloud infrastructure.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Simple Configuration</h3>
                  <p className="text-sm text-accent-100/70">Get started in minutes with our intuitive setup process</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 3h18v18H3z" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Single Dashboard</h3>
                  <p className="text-sm text-accent-100/70">Monitor all your cloud resources in one unified interface</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    <path d="M12 2l4 4" />
                    <path d="M12 2l-4 4" />
                    <path d="M12 22l4-4" />
                    <path d="M12 22l-4-4" />
                    <path d="M2 12l4 4" />
                    <path d="M2 12l4-4" />
                    <path d="M22 12l-4 4" />
                    <path d="M22 12l-4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Cross-Platform Management</h3>
                  <p className="text-sm text-accent-100/70">Manage resources across different cloud providers effortlessly</p>
                </div>
              </div>
            </div>

            {/* Cloud Provider Logos */}
            <div className="mt-12">
              <p className="text-sm text-accent-100/70 mb-4">Fully compatible with:</p>
              <div className="flex items-center gap-8">
                {cloudProviders.map((provider, index) => (
                  <motion.div
                    key={provider.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="h-12 flex items-center"
                  >
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <span className="text-accent-100">{provider.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-600/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default IntegrationSection;