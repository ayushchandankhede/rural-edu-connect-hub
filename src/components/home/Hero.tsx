
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-edu-blue-800 to-edu-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Empowering Rural Education Through Technology
            </h1>
            <p className="text-xl text-blue-100 max-w-lg mb-8">
              Bridging the educational divide with digital resources, industry connections, and skill development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-edu-orange-500 hover:bg-edu-orange-600 text-white">
                <Link to="/digital-library">
                  Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-edu-blue-800">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-edu-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-edu-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-edu-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img
                  className="rounded-lg shadow-2xl"
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60" 
                  alt="Students learning with technology"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
