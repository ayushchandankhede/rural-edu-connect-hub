
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MessageSquare, Users, School, Lightbulb, Star, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const FeedbackPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Thank you for your feedback! Your suggestions help us improve our platform.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-edu-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Share Your Feedback</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Help us improve our platform by sharing your thoughts, suggestions, and experiences.
                Your input is valuable in making our services better for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Form Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-lg font-semibold mb-4">Why Your Feedback Matters</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-edu-blue-100 flex items-center justify-center text-edu-blue-600">
                          <Users size={18} />
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">Community Driven</h4>
                        <p className="text-sm text-gray-500">Your insights help us build a platform that serves our entire educational community.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-edu-green-100 flex items-center justify-center text-edu-green-600">
                          <Lightbulb size={18} />
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">Continuous Improvement</h4>
                        <p className="text-sm text-gray-500">We're constantly evolving based on your feedback to enhance your experience.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-edu-orange-100 flex items-center justify-center text-edu-orange-600">
                          <School size={18} />
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">Educational Impact</h4>
                        <p className="text-sm text-gray-500">Your suggestions directly influence how we support rural education.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-edu-blue-50 p-6 rounded-lg border border-edu-blue-100">
                  <h3 className="text-lg font-semibold mb-3">Contact Support</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Have an issue that needs immediate attention? Our support team is here to help.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-edu-blue-100 flex items-center justify-center text-edu-blue-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email Support</p>
                        <p className="text-sm text-gray-500">support@ruraleduconnect.org</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-edu-blue-100 flex items-center justify-center text-edu-blue-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone Support</p>
                        <p className="text-sm text-gray-500">+91 987-654-3210</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-edu-blue-100 flex items-center justify-center text-edu-blue-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Support Hours</p>
                        <p className="text-sm text-gray-500">Mon-Fri, 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feedback Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Feedback Form</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id="fullName" placeholder="Enter your name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="userType">I am a</Label>
                          <Select>
                            <SelectTrigger id="userType">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="teacher">Teacher</SelectItem>
                              <SelectItem value="parent">Parent</SelectItem>
                              <SelectItem value="industry">Industry Professional</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="feedbackType">Type of Feedback</Label>
                          <Select>
                            <SelectTrigger id="feedbackType">
                              <SelectValue placeholder="Select feedback type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="suggestion">Suggestion</SelectItem>
                              <SelectItem value="bug">Bug Report</SelectItem>
                              <SelectItem value="appreciation">Appreciation</SelectItem>
                              <SelectItem value="complaint">Complaint</SelectItem>
                              <SelectItem value="feature">Feature Request</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="module">Which module are you providing feedback on?</Label>
                          <Select>
                            <SelectTrigger id="module">
                              <SelectValue placeholder="Select platform module" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="digital-library">Digital Library</SelectItem>
                              <SelectItem value="industry-connect">Industry Connect</SelectItem>
                              <SelectItem value="skill-tracker">Skill Tracker</SelectItem>
                              <SelectItem value="government-schemes">Government Schemes</SelectItem>
                              <SelectItem value="job-portal">Job Portal</SelectItem>
                              <SelectItem value="peer-learning">Peer Learning</SelectItem>
                              <SelectItem value="other">Overall Platform</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="feedback">Your Feedback</Label>
                          <Textarea
                            id="feedback"
                            placeholder="Please share your thoughts, suggestions, or experiences..."
                            rows={5}
                          />
                        </div>
                        
                        <div className="space-y-3">
                          <Label>How would you rate your experience?</Label>
                          <RadioGroup defaultValue="4" className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <div key={rating} className="flex flex-col items-center">
                                <RadioGroupItem
                                  value={rating.toString()}
                                  id={`rating-${rating}`}
                                  className="sr-only"
                                />
                                <Label
                                  htmlFor={`rating-${rating}`}
                                  className="cursor-pointer flex flex-col items-center space-y-1"
                                >
                                  <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 hover:bg-edu-blue-50 ${rating === 4 ? 'border-edu-blue-500 bg-edu-blue-50' : 'border-gray-200'}`}>
                                    <Star className={`h-5 w-5 ${rating === 4 ? 'text-edu-blue-500 fill-edu-blue-500' : 'text-gray-400'}`} />
                                  </div>
                                  <span className="text-xs">{rating}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="suggestions">Any suggestions for improvement?</Label>
                          <Textarea
                            id="suggestions"
                            placeholder="How can we make this platform better for you?"
                            rows={3}
                          />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="contact"
                            className="h-4 w-4 rounded border-gray-300 text-edu-blue-600 focus:ring-edu-blue-500"
                          />
                          <Label htmlFor="contact" className="text-sm text-gray-700">
                            I'm open to being contacted about my feedback
                          </Label>
                        </div>
                        
                        <Button type="submit" className="w-full bg-edu-blue-600 hover:bg-edu-blue-700">
                          Submit Feedback
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
                
                <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Recently Implemented Suggestions</h3>
                  <ul className="space-y-3">
                    <li className="flex space-x-3 items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-700">Improved mobile responsiveness for digital library resources</p>
                        <p className="text-sm text-gray-500">Implemented 2 weeks ago</p>
                      </div>
                    </li>
                    <li className="flex space-x-3 items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-700">Added filtering options for government schemes by eligibility criteria</p>
                        <p className="text-sm text-gray-500">Implemented 1 month ago</p>
                      </div>
                    </li>
                    <li className="flex space-x-3 items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-700">Enhanced video player with offline viewing capabilities for Peer Learning section</p>
                        <p className="text-sm text-gray-500">Implemented 2 months ago</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a href="#" className="text-edu-blue-600 text-sm flex items-center hover:underline">
                      View all implemented suggestions <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
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

export default FeedbackPage;
