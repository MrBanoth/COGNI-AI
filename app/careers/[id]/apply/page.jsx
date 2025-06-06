'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { jobOpenings } from '../../data';

export default function JobApplication() {
  const params = useParams();
  const router = useRouter();
  const jobId = parseInt(params.id);
  const job = jobOpenings.find(job => job.id === jobId);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    linkedin: '',
    portfolio: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-6">The job you&apos;re trying to apply for doesn&apos;t exist or has been removed.</p>
            <Link 
              href="/careers" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              View All Openings
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, you would submit this data to your backend
    console.log('Submitting application:', { ...formData, jobId });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
      linkedin: '',
      portfolio: '',
    });
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-gray-900">Application Submitted!</h2>
            <p className="mt-2 text-gray-600">Thank you for applying for the {job.title} position. We&apos;ve received your application and will review it shortly.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push('/careers')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                View Other Openings
              </button>
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb Section */}
      <section id="section-breadcrumb">
        <div className="breadcrumb-wrapper mb-0">
          <div className="global-container">
            <div className="breadcrumb-block pt-6 sm:pt-0">
              <h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">Apply for {job.title}</h1>
              <ul className="breadcrumb-nav">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
                </li>
                <li>
                  <Link href={`/careers/${job.id}`} className="hover:text-blue-600 transition-colors">{job.title}</Link>
                </li>
                <li className="text-gray-900 font-medium">Apply</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-4 py-8 pb-12">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Apply for {job.title}</h1>
            <p className="mt-1 text-gray-600">
              {job.type} • {job.location}
            </p>
          </div>
          
          <div className="px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                    Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="py-2 px-3 block w-full text-sm text-gray-900 bg-white rounded-md border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    PDF, DOC, or DOCX (Max. 5MB)
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                    Cover Letter
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us why you'd be a great fit for this position..."
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                    LinkedIn Profile
                  </label>
                  <div className="mt-1">
                    <input
                      type="url"
                      name="linkedin"
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://www.linkedin.com/in/your-profile"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
                    Portfolio/Website
                  </label>
                  <div className="mt-1">
                    <input
                      type="url"
                      name="portfolio"
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="group inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-[50px] text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-300"
                  >
                    <span className="relative flex items-center">
                      <span className="transition-all duration-300 group-hover:pr-5">Cancel</span>
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                      </span>
                    </span>
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative inline-flex items-center px-6 py-3 border-2 border-black text-base font-medium rounded-[50px] text-white bg-black hover:bg-colorOrangyRed hover:border-colorOrangyRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <span className="relative flex items-center">
                        <span className="transition-all duration-300 group-hover:pr-5">Submit Application</span>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
