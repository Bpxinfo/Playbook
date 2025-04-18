import React from 'react';

const LinksToProcess = () => {
  return (
    <div className="p-8 flex justify-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Links To Process</h1>
        <div className="space-y-8">
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">Title/Subheader</h2>
            <p className="pl-6 text-gray-700">https://placeholder/com/webpagelink</p>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">Title/Subheader</h2>
            <p className="pl-6 text-gray-700">https://placeholder/com/webpagelink</p>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">Title/Subheader</h2>
            <p className="pl-6 text-gray-700">https://placeholder/com/webpagelink</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LinksToProcess;