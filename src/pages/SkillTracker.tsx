
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { Download, ArrowUpRight, Award, CircleCheck } from "lucide-react";

const SkillTracker = () => {
  // Mock data for skills
  const technicalSkills = [
    { name: "Programming", value: 75 },
    { name: "Data Analysis", value: 60 },
    { name: "Web Development", value: 85 },
    { name: "Mobile Development", value: 45 },
    { name: "Database Management", value: 55 },
  ];

  const softSkills = [
    { name: "Communication", value: 80 },
    { name: "Teamwork", value: 90 },
    { name: "Problem Solving", value: 70 },
    { name: "Critical Thinking", value: 65 },
    { name: "Leadership", value: 50 },
  ];

  const industryBenchmark = [
    { name: "Programming", user: 75, average: 65, top: 90 },
    { name: "Data Analysis", user: 60, average: 55, top: 85 },
    { name: "Web Dev", user: 85, average: 60, top: 95 },
    { name: "Mobile Dev", user: 45, average: 50, top: 80 },
    { name: "Database", user: 55, average: 60, top: 90 },
  ];

  const progressData = [
    { name: "Jan", value: 35 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 50 },
    { name: "May", value: 55 },
    { name: "Jun", value: 65 },
    { name: "Jul", value: 70 },
    { name: "Aug", value: 75 },
  ];

  const recommendedCourses = [
    {
      id: 1,
      title: "Advanced JavaScript Programming",
      provider: "Tech Academy",
      duration: "8 weeks",
      level: "Intermediate",
      relevance: 90,
    },
    {
      id: 2,
      title: "Mobile App Development with React Native",
      provider: "App Creators",
      duration: "10 weeks",
      level: "Advanced",
      relevance: 85,
    },
    {
      id: 3,
      title: "Data Analysis with Python",
      provider: "Data Science Institute",
      duration: "6 weeks",
      level: "Intermediate",
      relevance: 80,
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      issuer: "Tech Academy",
      date: "June 2023",
      score: 92,
      verified: true,
    },
    {
      id: 2,
      title: "Introduction to Programming",
      issuer: "Code Institute",
      date: "March 2023",
      score: 88,
      verified: true,
    },
    {
      id: 3,
      title: "Communication Skills Workshop",
      issuer: "Soft Skills Center",
      date: "January 2023",
      score: 95,
      verified: false,
    },
  ];

  // Colors for charts
  const COLORS = ["#3B82F6", "#F97316", "#22C55E", "#EAB308", "#8B5CF6"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-edu-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Skill Tracker Dashboard</h1>
                <p className="text-blue-100 max-w-2xl mb-4">
                  Track your progress, identify your strengths, and discover areas for improvement.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button className="bg-white text-edu-blue-800 hover:bg-blue-50">
                  <Download className="mr-2 h-4 w-4" /> Download Report
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overall Progress */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Overall Progress</h2>
                <span className="text-sm text-gray-500">Last updated: Aug 15, 2023</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-edu-blue-50 p-4 rounded-lg border border-edu-blue-100">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Technical Skills</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span>Overall Proficiency</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <Progress value={68} className="h-2 mb-4" />
                  <div className="text-sm text-edu-blue-600">
                    <ArrowUpRight className="inline h-4 w-4 mr-1" />
                    12% improvement since last month
                  </div>
                </div>
                
                <div className="bg-edu-orange-50 p-4 rounded-lg border border-edu-orange-100">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Soft Skills</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span>Overall Proficiency</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <Progress value={75} className="h-2 mb-4" />
                  <div className="text-sm text-edu-orange-600">
                    <ArrowUpRight className="inline h-4 w-4 mr-1" />
                    8% improvement since last month
                  </div>
                </div>
                
                <div className="bg-edu-green-50 p-4 rounded-lg border border-edu-green-100">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Industry Readiness</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span>Overall Rating</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <Progress value={65} className="h-2 mb-4" />
                  <div className="text-sm text-edu-green-600">
                    <ArrowUpRight className="inline h-4 w-4 mr-1" />
                    5% improvement since last month
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-md font-medium text-gray-700 mb-3">Progress Over Time</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Detailed Skills Analysis */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-6">Skills Analysis</h2>
              
              <Tabs defaultValue="technical">
                <TabsList className="mb-6">
                  <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                  <TabsTrigger value="benchmark">Industry Benchmark</TabsTrigger>
                </TabsList>
                
                <TabsContent value="technical">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={technicalSkills}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {technicalSkills.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Legend layout="vertical" verticalAlign="middle" align="right" />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-4">Skill Breakdown</h4>
                      {technicalSkills.map((skill, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-center mb-1">
                            <span>{skill.name}</span>
                            <span className="font-semibold">{skill.value}%</span>
                          </div>
                          <Progress value={skill.value} className="h-2" 
                            style={{ backgroundColor: COLORS[index % COLORS.length] + '33', 
                                    '--primary': COLORS[index % COLORS.length] }} 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="soft">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={softSkills}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {softSkills.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Legend layout="vertical" verticalAlign="middle" align="right" />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-4">Skill Breakdown</h4>
                      {softSkills.map((skill, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-center mb-1">
                            <span>{skill.name}</span>
                            <span className="font-semibold">{skill.value}%</span>
                          </div>
                          <Progress value={skill.value} className="h-2" 
                            style={{ backgroundColor: COLORS[index % COLORS.length] + '33', 
                                    '--primary': COLORS[index % COLORS.length] }} 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="benchmark">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={industryBenchmark} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="user" name="Your Score" fill="#3B82F6" />
                        <Bar dataKey="average" name="Industry Average" fill="#9CA3AF" />
                        <Bar dataKey="top" name="Top Performers" fill="#F97316" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
                    <p className="font-medium mb-1">Industry Insight:</p>
                    <p>
                      Your Web Development skills are well above the industry average, placing you in the top 25% of professionals.
                      Consider focusing on improving your Mobile Development skills to better align with industry requirements.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Recommendations & Certifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Course Recommendations */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Recommended Courses</h2>
                  <button className="text-edu-blue-600 text-sm hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {recommendedCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-900">{course.title}</h3>
                        <span className="bg-edu-blue-100 text-edu-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {course.relevance}% Match
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{course.provider}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-600 space-x-4">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.level}</span>
                      </div>
                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="w-full">View Course</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Your Certifications</h2>
                  <button className="text-edu-blue-600 text-sm hover:underline">Add New</button>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-900">{cert.title}</h3>
                        {cert.verified ? (
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                            <CircleCheck className="h-3 w-3 mr-1" /> Verified
                          </span>
                        ) : (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Pending Verification
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{cert.issuer}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-600 space-x-4">
                        <span>{cert.date}</span>
                        <span>•</span>
                        <span>Score: {cert.score}%</span>
                      </div>
                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="w-full">View Certificate</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill Development Plan */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Your Skill Development Plan</h2>
              <p className="text-gray-600 mb-6">Based on your current skill profile and industry requirements, we've created a personalized development plan for you.</p>
              
              <div className="border-l-4 border-edu-blue-500 pl-4 mb-6">
                <h3 className="text-lg font-medium mb-2">Short-term Goals (1-3 months)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Complete Mobile Development basics course to improve your foundational knowledge</li>
                  <li>Practice database management through hands-on projects</li>
                  <li>Participate in at least 2 team projects to enhance your teamwork skills</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-edu-orange-500 pl-4 mb-6">
                <h3 className="text-lg font-medium mb-2">Medium-term Goals (3-6 months)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Obtain certification in Advanced Database Management</li>
                  <li>Develop leadership skills by leading a small team project</li>
                  <li>Improve data analysis capabilities through relevant coursework</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-edu-green-500 pl-4">
                <h3 className="text-lg font-medium mb-2">Long-term Goals (6-12 months)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Achieve full-stack developer proficiency</li>
                  <li>Build a comprehensive portfolio showcasing your skills</li>
                  <li>Prepare for industry-recognized certifications in your chosen specialization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillTracker;
