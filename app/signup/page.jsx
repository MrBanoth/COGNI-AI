'use client';

import { useEffect } from 'react';

export default function Signup() {
  useEffect(() => {
    // Redirect to contact page
    window.location.href = '/contact';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-4 text-2xl font-semibold text-gray-800">Redirecting to Contact Page...</div>
        <div className="text-gray-600">
          If you are not redirected,{' '}
          <a href="/contact" className="text-blue-600 hover:underline">
            click here
          </a>
          .
        </div>
      </div>
    </div>
  );
}
