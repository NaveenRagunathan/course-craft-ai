import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for testing the waters",
      features: [
        "1 Course",
        "Notion Export",
        "Basic Outline Generation",
        "Lesson Summaries"
      ],
      cta: "Start Free",
      highlighted: false
    },
    {
      name: "Creator",
      price: isAnnual ? "19" : "29",
      period: "/mo",
      description: "Everything you need to launch consistently",
      features: [
        "Unlimited Courses",
        "PDF + Notion Export",
        "Advanced Module Structuring",
        "Custom Branding",
        "Launch Email Templates",
        "Gumroad Integration"
      ],
      cta: "Upgrade Now",
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Pro",
      price: "59",
      description: "One-time payment, lifetime access",
      features: [
        "Everything in Creator",
        "White-label Course Materials",
        "Premium Templates",
        "Advanced Export Options",
        "Priority Support",
        "Early Access to New Features"
      ],
      cta: "Get Lifetime Access",
      highlighted: false,
      badge: "One-Time Payment"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Start Free. Upgrade Only When You're Ready.
        </h2>
        
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          No complicated tiers. No feature gating. Just start creating and upgrade when you're ready to scale.
        </p>
        
        {/* Plan toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-white rounded-full p-1 shadow-sm">
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                isAnnual 
                  ? 'bg-indigo-600 text-white font-medium' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual (Save 20%)
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                !isAnnual 
                  ? 'bg-indigo-600 text-white font-medium' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-xl overflow-hidden transition-all duration-300
                ${plan.highlighted 
                  ? 'shadow-xl border-2 border-indigo-600 transform -translate-y-4' 
                  : 'shadow-lg hover:shadow-xl border border-gray-100'
                }
              `}
            >
              {plan.badge && (
                <div className="bg-indigo-600 text-white text-center py-2 font-medium">
                  {plan.badge}
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#" 
                  className={`
                    block text-center py-3 rounded-lg font-medium transition-all w-full
                    ${plan.highlighted
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:shadow-lg'
                      : 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                    }
                  `}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;