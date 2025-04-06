
import React from "react";
import { CheckCircle2 } from "lucide-react";

const MissionStatement = () => {
  const missions = [
    {
      title: "Digital Access",
      description: "Providing rural students with equal access to quality digital educational resources.",
    },
    {
      title: "Skill Development",
      description: "Enhancing industry-relevant skills to improve employment prospects for rural youth.",
    },
    {
      title: "Community Engagement",
      description: "Creating a collaborative ecosystem involving students, educators, and industry professionals.",
    },
    {
      title: "Government Integration",
      description: "Connecting students with relevant government schemes and financial support.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-edu-orange-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            RuralEduConnect is dedicated to bridging the educational divide between urban and rural areas by leveraging technology and creating meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-edu-blue-100 text-edu-blue-600 mb-5">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-edu-blue-50 rounded-xl p-8 border border-edu-blue-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Our Mission</h3>
              <p className="text-gray-700">
                Help us create a future where geographic location doesn't determine the quality of education received.
                Together, we can bring quality education to every corner of rural communities.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <button className="btn-accent">Get Involved</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
