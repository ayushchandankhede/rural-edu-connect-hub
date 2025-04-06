
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Digital Library", href: "/digital-library" },
    { name: "Industry Connect", href: "/industry-connect" },
    {
      name: "Resources",
      href: "#",
      children: [
        { name: "Skill Tracker", href: "/skill-tracker" },
        { name: "Government Schemes", href: "/government-schemes" },
        { name: "Job Portal", href: "/job-portal" },
        { name: "Peer Learning", href: "/peer-learning" },
      ],
    },
    { name: "Feedback", href: "/feedback" },
    { name: "Donate", href: "/donation" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-edu-blue-800 font-bold text-2xl">RuralEdu</span>
              <span className="text-edu-orange-500 font-bold">Connect</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navigation.map((item) => 
              item.children ? (
                <div key={item.name} className="relative">
                  <button 
                    onClick={toggleDropdown}
                    className="text-gray-700 hover:text-edu-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="py-1">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-edu-blue-50"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-edu-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          
          <div className="hidden md:flex md:items-center md:ml-6">
            <Button className="btn-primary">Login</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-edu-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => 
            !item.children ? (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-edu-blue-600 hover:bg-edu-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.name}>
                <button 
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-edu-blue-600 hover:bg-edu-blue-50"
                  onClick={toggleDropdown}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-edu-blue-600 hover:bg-edu-blue-50"
                        onClick={() => {
                          setIsOpen(false);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="px-4 flex items-center">
            <Button className="w-full btn-primary">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
