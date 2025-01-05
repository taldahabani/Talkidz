import React, { useState, useEffect } from 'react';

const AffiliateBox = () => {
  const [visible, setVisible] = useState(false);
  const [productData, setProductData] = useState({
    title: "Barbie Pool & Water Park with Fun Splash Feature, Magic Box",
    image: "/api/placeholder/120/120",
    link: "https://www.amazon.com/Barbie-Playset-Puppy-Accessories-Floats/dp/B08HFVTF4M"
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-4 w-64 bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 ease-in-out hover:scale-105" style={{ zIndex: 1000 }}>
      <div className="absolute -top-2 -right-2">
        <button 
          onClick={() => setVisible(false)}
          className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="flex items-start space-x-3">
        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
          <img 
            src={productData.image} 
            alt={productData.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {productData.title}
          </h3>
          
          <p className="mt-1 text-xs text-gray-500">
            Recommended for you
          </p>
        </div>
      </div>
      
      <a 
        href={productData.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 w-full block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6C5CE7] to-[#FF4B6E] rounded-md text-center hover:opacity-90 transition-opacity"
      >
        View on Amazon
      </a>
    </div>
  );
};

export default AffiliateBox;
