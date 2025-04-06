
import React from "react";
import Hero from "@/components/home/Hero";
import MissionStatement from "@/components/home/MissionStatement";
import FeatureSection from "@/components/home/FeatureSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MissionStatement />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
