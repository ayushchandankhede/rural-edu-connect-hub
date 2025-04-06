
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Book, Video, FileText, Download } from "lucide-react";

const DigitalLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for resources
  const resources = {
    books: [
      {
        id: 1,
        title: "Introduction to Computer Science",
        author: "John Smith",
        category: "Technology",
        thumbnail: "https://images.unsplash.com/photo-1586772002345-339f8042a777?w=250&auto=format&fit=crop&q=60",
        type: "book",
      },
      {
        id: 2,
        title: "Advanced Mathematics for Engineers",
        author: "Emily Johnson",
        category: "Mathematics",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=250&auto=format&fit=crop&q=60",
        type: "book",
      },
      {
        id: 3,
        title: "Principles of Economics",
        author: "Robert Miller",
        category: "Economics",
        thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=250&auto=format&fit=crop&q=60",
        type: "book",
      },
      {
        id: 4,
        title: "Environmental Science: A Global Perspective",
        author: "Sarah Williams",
        category: "Science",
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=250&auto=format&fit=crop&q=60",
        type: "book",
      },
    ],
    videos: [
      {
        id: 1,
        title: "Quantum Mechanics Explained",
        creator: "Physics Academy",
        duration: "45:32",
        thumbnail: "https://images.unsplash.com/photo-1636690669458-c314fbe2db14?w=250&auto=format&fit=crop&q=60",
        type: "video",
      },
      {
        id: 2,
        title: "Understanding Linear Algebra",
        creator: "MathGenius",
        duration: "32:15",
        thumbnail: "https://images.unsplash.com/photo-1623393508324-2cab30a186ba?w=250&auto=format&fit=crop&q=60",
        type: "video",
      },
      {
        id: 3,
        title: "Web Development Fundamentals",
        creator: "CodeMaster",
        duration: "55:47",
        thumbnail: "https://images.unsplash.com/photo-1610986602538-431d65df4385?w=250&auto=format&fit=crop&q=60",
        type: "video",
      },
      {
        id: 4,
        title: "Artificial Intelligence: An Introduction",
        creator: "Future Tech",
        duration: "38:29",
        thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=250&auto=format&fit=crop&q=60",
        type: "video",
      },
    ],
    documents: [
      {
        id: 1,
        title: "Research Paper: Renewable Energy",
        author: "Dr. James Wilson",
        pages: 24,
        thumbnail: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=250&auto=format&fit=crop&q=60",
        type: "document",
      },
      {
        id: 2,
        title: "History of Ancient Civilizations",
        author: "Prof. Laura Adams",
        pages: 42,
        thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=250&auto=format&fit=crop&q=60",
        type: "document",
      },
      {
        id: 3,
        title: "Organic Chemistry Handbook",
        author: "Chemistry Institute",
        pages: 88,
        thumbnail: "https://images.unsplash.com/photo-1554475659-cdeef83b6e51?w=250&auto=format&fit=crop&q=60",
        type: "document",
      },
      {
        id: 4,
        title: "Guide to Public Speaking",
        author: "Communication Arts Dept.",
        pages: 36,
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=250&auto=format&fit=crop&q=60",
        type: "document",
      },
    ],
  };

  // Filter resources based on search query
  const filteredResources = {
    books: resources.books.filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    videos: resources.videos.filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.creator.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    documents: resources.documents.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-edu-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Digital Library</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Access a wealth of educational resources from books and documents to videos and interactive content.
              </p>
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search for books, videos, documents..."
                    className="pl-10 py-6 bg-white text-gray-900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="books" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="books" className="flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    Books
                  </TabsTrigger>
                  <TabsTrigger value="videos" className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Videos
                  </TabsTrigger>
                  <TabsTrigger value="documents" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Documents
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="books">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredResources.books.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <img
                        src={book.thumbnail}
                        alt={book.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-edu-blue-100 text-edu-blue-800 rounded-md mb-2">
                          {book.category}
                        </span>
                        <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">by {book.author}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="mr-2 h-4 w-4" /> Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredResources.books.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No books found matching your search.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="videos">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredResources.videos.map((video) => (
                    <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-edu-orange-500 bg-opacity-90 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                        <p className="text-gray-600 text-sm">{video.creator}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredResources.videos.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No videos found matching your search.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="documents">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredResources.documents.map((doc) => (
                    <div key={doc.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="h-48 flex items-center justify-center bg-gray-100">
                        <img
                          src={doc.thumbnail}
                          alt={doc.title}
                          className="h-36 w-36 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{doc.title}</h3>
                        <p className="text-gray-600 text-sm mb-1">by {doc.author}</p>
                        <p className="text-gray-500 text-xs mb-4">{doc.pages} pages</p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="mr-2 h-4 w-4" /> Download PDF
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredResources.documents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No documents found matching your search.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalLibrary;
