"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Hide default Swiper navigation
const styles = `
  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none !important;
  }
`;

// Add the styles to the head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export const services = [
  {
    id: 1,
    name: 'Custom AI Solution Development',
    description: 'Designing and building AI-driven tools tailored to specific business needs.',
    icon: '/assets/img/th-1/service-icon-orange-1.svg',
    features: [
      'Customized AI Architecture',
      'Scalable Solutions',
      'Performance Optimization',
      'End-to-end Development'
    ]
  },
  {
    id: 2,
    name: 'AI Consulting & Strategy',
    description: 'Helping clients define AI roadmaps, use cases, and implementation plans.',
    icon: '/assets/img/th-1/service-icon-orange-2.svg',
    features: [
      'AI Readiness Assessment',
      'Strategic Planning',
      'ROI Analysis',
      'Implementation Roadmap'
    ]
  },
  {
    id: 3,
    name: 'AI Model Development & Integration',
    description: 'Creating, training, and deploying machine learning models into existing systems.',
    icon: '/assets/img/th-1/service-icon-orange-3.svg',
    features: [
      'Custom Model Training',
      'Seamless Integration',
      'Model Optimization',
      'Continuous Improvement'
    ]
  },
  {
    id: 4,
    name: 'Natural Language & Computer Vision Solutions',
    description: 'Delivering NLP and computer vision tools like chatbots, sentiment analysis, and image recognition.',
    icon: '/assets/img/th-1/service-icon-orange-4.svg',
    features: [
      'Intelligent Chatbots',
      'Sentiment Analysis',
      'Image Recognition',
      'Text Processing'
    ]
  },
  {
    id: 5,
    name: 'AI Resource Augmentation',
    description: 'Providing skilled AI developers, data scientists, and ML engineers as extended team members.',
    icon: '/assets/img/th-1/service-icon-orange-5.svg',
    features: [
      'Expert AI Talent',
      'Flexible Engagements',
      'Seamless Team Integration',
      'Knowledge Transfer'
    ]
  },
  {
    id: 6,
    name: 'Data Engineering & Analytics',
    description: 'Preparing, managing, and analyzing data to fuel impactful AI insights.',
    icon: '/assets/img/th-1/service-icon-orange-6.svg',
    features: [
      'Data Pipeline Development',
      'ETL Processes',
      'Advanced Analytics',
      'Visualization Solutions'
    ]
  }
];

