'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import useAccordion from '@/components/hooks/useAccordion';
import useTabs from '@/components/hooks/useTabs';
import Header_01 from '@/components/header/Header_01';
import Footer_01 from '@/components/footer/Footer_01';

// Dynamically import components with no SSR
const FAQSection = dynamic(
  () => import('@/components/FAQSection'),
  { ssr: false }
);

// Dynamically import VideoModal with no SSR
const VideoModal = dynamic(
  () => import('@/components/VideoModal'),
  { ssr: false }
);

function Home() {
  const [activeIndex, handleAccordion] = useAccordion(0);
  const [activeTab, handleTab] = useTabs();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoOrigin, setVideoOrigin] = useState({ x: '50%', y: '50%' });
  const playButtonRef = useRef(null);

  const handlePlayClick = (e) => {
    e.preventDefault();
    if (playButtonRef.current) {
      const rect = playButtonRef.current.getBoundingClientRect();
      // Calculate the position relative to the viewport
      const x = (rect.left + rect.width / 2) / window.innerWidth * 100;
      const y = (rect.top + rect.height / 2) / window.innerHeight * 100;
      setVideoOrigin({ x: `${x}%`, y: `${y}%` });
    }
    setIsVideoOpen(true);
  };

  return (
    <div className='page-wrapper relative z-[1] bg-white'>
      {/*...::: Header Start :::... */}
      <Header_01 />
      {/*...::: Header End :::... */}
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Hero Section Start :::... */}
        <section id='section-hero' className='relative'>
          <div className='relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-16 pt-20 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-20 lg:pt-24 xl:pt-28'>
            <div className='global-container'>
              <div className='mb-14 flex flex-col items-center text-center lg:mb-20'>
                <h1 className='jos slide-from-bottom mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]'>
                  Empowering Businesses with Intelligent AI Solutions
                </h1>

                <p className='jos slide-from-bottom mb-11 max-w-[800px] text-base text-gray-600'>
                  Based in Delaware, our AI startup specializes in developing custom AI solutions, 
                  providing expert consulting, and delivering advanced AI integration services across 
                  industries to help businesses thrive in the digital age.
                </p>
                <div
                  className='jos flex flex-wrap justify-center gap-6'
                  data-jos_animation='fade'
                >
                  <Link
                    href='/about'
                    className='group button rounded-[50px] border-2 border-black bg-black py-4 px-8 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white transition-all duration-300 flex items-center overflow-hidden'
                  >
                    <span className='relative flex items-center'>
                      <span className='transition-all duration-300 group-hover:pr-6'>Discover More</span>
                      <span className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </span>
                  </Link>
                  <Link
                    href='/contact'
                    className='button rounded-[50px] border-2 border-black bg-transparent py-4 px-8 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:bg-black hover:text-white transition-all duration-300 flex items-center'
                  >
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="mx-auto max-w-[1500px] px-5">
                <div className="jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
                  <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
                    <Image 
                      src="/assets/img/th-1/funfact-image.jpg"
                      alt="funfact-image" 
                      width={1920}
                      height={2090}
                      className="w-full h-80 object-cover object-center lg:h-[35rem] xl:h-full"
                      priority={false}
                      style={{ color: 'transparent' }}
                    />
                    <button 
                      className="group absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 transform" 
                      aria-label="Play video" 
                      onClick={handlePlayClick}
                      ref={playButtonRef}
                    >
                      <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black bg-black/20 text-lg font-bold text-white backdrop-blur-[2px] transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"></path>
                        </svg>
                        <div className="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30"></div>
                      </div>
                    </button>
                    <VideoModal
                      isOpen={isVideoOpen}
                      onClose={() => setIsVideoOpen(false)}
                      videoUrl='https://www.youtube.com/watch?v=3nQNiWdeH2Q'
                      origin={videoOrigin}
                    />
                  </div>
                  <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
                    <div className="mb-8 lg:mb-10 xl:mb-8">
                      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        Transforming Business with AI Innovation
                      </h2>
                    </div>
                    <div className="text-left text-lg leading-relaxed text-white lg:text-xl mb-8">
                      <p className="mb-8 last:mb-0">
                        Discover how Cogni AI is revolutionizing industries with our cutting-edge AI solutions. 
                        Our platform adapts to your evolving business needs, ensuring you always have access to 
                        the most advanced AI capabilities to drive growth and efficiency.
                      </p>
                    </div>
                    <div className="my-10 h-[1px] w-full bg-colorCodGray/50"></div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      <div className="rounded-lg bg-white/5 p-4 text-center backdrop-blur-sm">
                        <div className="text-3xl font-bold text-colorOrangyRed md:text-4xl">99.9%</div>
                        <div className="mt-1 text-sm text-white/80">Uptime</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-4 text-center backdrop-blur-sm">
                        <div className="text-3xl font-bold text-colorOrangyRed md:text-4xl">250+</div>
                        <div className="mt-1 text-sm text-white/80">Clients</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-4 text-center backdrop-blur-sm">
                        <div className="text-3xl font-bold text-colorOrangyRed md:text-4xl">1ms</div>
                        <div className="mt-1 text-sm text-white/80">Response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='my-8 h-[1px] w-full bg-[#DBD6CF] lg:my-10'></div>
              <div className='jos mx-auto mb-8 max-w-[715px] text-center lg:mb-10'>
                <p className='text-lg'>
                  Companies of all sizes trust us to find AI SaaS critical to
                  their growth and innovation
                </p>
              </div>
              <div className='jos brand-slider' data-jos_animation='fade'>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={105}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-1.png'
                      alt='brand-1'
                      width='180'
                      height='38'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-2.png'
                      alt='brand-2'
                      width='183'
                      height='35'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-3.png'
                      alt='brand-3'
                      width='172'
                      height='35'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-4.png'
                      alt='brand-4'
                      width='175'
                      height='30'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-5.png'
                      alt='brand-5'
                      width='168'
                      height='36'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-1.png'
                      alt='brand-1'
                      width='180'
                      height='38'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-2.png'
                      alt='brand-2'
                      width='183'
                      height='35'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-3.png'
                      alt='brand-3'
                      width='172'
                      height='35'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-4.png'
                      alt='brand-4'
                      width='175'
                      height='30'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img/th-1/brand-5.png'
                      alt='brand-5'
                      width='168'
                      height='36'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className='orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]'></div>

            <div className='orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]'></div>
          </div>
        </section>
        {/*...::: Hero Section End :::... */}

        {/*...::: Products Section Start :::... */}
        <section id='our-services' className='relative py-12 overflow-hidden'>
          {/* Background Elements */}
          <div className='absolute -left-[200px] -top-[100px] -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-2xl'></div>
          <div className='absolute -right-[200px] -bottom-[100px] -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-purple-500/10 to-transparent blur-2xl'></div>
          
          <div className='global-container relative'>
            {/* Section Header */}
            <div className='jos mb-10 text-center'>
              <div className='mx-auto max-w-3xl'>
                <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                  AI-Powered Products
                </h2>
                <p className='mx-auto mt-2 text-base text-gray-600 md:max-w-2xl'>
                  Cutting-edge AI solutions designed to transform your business operations and drive innovation
                </p>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
              {/* Product 1 */}
              <div className='group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                {/* Gradient Border Effect */}
                <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                <div className='relative z-10 flex flex-col h-full'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100/80'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-1.svg'
                        alt='AI Support Bot'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-blue-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      AI Support Bot
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      Intelligent chatbot using NLP to handle customer queries, provide instant responses, and escalate complex issues.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/products#ai-support-bot'
                        className='inline-flex items-center text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full'></div>
              </div>

              {/* Product 2 */}
              <div className='group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                <div className='relative z-10 flex flex-col h-full'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 transition-all duration-300 group-hover:bg-purple-100/80'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-2.svg'
                        alt='Predictive Analytics'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-purple-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      Predictive Analytics
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      Robust AI tool that analyzes historical data to forecast trends, customer behavior, and potential risks.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/products#predictive-analytics'
                        className='inline-flex items-center text-sm font-medium text-purple-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full'></div>
              </div>

              {/* Product 3 */}
              <div className='group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                <div className='relative z-10 flex flex-col h-full'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 transition-all duration-300 group-hover:bg-green-100/80'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-3.svg'
                        alt='Document Analyzer'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-green-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      Document Analyzer
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      AI-powered solution that processes and extracts key information from various document types with high accuracy.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/products#document-analyzer'
                        className='inline-flex items-center text-sm font-medium text-green-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-300 group-hover:w-full'></div>
              </div>

              {/* Product 4 */}
              <div className='group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                <div className='relative z-10 flex flex-col h-full'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 transition-all duration-300 group-hover:bg-amber-100/80'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-4.svg'
                        alt='Recommendation Engine'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-amber-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      Recommendation Engine
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      Advanced AI system that analyzes user behavior to deliver personalized content and product recommendations.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/products#recommendation-engine'
                        className='inline-flex items-center text-sm font-medium text-amber-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full'></div>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Products Section End :::... */}

        {/*...::: Service Section Start :::... */}
        <section id='section-service' className='relative overflow-hidden'>
          <div className='py-16'>
            <div className='global-container'>
              {/* Section Header - Centered */}
              <div className='jos mb-10 text-center'>
                <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>Our Services</h2>
                <p className='mx-auto mt-2 max-w-2xl text-base text-gray-600'>
                  Comprehensive AI solutions to transform your business operations and drive innovation
                </p>
              </div>
              
              {/* Services Grid */}
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {/* Service Item 1 */}
                <div className='group relative flex flex-col h-full overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-colorOrangyRed/10 transition-all duration-300 group-hover:bg-colorOrangyRed/20'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-1.svg'
                        alt='Custom AI Solutions'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-colorOrangyRed'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      Custom AI Solutions
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      Tailored AI applications designed to solve your unique business challenges and drive growth.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/services#custom-ai-solutions'
                        className='inline-flex items-center text-sm font-medium text-colorOrangyRed transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  {/* Animated border bottom */}
                  <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-colorOrangyRed to-orange-400 transition-all duration-300 group-hover:w-full' />
                </div>
                
                {/* Service Item 2 */}
                <div className='group relative flex flex-col h-full overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-200/70'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-2.svg'
                        alt='AI Consulting'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-blue-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      AI Consulting & Strategy
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      Expert guidance to develop and implement effective AI strategies that align with your business objectives.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/services#ai-consulting'
                        className='inline-flex items-center text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-300 group-hover:w-full' />
                </div>

                {/* Service Item 3 */}
                <div className='group relative flex flex-col h-full overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 transition-all duration-300 group-hover:bg-purple-200/70'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-3.svg'
                        alt='AI Model Development'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-purple-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      AI Model Development
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      Custom machine learning models designed and integrated seamlessly into your existing systems.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/services#ai-development'
                        className='inline-flex items-center text-sm font-medium text-purple-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-purple-300 transition-all duration-300 group-hover:w-full' />
                </div>

                {/* Service Item 4 */}
                <div className='group relative flex flex-col h-full overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 transition-all duration-300 group-hover:bg-green-200/70'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-3.svg'
                        alt='AI Integration'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-green-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      AI Integration
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      Seamless integration of AI capabilities into your existing systems and workflows for enhanced efficiency.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/services#ai-integration'
                        className='inline-flex items-center text-sm font-medium text-green-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-green-500 to-green-300 transition-all duration-300 group-hover:w-full' />
                </div>

                {/* Service Item 5 */}
                <div className='group relative flex flex-col h-full overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 transition-all duration-300 group-hover:bg-amber-200/70'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-1.svg'
                        alt='AI Resource Augmentation'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-amber-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      AI Resource Augmentation
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      Skilled AI developers, data scientists, and ML engineers to augment your existing teams and accelerate AI initiatives.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/services#ai-resources'
                        className='inline-flex items-center text-sm font-medium text-amber-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full' />
                </div>

                {/* Service Item 6 */}
                <div className='group relative flex flex-col h-full overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-100 transition-all duration-300 group-hover:bg-indigo-200/70'>
                      <Image
                        src='/assets/img/th-1/service-icon-orange-2.svg'
                        alt='Data Engineering & Analytics'
                        width={40}
                        height={40}
                        className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 text-indigo-600'
                      />
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-900'>
                      Data Engineering & Analytics
                    </h3>
                    <p className='mb-4 text-sm text-gray-600 flex-grow'>
                      End-to-end data solutions including collection, processing, storage, and analysis to power your AI initiatives.
                    </p>
                    <div className='mt-auto'>
                      <Link
                        href='/services#data-analytics'
                        className='inline-flex items-center text-sm font-medium text-indigo-600 transition-colors duration-200 hover:text-black'
                      >
                        Learn more
                        <svg
                          className='ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 group-hover:w-full' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Service Section End :::... */}

        {/* FAQ Section */}
        <FAQSection />

        {/*...::: Testimonial Section Start :::... */}
        <section className='testimonial-section'>
          {/* Section Spacer */}
          <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
                <div className='mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]'>
                  <h2 className='text-3xl font-bold text-white sm:text-4xl'>
                    What Our Clients Say About Us
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}

              {/* Testimonial List */}
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'
                  data-jos_animation='fade-left'
                  data-jos_delay='0.1'
                >
                  <div className='block'>
                    <Image
                      src='/assets/img/th-1/rating.svg'
                      alt='rating'
                      width={146}
                      height={25}
                    />
                  </div>
                  <p>
                    “This AI SaaS tool has revolutionized the way we process and
                    analyze data. This is a game-changer for our business.”
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/img/th-1/testimonial-img-1.jpg'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Max Weber
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        HR Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'
                  data-jos_animation='fade-left'
                  data-jos_delay='0.2'
                >
                  <div className='block'>
                    <Image
                      src='/assets/img/th-1/rating.svg'
                      alt='rating'
                      width={146}
                      height={25}
                    />
                  </div>
                  <p>
                    It answers immediately, and we ve seen a significant
                    reduction in response time. Our customers love it and so do
                    we!
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/img/th-1/testimonial-img-2.jpg'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Douglas Smith
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Businessman
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'
                  data-jos_animation='fade-left'
                  data-jos_delay='0.3'
                >
                  <div className='block'>
                    <Image
                      src='/assets/img/th-1/rating.svg'
                      alt='rating'
                      width={146}
                      height={25}
                    />
                  </div>
                  <p>
                    It is accurate, fast and supports multiple languages
                    support. It is a must for any international business
                    success.
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/img/th-1/testimonial-img-3.jpg'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Abraham Maslo
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Founder @ Marketing Company
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'
                  data-jos_animation='fade-right'
                  data-jos_delay='0.1'
                >
                  <div className='block'>
                    <Image
                      src='/assets/img/th-1/rating.svg'
                      alt='rating'
                      width={146}
                      height={25}
                    />
                  </div>
                  <p>
                    Security is a top concern for us, and AI SaaS takes it
                    seriously. It s a reassuring layer of protection for our
                    organization.
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/img/th-1/testimonial-img-4.jpg'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Jack Fayol
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        HR Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'
                  data-jos_animation='fade-right'
                  data-jos_delay='0.2'
                >
                  <div className='block'>
                    <Image
                      src='/assets/img/th-1/rating.svg'
                      alt='rating'
                      width={146}
                      height={25}
                    />
                  </div>
                  <p>
                    We were concerned about integrating their APIs were well
                    documented, and their support team was super cool.
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/img/th-1/testimonial-img-5.jpg'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Karen Lynn
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Software Engineer
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'
                  data-jos_animation='fade-right'
                  data-jos_delay='0.3'
                >
                  <div className='block'>
                    <Image
                      src='/assets/img/th-1/rating.svg'
                      alt='rating'
                      width={146}
                      height={25}
                    />
                  </div>
                  <p>
                    The return on investment has exceeded our expectations. it s
                    an investment in the future of our business.
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/img/th-1/testimonial-img-6.jpg'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Henry Ochi
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Bank Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
              </div>
              {/* Testimonial List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Testimonial Section Start :::... */}

        {/* Body Background Shape 1 */}
        <div className='orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]'></div>

        {/* Body Background Shape 2 */}
        <div className='orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]'></div>
      </main>
      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
}

export default Home;
