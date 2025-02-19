import React from 'react';
import { FiZoomIn } from 'react-icons/fi';
import ImageZoomModal from './ImageZoomModal';

const ImageWithZoom = ({ src, alt, className }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openZoomModal = () => setIsModalOpen(true);
  const closeZoomModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative group">
        <img 
          src={src} 
          alt={alt} 
          className={`${className} cursor-pointer`}
          onClick={openZoomModal}
        />
        <button
          onClick={openZoomModal}
          className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <FiZoomIn size={20} />
        </button>
      </div>

      <ImageZoomModal
        isOpen={isModalOpen}
        onClose={closeZoomModal}
        imageUrl={src}
        altText={alt}
      />
    </>
  );
};

export default ImageWithZoom; 