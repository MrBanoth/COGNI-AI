'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

const VideoModal = ({ isOpen, onClose, videoUrl, origin = { x: '50%', y: '50%' } }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: '100%', height: '100%' });

  // Handle opening/closing animations
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Small delay to ensure the modal is mounted before starting animation
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      
      if (videoRef.current) {
        videoRef.current.src = videoRef.current.src; // Reset the iframe to ensure autoplay works
      }
      
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // Calculate the transform origin based on the click position
  const getTransformOrigin = useCallback(() => {
    return `${origin.x} ${origin.y}`;
  }, [origin]);

  // Handle close with animation
  const handleClose = useCallback(() => {
    setIsAnimating(false);
    // Wait for the close animation to finish before unmounting
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  // Get YouTube video ID from URL
  const getVideoId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&controls=1&showinfo=0&enablejsapi=1`;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
      style={{
        willChange: 'opacity',
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div 
        ref={modalRef}
        className={`relative bg-black transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{
          transformOrigin: getTransformOrigin(),
          aspectRatio: '16/9',
          width: '90%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          willChange: 'transform, opacity',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in-out',
          borderRadius: '0.5rem',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Positioned inside the modal for better visibility */}
        <div className="absolute -right-3 -top-3 z-50 flex h-14 w-14 items-center justify-center">
          <button 
            onClick={handleClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Close video"
            style={{
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              border: '2px solid white',
              position: 'relative',
              zIndex: 10
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Video Container */}
        <div className="relative h-0 w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            ref={videoRef}
            src={embedUrl}
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
            style={{
              backgroundColor: '#000',
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
