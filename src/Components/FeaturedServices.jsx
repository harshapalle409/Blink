// src/components/FeaturedServices.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/FeaturedServices.css';

// Import your images
import testImage from '../images/salon1.jpg';
import HairCut from '../images/haircutformen.jpg';
// ... import other specific images if you have them

// --- YOUR FULL DATA SET ---
const serviceCategories = [
    { id: 'hairCareMen', name: 'HAIR CARE FOR MEN', services: [
        { name: 'Hair Cut', description: 'Personalized haircut by skilled stylists to perfectly suit your look.', image: HairCut, link: '#' },
        { name: 'Beard Designing', description: 'Expert shaping and styling to perfect your beard and define your features.', image: testImage, link: '#' },
        { name: 'Head Massage', description: 'Relaxing your hair follicles and regenerating them for hair growth.', image: testImage, link: '#' },
        { name: 'Hair Spa', description: 'A miracle booster that every human needs for healthy, vibrant hair.', image: testImage, link: '#' },
        { name: 'Hair Straightening', description: 'Our salonists offer the best style first and smoothening next.', image: testImage, link: '#' },
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
            { name: 'Fresh Fruit Facial', description: 'A nourishing facial using fresh fruits to rejuvenate your skin and provide a natural glow.', image: testImage, link: '#' },
            { name: 'Anti-Acne Clean-Up', description: 'An effective treatment that helps to cleanse pores and reduce acne breakouts.', image: testImage, link: '#' },
            { name: 'Gold Facial', description: 'Indulge in a luxurious and radiant gold facial for an instant, brilliant glow.', image: testImage, link: '#' },
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
            { name: 'Traditional Thai Massage', description: 'An ancient healing art using passive stretching and gentle pressure along energy lines.', image: testImage, link: '#' },
            { name: 'Deep Tissue Massage', description: 'Focuses on realigning deeper layers of muscles and connective tissue.', image: testImage, link: '#' },
            { name: 'Full Body Massage (Aroma)', description: 'A complete body relaxation experience with aromatic essential oils.', image: testImage, link: '#' },
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