
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
  Search,
  Video,
  Play,
  Clock,
  ThumbsUp,
  MessageSquare,
  Upload,
  BadgeCheck,
} from "lucide-react";

const PeerLearning = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");

  // Mock data for videos
  const videos = [
    {
      id: 1,
      title: "Understanding Photosynthesis",
      creator: "Ananya Singh",
      creatorSchool: "Saraswati Vidya Mandir, Jaipur",
      subject: "Biology",
      grade: "10th",
      duration: "8:23",
      views: 1542,
      likes: 142,
      comments: 28,
      verified: true,
      thumbnail: "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=500&auto=format&fit=crop&q=60",
      description: "A detailed explanation of photosynthesis with diagrams and real-life examples. This video covers the chemical process, factors affecting photosynthesis, and importance in our ecosystem.",
      uploadDate: "2 weeks ago",
    },
    {
      id: 2,
      title: "Solving Quadratic Equations",
      creator: "Rahul Kumar",
      creatorSchool: "Delhi Public School, Patna",
      subject: "Mathematics",
      grade: "9th",
      duration: "12:45",
      views: 2345,
      likes: 215,
      comments: 42,
      verified: true,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop&q=60",
      description: "Learn how to solve quadratic equations using different methods: factoring, completing the square, and the quadratic formula. The video includes multiple examples with step-by-step solutions.",
      uploadDate: "3 weeks ago",
    },
    {
      id: 3,
      title: "Introduction to Chemical Bonding",
      creator: "Neha Verma",
      creatorSchool: "Kendriya Vidyalaya, Lucknow",
      subject: "Chemistry",
      grade: "11th",
      duration: "15:10",
      views: 1876,
      likes: 195,
      comments: 36,
      verified: false,
      thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&auto=format&fit=crop&q=60",
      description: "This video explains the different types of chemical bonds - ionic, covalent, and metallic bonds. It covers electron configurations, electronegativity, and how these factors determine the type of bonding.",
      uploadDate: "1 month ago",
    },
    {
      id: 4,
      title: "Understanding Newton's Laws of Motion",
      creator: "Vikram Singh",
      creatorSchool: "St. Joseph's School, Bhopal",
      subject: "Physics",
      grade: "10th",
      duration: "11:35",
      views: 3241,
      likes: 287,
      comments: 54,
      verified: true,
      thumbnail: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=500&auto=format&fit=crop&q=60",
      description: "This video explains Newton's three laws of motion with simple examples from everyday life. It includes demonstrations of each law and practice problems to reinforce understanding.",
      uploadDate: "2 months ago",
    },
    {
      id: 5,
      title: "Parts of Speech in English Grammar",
      creator: "Priya Sharma",
      creatorSchool: "Sacred Heart School, Chennai",
      subject: "English",
      grade: "8th",
      duration: "9:12",
      views: 2156,
      likes: 176,
      comments: 32,
      verified: false,
      thumbnail: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60",
      description: "Learn about the eight parts of speech in English: nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections. This video includes definitions, examples, and practice exercises.",
      uploadDate: "3 weeks ago",
    },
    {
      id: 6,
      title: "Indian Freedom Movement: Key Events",
      creator: "Arjun Patel",
      creatorSchool: "Modern School, Ahmedabad",
      subject: "History",
      grade: "10th",
      duration: "18:45",
      views: 1876,
      likes: 210,
      comments: 45,
      verified: true,
      thumbnail: "https://images.unsplash.com/photo-1532699623739-09c0582096ee?w=500&auto=format&fit=crop&q=60",
      description: "This video covers the major events of the Indian Freedom Movement from 1857 to 1947, including the roles of prominent leaders, important movements, and their impact on achieving independence.",
      uploadDate: "1 month ago",
    },
    {
      id: 7,
      title: "Introduction to Computer Programming",
      creator: "Ravi Shankar",
      creatorSchool: "DAV Public School, Ranchi",
      subject: "Computer Science",
      grade: "11th",
      duration: "14:20",
      views: 2987,
      likes: 265,
      comments: 48,
      verified: true,
      thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60",
      description: "A beginner-friendly introduction to programming concepts, including variables, data types, control structures, and basic algorithms. The video includes examples in Python programming language.",
      uploadDate: "2 weeks ago",
    },
    {
      id: 8,
      title: "Understanding Plate Tectonics",
      creator: "Meera Nair",
      creatorSchool: "Army Public School, Kochi",
      subject: "Geography",
      grade: "9th",
      duration: "10:15",
      views: 1432,
      likes: 132,
      comments: 26,
      verified: false,
      thumbnail: "https://images.unsplash.com/photo-1565791380709-49e529c8b073?w=500&auto=format&fit=crop&q=60",
      description: "This video explains the theory of plate tectonics, including continental drift, seafloor spreading, and the formation of mountains, volcanoes, and earthquakes as a result of tectonic plate movements.",
      uploadDate: "3 weeks ago",
    },
  ];

  // Get unique subjects and grades for filters
  const subjects = [...new Set(videos.map((video) => video.subject))];
  const grades = [...new Set(videos.map((video) => video.grade))];

  // Filter videos based on search query and filters
  const filteredVideos = videos.filter((video) => {
    const matchesSearch = 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubject = !subjectFilter || video.subject === subjectFilter;
    const matchesGrade = !gradeFilter || video.grade === gradeFilter;
    
    return matchesSearch && matchesSubject && matchesGrade;
  });

  // Top creators - calculated based on likes and views
  const topCreators = [
    {
      name: "Ananya Singh",
      school: "Saraswati Vidya Mandir, Jaipur",
      videos: 15,
      totalViews: 24580,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60",
    },
    {
      name: "Rahul Kumar",
      school: "Delhi Public School, Patna",
      videos: 12,
      totalViews: 18750,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=60",
    },
    {
      name: "Priya Sharma",
      school: "Sacred Heart School, Chennai",
      videos: 9,
      totalViews: 12450,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-edu-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Peer Learning Videos</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Learn from fellow students through educational videos. Discover explanations, tutorials, and demonstrations created by peers from across rural India.
              </p>
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search videos by title, creator, or topic..."
                      className="pl-10 py-6 bg-white text-gray-900"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                    <SelectTrigger className="h-12 bg-white text-gray-900">
                      <SelectValue placeholder="Filter by subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Subjects</SelectItem>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={gradeFilter} onValueChange={setGradeFilter}>
                    <SelectTrigger className="h-12 bg-white text-gray-900">
                      <SelectValue placeholder="Filter by grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Grades</SelectItem>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
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
                      setSubjectFilter('');
                      setGradeFilter('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-lg font-semibold mb-4">Top Creators</h3>
                  <div className="space-y-4">
                    {topCreators.map((creator, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                          <img
                            src={creator.avatar}
                            alt={creator.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{creator.name}</h4>
                          <div className="text-xs text-gray-500">
                            {creator.videos} videos • {creator.totalViews.toLocaleString()} views
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="text-edu-blue-600 text-sm hover:underline w-full text-center">
                      View All Creators
                    </button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Upload Your Video</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Share your knowledge with peers by creating and uploading your own educational videos.
                  </p>
                  <Button className="w-full flex items-center justify-center bg-edu-blue-600">
                    <Upload className="mr-2 h-4 w-4" /> Upload Video
                  </Button>
                  <div className="mt-4 text-xs text-gray-500">
                    <p>All videos are reviewed by moderators before being published to ensure quality and accuracy.</p>
                  </div>
                </div>
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Educational Videos</h2>
                  <div className="text-sm text-gray-500">
                    Found {filteredVideos.length} videos
                  </div>
                </div>
                
                {filteredVideos.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.map((video) => (
                      <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-40 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <div className="w-14 h-14 bg-edu-orange-500 bg-opacity-90 rounded-full flex items-center justify-center">
                              <Play className="h-6 w-6 text-white ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                          <div className="absolute top-2 left-2 flex space-x-1">
                            <span className="px-2 py-1 bg-edu-blue-700 text-white text-xs rounded-md">
                              {video.subject}
                            </span>
                            <span className="px-2 py-1 bg-gray-800 text-white text-xs rounded-md">
                              {video.grade}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold line-clamp-2">{video.title}</h3>
                          <div className="flex items-center mt-2">
                            <span className="text-gray-700 text-sm flex-shrink-0">
                              {video.creator}
                            </span>
                            {video.verified && (
                              <BadgeCheck className="h-4 w-4 text-edu-blue-500 ml-1" title="Verified Creator" />
                            )}
                          </div>
                          <p className="text-gray-500 text-xs mt-1">
                            {video.creatorSchool}
                          </p>
                          <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{video.uploadDate}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center">
                                <ThumbsUp className="h-3 w-3 mr-1" />
                                <span>{video.likes}</span>
                              </div>
                              <div className="flex items-center">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                <span>{video.comments}</span>
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
                      <Video className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
                    <p className="text-gray-500 mb-4">
                      No videos match your current search criteria. Try adjusting your filters or search term.
                    </p>
                    <Button 
                      onClick={() => {
                        setSearchQuery('');
                        setSubjectFilter('');
                        setGradeFilter('');
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-12 bg-edu-blue-50 rounded-xl p-8 border border-edu-blue-100">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Want to Create Educational Videos?</h3>
                  <p className="text-gray-700">
                    Learn how to create high-quality educational videos with our free online workshop. We'll guide you through planning, filming, and editing your videos.
                  </p>
                </div>
                <div className="md:w-1/3 md:text-right">
                  <Button className="bg-edu-blue-600 hover:bg-edu-blue-700">Register for Workshop</Button>
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

export default PeerLearning;
