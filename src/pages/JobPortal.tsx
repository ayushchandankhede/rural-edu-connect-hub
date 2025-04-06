
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  Building,
  Upload,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Filter,
} from "lucide-react";

const JobPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  // Mock data for jobs
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "TechSolutions India Pvt Ltd",
      location: "Bengaluru, Karnataka",
      type: "Full-time",
      category: "Technology",
      salary: "₹5,00,000 - ₹8,00,000 per year",
      experience: "1-3 years",
      description: "We are looking for a skilled Software Developer to join our dynamic team. The ideal candidate will have experience in building web applications using modern frameworks.",
      responsibilities: [
        "Develop and maintain web applications",
        "Write clean, maintainable, and efficient code",
        "Collaborate with cross-functional teams",
        "Troubleshoot and debug applications",
        "Implement security and data protection measures"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or similar field",
        "1-3 years of experience in software development",
        "Proficiency in JavaScript, HTML, CSS",
        "Experience with React or Angular",
        "Knowledge of backend technologies (Node.js, Python, etc.)"
      ],
      postedDate: "2 days ago",
      logo: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=300&auto=format&fit=crop&q=60",
      isRemote: false,
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "DataInsights Corp",
      location: "Remote",
      type: "Full-time",
      category: "Data Science",
      salary: "₹4,50,000 - ₹6,00,000 per year",
      experience: "0-2 years",
      description: "We are seeking a detail-oriented Data Analyst to analyze large datasets and extract valuable insights to help guide business decisions.",
      responsibilities: [
        "Collect, process, and analyze data sets",
        "Create visualizations and dashboards",
        "Develop and maintain data analysis tools",
        "Collaborate with teams to implement data-driven solutions",
        "Present findings to stakeholders"
      ],
      requirements: [
        "Bachelor's degree in Statistics, Mathematics, or related field",
        "Proficiency in SQL and data visualization tools",
        "Experience with Excel and data analysis",
        "Knowledge of Python or R is a plus",
        "Strong problem-solving and analytical skills"
      ],
      postedDate: "1 week ago",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=300&auto=format&fit=crop&q=60",
      isRemote: true,
    },
    {
      id: 3,
      title: "Marketing Coordinator",
      company: "GlobalBrands Marketing",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      category: "Marketing",
      salary: "₹3,50,000 - ₹5,00,000 per year",
      experience: "1-2 years",
      description: "We're looking for a creative Marketing Coordinator to assist in planning and implementing marketing strategies for our clients.",
      responsibilities: [
        "Assist in developing marketing campaigns",
        "Coordinate with creative teams on content creation",
        "Manage social media accounts",
        "Track and analyze campaign performance",
        "Prepare reports on marketing activities"
      ],
      requirements: [
        "Bachelor's degree in Marketing or Communications",
        "Understanding of marketing principles",
        "Excellent written and verbal communication skills",
        "Experience with social media platforms",
        "Basic knowledge of graphic design tools is a plus"
      ],
      postedDate: "3 days ago",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&auto=format&fit=crop&q=60",
      isRemote: false,
    },
    {
      id: 4,
      title: "Mechanical Engineer",
      company: "InnoMech Engineering",
      location: "Pune, Maharashtra",
      type: "Full-time",
      category: "Engineering",
      salary: "₹4,00,000 - ₹6,50,000 per year",
      experience: "2-4 years",
      description: "We are looking for a skilled Mechanical Engineer to design and develop mechanical components and systems for various industrial applications.",
      responsibilities: [
        "Design mechanical products and systems",
        "Create detailed drawings and specifications",
        "Conduct testing and analysis of mechanical components",
        "Collaborate with cross-functional teams",
        "Ensure compliance with industry standards"
      ],
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "2+ years of experience in mechanical design",
        "Proficiency in CAD software (AutoCAD, SolidWorks)",
        "Knowledge of manufacturing processes",
        "Strong problem-solving abilities"
      ],
      postedDate: "5 days ago",
      logo: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=300&auto=format&fit=crop&q=60",
      isRemote: false,
    },
    {
      id: 5,
      title: "Content Writer",
      company: "ContentCraft Studios",
      location: "Remote",
      type: "Part-time",
      category: "Content Creation",
      salary: "₹15,000 - ₹25,000 per month",
      experience: "0-2 years",
      description: "We are seeking creative Content Writers to produce engaging content for various platforms including blogs, social media, and websites.",
      responsibilities: [
        "Create original content for multiple platforms",
        "Edit and proofread written material",
        "Research industry-relevant topics",
        "Follow SEO guidelines",
        "Meet deadlines and quality standards"
      ],
      requirements: [
        "Bachelor's degree in English, Journalism, or related field",
        "Excellent writing and grammar skills",
        "Understanding of SEO principles",
        "Ability to adapt writing style for different audiences",
        "Portfolio of writing samples"
      ],
      postedDate: "2 weeks ago",
      logo: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=300&auto=format&fit=crop&q=60",
      isRemote: true,
    },
    {
      id: 6,
      title: "Accountant",
      company: "Financial Solutions Ltd",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      category: "Finance",
      salary: "₹3,50,000 - ₹5,50,000 per year",
      experience: "1-3 years",
      description: "We're looking for an Accountant to handle financial transactions, maintain records, and ensure compliance with regulations.",
      responsibilities: [
        "Manage day-to-day accounting operations",
        "Prepare financial statements and reports",
        "Maintain accounts payable and receivable",
        "Ensure compliance with financial regulations",
        "Assist with budgeting and forecasting"
      ],
      requirements: [
        "Bachelor's degree in Accounting or Finance",
        "1+ years of accounting experience",
        "Knowledge of accounting principles and practices",
        "Experience with accounting software",
        "Attention to detail and analytical skills"
      ],
      postedDate: "1 week ago",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&auto=format&fit=crop&q=60",
      isRemote: false,
    },
    {
      id: 7,
      title: "Graphic Designer",
      company: "Creative Visuals Studio",
      location: "Remote",
      type: "Contract",
      category: "Design",
      salary: "₹30,000 - ₹45,000 per month",
      experience: "2-4 years",
      description: "We are looking for a talented Graphic Designer to create visual concepts for various digital and print media projects.",
      responsibilities: [
        "Create designs for digital and print media",
        "Develop illustrations, logos, and other design elements",
        "Ensure projects meet quality standards",
        "Collaborate with marketing and content teams",
        "Stay updated with design trends and technologies"
      ],
      requirements: [
        "Bachelor's degree in Graphic Design or related field",
        "2+ years of experience in graphic design",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio showcasing design work",
        "Understanding of design principles and typography"
      ],
      postedDate: "3 days ago",
      logo: "https://images.unsplash.com/photo-1634128882298-10fffa34012a?w=300&auto=format&fit=crop&q=60",
      isRemote: true,
    },
    {
      id: 8,
      title: "Teaching Assistant",
      company: "EduFirst Academy",
      location: "Chennai, Tamil Nadu",
      type: "Part-time",
      category: "Education",
      salary: "₹12,000 - ₹18,000 per month",
      experience: "0-1 years",
      description: "We are seeking a dedicated Teaching Assistant to support our teaching staff and help students with their educational development.",
      responsibilities: [
        "Assist teachers in classroom management",
        "Provide individual attention to students",
        "Prepare teaching materials and resources",
        "Grade assignments and provide feedback",
        "Participate in staff meetings and training"
      ],
      requirements: [
        "Bachelor's degree in Education or related field",
        "Passion for working with students",
        "Excellent communication skills",
        "Patience and ability to explain concepts clearly",
        "Basic computer skills"
      ],
      postedDate: "1 week ago",
      logo: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&auto=format&fit=crop&q=60",
      isRemote: false,
    },
  ];

  // Get unique locations, job types, and categories for filters
  const locations = [...new Set(jobs.map((job) => job.isRemote ? "Remote" : job.location.split(", ")[0]))];
  const jobTypes = [...new Set(jobs.map((job) => job.type))];
  const categories = [...new Set(jobs.map((job) => job.category))];

  // Filter jobs based on search query and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = !locationFilter || 
      (locationFilter === "Remote" ? job.isRemote : job.location.includes(locationFilter));
    
    const matchesJobType = !jobTypeFilter || job.type === jobTypeFilter;
    const matchesCategory = !categoryFilter || job.category === categoryFilter;
    
    return matchesSearch && matchesLocation && matchesJobType && matchesCategory;
  });

  // Toggle save job
  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-edu-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Job Portal</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Find career opportunities tailored for rural students and graduates. Upload your CV and connect with companies looking for fresh talent.
              </p>
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search for jobs by title, company, or keywords..."
                    className="pl-10 py-6 bg-white text-gray-900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="browse" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="browse" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Browse Jobs
                  </TabsTrigger>
                  <TabsTrigger value="saved" className="flex items-center gap-2">
                    <BookmarkCheck className="h-4 w-4" />
                    Saved Jobs ({savedJobs.length})
                  </TabsTrigger>
                  <TabsTrigger value="upload" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Upload CV
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="browse">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Filters */}
                  <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Filters</h3>
                      <button 
                        className="text-sm text-edu-blue-600 hover:underline"
                        onClick={() => {
                          setLocationFilter('');
                          setJobTypeFilter('');
                          setCategoryFilter('');
                        }}
                      >
                        Clear All
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                          Location
                        </label>
                        <Select value={locationFilter} onValueChange={setLocationFilter}>
                          <SelectTrigger>
                            <SelectValue placeholder="Any Location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Any Location</SelectItem>
                            {locations.map((location) => (
                              <SelectItem key={location} value={location}>
                                {location}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                          Job Type
                        </label>
                        <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                          <SelectTrigger>
                            <SelectValue placeholder="Any Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Any Type</SelectItem>
                            {jobTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                          Category
                        </label>
                        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                          <SelectTrigger>
                            <SelectValue placeholder="Any Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Any Category</SelectItem>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="flex items-center justify-center w-full py-2 bg-edu-blue-50 text-edu-blue-600 rounded-md hover:bg-edu-blue-100">
                        <Filter className="h-4 w-4 mr-2" />
                        Apply Filters
                      </button>
                    </div>
                  </div>
                  
                  {/* Jobs Listing */}
                  <div className="lg:col-span-3">
                    <div className="mb-4 flex justify-between items-center">
                      <h2 className="text-lg font-medium text-gray-900">
                        {filteredJobs.length} jobs available
                      </h2>
                      <span className="text-sm text-gray-500">
                        Sorted by: Relevance
                      </span>
                    </div>
                    
                    {filteredJobs.length > 0 ? (
                      <div className="space-y-4">
                        {filteredJobs.map((job) => (
                          <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                            <div className="p-6">
                              <div className="sm:flex sm:items-start sm:justify-between">
                                <div className="sm:flex sm:items-start">
                                  <div className="hidden sm:block mr-4">
                                    <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                                      <img
                                        src={job.logo}
                                        alt={job.company}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                      <Building className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                      <span>{job.company}</span>
                                    </div>
                                    <div className="mt-1 flex items-center text-sm text-gray-500">
                                      <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                      <span>{job.location}</span>
                                      {job.isRemote && (
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                          Remote
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-4 sm:mt-0 flex items-center">
                                  <button
                                    onClick={() => toggleSaveJob(job.id)}
                                    className="text-gray-400 hover:text-edu-blue-500 focus:outline-none"
                                  >
                                    {savedJobs.includes(job.id) ? (
                                      <BookmarkCheck className="h-5 w-5 text-edu-blue-500" />
                                    ) : (
                                      <Bookmark className="h-5 w-5" />
                                    )}
                                  </button>
                                </div>
                              </div>
                              
                              <div className="mt-4">
                                <div className="flex flex-wrap gap-2 mb-4">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-edu-blue-100 text-edu-blue-800">
                                    {job.category}
                                  </span>
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {job.type}
                                  </span>
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {job.experience}
                                  </span>
                                </div>
                                
                                <p className="text-gray-600 line-clamp-2 mb-4">
                                  {job.description}
                                </p>
                                
                                <div className="flex flex-wrap items-center justify-between">
                                  <div className="flex flex-col sm:flex-row sm:items-center">
                                    <span className="text-edu-blue-600 font-medium">
                                      {job.salary}
                                    </span>
                                    <span className="hidden sm:inline mx-2">•</span>
                                    <span className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                                      <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                      Posted {job.postedDate}
                                    </span>
                                  </div>
                                  <div className="mt-3 sm:mt-0">
                                    <Button className="bg-edu-blue-600 hover:bg-edu-blue-700">View Details</Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <Search className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                        <p className="text-gray-500 mb-4">
                          No jobs match your current search criteria. Try adjusting your filters or search term.
                        </p>
                        <Button 
                          onClick={() => {
                            setSearchQuery('');
                            setLocationFilter('');
                            setJobTypeFilter('');
                            setCategoryFilter('');
                          }}
                        >
                          Clear All Filters
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="saved">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Saved Jobs</h2>
                  
                  {savedJobs.length > 0 ? (
                    <div className="space-y-4">
                      {jobs
                        .filter(job => savedJobs.includes(job.id))
                        .map(job => (
                          <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium text-gray-900">{job.title}</h3>
                                <p className="text-gray-600 text-sm">{job.company}</p>
                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  <span>{job.location}</span>
                                  {job.isRemote && (
                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      Remote
                                    </span>
                                  )}
                                </div>
                              </div>
                              <button
                                onClick={() => toggleSaveJob(job.id)}
                                className="text-edu-blue-500 hover:text-edu-blue-700"
                              >
                                <BookmarkCheck className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="mt-3 flex justify-between">
                              <span className="text-sm text-gray-500">Saved on {new Date().toLocaleDateString()}</span>
                              <Button variant="outline" size="sm">View Job</Button>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Bookmark className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No saved jobs</h3>
                      <p className="text-gray-500 mb-4">
                        You haven't saved any jobs yet. Browse jobs and click the bookmark icon to save them for later.
                      </p>
                      <Button
                        onClick={() => document.querySelector('[data-value="browse"]')?.click()}
                      >
                        Browse Jobs
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="upload">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Upload Your CV</h2>
                  
                  <div className="mb-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Drag & Drop your CV here</h3>
                      <p className="text-sm text-gray-500 mb-4">Supports PDF, DOCX, up to 5MB</p>
                      <Button>
                        <Upload className="mr-2 h-4 w-4" /> Browse Files
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input id="fullname" placeholder="Enter your full name" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                        Key Skills (comma separated)
                      </label>
                      <Input id="skills" placeholder="e.g., JavaScript, Python, Communication" />
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Experience Level
                      </label>
                      <Select>
                        <SelectTrigger id="experience">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level (0-1 years)</SelectItem>
                          <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                          <SelectItem value="mid">Mid-Level (3-5 years)</SelectItem>
                          <SelectItem value="senior">Senior (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                    <Button className="bg-edu-blue-600 hover:bg-edu-blue-700 px-8">
                      Submit Application
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 bg-white rounded-xl p-8 border border-edu-blue-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">For Employers</h3>
                  <p className="text-gray-700">
                    Are you looking to hire talented students and graduates from rural areas? Post your job listings and connect with skilled candidates.
                  </p>
                </div>
                <div className="md:w-1/3 md:text-right">
                  <Button className="bg-edu-orange-500 hover:bg-edu-orange-600 text-white">
                    Post a Job
                  </Button>
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

export default JobPortal;
