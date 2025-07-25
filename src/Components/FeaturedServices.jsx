// src/components/FeaturedServices.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/FeaturedServices.css';

// Import your images
import testImage from '../images/salon1.jpg';
// import HairCut from '../images/haircutformen.jpg';
import beardDesigning from '../images/Men/Beard Designing.avif';
import headMassage from '../images/Men/Head massage.jpeg';
import hairCut from '../images/Men/Hair cut.jpeg';
import hairSpa from '../images/Men/Hair Spa.jpeg';
import hairStraightening from '../images/Men/Hair Straightening & Smoothening.webp';
import freshFruitFacial from '../images/Men/Fresh Fruit Facial.jpeg';
import antiAcneCleanUp from '../images/Men/Anti-Acne Clean-Up.jpeg';
import goldFacial from '../images/Men/Gold Facial.jpeg';
import deepTissueMassage from '../images/Men/Deep Tissue Massage.jpeg';
import fullBody from '../images/Men/Full Body.jpeg';
import balineseMassage from '../images/Men/Balinese Massage.jpeg';

// ... import other specific images if you have them
// Create image mapping object
const imageMap = {
  'Beard Designing': beardDesigning,
    'Head massage': headMassage,
    'Hair cut': hairCut,
    'Hair Spa': hairSpa,
    'Hair Straightening & Smoothening': hairStraightening,
    'Fresh Fruit Facial': freshFruitFacial,
    'Anti-Acne Clean-Up': antiAcneCleanUp,
    'Gold Facial': goldFacial,
    'Deep Tissue Massage': deepTissueMassage,
    'Full Body': fullBody,
    'Balinese Massage': balineseMassage,
  
}
// --- YOUR FULL DATA SET ---
const serviceCategories = [
    { id: 'hairCareMen', name: 'HAIR CARE FOR MEN', services: [
      { name: 'Haircut', description: 'Personalized haircut by skilled stylists.', image: imageMap['Hair cut'] },
      { name: 'Beard Designing', description: 'Expert shaping and styling to perfect your beard.', image: imageMap['Beard Designing'] },
      { name: 'Head Massage', description: 'Your hair means relaxing your mind and regenerating them for hair home with our services. Come experience a natural..', image: imageMap['Head massage'] },
      { name: 'Hair Spa', description: 'Experience the joy of a hair salon just like home with our services. Naturals spa is a miracle booster that every human needs.', image: imageMap['Hair Spa'] },
      { name: 'Hair Straightening & Smoothening', description: 'Mane matters for every man at Naturals care comes first and our salonist offers the best style first and smoothening.', image: imageMap['Hair Straightening & Smoothening'] },
    ]},
    { id: 'hairCareWomen', name: 'HAIR CARE FOR WOMEN', services: [
        { name: 'Haircut & Trim', description: 'Includes Hair Wash and Blast Dry for a fresh look.', image: testImage, link: '#'},
        { name: 'Deep Conditioning', description: 'Add shine while protecting your tresses from damage.', image: testImage, link: '#'},
        { name: 'Smoothening', description: 'Enriched with keratin for a glamorous, natural look.', image: testImage, link: '#'},
        { name: 'Moroccan Oil Spa', description: 'An indulgent spa treatment to nourish and revitalize.', image: testImage, link: '#'},
    ]},
    { 
        id: 'skinCareMen', 
        name: 'SKIN CARE FOR MEN', 
        services: [
      { name: 'Fresh Fruit Facial', description: 'A nourishing facial using fresh fruits to rejuvenate your skin.', image: imageMap['Fresh Fruit Facial'] },
      { name: 'Anti-Acne Clean-Up', description: 'Helps to cleanse pores and reduce acne breakouts.', image: imageMap['Anti-Acne Clean-Up'] },
      { name: 'Gold Facial', description: 'Indulge in a radiant gold facial for an instant glow.', image: imageMap['Gold Facial'] },
        ]
    },
    { 
        id: 'skinCareWomen', 
        name: 'SKIN CARE FOR WOMEN', 
        services: [
            { name: 'Whitening Facial', description: 'Regenerates clear and healthy layers and give a better glow to the skin.', image: testImage, link: '#' },
            { name: 'Tan Removal Facial', description: "Lightens blemishes, removes dead cells and leaves your skin clean & radiant.", image: testImage, link: '#' },
            { name: 'O3 Diamond Facial', description: 'Helps in moisturizing dry rough skin, de-clogs pores, and gives mild, infection-free exfoliation.', image: testImage, link: '#' },
        ]
    },
    { 
        id: 'bodyCareMen', 
        name: 'BODY CARE FOR MEN', 
        services: [
      { name: 'Balinese Massage', description: 'A full-body, deep-tissue, holistic treatment using a combination of gentle stretches, acupressure, reflexology, and aromatherapy.', image: imageMap['Balinese Massage'] },
      { name: 'Deep Tissue Massage', description: 'Focuses on realigning deeper layers of muscles and connective tissue, often used for chronic aches and pains.', image: imageMap['Deep Tissue Massage'] },
      { name: 'Full Body', description: 'Comprehensive full body bleaching for overall skin brightening.', image: imageMap['Full Body'] },
        ]
    },
    { 
        id: 'bodyCareWomen', 
        name: 'BODY CARE FOR WOMEN', 
        services: [
            { name: 'Balinese Massage', description: 'A full-body, deep-tissue, holistic treatment using a combination of gentle stretches and aromatherapy.', image: testImage, link: '#' },
            { name: 'Hot Stone Therapy', description: 'Heated, smooth stones are placed on the body to warm and relax muscles, allowing for deeper pressure.', image: testImage, link: '#' },
            { name: 'Full Body Polishing', description: 'An exfoliating treatment that leaves your skin feeling smooth, soft, and glowing.', image: testImage, link: '#' },
        ]
    },
];

