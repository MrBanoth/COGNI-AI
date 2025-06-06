'use client';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";

// Section Header Component
const SectionHeader = ({ title, subtitle, center = false }) => (
  <div className={`${center ? 'text-center' : 'text-left'} mb-12`}>
    <h2 className="text-3xl font-bold text-colorCodGray sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-xl text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-colorOrangyRed/20">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-colorOrangyRed/10 text-colorOrangyRed mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-colorCodGray mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-lg font-medium ${isOpen ? 'text-colorOrangyRed' : 'text-colorCodGray'} group-hover:text-colorOrangyRed transition-colors`}>
          {question}
        </h3>
        <div className={`p-1 rounded-full ${isOpen ? 'bg-colorOrangyRed/10' : 'group-hover:bg-gray-100'} transition-colors`}>
          <svg
            className={`h-5 w-5 ${isOpen ? 'text-colorOrangyRed' : 'text-gray-500'} transform transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Product data with enhanced details
const products = [
  {
    id: 1,
    name: 'AI-Powered Customer Support Bot',
    tagline: 'Revolutionize your customer service with 24/7 intelligent assistance',
    description: 'An intelligent chatbot that uses natural language processing (NLP) to handle customer queries, provide instant responses, and escalate complex issues to human agents.',
    longDescription: 'Our AI-Powered Customer Support Bot revolutionizes customer service by providing instant, accurate responses to customer inquiries 24/7. Using advanced natural language processing, it understands and responds to customer queries in real-time, reducing response times and improving customer satisfaction. The bot seamlessly integrates with your existing support systems and can be deployed across multiple platforms including websites, mobile apps, and social media channels.',
    icon: '/assets/img/th-1/service-icon-orange-1.svg',
    features: [
      '24/7 Instant Responses',
      'Multi-platform Integration (WhatsApp, Messenger, Web)',
      'Natural Language Processing',
      'Seamless Human Handoff',
      'Customizable Responses',
      'Analytics Dashboard',
      'Multi-language Support',
      'Sentiment Analysis',
      'Knowledge Base Integration',
      'CRM Integration'
    ],
    benefits: [
      'Reduce response times by up to 80%',
      'Handle thousands of simultaneous conversations',
      'Decrease support costs by up to 30%',
      'Improve customer satisfaction scores',
      'Gather valuable customer insights',
      'Scale support operations instantly',
      'Reduce agent workload by 50%',
      'Increase first-contact resolution rates'
    ],
    image: '/assets/img/th-1/ai-chatbot-demo.jpg',
    screenshots: [
      '/assets/img/th-1/chatbot-dashboard.jpg',
      '/assets/img/th-1/chatbot-analytics.jpg',
      '/assets/img/th-1/chatbot-config.jpg'
    ],
    useCases: [
      { 
        title: 'E-commerce Support', 
        description: 'Handle order tracking, returns, and product inquiries automatically',
        icon: '🛍️' 
      },
      { 
        title: 'SaaS Onboarding', 
        description: 'Guide new users through product setup and features',
        icon: '🚀' 
      },
      { 
        title: 'Financial Services', 
        description: 'Provide instant responses to common banking and transaction queries',
        icon: '💳' 
      },
      { 
        title: 'Healthcare Assistance', 
        description: 'Help patients with appointment scheduling and basic inquiries',
        icon: '🏥' 
      },
      { 
        title: 'Travel & Hospitality', 
        description: 'Handle booking modifications and travel inquiries 24/7',
        icon: '✈️' 
      }
    ],
    pricing: {
      starter: {
        name: 'Starter',
        price: '$299',
        period: '/month',
        features: [
          'Up to 1,000 conversations',
          '2 chatbot flows',
          'Basic analytics',
          'Email support',
          '1 integration'
        ],
        cta: 'Get Started',
        popular: false
      },
      professional: {
        name: 'Professional',
        price: '$799',
        period: '/month',
        features: [
          'Up to 5,000 conversations',
          '10 chatbot flows',
          'Advanced analytics',
          'Priority support',
          '5 integrations',
          'Custom branding',
          'API access'
        ],
        cta: 'Start Free Trial',
        popular: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        features: [
          'Unlimited conversations',
          'Unlimited flows',
          'Custom analytics',
          '24/7 dedicated support',
          'Unlimited integrations',
          'Custom development',
          'SLA 99.9% uptime',
          'On-premise deployment'
        ],
        cta: 'Contact Sales',
        popular: false
      }
    },
    testimonials: [
      {
        quote: "The AI chatbot reduced our support tickets by 65% and improved our CSAT score by 40% within the first month.",
        author: "Sarah Johnson",
        role: "Customer Support Manager, TechCorp",
        avatar: "/assets/img/th-1/avatar-1.jpg"
      },
      {
        quote: "Implementation was seamless and the results were immediate. Our customers love the instant responses!",
        author: "Michael Chen",
        role: "COO, ShopEase",
        avatar: "/assets/img/th-1/avatar-2.jpg"
      }
    ],
    faqs: [
      {
        question: "How quickly can we implement the chatbot?",
        answer: "Most customers are up and running within 24-48 hours. Our team provides full support during the setup process."
      },
      {
        question: "Does it work with our existing CRM?",
        answer: "Yes, our chatbot integrates with all major CRM platforms including Salesforce, HubSpot, and Zendesk."
      },
      {
        question: "What languages are supported?",
        answer: "The chatbot supports over 50 languages out of the box, with the ability to add custom language models."
      },
      {
        question: "How is data privacy handled?",
        answer: "We're GDPR and CCPA compliant. All data is encrypted in transit and at rest, with options for data residency."
      }
    ]
  },
  {
    id: 2,
    name: 'Predictive Analytics Engine',
    description: 'A robust AI tool that analyzes historical data to forecast trends, customer behavior, sales patterns, and potential risks, helping businesses make smarter, data-backed decisions.',
    longDescription: 'Our Predictive Analytics Engine leverages machine learning algorithms to analyze historical data and generate accurate forecasts. It helps businesses anticipate market trends, understand customer behavior, and make smarter, data-backed decisions. The engine continuously learns from new data, improving its predictions over time and providing actionable insights to drive business growth and efficiency.',
    icon: '/assets/img/th-1/service-icon-orange-2.svg',
    features: [
      'Advanced Trend Forecasting',
      'Customer Behavior Analysis',
      'Sales Pattern Prediction',
      'Risk Assessment & Mitigation',
      'Data-Backed Decision Making',
      'Real-time Data Processing',
      'Customizable Dashboards',
      'API Integration'
    ],
    benefits: [
      'Increase forecast accuracy by up to 95%',
      'Identify new market opportunities',
      'Optimize inventory management',
      'Reduce operational costs',
      'Enhance strategic planning'
    ],
    image: '/assets/img/th-1/analytics-dashboard.jpg',
    useCases: [
      'Demand forecasting',
      'Customer churn prediction',
      'Sales pipeline analysis',
      'Risk management',
      'Marketing campaign optimization'
    ]
  },
  {
    id: 3,
    name: 'Smart Document Analyzer',
    description: 'An AI system that scans and extracts key insights from large volumes of documents (contracts, reports, invoices), automating document classification, summarization, and compliance checks to save time and reduce manual effort.',
    longDescription: 'The Smart Document Analyzer transforms document processing with AI-powered text recognition and data extraction. It automatically processes, categorizes, and extracts relevant information from contracts, reports, invoices, and other document types, saving countless hours of manual work. With advanced OCR and NLP capabilities, it ensures high accuracy in document classification, summarization, and compliance checks, significantly reducing manual effort and processing time while continuously improving performance.',
    icon: '/assets/img/th-1/service-icon-orange-3.svg',
    features: [
      'Automated Document Processing',
      'Intelligent Data Extraction',
      'Compliance Verification',
      'Smart Summarization & Classification',
      'Multi-format Support',
      'Searchable Database',
      'Version Control'
    ],
    benefits: [
      'Reduce document processing time by up to 90%',
      'Minimize human errors in data entry',
      'Ensure regulatory compliance',
      'Improve document searchability',
      'Enhance data security'
    ],
    image: '/assets/img/th-1/document-ai.jpg',
    useCases: [
      'Contract analysis',
      'Invoice processing',
      'Legal document review',
      'Research paper analysis',
      'Regulatory compliance checking'
    ]
  },
  {
    id: 4,
    name: 'Personalized Recommendation Engine',
    description: 'Delivers hyper-personalized product, content, or service recommendations based on user behavior, preferences, and past interactions — ideal for e-commerce, media, and SaaS platforms.',
    longDescription: 'Our Personalized Recommendation Engine uses advanced machine learning algorithms to analyze user behavior, preferences, and past interactions. It delivers hyper-personalized recommendations that increase engagement, conversion rates, and customer satisfaction. The engine continuously learns from user interactions to refine its suggestions, creating a more personalized experience for each user. Perfect for e-commerce platforms, media services, and SaaS applications looking to enhance user experience and drive engagement.',
    icon: '/assets/img/th-1/service-icon-orange-4.svg',
    features: [
      'Behavior-based Suggestions',
      'Real-time Personalization',
      'Cross-platform Integration',
      'Performance Analytics',
      'A/B Testing',
      'Segmentation Tools',
      'API Access'
    ],
    benefits: [
      'Increase conversion rates by up to 30%',
      'Enhance user engagement',
      'Boost average order value',
      'Reduce bounce rates',
      'Improve customer retention'
    ],
    image: '/assets/img/th-1/recommendation-engine.jpg',
    useCases: [
      'E-commerce product recommendations',
      'Content personalization',
      'Media streaming suggestions',
      'Personalized learning paths',
      'Next-best-action recommendations'
    ]
  }
];

function ProductDetail() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header_01 />
      <main className="relative overflow-hidden">
        {/* Breadcrumb Section */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper mb-0">
            <div className="global-container">
              <div className="breadcrumb-block pt-6 sm:pt-0">
                <h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">{product.name}</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
                  </li>
                  <li className="text-gray-900 font-medium">{product.name}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hero Section */}
        <section className="py-12 bg-white">
          <div className="global-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="jos" data-jos_animation="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-red-600/10 text-orange-600 mb-6 border border-orange-200">
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-semibold">
                    {product.tagline}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600">{product.tagline}</p>
                <p className="text-gray-700">{product.longDescription}</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    href="/contact" 
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-medium text-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-white text-orange-600 px-8 py-4 rounded-xl font-medium text-center transition-all shadow-lg hover:bg-gray-50 hover:scale-105 hover:shadow-xl"
                  >
                    Get a Free Demo
                  </Link>
                </div>
                <div className="flex items-center pt-4 text-sm">
                  <div className="flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full">
                    <svg className="h-5 w-5 text-white mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fast Implementation
                  </div>
                  <span className="ml-3 text-gray-500">Trusted by 5,000+ businesses worldwide</span>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-2">
                  <div className="relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">Fast</div>
                      <div className="text-sm text-gray-500">Implementation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="global-container">
            <p className="text-center text-gray-500 text-sm font-medium mb-8">TRUSTED BY INNOVATIVE TEAMS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-12 flex items-center justify-center">
                  <div className="h-8 w-full bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Features Section */}
      {product.features && product.features.length > 0 && (
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Powerful Features" 
              subtitle="Everything you need to transform your business operations" 
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon || '✨'}
                  title={feature.title || feature}
                  description={feature.description || feature}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="global-container">
          <SectionHeader 
            title={`Why Choose ${product.name}`} 
            subtitle="Experience the difference with our comprehensive solution" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {product.benefits.slice(0, Math.ceil(product.benefits.length / 2)).map((benefit, index) => (
                <div key={index} className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-colorGreen/10 text-colorGreen group-hover:bg-colorOrangyRed/10 group-hover:text-colorOrangyRed transition-colors">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{benefit.split(':')[0]}</h3>
                    {benefit.includes(':') && (
                      <p className="mt-1 text-gray-600">{benefit.split(':')[1]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {product.benefits.slice(Math.ceil(product.benefits.length / 2)).map((benefit, index) => (
                <div key={index} className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-colorGreen/10 text-colorGreen group-hover:bg-colorOrangyRed/10 group-hover:text-colorOrangyRed transition-colors">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{benefit.split(':')[0]}</h3>
                    {benefit.includes(':') && (
                      <p className="mt-1 text-gray-600">{benefit.split(':')[1]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="global-container">
          <SectionHeader 
            title="Use Cases" 
            subtitle={`Discover how ${product.name} can transform your business`} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.useCases.map((useCase, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-colorOrangyRed/20">
                <div className="text-3xl mb-4 transition-transform group-hover:scale-110 group-hover:text-colorOrangyRed">
                  {useCase.icon || '🔍'}
                </div>
                <h3 className="text-xl font-semibold text-colorCodGray mb-2 group-hover:text-colorOrangyRed transition-colors">
                  {typeof useCase === 'string' ? useCase : useCase.title}
                </h3>
                <p className="text-gray-600">
                  {typeof useCase === 'string' ? 'Learn more about this use case' : useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {product.testimonials && product.testimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="global-container">
            <SectionHeader 
              title="What Our Customers Say" 
              subtitle="Join thousands of satisfied customers" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-gray-50 p-8 rounded-xl hover:shadow-md transition-all duration-300 border border-transparent hover:border-colorOrangyRed/20">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white group-hover:border-colorOrangyRed transition-colors shadow-sm">
                        <Image 
                          className="h-full w-full object-cover" 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-colorCodGray group-hover:text-colorOrangyRed transition-colors">{testimonial.author}</div>
                      <div className="text-colorViolet text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <blockquote className="relative">
                    <div className="absolute top-0 left-0 -mt-2 -ml-2 text-4xl text-gray-200 group-hover:text-colorOrangyRed/20 transition-colors">&quot;</div>
                    <p className="relative text-gray-700 italic">{testimonial.quote}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      </main>
      <div className="pb-24 md:pb-32"></div> {/* Bottom spacing */}
      <Footer_01 />
    </>
  );
}

export default ProductDetail;
