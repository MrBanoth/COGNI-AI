'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { jobOpenings } from './data';

export default function Careers() {
  const router = useRouter();
  
  const handleJobClick = (jobId) => {
    router.push(`/careers/${jobId}`);
  };
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Section */}
      <section id="section-breadcrumb">
        <div className="breadcrumb-wrapper mb-0">
          <div className="global-container">
            <div className="breadcrumb-block pt-0">
              <h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">Careers</h1>
              <ul className="breadcrumb-nav">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="pt-8 pb-12 bg-white md:pt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
            
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200"
                  onClick={() => handleJobClick(job.id)}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
                          <span className="flex items-center mr-4">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center mr-4">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/careers/${job.id}`);
                        }}
                        className="group button inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-black rounded-[50px] hover:bg-colorOrangyRed hover:border-colorOrangyRed focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all duration-300 border-2 border-black"
                      >
                        <span className="relative flex items-center">
                          <span className="transition-all duration-300 group-hover:pr-5">Apply Now</span>
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                    <p className="mt-4 text-gray-600">{job.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Posted {job.postedDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Add bottom padding to main content */}
      <div className="pb-16"></div>
    </div>
  );
}