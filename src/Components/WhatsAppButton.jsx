import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = {
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  };

  return (
    <div style={containerStyle}>
      <a
        href="https://wa.me/919908349456?text=Hi%20Blink%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp size={60} color="#25D366" style={iconStyle} />
      </a>
    </div>
  );
}

export default WhatsAppButton;