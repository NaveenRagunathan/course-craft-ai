import React from 'react';
import { Frown, FileQuestion, AlertTriangle, Laptop } from 'lucide-react';

const ProblemSection = () => {
  const painPoints = [
    {
      icon: <FileQuestion size={24} className="text-red-500" />,
      text: "I don't know how to structure my content."
    },
    {
      icon: <Frown size={24} className="text-red-500" />,
      text: "Not sure what modules to include."
    },
    {
      icon: <AlertTriangle size={24} className="text-red-500" />,
      text: "Writing all the lessons feels impossible."
    },
    {
      icon: <Laptop size={24} className="text-red-500" />,
      text: "The tech is too much — Notion? Teachable? Gumroad?"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-800 mb-10 text-center">
            Most Creators Never Launch. Not Because They're Lazy — But Because They're Overwhelmed.
          </h2>
          
          <div className="space-y-6 mb-10">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  transitionDelay: `${index * 100}ms` 
                }}
              >
                <div className="mt-1">{point.icon}</div>
                <p className="text-lg text-gray-700">{point.text}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xl text-gray-700 text-center">
            We get it. You're busy. You're already creating content daily. What you need isn't another course on course-building — you need a tool that just builds it for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;