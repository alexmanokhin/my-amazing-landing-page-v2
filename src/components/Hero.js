import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Your
            <span className="text-indigo-600"> Amazing Project</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This project was generated with VibeCode AI. Start building something amazing!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Get Started
            </button>
            <button className="text-sm font-semibold leading-6 text-gray-900">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;