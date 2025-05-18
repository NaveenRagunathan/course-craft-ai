import React, { useState, useEffect } from 'react';

// SVGs for platform icons and play icon
const TeachableIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="Teachable" className="inline-block"><circle cx="10" cy="10" r="10" fill="#00C2B2"/><text x="10" y="15" textAnchor="middle" fontSize="10" fill="#fff">T</text></svg>
);
const KajabiIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="Kajabi" className="inline-block"><circle cx="10" cy="10" r="10" fill="#3A8DFF"/><text x="10" y="15" textAnchor="middle" fontSize="10" fill="#fff">K</text></svg>
);
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="Play"><polygon points="7,5 15,10 7,15" fill="#6366F1"/></svg>
);

// Animated course creation preview (idea → outline → modules → finished)
const CoursePreview = () => {
  const steps = [
    { label: 'Idea', color: 'bg-yellow-300', icon: '💡' },
    { label: 'Outline', color: 'bg-green-200', icon: '📝' },
    { label: 'Modules', color: 'bg-indigo-200', icon: '📦' },
    { label: 'Finished', color: 'bg-purple-200', icon: '🎉' },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8 p-8 bg-white/80 rounded-2xl shadow-lg border border-indigo-100 animate-fade-in relative z-10">
      <div className="flex flex-row justify-between w-full gap-4">
        {steps.map((step, idx) => (
          <div key={step.label} className={`flex-1 flex flex-col items-center transition-all duration-500 ${active === idx ? 'scale-110' : 'opacity-60'}`}>
            <div className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold ${step.color} mb-2`}>{step.icon}</div>
            <span className={`text-sm font-medium ${active === idx ? 'text-indigo-700' : 'text-gray-400'}`}>{step.label}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-2 bg-gradient-to-r from-yellow-200 via-green-200 via-indigo-200 to-purple-200 rounded-full" />
      <span className="text-sm text-gray-500">See how your course comes to life</span>
    </div>
  );
};

// Decorative floating cards
const FloatingModuleCard = () => (
  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg rotate-6 animate-float flex flex-col items-start min-w-[180px]">
      <span className="text-xs text-gray-400 mb-1">Course Outline</span>
      <p className="text-sm font-medium text-gray-700">Module 1: Getting Started</p>
      <ul className="text-xs text-gray-400 mt-1 space-y-1">
        <li>• Welcome</li>
        <li>• What You’ll Learn</li>
        <li>• First Steps</li>
      </ul>
    </div>
  </div>
);
const FloatingExportCard = () => (
  <div className="hidden md:block absolute right-0 top-2/3 translate-y-1/3 translate-x-1/3 z-0">
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg -rotate-3 animate-float-delayed flex items-center gap-2 min-w-[160px]">
      <span className="text-sm font-medium text-gray-700">Ready to Export ✨</span>
      <TeachableIcon />
      <KajabiIcon />
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-white to-indigo-50/30 flex flex-col items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60" />
      </div>
      {/* Floating cards as decorative elements */}
      <FloatingModuleCard />
      <FloatingExportCard />
      {/* Main content wrapper */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center px-4 relative z-10">
        {/* Logo/brand placeholder (if needed) */}
        {/* <img src="/logo.svg" alt="CourseCraft AI" className="h-10 mb-6" /> */}
        {/* Powered by AI badge */}
        <div className="flex items-center gap-2 mb-4 mt-4 justify-center">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Powered by AI</span>
        </div>
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-3 leading-tight bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent text-center">
          Create & Launch Your Course in 1 Hour
        </h1>
        {/* Subheadline */}
        <div className="text-lg text-indigo-700 font-medium mb-6 text-center">From expertise to structured curriculum - automatically</div>
        {/* Secondary headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
          No Overwhelm. Just Output.
        </h2>
        {/* Description */}
        <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto text-center">
          CourseCraft AI transforms your knowledge into professional, ready-to-sell courses in minutes — no tech headaches, no blank pages, no wasted weekends.
        </p>
        {/* Trust metric and partner logos */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8 justify-center w-full">
          <span className="text-sm text-gray-500 text-center">Used by <span className="font-semibold text-indigo-600">2,500+ instructors</span></span>
          <span className="hidden sm:inline-block mx-2 text-gray-300">|</span>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-logo-2015.png" alt="Google" className="h-5 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Notion_app_logo.png" alt="Notion" className="h-5 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Kajabi_logo.png" alt="Kajabi" className="h-5 w-auto" />
          </div>
        </div>
        {/* Animated course creation preview - central visual */}
        <div className="w-full flex justify-center mb-10">
          <CoursePreview />
        </div>
        {/* Testimonial - prominent and centered */}
        <div className="flex flex-col items-center gap-3 mb-10 w-full">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Actual Customer Name" className="w-14 h-14 rounded-full border-2 border-indigo-200" />
          <span className="text-lg italic text-gray-600 text-center max-w-xl">“I went from idea to selling my course in just one afternoon”</span>
          <span className="text-sm text-gray-500">– Actual Customer Name</span>
        </div>
        {/* CTA buttons - side by side on desktop, stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full mb-4">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <a 
              href="#" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto text-center"
            >
              Start Your Course Free
            </a>
            <span className="text-xs text-gray-500 mt-2">No credit card required</span>
          </div>
          <a 
            href="#demo" 
            className="group bg-white text-gray-800 px-8 py-4 rounded-full font-medium text-lg border-2 border-gray-200 hover:border-indigo-500 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center"
          >
            <PlayIcon />
            Watch Demo
            <span className="transform group-hover:translate-y-1 transition-transform">↓</span>
          </a>
        </div>
        {/* Guarantee label - always at the bottom */}
        <div className="mt-2 flex items-center gap-2 justify-center w-full">
          <span className="text-xs bg-yellow-200 text-yellow-900 font-semibold px-3 py-1 rounded-full">30-day money back guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;