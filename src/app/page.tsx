'use client';

import dynamic from 'next/dynamic';

// Dynamically import the HomeContent component to avoid hydration mismatches
const HomeContent = dynamic(() => import('./HomeContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500 mb-4"></div>
        <p className="text-muted">Loading portfolio...</p>
      </div>
    </div>
  ),
});

const HomePage = () => {
  return <HomeContent />;
};

export default HomePage;