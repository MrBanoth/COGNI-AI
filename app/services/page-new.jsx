"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block pt-6 sm:pt-0">
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

        {/* Hero Section */}
        <section id="about-hero-section">
          <div className="mb-10 lg:mb-12 xl:mb-14 pt-8 pb-8 xl:pt-10 xl:pb-10">
            <div className="global-container">
              <div className="jos mb-6 text-center lg:mb-8 xl:mb-10" data-jos_animation="zoom">
                <div className="text-center max-w-4xl mx-auto px-4">
                  <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">WHAT WE OFFER</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our AI-Powered Services</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
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

        {/* Services Section */}
        <section id="services-section" className="pb-20 pt-10 xl:pb-[150px] xl:pt-[80px]">
          <div className="global-container">
            <div className="jos mb-10 text-center lg:mb-12 xl:mb-20" data-jos_animation="fade-up">
              <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
                <h2>Our AI-Powered Services</h2>
                <p className="mt-4 text-lg">
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
                }}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                className="pb-12"
              >
                {services.map((service, index) => {
                  const colorVariants = [
                    { 
                      bg: 'from-blue-500 to-indigo-600', 
                      text: 'text-blue-600', 
                      border: 'border-blue-100', 
                      hover: 'hover:bg-blue-600' 
                    },
                    { 
                      bg: 'from-purple-500 to-pink-600', 
                      text: 'text-purple-600', 
                      border: 'border-purple-100', 
                      hover: 'hover:bg-purple-600' 
                    },
                    { 
                      bg: 'from-emerald-500 to-teal-600', 
                      text: 'text-emerald-600', 
                      border: 'border-emerald-100', 
                      hover: 'hover:bg-emerald-600' 
                    },
                    { 
                      bg: 'from-amber-500 to-orange-600', 
                      text: 'text-amber-600', 
                      border: 'border-amber-100', 
                      hover: 'hover:bg-amber-600' 
                    },
                    { 
                      bg: 'from-rose-500 to-red-600', 
                      text: 'text-rose-600', 
                      border: 'border-rose-100', 
                      hover: 'hover:bg-rose-600' 
                    },
                    { 
                      bg: 'from-indigo-500 to-blue-600', 
                      text: 'text-indigo-600', 
                      border: 'border-indigo-100', 
                      hover: 'hover:bg-indigo-600' 
                    },
                  ];
                  
                  const colors = colorVariants[index % colorVariants.length];

                  return (
                    <SwiperSlide key={service.id} className="h-auto">
                      <div className={`group relative flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border ${colors.border} hover:-translate-y-1`}>
                        {/* Icon with gradient background */}
                        <div className={`bg-gradient-to-r ${colors.bg} h-40 flex-shrink-0 flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                          <div className="relative z-10 bg-white/90 p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <Image
                              src={service.icon}
                              alt={service.name}
                              width={40}
                              height={40}
                              className="h-10 w-10"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col h-full">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2 h-16">
                              {service.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed line-clamp-3 h-[72px] mb-4">
                              {service.description}
                            </p>
                          </div>

                          {/* Features */}
                          {service.features && service.features.length > 0 && (
                            <ul className="space-y-2 mb-6">
                              {service.features.slice(0, 3).map((feature, i) => (
                                <li key={i} className="flex items-start">
                                  <svg className={`h-4 w-4 ${colors.text} mr-2 mt-1 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-sm text-gray-700 line-clamp-2">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Action Button */}
                          <div className="mt-auto pt-2">
                            <Link
                              href={`/service-details/${service.id}`}
                              className={`w-full text-center inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r ${colors.bg} transition-all duration-300 hover:opacity-90`}
                            >
                              Learn More
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

                {/* Navigation Buttons */}
                <div className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !flex !items-center !justify-center !shadow-lg !absolute !z-[15] !left-2 !top-1/2 !-translate-y-1/2 hover:!bg-gray-100 !transition-all !duration-200 !border !border-gray-200 !outline-none cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                    <circle cx="12" cy="12" r="12" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <path d="M14.5 8L10.5 12L14.5 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-200" />
                  </svg>
                </div>

                <div className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !flex !items-center !justify-center !shadow-lg !absolute !z-[15] !right-2 !top-1/2 !-translate-y-1/2 hover:!bg-gray-100 !transition-all !duration-200 !border !border-gray-200 !outline-none cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                    <circle cx="12" cy="12" r="12" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <path d="M9.5 8L13.5 12L9.5 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-200" />
                  </svg>
                </div>
              </Swiper>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="global-container">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to transform your business with AI?</h2>
              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
                Get in touch with our team to learn more about our services and how they can benefit your organization.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity duration-200"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer_01 />
    </>
  );
}

export default Services;
