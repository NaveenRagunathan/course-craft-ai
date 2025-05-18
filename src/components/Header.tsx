import React, { useState, useEffect } from 'react';
import { BookOpenCheck } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <BookOpenCheck 
            size={32} 
            className="text-indigo-600"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            CourseCraft AI
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-gray-700 hover:text-indigo-600 transition-colors">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="hidden md:block text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            Sign In
          </a>
          <a 
            href="#" 
            className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:opacity-90 transition-all"
          >
            Try Free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;