
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Laptop, Smartphone, Tablet, Monitor, HardDrive, Check, Gift } from "lucide-react";
import { toast } from "sonner";

const Donation = () => {
  const handleDeviceDonation = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your device donation request! Our team will contact you soon to arrange pickup/delivery.");
  };

  const handleFinancialDonation = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your financial contribution! Your donation will help bridge the educational divide.");
  };

  // Impact statistics
  const impactStats = [
    {
      count: "1,250+",
      label: "Devices Donated",
      description: "Laptops, tablets, and smartphones donated to students in need"
    },
    {
      count: "85+",
      label: "Rural Schools",
      description: "Schools across rural India benefiting from donated devices"
    },
    {
      count: "5,000+",
      label: "Students Impacted",
      description: "Students with improved access to digital education"
    },
    {
      count: "₹15L+",
      label: "Funds Raised",
      description: "Financial contributions supporting connectivity and maintenance"
    }
  ];

  // Device requirements
  const deviceRequirements = [
    {
      type: "Laptops",
      icon: <Laptop className="h-8 w-8 text-edu-blue-600" />,
      requirements: [
        "Less than 7 years old",
        "Functional battery",
        "Minimum 4GB RAM",
        "Working charger included"
      ]
    },
    {
      type: "Smartphones",
      icon: <Smartphone className="h-8 w-8 text-edu-blue-600" />,
      requirements: [
        "Less than 5 years old",
        "Minimum Android 8.0 or iOS 12",
        "Working screen without cracks",
        "Minimum 16GB storage"
      ]
    },
    {
      type: "Tablets",
      icon: <Tablet className="h-8 w-8 text-edu-blue-600" />,
      requirements: [
        "Less than 6 years old",
        "Working touchscreen",
        "Minimum 8GB storage",
        "Charger included"
      ]
    },
    {
      type: "Desktops",
      icon: <Monitor className="h-8 w-8 text-edu-blue-600" />,
      requirements: [
        "Less than 8 years old",
        "Dual-core processor minimum",
        "Minimum 4GB RAM",
        "Monitor and peripherals included"
      ]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "The donated laptop has transformed my learning experience. I can now access online resources and participate in digital classes from my village.",
      name: "Priya Kumar",
      role: "Student, Class 11",
      location: "Rajasthan"
    },
    {
      quote: "With the donated tablets, our school has been able to create a mini computer lab. Students are now learning digital skills that were previously inaccessible.",
      name: "Ramesh Patel",
      role: "Headmaster",
      location: "Rural School, Gujarat"
    },
    {
      quote: "The financial donation helped us acquire internet connectivity for our school. Now students can access educational resources and broaden their horizons.",
      name: "Anita Sharma",
      role: "School Administrator",
      location: "Madhya Pradesh"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-edu-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Donation Portal</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Help bridge the digital divide by donating your working devices or contributing financially to support rural education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-white text-edu-blue-800 hover:bg-blue-50"
                  onClick={() => document.getElementById("donate-device")?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Gift className="mr-2 h-4 w-4" />
                  Donate a Device
                </Button>
                <Button
                  className="bg-edu-orange-500 hover:bg-edu-orange-600 text-white"
                  onClick={() => document.getElementById("financial-contribution")?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <HardDrive className="mr-2 h-4 w-4" />
                  Financial Contribution
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Our Impact So Far</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Together, we've made significant strides in bridging the digital divide for rural education. Here's what we've achieved together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-edu-blue-600 mb-2">{stat.count}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device Requirements Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Device Requirements</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We accept working devices that meet these minimum requirements to ensure they can be effectively used by students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deviceRequirements.map((device, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center mb-6">
                    <div className="h-16 w-16 bg-edu-blue-50 rounded-full flex items-center justify-center mb-3">
                      {device.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{device.type}</h3>
                  </div>
                  <ul className="space-y-3">
                    {device.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-edu-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-edu-blue-50 border border-edu-blue-100 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-edu-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-edu-blue-800">Important Note</h3>
                  <p className="mt-1 text-edu-blue-700">
                    All devices will be wiped clean of data before being distributed to schools and students. Please back up any important data before donating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Forms Section */}
        <div className="py-12 bg-white" id="donate-device">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="device" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList>
                  <TabsTrigger value="device" className="flex items-center gap-2">
                    <Laptop className="h-4 w-4" />
                    Donate a Device
                  </TabsTrigger>
                  <TabsTrigger value="financial" id="financial-contribution" className="flex items-center gap-2">
                    <Gift className="h-4 w-4" />
                    Financial Contribution
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="device">
                <div className="max-w-3xl mx-auto">
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleDeviceDonation}>
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
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" placeholder="Enter your phone number" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="city">City</Label>
                              <Input id="city" placeholder="Enter your city" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Device Type</Label>
                            <RadioGroup defaultValue="laptop" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div>
                                <RadioGroupItem value="laptop" id="laptop" className="sr-only" />
                                <Label
                                  htmlFor="laptop"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <Laptop className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">Laptop</span>
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="smartphone" id="smartphone" className="sr-only" />
                                <Label
                                  htmlFor="smartphone"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <Smartphone className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">Smartphone</span>
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="tablet" id="tablet" className="sr-only" />
                                <Label
                                  htmlFor="tablet"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <Tablet className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">Tablet</span>
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="desktop" id="desktop" className="sr-only" />
                                <Label
                                  htmlFor="desktop"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <Monitor className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">Desktop</span>
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="deviceSpecs">Device Specifications</Label>
                            <Textarea
                              id="deviceSpecs"
                              placeholder="Please provide details about your device (brand, model, age, specifications, condition, etc.)"
                              rows={3}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="preferredMethod">Preferred Donation Method</Label>
                            <Select>
                              <SelectTrigger id="preferredMethod">
                                <SelectValue placeholder="Select donation method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pickup">Pickup from my location</SelectItem>
                                <SelectItem value="dropoff">Drop-off at collection center</SelectItem>
                                <SelectItem value="courier">Send via courier</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="additionalNotes">Additional Notes</Label>
                            <Textarea
                              id="additionalNotes"
                              placeholder="Any additional information you'd like to share"
                              rows={2}
                            />
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="termsDevice"
                              className="h-4 w-4 rounded border-gray-300 text-edu-blue-600 focus:ring-edu-blue-500"
                              required
                            />
                            <Label htmlFor="termsDevice" className="text-sm text-gray-700">
                              I confirm that the device is in working condition and I have backed up/removed all personal data
                            </Label>
                          </div>
                          
                          <Button type="submit" className="w-full bg-edu-blue-600 hover:bg-edu-blue-700">
                            Submit Donation Request
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="financial">
                <div className="max-w-3xl mx-auto">
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleFinancialDonation}>
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <Label>Select Donation Amount</Label>
                            <RadioGroup defaultValue="1000" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div>
                                <RadioGroupItem value="500" id="amount-500" className="sr-only" />
                                <Label
                                  htmlFor="amount-500"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <span className="text-xl font-bold">₹500</span>
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="1000" id="amount-1000" className="sr-only" />
                                <Label
                                  htmlFor="amount-1000"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <span className="text-xl font-bold">₹1,000</span>
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="5000" id="amount-5000" className="sr-only" />
                                <Label
                                  htmlFor="amount-5000"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <span className="text-xl font-bold">₹5,000</span>
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                                <Label
                                  htmlFor="amount-custom"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <span className="text-xl font-bold">Custom</span>
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="customAmount">Custom Amount (₹)</Label>
                            <Input id="customAmount" type="number" placeholder="Enter amount" min="100" />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="donorName">Full Name</Label>
                              <Input id="donorName" placeholder="Enter your name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="donorEmail">Email Address</Label>
                              <Input id="donorEmail" type="email" placeholder="Enter your email" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="donorPhone">Phone Number</Label>
                              <Input id="donorPhone" placeholder="Enter your phone number" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="donorCity">City</Label>
                              <Input id="donorCity" placeholder="Enter your city" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="donationPurpose">Donation Purpose (Optional)</Label>
                            <Select>
                              <SelectTrigger id="donationPurpose">
                                <SelectValue placeholder="Select purpose" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Fund</SelectItem>
                                <SelectItem value="devices">Device Procurement</SelectItem>
                                <SelectItem value="connectivity">Internet Connectivity</SelectItem>
                                <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                                <SelectItem value="training">Teacher Training</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="anonymousDonation"
                              className="h-4 w-4 rounded border-gray-300 text-edu-blue-600 focus:ring-edu-blue-500"
                            />
                            <Label htmlFor="anonymousDonation" className="text-sm text-gray-700">
                              Make my donation anonymous
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="taxReceipt"
                              className="h-4 w-4 rounded border-gray-300 text-edu-blue-600 focus:ring-edu-blue-500"
                            />
                            <Label htmlFor="taxReceipt" className="text-sm text-gray-700">
                              I would like to receive a tax receipt for this donation
                            </Label>
                          </div>
                          
                          <Button type="submit" className="w-full bg-edu-blue-600 hover:bg-edu-blue-700">
                            Proceed to Payment
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Impact Stories</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                See how your donations are making a real difference in the lives of students across rural India.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-8 w-8 text-edu-blue-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.96.41-3.016.341-1.167.947-2.387 1.561-3.507.368-.667.22-1.5-.33-2.008-.53-.508-1.365-.589-2-.205C4.92 5.051 3.66 6.749 2.865 8.497c-.586 1.283-.906 2.65-.906 3.864 0 1.765.547 3.298 1.67 4.684.95 1.171 2.189 1.8 3.567 1.8 1.145 0 2.12-.374 2.85-1.104.76-.77 1.145-1.822 1.145-3zM21.717 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.7-1.327-.832-.55-.128-1.07-.128-1.54-.019-.16-.95.1-1.96.409-3.016.341-1.167.947-2.387 1.562-3.507.368-.667.22-1.5-.33-2.008-.53-.508-1.356-.598-2-.205-1.356 1.067-2.616 2.765-3.412 4.513-.586 1.283-.906 2.65-.906 3.864 0 1.765.547 3.298 1.67 4.684.95 1.171 2.189 1.8 3.568 1.8 1.144 0 2.12-.383 2.85-1.104.76-.77 1.145-1.822 1.145-3z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-edu-blue-100 rounded-full flex items-center justify-center text-edu-blue-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How will my donated device be used?</h3>
                <p className="text-gray-700">
                  Your donated device will be refurbished if necessary, loaded with educational software, and distributed to a student or school in a rural area where access to technology is limited. Each device typically benefits multiple students.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Will my data be secure when I donate a device?</h3>
                <p className="text-gray-700">
                  We follow industry-standard data wiping procedures on all donated devices. However, we strongly recommend that you back up any important files and perform a factory reset before donating to ensure your personal data is removed.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my financial contribution tax-deductible?</h3>
                <p className="text-gray-700">
                  Yes, all financial donations are eligible for tax deductions under Section 80G of the Income Tax Act. You will receive a receipt that can be used for tax purposes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I specify which school or region receives my donation?</h3>
                <p className="text-gray-700">
                  While we allocate resources based on assessed needs, donors who contribute significant amounts or multiple devices can indicate preferences for specific regions. Please contact our team directly to discuss such arrangements.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if my device isn't working properly?</h3>
                <p className="text-gray-700">
                  Our technical team evaluates all donated devices. If a device isn't functioning properly but can be repaired cost-effectively, we'll refurbish it. If it's beyond repair, we'll responsibly recycle it and ensure no environmental harm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-edu-blue-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Together, we can bridge the digital divide and ensure quality education reaches every corner of rural India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-white text-edu-blue-800 hover:bg-blue-50"
                onClick={() => document.getElementById("donate-device")?.scrollIntoView({ behavior: 'smooth' })}
              >
                Donate Now
              </Button>
              <Button className="bg-edu-orange-500 hover:bg-edu-orange-600 text-white">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;
