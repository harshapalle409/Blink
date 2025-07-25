import React from 'react';
import { Helmet } from 'react-helmet';
import '../Styles/Home.css';
import FeaturedServices from '../Components/FeaturedServices';
import ProductsWeUse from '../Components/ProductsWeUse';
import Details from '../Components/Details';
import Testimonials from '../Components/Testimonials';
import salonInteriorImage from '../images/salon1.jpg';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Blink Family Salon - Luxury Unisex Salon in Chanda Nagar</title>
        <meta
          name="description"
          content="Blink Family Salon is a luxury unisex salon in Chanda Nagar offering expert haircuts, bridal makeup, skin treatments, and more. Book your appointment today!"
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Blink Family Salon",
            "image": "https://blinkfamilysalon.vercel.app/images/salon1.jpg",
            "url": "https://blinkfamilysalon.vercel.app",
            "telephone": "+91-9908349456",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "near Street number 3, NN Nilayam, Aparna Hillpark Rd, PJR Enclave Rd",
              "addressLocality": "Chanda Nagar",
              "addressRegion": "Telangana",
              "postalCode": "500050",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Su 09:00-21:00",
            "sameAs": [
              "https://www.instagram.com/blink_familysalon/",
              "https://www.facebook.com/BlinkFamilySalon/",
              "https://in.pinterest.com/blinkfamilysalon/"
            ]
          }
        `}
        </script>
      </Helmet>

      <section className="main">
        <div className="Homegap-div">
          <section className="homepage_hero_section">
            <div className="hero_content_left">
              <h1>#1 Luxury <br /> Unisex Salon <br /> in Chanda Nagar</h1>
              <p>Rooted in Ritual. Styled for Today.</p>
            </div>
            <div className="hero_image_right">
              <img src={salonInteriorImage} alt="Luxury Salon Interior of Blink Family Salon in Chanda Nagar" />
            </div>
          </section>
          <FeaturedServices />
          <ProductsWeUse />
          <Details />
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Home;
