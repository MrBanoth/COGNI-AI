'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the loader with no SSR
const HourglassLoader = dynamic(
  () => import('@/components/HourglassLoader'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200"></div>
      </div>
    )
  }
);

export default function Loading() {
  const [showLoader, setShowLoader] = useState(false);

  // Only show loader after a short delay to prevent flash on fast connections
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90">
      <div className="flex flex-col items-center justify-center space-y-4">
        <HourglassLoader size={80} color="#EF4444" />
        <p className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  );
}
