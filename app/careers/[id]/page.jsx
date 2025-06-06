'use client';
import { useParams, notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

import { jobOpenings } from '../data';

export default function JobDetails() {
  const params = useParams();
  const jobId = parseInt(params.id);
  const job = jobOpenings.find(job => job.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Breadcrumb Section */}
      <section id="section-breadcrumb">
        <div className="breadcrumb-wrapper mb-0">
          <div className="global-container">
            <div className="breadcrumb-block pt-6 sm:pt-0">
              <h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">{job?.title || 'Job Details'}</h1>
              <ul className="breadcrumb-nav">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>{job?.title || 'Position'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">

        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-6 py-8 sm:px-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <div className="flex flex-wrap items-center text-gray-600 space-x-4">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {job.type}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {job.department}
                    </span>
                  </div>
                </div>
                <Link 
                  href={`/careers/${job.id}/apply`}
                  className="group mt-4 md:mt-0 inline-flex items-center px-6 py-3 border-2 border-black text-base font-medium rounded-[50px] text-white bg-black hover:bg-colorOrangyRed hover:border-colorOrangyRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-300"
                >
                  <span className="relative flex items-center">
                    <span className="transition-all duration-300 group-hover:pr-5">Apply Now</span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                <p className="text-gray-700 mb-6">{job.description}</p>

                <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                  {job.requirements.map((item, index) => (
                    <li key={`req-${index}`} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mb-4">Qualifications</h2>
                <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-700">
                  {job.qualifications.map((item, index) => (
                    <li key={`qual-${index}`} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mt-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Apply</h3>
                  <p className="text-gray-700 mb-4">Please submit your resume and cover letter through the application form. We look forward to reviewing your application!</p>
                  <Link 
                    href={`/careers/${job.id}/apply`}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-base font-medium rounded-[50px] text-white bg-black hover:bg-colorOrangyRed hover:border-colorOrangyRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-300"
                  >
                    Apply for this Position
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
