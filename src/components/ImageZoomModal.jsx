import React, { useState, useRef, useEffect } from 'react';
import { FiZoomIn, FiZoomOut, FiX } from 'react-icons/fi';

const ImageZoomModal = ({ isOpen, onClose, imageUrl, altText }) => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const [isRightClick, setIsRightClick] = useState(false);

  const modalRef = useRef(null);

  // Handle Shift key press events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Shift') {
        setIsShiftPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Shift') {
        setIsShiftPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleMouseDown = (e) => {
    if (e.button === 2) {
      e.preventDefault();
      setIsDragging(true);
      setIsRightClick(true);
      setDragStart({
        x: e.clientX - translate.x,
        y: e.clientY - translate.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setTranslate({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = (e) => {
    if (e.button === 2) {
      setIsDragging(false);
      setIsRightClick(false);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsRightClick(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    if (isShiftPressed) {
      handleZoomOut();
    } else {
      handleZoomIn();
    }
  };

  const handleImageDragStart = (e) => {
    e.preventDefault();
  };

  const getCursorStyle = () => {
    if (isDragging) {
      return 'grabbing';
    } else if (isDragging === false && scale > 1) {
      return 'grab';
    } else if (scale > 1) {
      return 'zoom-out';
    } else {
      return 'zoom-in';
    }
  };

  const getImageCursorStyle = () => {
    if (isRightClick) {
      return 'grabbing';
    } else if (isShiftPressed) {
      return 'zoom-out';
    } else {
      return 'zoom-in';
    }
  };

  const handleClose = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    setIsDragging(false);
    setIsRightClick(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onMouseMove={isRightClick ? handleMouseMove : null}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onContextMenu={handleContextMenu}
          style={{ cursor: 'default' }}
        >
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center"
            style={{ cursor: getImageCursorStyle() }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
            >
              <FiX size={24} />
            </button>
            
            <div className="flex gap-4 mb-4 items-center">
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
              <span className="text-sm text-white ml-2">
                Hold right click to drag canvas
              </span>
            </div>

            <div 
              className="relative overflow-auto w-full h-full flex items-center justify-center"
              onClick={handleClick}
            >
              <img
                src={imageUrl}
                alt={altText}
                style={{
                  transform: `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`,
                  transition: 'transform 0.2s ease-in-out',
                  maxHeight: '90vh',
                  maxWidth: '90vw',
                  objectFit: 'contain',
                }}
                className=""
                onDragStart={handleImageDragStart}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageZoomModal; 