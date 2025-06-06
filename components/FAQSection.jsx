'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Cogni AI?',
      answer: 'Cogni AI is an advanced artificial intelligence platform that helps businesses automate processes, gain insights from data, and enhance customer experiences through cutting-edge AI technologies.'
    },
    {
      question: 'How can Cogni AI benefit my business?',
      answer: 'Our AI solutions can help your business by automating repetitive tasks, providing data-driven insights, improving customer service through chatbots, optimizing operations, and enabling predictive analytics for better decision-making.'
    },
    {
      question: 'Is Cogni AI easy to integrate with existing systems?',
      answer: 'Yes, Cogni AI is designed for seamless integration with your existing business systems. Our team provides full support throughout the integration process to ensure minimal disruption to your operations.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, and more. Our AI solutions are customizable to meet the specific needs of different sectors.'
    },
    {
      question: 'How secure is my data with Cogni AI?',
      answer: 'Data security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and regular security audits to ensure your data remains protected at all times.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support, dedicated account management, comprehensive documentation, and training resources to ensure you get the most out of our platform.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our AI solutions
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
            >
              <button
                className="w-full px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-gray-500">
                    {activeIndex === index ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
