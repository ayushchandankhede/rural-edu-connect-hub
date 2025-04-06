
import React from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Briefcase, 
  BarChart2, 
  LandPlot, 
  FileText, 
  Video, 
  MessageCircle, 
  Gift 
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-edu-blue-600" />,
      title: "Digital Library",
      description: "Access a vast collection of e-books, learning materials, and resources.",
      link: "/digital-library",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-600" />,
      title: "Industry Connect",
      description: "Connect with professionals and mentors from various industries.",
      link: "/industry-connect",
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
      title: "Skill Tracker",
      description: "Track and enhance your skills with industry-standard metrics.",
      link: "/skill-tracker",
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
    },
    {
      icon: <LandPlot className="h-8 w-8 text-yellow-600" />,
      title: "Government Schemes",
      description: "Discover grants, loans, and incentives for educational advancement.",
      link: "/government-schemes",
      color: "bg-yellow-50 border-yellow-200",
      iconBg: "bg-yellow-100",
    },
    {
      icon: <FileText className="h-8 w-8 text-red-600" />,
      title: "Job Portal",
      description: "Upload CVs and find job listings tailored for your qualifications.",
      link: "/job-portal",
      color: "bg-red-50 border-red-200",
      iconBg: "bg-red-100",
    },
    {
      icon: <Video className="h-8 w-8 text-indigo-600" />,
      title: "Peer Learning",
      description: "Share and access educational videos created by students like you.",
      link: "/peer-learning",
      color: "bg-indigo-50 border-indigo-200",
      iconBg: "bg-indigo-100",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-pink-600" />,
      title: "Feedback System",
      description: "Share your suggestions and help us improve our platform.",
      link: "/feedback",
      color: "bg-pink-50 border-pink-200",
      iconBg: "bg-pink-100",
    },
    {
      icon: <Gift className="h-8 w-8 text-orange-600" />,
      title: "Donation Portal",
      description: "Donate working digital devices to support rural education.",
      link: "/donation",
      color: "bg-orange-50 border-orange-200",
      iconBg: "bg-orange-100",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Platform Features</h2>
          <div className="w-24 h-1 bg-edu-orange-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive set of tools designed to enhance rural education and connect students with opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className={`${feature.color} border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className={`${feature.iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-edu-blue-600 font-medium flex items-center">
                Learn more
                <svg
                  className="ml-1 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
