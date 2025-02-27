import React from 'react';
import { Link2, ExternalLink, Globe } from 'lucide-react';

const ExternalLinks = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">External Links</h1>
        
        <div className="space-y-6">
          <section className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Link2 className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Title/Subheader</h2>
            </div>
            <a href="https://placeholder/com/webpagelink" 
               className="pl-6 text-blue-600 hover:text-blue-800 flex items-center gap-2 group">
              <span>https://placeholder/com/webpagelink</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Title/Subheader</h2>
            </div>
            <a href="https://placeholder/com/webpagelink" 
               className="pl-6 text-blue-600 hover:text-blue-800 flex items-center gap-2 group">
              <span>https://placeholder/com/webpagelink</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Link2 className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Title/Subheader</h2>
            </div>
            <a href="https://placeholder/com/webpagelink" 
               className="pl-6 text-blue-600 hover:text-blue-800 flex items-center gap-2 group">
              <span>https://placeholder/com/webpagelink</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinks;