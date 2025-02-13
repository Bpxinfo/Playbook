import React from 'react';

const ExternalLinks = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">External Links</h1>
        
        <div className="space-y-6">
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4">Title/Subheader</h2>
            <p className="pl-6 text-gray-700">https://placeholder/com/webpagelink</p>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4">Title/Subheader</h2>
            <p className="pl-6 text-gray-700">https://placeholder/com/webpagelink</p>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4">Title/Subheader</h2>
            <p className="pl-6 text-gray-700">https://placeholder/com/webpagelink</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinks;