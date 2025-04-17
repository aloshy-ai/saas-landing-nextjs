"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import IntegrationSection from "../components/IntegrationSection";
import TestimonialSection from "../components/TestimonialSection";
import PricingSection from "../components/PricingSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <IntegrationSection />
      <TestimonialSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}