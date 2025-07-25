import React, { useState } from 'react';
import '../Styles/Contact.css'; // Make sure this CSS file is used

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We’ll get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  // --- Google Maps Data (Replace with your actual URLs) ---
  const googleMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4132.054008392617!2d78.33360697551483!3d17.504795683402538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92871e9231eb%3A0x7ccd7e026ff45cff!2sBlink%20Family%20Salon!5e1!3m2!1sen!2sin!4v1753070457096!5m2!1sen!2sin";
  const shopGoogleMapsUrl = "https://www.google.com/maps/place/Blink+Family+Salon/@17.5047957,78.333607,949m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb92871e9231eb:0x7ccd7e026ff45cff!8m2!3d17.5047957!4d78.3361819!16s%2Fg%2F11c5_xj4xq!5m1!1e2?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"; // Example: replace with direct Google Maps link


  return (
    <div className="contact_wrapper">
      <h1 className="contact_page_heading">Get in Touch with Blink Family Salon</h1>
      <p className="contact_page_intro">We're here to answer any questions you may have. Reach out to us!</p>

      <div className="contact_layout">
        {/* Contact Form Section */}
        <div className="contact_box contact_form_section"> {/* Added class for specific styling */}
          <h2 className="contact_heading">
            We’d Love To Hear From You
            <span className="contact_subheading">
              Reach out to Blink Family Salon in Chanda Nagar by filling out the form below.
            </span>
          </h2>

          <form className="contact_form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Business Hours & Location Section */}
        <div className="contact_box contact_info_section"> {/* Added class for specific styling */}
          {/* Business Hours */}
          <div className="business_hours_card">
            <h3 className="info_section_subheading">Business Hours</h3>
            <ul className="business_hours_list">
              <li>Monday – Wednesday: 9:00 AM – 9:00 PM</li>
              <li>Thursday: 10:00 AM – 9:00 PM</li>
              <li>Friday - Sunday: 9:00 AM – 9:00 PM</li>
            </ul>
          </div>

          {/* Location / Map */}
          <div className="shop_location_card">
            <h3 className="info_section_subheading">Find Us</h3>
            <a href={shopGoogleMapsUrl} target="_blank" rel="noopener noreferrer" className="map_link_wrapper">
              <div className="map_embed_container">
                <iframe
                  src={googleMapsEmbedSrc}
                  width="100%" // Overridden by CSS
                  height="100%" // Overridden by CSS
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shop Location on Google Maps"
                ></iframe>
              </div>
              <p className="map_click_prompt">Click map to open in Google Maps</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;