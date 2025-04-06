
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Calendar, FileText, Info, ExternalLink, Download } from "lucide-react";

const GovernmentSchemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [eligibilityFilter, setEligibilityFilter] = useState("");

  // Mock data for government schemes
  const schemes = [
    {
      id: 1,
      title: "National Scholarship Portal (NSP)",
      category: "Scholarship",
      eligibility: "All Students",
      authority: "Ministry of Education",
      description: "A one-stop platform for all scholarship schemes provided by Central and State Governments for students.",
      deadline: "October 31, 2023",
      amount: "₹5,000 - ₹100,000 per year",
      applicationProcess: [
        "Register on the National Scholarship Portal",
        "Complete your academic and personal details",
        "Upload required documents",
        "Submit application before deadline"
      ],
      requiredDocuments: [
        "Aadhaar Card",
        "Income Certificate",
        "Caste Certificate (if applicable)",
        "Previous academic marksheets",
        "Bank Account details"
      ],
      website: "https://scholarships.gov.in",
    },
    {
      id: 2,
      title: "Prime Minister's Special Scholarship Scheme (PMSSS)",
      category: "Scholarship",
      eligibility: "College Students",
      authority: "All India Council for Technical Education (AICTE)",
      description: "Scholarship scheme to support students from rural areas for pursuing higher education in professional courses.",
      deadline: "August 15, 2023",
      amount: "₹75,000 per year for academic expenses + ₹1,00,000 per year for maintenance",
      applicationProcess: [
        "Register on AICTE portal",
        "Complete application form",
        "Appear for counseling if shortlisted",
        "Join allotted institution"
      ],
      requiredDocuments: [
        "Class 10th and 12th marksheets",
        "Domicile certificate",
        "Income certificate",
        "Aadhaar card",
        "Bank account details"
      ],
      website: "https://www.aicte-india.org/schemes/students-development-schemes/PMSSS",
    },
    {
      id: 3,
      title: "Education Loan Interest Subsidy Scheme",
      category: "Loan",
      eligibility: "College Students",
      authority: "Ministry of Education",
      description: "Government provides full interest subsidy on education loans during the moratorium period for economically weaker sections.",
      deadline: "Ongoing",
      amount: "Interest subsidy for loans up to ₹7.5 lakhs",
      applicationProcess: [
        "Apply for education loan at any scheduled bank",
        "Submit income proof and other documents",
        "Bank will verify eligibility for subsidy",
        "Interest subsidy will be credited directly to loan account"
      ],
      requiredDocuments: [
        "Income certificate (less than ₹4.5 lakhs per annum)",
        "Admission proof in recognized institution",
        "Loan sanction letter",
        "Aadhaar card",
        "Bank account details"
      ],
      website: "https://www.education.gov.in/en/interest-subsidy",
    },
    {
      id: 4,
      title: "Digital India Internship Scheme",
      category: "Internship",
      eligibility: "College Students",
      authority: "Ministry of Electronics & Information Technology",
      description: "Provides opportunities to students to work on short-term projects in various digital initiatives.",
      deadline: "May 30, 2023",
      amount: "₹10,000 per month stipend",
      applicationProcess: [
        "Register on the Digital India Internship portal",
        "Select preferred project domains",
        "Upload resume and academic details",
        "Appear for interview if shortlisted"
      ],
      requiredDocuments: [
        "Resume/CV",
        "College ID card",
        "No Objection Certificate from institution",
        "Aadhaar card",
        "Bank account details"
      ],
      website: "https://digitalindia.gov.in/internship",
    },
    {
      id: 5,
      title: "Startup India Seed Fund Scheme",
      category: "Grant",
      eligibility: "Graduates",
      authority: "Department for Promotion of Industry and Internal Trade",
      description: "Financial assistance and mentorship to startups with innovative ideas addressing real challenges.",
      deadline: "Ongoing",
      amount: "Up to ₹20 lakhs for proof of concept, and up to ₹50 lakhs for market entry",
      applicationProcess: [
        "Register your startup on Startup India portal",
        "Apply for the Seed Fund Scheme",
        "Submit detailed business plan",
        "Present to evaluation committee if shortlisted"
      ],
      requiredDocuments: [
        "DPIIT recognition certificate",
        "Business plan",
        "Incorporation certificate",
        "Founder details",
        "Bank account details"
      ],
      website: "https://www.startupindia.gov.in/seedfund",
    },
    {
      id: 6,
      title: "National Rural Livelihood Mission - Skill Development",
      category: "Skill Development",
      eligibility: "All Students",
      authority: "Ministry of Rural Development",
      description: "Provides skill training to rural youth to enhance their employment opportunities.",
      deadline: "Ongoing",
      amount: "Free training + stipend of ₹3,000 - ₹5,000 during training period",
      applicationProcess: [
        "Contact local NRLM office",
        "Register for available skill training programs",
        "Complete application form",
        "Attend orientation program"
      ],
      requiredDocuments: [
        "Identity proof",
        "Address proof",
        "Educational certificates",
        "Aadhaar card",
        "Bank account details",
        "2 passport size photographs"
      ],
      website: "https://nrlm.gov.in/skilltraining",
    },
    {
      id: 7,
      title: "Pradhan Mantri Vidya Lakshmi Portal",
      category: "Loan",
      eligibility: "College Students",
      authority: "Ministry of Finance",
      description: "A single window electronic platform for students to apply for education loans from multiple banks.",
      deadline: "Ongoing",
      amount: "Varies based on bank and course",
      applicationProcess: [
        "Register on Vidya Lakshmi Portal",
        "Fill Common Education Loan Application Form",
        "Select up to three banks for loan application",
        "Track application status online"
      ],
      requiredDocuments: [
        "Admission letter from institution",
        "Academic records",
        "Income proof of parents/guardian",
        "Collateral documents (if required)",
        "Aadhaar card"
      ],
      website: "https://www.vidyalakshmi.co.in",
    },
    {
      id: 8,
      title: "e-Yantra Robotics Competition",
      category: "Competition",
      eligibility: "College Students",
      authority: "IIT Bombay and Ministry of Education",
      description: "Robotics competition encouraging students to solve real-world problems with embedded systems and robotics.",
      deadline: "September 30, 2023",
      amount: "Robotics kits, cash prizes up to ₹2,00,000",
      applicationProcess: [
        "Form a team of 4 students",
        "Register on e-Yantra website",
        "Clear online test to qualify",
        "Work on assigned robotics theme"
      ],
      requiredDocuments: [
        "College ID cards of all team members",
        "No Objection Certificate from college",
        "Team registration form"
      ],
      website: "https://e-yantra.org",
    },
  ];

  // Get unique categories and eligibilities for filters
  const categories = [...new Set(schemes.map((scheme) => scheme.category))];
  const eligibilities = [...new Set(schemes.map((scheme) => scheme.eligibility))];

  // Filter schemes based on search query and filters
  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch = 
      scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.authority.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !categoryFilter || scheme.category === categoryFilter;
    const matchesEligibility = !eligibilityFilter || scheme.eligibility === eligibilityFilter;
    
    return matchesSearch && matchesCategory && matchesEligibility;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-edu-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Government Schemes</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Discover scholarships, grants, loans, and other government initiatives designed to support your educational journey.
              </p>
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search schemes by name, description or authority..."
                      className="pl-10 py-6 bg-white text-gray-900"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="h-12 bg-white text-gray-900">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={eligibilityFilter} onValueChange={setEligibilityFilter}>
                    <SelectTrigger className="h-12 bg-white text-gray-900">
                      <SelectValue placeholder="Filter by eligibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Eligibilities</SelectItem>
                      {eligibilities.map((eligibility) => (
                        <SelectItem key={eligibility} value={eligibility}>
                          {eligibility}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Button 
                    className="w-full h-12 bg-edu-orange-500 hover:bg-edu-orange-600 text-white"
                    onClick={() => {
                      setSearchQuery('');
                      setCategoryFilter('');
                      setEligibilityFilter('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schemes Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Available Schemes</h2>
              <p className="text-gray-600 mt-2">
                Found {filteredSchemes.length} schemes matching your criteria
              </p>
            </div>
            
            {filteredSchemes.length > 0 ? (
              <div className="space-y-6">
                {filteredSchemes.map((scheme) => (
                  <div key={scheme.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex space-x-2 mb-2">
                            <span className="inline-block px-2 py-1 text-xs font-semibold bg-edu-blue-100 text-edu-blue-800 rounded-md">
                              {scheme.category}
                            </span>
                            <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-md">
                              {scheme.eligibility}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{scheme.title}</h3>
                          <p className="text-gray-600">by {scheme.authority}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center text-edu-orange-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">Deadline: {scheme.deadline}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-700">{scheme.description}</p>
                      
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="details">
                          <AccordionTrigger>View Details</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                  <Info className="h-4 w-4 mr-2 text-edu-blue-600" /> 
                                  Benefits
                                </h4>
                                <p className="text-gray-700">{scheme.amount}</p>
                                
                                <h4 className="font-semibold text-gray-900 mt-4 mb-2 flex items-center">
                                  <FileText className="h-4 w-4 mr-2 text-edu-blue-600" /> 
                                  Required Documents
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                  {scheme.requiredDocuments.map((doc, index) => (
                                    <li key={index}>{doc}</li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                  <Calendar className="h-4 w-4 mr-2 text-edu-blue-600" /> 
                                  Application Process
                                </h4>
                                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                  {scheme.applicationProcess.map((step, index) => (
                                    <li key={index}>{step}</li>
                                  ))}
                                </ol>
                                
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                  <Button asChild className="w-full">
                                    <a href={scheme.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                      <ExternalLink className="mr-2 h-4 w-4" />
                                      Visit Official Website
                                    </a>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No schemes found</h3>
                <p className="text-gray-500">
                  No government schemes match your current search criteria. Try adjusting your filters or search term.
                </p>
                <Button 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setCategoryFilter('');
                    setEligibilityFilter('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
            
            <div className="mt-12 bg-white rounded-xl p-8 border border-edu-blue-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Help Applying?</h3>
                  <p className="text-gray-700">
                    Our counselors can guide you through the application process for any of these schemes. Schedule a free consultation today.
                  </p>
                </div>
                <div className="md:w-1/3 md:text-right">
                  <Button className="bg-edu-blue-600 hover:bg-edu-blue-700 text-white">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="flex items-center mx-auto">
                <Download className="mr-2 h-4 w-4" /> Download Complete Schemes Guide (PDF)
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GovernmentSchemes;
