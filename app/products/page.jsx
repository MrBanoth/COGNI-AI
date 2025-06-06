import Image from 'next/image';
import Link from 'next/link';
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'AI-Powered Customer Support Bot',
      description: 'An intelligent chatbot that uses natural language processing (NLP) to handle customer queries, provide instant responses, and escalate complex issues to human agents.',
      icon: '/assets/img/th-1/service-icon-orange-1.svg',
      features: [
        '24/7 Instant Responses',
        'Multi-platform Integration (WhatsApp, Messenger, Web)',
        'Natural Language Processing',
        'Seamless Human Handoff'
      ],
      longDescription: 'Integrates with popular platforms like WhatsApp, Messenger, and website chat widgets to provide seamless customer support.'
    },
    {
      id: 2,
      name: 'Predictive Analytics Engine',
      description: 'A robust AI tool that analyzes historical data to forecast trends, customer behavior, sales patterns, and potential risks.',
      icon: '/assets/img/th-1/service-icon-orange-2.svg',
      features: [
        'Advanced Trend Forecasting',
        'Customer Behavior Analysis',
        'Sales Pattern Prediction',
        'Risk Assessment & Mitigation'
      ],
      longDescription: 'Helps businesses make smarter, data-backed decisions through comprehensive analysis and forecasting.'
    },
    {
      id: 3,
      name: 'Smart Document Analyzer',
      description: 'An AI system that scans and extracts key insights from large volumes of documents (contracts, reports, invoices).',
      icon: '/assets/img/th-1/service-icon-orange-3.svg',
      features: [
        'Automated Document Processing',
        'Intelligent Data Extraction',
        'Compliance Verification',
        'Smart Summarization & Classification'
      ],
      longDescription: 'Automates document classification, summarization, and compliance checks to save time and reduce manual effort.'
    },
    {
      id: 4,
      name: 'Personalized Recommendation Engine',
      description: 'Delivers hyper-personalized product, content, or service recommendations based on user behavior and preferences.',
      icon: '/assets/img/th-1/service-icon-orange-4.svg',
      features: [
        'Behavior-based Suggestions',
        'Real-time Personalization',
        'Cross-platform Integration',
        'Performance Analytics'
      ]
    }
  ];

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/* Breadcrumb Section */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper mb-0">
            <div className="global-container">
              <div className="breadcrumb-block pt-8 sm:pt-0">
                <h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">Our Products</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Products</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products-section" className="pb-16 pt-12 xl:pb-24 xl:pt-16">
          <div className="global-container">
            <div className="jos mb-8 text-center lg:mb-10 xl:mb-16" data-jos_animation="fade-up">
              <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Our AI-Powered Products</h2>
                <p className="mt-3 text-base text-gray-600">
                  Discover how our innovative AI solutions can transform your business operations and drive growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className="jos group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:translate-y-[-5px]"
                  data-jos_animation="fade-up"
                  data-jos_delay={index * 0.1}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-black group-hover:bg-red-500 transition-colors duration-300"></div>
                  
                  <div className="p-6">
                    <div className="mb-5 h-14 w-14 rounded-full bg-gray-100 p-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                      <Image
                        src={product.icon}
                        alt={product.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    
                    <h3 className="mb-3 text-lg font-bold leading-tight">{product.name}</h3>
                    
                    <p className="mb-4 text-sm text-gray-600 line-clamp-3">{product.description}</p>
                    
                    <ul className="mb-5 flex-1 space-y-1 text-sm">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="mr-2 mt-1 h-3.5 w-3.5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto border-t border-gray-100 bg-gray-50 p-4">
                    <Link
                      href={`/products/${product.id}`}
                      className="button inline-block w-full rounded-lg border border-gray-800 bg-gray-800 px-4 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-md"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section id="about-hero-section">
          <div className="mb-12 lg:mb-16"> {/* Reduced spacing */}
            <div className="global-container">
              <div className="jos mb-8 text-center lg:mb-10 xl:mb-12"> {/* Reduced spacing */}
                <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Innovative AI Solutions for Your Business</h2>
                  <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto"> {/* Added subtitle */}
                    Discover our cutting-edge AI products designed to streamline operations, enhance decision-making, and drive business growth.
                  </p>
                </div>
              </div>
              <div className="jos overflow-hidden rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 my-12" data-jos_animation="zoom">
                {/* Replace single image with three feature blocks */}
                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-black rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">AI-Powered Automation</h4>
                  <p className="text-sm text-gray-600">Streamline operations with intelligent automation solutions that learn and adapt to your business needs.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-black rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Data-Driven Insights</h4>
                  <p className="text-sm text-gray-600">Transform raw data into actionable business intelligence with our advanced analytics tools.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-black rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Intelligent Interactions</h4>
                  <p className="text-sm text-gray-600">Enhance customer engagement with natural language processing and conversational AI systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-20">
          <div className="global-container">
            <div className="jos text-center" data-jos_animation="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Ready to transform your business with AI?</h2>
              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
                Get in touch with our team to learn more about our products and how they can benefit your organization.
              </p>
              <Link
                href="/contact"
                className="button inline-block rounded-[50px] border-2 border-black bg-black px-8 py-4 text-lg font-semibold text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}
