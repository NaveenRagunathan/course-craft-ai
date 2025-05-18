import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-100/20 shadow-sm' 
          : 'py-5 bg-[#FAFAFA]/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#7357F6] to-[#3EC6FF] shadow-lg">
            <BookOpenCheck size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">
            CourseCraft AI
          </span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-[#7357F6] font-medium text-sm uppercase tracking-wider transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7357F6] to-[#3EC6FF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <motion.a 
            href="#contact" 
            className="relative bg-gradient-to-r from-[#7357F6] to-[#3EC6FF] text-white px-5 py-2.5 rounded-md font-medium text-sm overflow-hidden group"
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 0 15px rgba(115, 87, 246, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">
              Get Started
            </span>
            <motion.span 
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
            />
          </motion.a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-[#7357F6] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#7357F6] font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                className="mt-2 bg-gradient-to-r from-[#7357F6] to-[#3EC6FF] text-white px-4 py-2.5 rounded-md font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;