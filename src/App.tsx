import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import DemoSection from './components/DemoSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <DemoSection />
        <Features />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;