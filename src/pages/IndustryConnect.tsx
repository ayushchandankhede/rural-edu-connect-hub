
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, User, Briefcase, Building, MessageCircle } from "lucide-react";

const IndustryConnect = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  // Mock data for professionals
  const professionals = [
    {
      id: 1,
      name: "Dr. Ajay Sharma",
      title: "Software Engineering Manager",
      company: "TechSolutions India",
      industry: "Technology",
      expertise: ["Software Development", "Project Management", "AI"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=60",
      available: true,
    },
    {
      id: 2,
      name: "Priya Mehta",
      title: "Senior Financial Analyst",
      company: "Global Finance Corp",
      industry: "Finance",
      expertise: ["Investment Banking", "Financial Planning", "Risk Analysis"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=60",
      available: true,
    },
    {
      id: 3,
      name: "Rajiv Kumar",
      title: "Mechanical Engineer",
      company: "AutoTech Industries",
      industry: "Manufacturing",
      expertise: ["Product Design", "Manufacturing Processes", "Quality Control"],
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&auto=format&fit=crop&q=60",
      available: false,
    },
    {
      id: 4,
      name: "Dr. Meena Gupta",
      title: "Medical Director",
      company: "HealthFirst Hospital",
      industry: "Healthcare",
      expertise: ["Healthcare Management", "Medical Research", "Public Health"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=60",
      available: true,
    },
    {
      id: 5,
      name: "Vikram Singh",
      title: "Agricultural Scientist",
      company: "AgroResearch Ltd",
      industry: "Agriculture",
      expertise: ["Crop Science", "Sustainable Farming", "Agricultural Technology"],
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&auto=format&fit=crop&q=60",
      available: true,
    },
    {
      id: 6,
      name: "Nisha Patel",
      title: "Marketing Director",
      company: "Creative Minds Agency",
      industry: "Marketing",
      expertise: ["Digital Marketing", "Brand Management", "Market Analysis"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=60",
      available: false,
    },
    {
      id: 7,
      name: "Amit Verma",
      title: "Environmental Engineer",
      company: "EcoSolutions",
      industry: "Environmental",
      expertise: ["Waste Management", "Sustainable Design", "Environmental Compliance"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=60",
      available: true,
    },
    {
      id: 8,
      name: "Sunita Reddy",
      title: "Education Consultant",
      company: "Learning Paths Institute",
      industry: "Education",
      expertise: ["Curriculum Development", "Educational Technology", "Teacher Training"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=60",
      available: true,
    },
  ];

  // Get unique industries for filter
  const industries = [...new Set(professionals.map((pro) => pro.industry))];

  // Filter professionals based on search query and industry filter
  const filteredProfessionals = professionals.filter((pro) => {
    const matchesSearch = 
      pro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesIndustry = !industryFilter || pro.industry === industryFilter;
    
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-edu-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Industry Connect</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Connect with industry professionals, mentors, and experts who can guide you on your educational and career journey.
              </p>
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search by name, expertise, or company..."
                      className="pl-10 py-6 bg-white text-gray-900"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Select value={industryFilter} onValueChange={setIndustryFilter}>
                    <SelectTrigger className="h-12 bg-white text-gray-900">
                      <SelectValue placeholder="Filter by industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Industries</SelectItem>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professionals Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProfessionals.map((professional) => (
                <div key={professional.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-full h-48 object-cover"
                    />
                    <span 
                      className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full ${
                        professional.available 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {professional.available ? "Available" : "Unavailable"}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <User className="h-4 w-4 text-edu-blue-600 mr-1" />
                      <h3 className="text-lg font-semibold">{professional.name}</h3>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <p>{professional.title}</p>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Building className="h-4 w-4 mr-1" />
                      <p>{professional.company}</p>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-edu-blue-100 text-edu-blue-800 rounded-md mb-2 mr-2">
                        {professional.industry}
                      </span>
                      {professional.expertise.slice(0, 2).map((exp, index) => (
                        <span key={index} className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-md mb-2 mr-2">
                          {exp}
                        </span>
                      ))}
                      {professional.expertise.length > 2 && (
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-md mb-2">
                          +{professional.expertise.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <Button className="w-full flex items-center justify-center" variant="outline">
                      <MessageCircle className="mr-2 h-4 w-4" /> Request Mentoring
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProfessionals.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No professionals found matching your search criteria.</p>
              </div>
            )}

            <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Are you a Professional?</h3>
                  <p className="text-gray-700">
                    Join our platform to mentor and guide students from rural areas. Share your expertise and help shape the future of education.
                  </p>
                </div>
                <div className="md:w-1/3 md:text-right">
                  <Button className="btn-accent">Join As Mentor</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryConnect;