// --- DESKTOP CAROUSEL COMPONENT ---
const DesktopCarousel = ({ services }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);

    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth <= 1024) setCardsPerPage(2);
            else setCardsPerPage(3);
        };
        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);
        return () => window.removeEventListener('resize', updateCardsPerPage);
    }, []);

    useEffect(() => {
        setCurrentPage(0);
    }, [services]);

    const totalPages = Math.ceil(services.length / cardsPerPage);
    const hasPagination = services.length > cardsPerPage;

    const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
    const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

    const startIndex = currentPage * cardsPerPage;
    const paginatedServices = services.slice(startIndex, startIndex + cardsPerPage);

    return (
        <div className="carousel-wrapper desktop">
            {hasPagination && <button className="carousel-arrow prev" onClick={handlePrev}>‹</button>}
            <div className={`services-grid cards-${cardsPerPage}`}>
                {paginatedServices.map((service, index) => (
                    <div className="service-card" key={startIndex + index}>
                        <img src={service.image} alt={service.name} className="service-card-image" />
                        <div className="service-card-content">
                            <h3 className="service-card-title">{service.name}</h3>
                            <p className="service-card-description">{service.description}</p>
                            {/* "VIEW PRICES" button is removed */}
                        </div>
                    </div>
                ))}
            </div>
            {hasPagination && <button className="carousel-arrow next" onClick={handleNext}>›</button>}
        </div>
    );
};


// --- MOBILE CAROUSEL COMPONENT (for inside the accordion) ---
const MobileCarousel = ({ services }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = services.length;
    
    const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
    const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

    const paginatedService = services[currentPage];

    if (!paginatedService) return null;

    return (
        <div className="carousel-wrapper mobile">
            <button className="carousel-arrow prev" onClick={handlePrev}>‹</button>
            <div className="service-card">
                <img src={paginatedService.image} alt={paginatedService.name} className="service-card-image" />
                <div className="service-card-content">
                    <h3 className="service-card-title">{paginatedService.name}</h3>
                    {/* THIS IS THE FIX: Changed 'service' to 'paginatedService' */}
                    <p className="service-card-description">{paginatedService.description}</p>
                    {/* "VIEW PRICES" button is removed */}
                </div>
            </div>
            <button className="carousel-arrow next" onClick={handleNext}>›</button>
        </div>
    );
};


// --- MAIN FEATUREDSERVICES COMPONENT ---
const FeaturedServices = () => {
    const [activeTab, setActiveTab] = useState(serviceCategories[0].id);
    const [mobileAccordionOpen, setMobileAccordionOpen] = useState(serviceCategories[0].id);

    const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

    const handleAccordionToggle = (id) => {
        setMobileAccordionOpen(mobileAccordionOpen === id ? null : id);
    };

    return (
        <div className="featured-wrapper">
            {/* Added the new heading */}
            <h2 className="section-heading">Featured Services</h2>
            <div className="desktop-view">
                <nav className="featured-tabs">
                    {serviceCategories.map(category => (
                        <button key={category.id} className={`tab-button ${activeTab === category.id ? 'active' : ''}`} onClick={() => setActiveTab(category.id)}>
                            {category.name}
                        </button>
                    ))}
                </nav>
                {activeCategory && <DesktopCarousel services={activeCategory.services} />}
            </div>

            <div className="mobile-accordion">
                {serviceCategories.map(category => (
                    <div className="accordion-item" key={category.id}>
                        <button className={`accordion-header ${mobileAccordionOpen === category.id ? 'active' : ''}`} onClick={() => handleAccordionToggle(category.id)}>
                            {category.name}
                            <span className="accordion-arrow-icon">{mobileAccordionOpen === category.id ? '▲' : '▼'}</span>
                        </button>
                        <div className={`accordion-content ${mobileAccordionOpen === category.id ? 'open' : ''}`}>
                            {mobileAccordionOpen === category.id && <MobileCarousel services={category.services} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedServices;