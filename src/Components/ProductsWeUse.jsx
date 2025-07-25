// src/components/ProductsWeUse.jsx

import React from 'react';
import '../Styles/ProductsWeUse.css'; // Import the CSS file

// Import your brand logos here.
// Make sure the paths are correct relative to this ProductsWeUse.jsx file.
// Replace these with your actual logo files.
import biolage from '../images/biolage.png'; // Example path
import lorealparis from '../images/lorealparis.png'; // Example path
import SchwarzkopfLogo from '../images/Schwarzkopf-Logo.png';   // Example path
// Add more imports if you have more logos

const ProductsWeUse = () => {
  return (
    <section className="products_we_use_section">
      <h2 className="products_we_use_heading">Products we use</h2>
      
      <div className="brand_logos_container">
        <div className="brand_logo_item">
          <img src={biolage} alt="biolage" />
        </div>
        <div className="brand_logo_item">
          <img src={lorealparis} alt="L'Oréal Paris" />
        </div>
        <div className="brand_logo_item">
          <img src={SchwarzkopfLogo} alt="SchwarzkopfLogo" />
        </div>
        {/* Add more brand_logo_item divs for additional logos */}
      </div>
    </section>
  );
};

export default ProductsWeUse;