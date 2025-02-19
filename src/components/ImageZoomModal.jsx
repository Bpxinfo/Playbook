import React, { useState } from 'react';
import { FiZoomIn, FiZoomOut, FiX } from 'react-icons/fi';

const ImageZoomModal = ({ isOpen, onClose, imageUrl, altText }) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
        >
          <FiX size={24} />
        </button>
        
        <div className="flex gap-4 mb-4">
          <button
            onClick={handleZoomIn}
            className="bg-white rounded-full p-2 text-black hover:bg-gray-200"
          >
            <FiZoomIn size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-white rounded-full p-2 text-black hover:bg-gray-200"
          >
            <FiZoomOut size={20} />
          </button>
        </div>

        <div className="relative overflow-auto w-full h-full flex items-center justify-center">
          <img
            src={imageUrl}
            alt={altText}
            style={{
              transform: `scale(${scale})`,
              transition: 'transform 0.2s ease-in-out',
              maxHeight: '90vh',
              maxWidth: '90vw',
              objectFit: 'contain'
            }}
            className="cursor-move"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageZoomModal; 