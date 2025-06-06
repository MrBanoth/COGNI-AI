'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the loader with no SSR
const HourglassLoader = dynamic(
  () => import('@/components/HourglassLoader'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200"></div>
    )
  }
);

export default function Loading() {
  const [showLoader, setShowLoader] = useState(false);

  // Only show loader after a short delay to prevent flash on fast connections
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <HourglassLoader size={80} color="#EF4444" />
    </div>
  );
}