function Services() {
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/* Breadcrumb Section */}
        <section id="section-breadcrumb" className="!mb-0">
          <div className="breadcrumb-wrapper !mb-0">
            <div className="global-container">
              <div className="breadcrumb-block pt-4 sm:pt-0">
                <h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">Our Services</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Carousel */}
        <section id="services-section" className="pb-8 pt-8 xl:pb-12 xl:pt-12 bg-gray-50">
          <div className="global-container">
            <div className="jos mb-8 text-center lg:mb-10 xl:mb-12" data-jos_animation="fade-up">
              <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Our AI-Powered Services</h2>
                <p className="mt-4 text-lg text-gray-600">
                  We provide end-to-end AI solutions designed to transform your business operations and drive growth.
                </p>
              </div>
            </div>

            {/* Swiper Carousel for Services */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  disabledClass: 'opacity-30 cursor-default hover:!bg-white',
                }}
                grabCursor={true}
                loop={false}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                className="pb-12"
              >
                {services.map((service, index) => {
                  // Brand color variants - matching product cards style
                  const colorVariants = [
                    { 
                      bg: 'from-gray-100 to-gray-50', 
                      text: 'text-gray-900', 
                      border: 'border-gray-200', 
                      hover: 'hover:shadow-lg hover:border-gray-300',
                      bgLight: 'bg-gray-100',
                      textLight: 'text-gray-700',
                      iconBg: 'bg-gray-100',
                      iconText: 'text-gray-900',
                      accent: 'group-hover:bg-red-500',
                      button: 'bg-gray-800 hover:bg-red-600 hover:border-red-600'
                    },
                    { 
                      bg: 'from-gray-100 to-gray-50', 
                      text: 'text-gray-900', 
                      border: 'border-gray-200', 
                      hover: 'hover:shadow-lg hover:border-gray-300',
                      bgLight: 'bg-gray-100',
                      textLight: 'text-gray-700',
                      iconBg: 'bg-gray-100',
                      iconText: 'text-gray-900',
                      accent: 'group-hover:bg-red-500',
                      button: 'bg-gray-800 hover:bg-red-600 hover:border-red-600'
                    },
                    { 
                      bg: 'from-gray-100 to-gray-50', 
                      text: 'text-gray-900', 
                      border: 'border-gray-200', 
                      hover: 'hover:shadow-lg hover:border-gray-300',
                      bgLight: 'bg-gray-100',
                      textLight: 'text-gray-700',
                      iconBg: 'bg-gray-100',
                      iconText: 'text-gray-900',
                      accent: 'group-hover:bg-red-500',
                      button: 'bg-gray-800 hover:bg-red-600 hover:border-red-600'
                    },
                    { 
                      bg: 'from-gray-100 to-gray-50', 
                      text: 'text-gray-900', 
                      border: 'border-gray-200', 
                      hover: 'hover:shadow-lg hover:border-gray-300',
                      bgLight: 'bg-gray-100',
                      textLight: 'text-gray-700',
                      iconBg: 'bg-gray-100',
                      iconText: 'text-gray-900',
                      accent: 'group-hover:bg-red-500',
                      button: 'bg-gray-800 hover:bg-red-600 hover:border-red-600'
                    },
                    { 
                      bg: 'from-gray-100 to-gray-50', 
                      text: 'text-gray-900', 
                      border: 'border-gray-200', 
                      hover: 'hover:shadow-lg hover:border-gray-300',
                      bgLight: 'bg-gray-100',
                      textLight: 'text-gray-700',
                      iconBg: 'bg-gray-100',
                      iconText: 'text-gray-900',
                      accent: 'group-hover:bg-red-500',
                      button: 'bg-gray-800 hover:bg-red-600 hover:border-red-600'
                    },
                    { 
                      bg: 'from-gray-100 to-gray-50', 
                      text: 'text-gray-900', 
                      border: 'border-gray-200', 
                      hover: 'hover:shadow-lg hover:border-gray-300',
                      bgLight: 'bg-gray-100',
                      textLight: 'text-gray-700',
                      iconBg: 'bg-gray-100',
                      iconText: 'text-gray-900',
                      accent: 'group-hover:bg-red-500',
                      button: 'bg-gray-800 hover:bg-red-600 hover:border-red-600'
                    },
                  ];
                  
                  const colors = colorVariants[index % colorVariants.length];

                  return (
                    <SwiperSlide key={service.id} className="h-auto">
                      <div className={`group relative flex flex-col h-full bg-white rounded-xl overflow-hidden transition-all duration-300 border ${colors.border} hover:-translate-y-1 ${colors.hover} hover:shadow-md`} style={{ minHeight: '420px' }}>
                        {/* Top accent line */}
                        <div className={`absolute inset-x-0 top-0 h-1 bg-gray-200 ${colors.accent} transition-colors duration-300`}></div>
                        
                        <div className="flex flex-col h-full p-6">
                          {/* Icon */}
                          <div className={`${colors.iconBg} h-14 w-14 rounded-full p-3 flex items-center justify-center mb-5 transition-colors duration-300`}>
                            <Image
                              src={service.icon}
                              alt={service.name}
                              width={32}
                              height={32}
                              className="h-8 w-8 object-contain"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex flex-col flex-1">
                            <h3 className="text-lg font-bold leading-tight mb-3 h-14 flex items-center">{service.name}</h3>
                            
                            <p className="text-sm text-gray-600 mb-4 line-clamp-3 min-h-[60px]">
                              {service.description}
                            </p>
                            
                            {/* Features */}
                            {service.features && service.features.length > 0 && (
                              <ul className="mb-5 space-y-2 text-sm flex-1">
                                {service.features.slice(0, 3).map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                    <svg className="mr-2 mt-1 h-3.5 w-3.5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          
                          {/* Action Button */}
                          <div className="border-t border-gray-100 bg-gray-50 -mx-6 px-6 py-4 mt-auto">
                            <Link
                              href={`/service-details/${service.id}`}
                              className={`button inline-block w-full rounded-lg border border-gray-800 ${colors.button} px-4 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:shadow-md`}
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

                {/* Navigation Buttons */}
                <div className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !flex !items-center !justify-center !shadow-md !absolute !z-[15] !left-0 !top-1/2 !-translate-y-1/2 !transition-all !duration-200 !outline-none cursor-pointer hover:!bg-gray-50 border border-gray-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !flex !items-center !justify-center !shadow-md !absolute !z-[15] !right-0 !top-1/2 !-translate-y-1/2 !transition-all !duration-200 !outline-none cursor-pointer hover:!bg-gray-50 border border-gray-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section id="about-hero-section">
          <div className="mb-10 lg:mb-12 xl:mb-14 pt-8 pb-8 xl:pt-10 xl:pb-10">
            <div className="global-container">
              <div className="jos mb-6 text-center lg:mb-8 xl:mb-10" data-jos_animation="zoom">
                <div className="text-center max-w-4xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">What We Offer</h2>
                </div>
              </div>
              
              {/* Feature Grid */}
              <div className="jos grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" data-jos_animation="fade-up">
                {/* Feature 1 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-sm border border-orange-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Delivering cutting-edge AI solutions that transform business processes.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-sm border border-orange-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Expertise</h3>
                  <p className="text-sm text-gray-600">Our team of AI specialists delivers tailored solutions for your unique challenges.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-sm border border-orange-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Trust</h3>
                  <p className="text-sm text-gray-600">Building secure, ethical AI systems with transparent methodologies.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-sm border border-orange-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Results</h3>
                  <p className="text-sm text-gray-600">Delivering measurable impact with AI solutions that drive business growth.</p>
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

        {/* Footer */}
        <Footer_01 />
      </main>
    </>
  );
}

export default Services;
