// src/components/Details.jsx

import React, { useEffect } from 'react'; // Import useEffect
import '../Styles/Details.css'; // Import the CSS file

import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

const Details = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // duration and once: true are common settings
  }, []);

  const paymentMethods = [
    "Cash", "Credit Card", "Debit Card", "Online Payment"
  ];

  const parkingOptions = "Free parking on site";

  const businessHours = [
    { day: "Mon", time: "09:00 AM - 09:00 PM" },
    { day: "Tue", time: "09:00 AM - 09:00 PM" },
    { day: "Wed", time: "09:00 AM - 09:00 PM" },
    { day: "Thu", time: "10:00 AM - 09:00 PM" },
    { day: "Fri", time: "09:00 AM - 09:00 PM" },
    { day: "Sat", time: "09:00 AM - 09:00 PM" },
    { day: "Sun", time: "09:00 AM - 09:00 PM" },
  ];

  return (
    <section className="salon_details_section">
      <h2 className="salon_details_main_heading">Salon Information</h2>

      <div className="salon_details_container">

        {/* Payment Methods Card - AOS applied here */}
        <div className="details_card" data-aos="fade-up">
          <h3 className="details_card_heading">Payment Methods</h3>
          <ul className="payment_methods_list">
            {paymentMethods.map((method, index) => (
              <li key={index} className="details_list_item">
                <span className="details_bullet"></span>{method}
              </li>
            ))}
          </ul>
        </div>

        {/* Parking Options Card - AOS applied here */}
        <div className="details_card" data-aos="fade-up" data-aos-delay="100"> {/* Added a slight delay for subtle stagger */}
          <h3 className="details_card_heading">Parking Options</h3>
          <p className="parking_text">
            <span className="details_bullet"></span>{parkingOptions}
          </p>
        </div>

        {/* Business Hours Card - AOS applied here */}
        <div className="details_card full_width_card" data-aos="fade-up" data-aos-delay="200"> {/* Added a slight delay for subtle stagger */}
          <h3 className="details_card_heading">Business Hours</h3>
          <ul className="business_hours_list_grid">
            {businessHours.map((entry, index) => (
              <li key={index} className="details_list_item">
                <span className="details_bullet"></span>
                <span className="details_day">{entry.day}</span> : <span className="details_time">{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Details;