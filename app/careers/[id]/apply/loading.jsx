export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="animate-pulse space-y-8">
          {/* Header Skeleton */}
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
          
          {/* Form Skeleton */}
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`${i <= 2 ? 'sm:col-span-3' : 'sm:col-span-6'}`}>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-12 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
            <div className="sm:col-span-6">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-32 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="sm:col-span-6 pt-4">
              <div className="h-12 bg-gray-200 rounded w-32 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
