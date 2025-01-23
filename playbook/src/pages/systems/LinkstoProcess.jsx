import React from 'react';

const LinksToProcess = () => {
  return (
    <div className="p-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-light text-red-800 mb-8 text-center">Links To Process</h1>
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