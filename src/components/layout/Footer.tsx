
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-edu-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">RuralEdu<span className="text-edu-orange-400">Connect</span></h3>
            <p className="mb-4 text-gray-300">
              Empowering rural communities through quality education and digital connectivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/digital-library" className="text-gray-300 hover:text-white">Digital Library</Link>
              </li>
              <li>
                <Link to="/industry-connect" className="text-gray-300 hover:text-white">Industry Connect</Link>
              </li>
              <li>
                <Link to="/skill-tracker" className="text-gray-300 hover:text-white">Skill Tracker</Link>
              </li>
              <li>
                <Link to="/job-portal" className="text-gray-300 hover:text-white">Job Portal</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/peer-learning" className="text-gray-300 hover:text-white">Peer Learning</Link>
              </li>
              <li>
                <Link to="/government-schemes" className="text-gray-300 hover:text-white">Government Schemes</Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-white">Feedback</Link>
              </li>
              <li>
                <Link to="/donation" className="text-gray-300 hover:text-white">Donation</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-edu-orange-400" />
                <a href="mailto:info@ruraleduconnect.org" className="text-gray-300 hover:text-white">
                  info@ruraleduconnect.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-edu-orange-400" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-edu-orange-400" />
                <span className="text-gray-300">
                  Rural Education Hub, <br />
                  Knowledge Park, <br />
                  Education District, 201301
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} RuralEduConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
