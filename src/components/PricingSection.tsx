"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: 49,
    period: "per month",
    description: "Perfect for small teams getting started with cloud management",
    features: [
      "Single cloud provider support",
      "Basic dashboard and monitoring",
      "Daily infrastructure scans",
      "Email support",
      "Up to 5 team members",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Business",
    price: 149,
    period: "per month",
    description: "Ideal for growing businesses with multiple cloud services",
    features: [
      "Multi-cloud provider support",
      "Advanced dashboard and reporting",
      "Hourly infrastructure scans",
      "Security and compliance features",
      "Priority email support",
      "Up to 20 team members",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 499,
    period: "per month",
    description: "For organizations with complex cloud infrastructure needs",
    features: [
      "Unlimited cloud provider support",
      "Custom dashboard and reporting",
      "Real-time infrastructure monitoring",
      "Advanced security and compliance",
      "24/7 dedicated support",
      "Unlimited team members",
      "Full API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const calculatePrice = (basePrice: number) => {
    return annual ? Math.floor(basePrice * 10) : basePrice;
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div ref={sectionRef} className="container-custom">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4">Simple, Transparent Pricing</h2>
          <p className="paragraph mb-8">
            Choose the plan that works best for your team and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!annual ? "text-white" : "text-accent-100/70"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 bg-primary-800 rounded-full p-1 transition-colors duration-300"
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-primary-600 rounded-full transition-all duration-300 ${
                  annual ? "left-8" : "left-1"
                }`}
              ></span>
            </button>
            <span className={`text-sm flex items-center gap-1 ${annual ? "text-white" : "text-accent-100/70"}`}>
              Annual
              <span className="text-xs bg-primary-600 text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.5,
                    delay: 0.2 * index
                  } 
                }
              }}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary-700 to-primary-600 border-2 border-primary-600 relative shadow-lg shadow-primary-700/20"
                  : "bg-primary-800/30 backdrop-blur-md border border-primary-700/20"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-accent-100/70 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${calculatePrice(plan.price)}</span>
                  <span className="text-accent-100/70 ml-2">
                    {annual ? "per year" : plan.period}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-accent-100/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.cta === "Contact Sales" ? "#contact" : "#signup"}
                className={`w-full block text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white text-primary-900 hover:bg-accent-100"
                    : "bg-primary-600 text-white hover:bg-primary-700"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                duration: 0.5,
                delay: 0.8
              } 
            }
          }}
          className="mt-16 text-center bg-primary-800/30 backdrop-blur-md border border-primary-700/20 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
          <p className="text-accent-100/80 mb-6">
            Contact our sales team for a personalized quote tailored to your specific requirements.
          </p>
          <Link href="#contact" className="btn-outline">
            Contact Sales
          </Link>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary-700/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default PricingSection;