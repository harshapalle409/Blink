import React, { useState } from 'react';
import '../Styles/MensService.css';
// import testImage from '../images/salon1.jpg'; // Ensure this path is correct
// Import all service images
import antiHairFallTreatment from '../images/Men/Anti Hair fall treatment.jpeg';
import antiAcneCleanUp from '../images/Men/Anti-Acne Clean-Up.jpeg';
import antiAcneFacial from '../images/Men/Anti-Acne Facial.jpeg';
import antiDandruffTreatment from '../images/Men/Anti-Dandruff Treatment.jpg';
// import antiHairFallTreatment from '../images/Men/Anti-Hair fall Treatment.jpg';
import aromaManicure from '../images/Men/Aroma Manicure.jpeg';
import aromaPedicure from '../images/Men/Aroma Pedicure.jpeg';
import aromaTherapyMassage from '../images/Men/Aroma Therapy Massage.jpeg';
import aromaTherapy from '../images/Men/Aroma Therapy.webp';
import backMassage from '../images/Men/Back massage.jpeg';
import balineseMassage from '../images/Men/Balinese Massage.jpeg';
import basicPackage from '../images/Men/BasicPackage.jpeg';
import beardDesigning from '../images/Men/Beard Designing.avif';
import beardTrimming from '../images/Men/Beard Trimming.webp';
import beardGreyCoverage from '../images/Men/BeardGreyCoverage.jpg';
import blackTattoo from '../images/Men/Black Tattoo.jpg';
import colourTattoo from '../images/Men/Colour Tattoo.jpg';
import cysteineInfusion from '../images/Men/Cysteine Infusion.webp';
import deepTissueMassage from '../images/Men/Deep Tissue Massage.jpeg';
import deStressSpa from '../images/Men/De-Stress Spa.jpeg';
import diamondFacial from '../images/Men/Diamond Facial.jpeg';
import earPiercing from '../images/Men/Ear Piercing.webp';
import enhanceSpa from '../images/Men/Enhance Spa.jpeg';
import faceNeck from '../images/Men/Face & Neck.jpeg';
import fairnessFacial from '../images/Men/Fairness Facial.jpeg';
import footMassage from '../images/Men/Foot massage.webp';
import freshFruitCleanUp from '../images/Men/Fresh Fruit clean up.webp';
import freshFruitFacial from '../images/Men/Fresh Fruit Facial.jpeg';
import frontBack from '../images/Men/FrontBack.jpeg';
import fullArms from '../images/Men/Full Arms.jpg';
import fullBody from '../images/Men/Full Body.jpeg';
import fullLegs from '../images/Men/Full Legs.jpeg';
import globalColouringMajirel from '../images/Men/Global Colouring L Oreal Majirel  Schwarzkopf Igora Royal.jpg';
import globalColouringInoa from '../images/Men/Global Colouring L Oreal Inoa  Schwarzkopf Essential.jpeg';
import goldFacial from '../images/Men/Gold Facial.jpeg';
import hairColour from '../images/Men/Hair Colour.jpeg';
import hairColouring from '../images/Men/Hair colouring.jpeg';
import hairCut from '../images/Men/Hair cut.jpeg';
import hairSpa from '../images/Men/Hair Spa.jpeg';
import hairStraightening from '../images/Men/Hair Straightening & Smoothening.webp';
import hairStyleChange from '../images/Men/HairStyleChange.webp';
import halfLegs from '../images/Men/Half Legs.jpeg';
import headMassage from '../images/Men/Head massage.jpeg';
import highlightsColouring from '../images/Men/Highlights Colouring.jpeg';
import hotOilAromaSpiritTherapy from '../images/Men/Hot Oil Aroma Spirit Therapy.jpg';
import hotStoneMassage from '../images/Men/Hot stone massage.jpeg';
import hotStoneTherapy from '../images/Men/Hot Stone Therapy.jpeg';
import kidsHaircut from '../images/Men/kidshaircut.jpg';
import lomiLomiTherapy from '../images/Men/Lomi-Lomi Therapy.jpeg';
import moroccanOilSpa from '../images/Men/Moroccan Oil Spa.avif';
import o3DiamondFacial from '../images/Men/O3 Diamond Facial.webp';
import papayaFacial from '../images/Men/Papaya Facial.jpeg';
import paraffinManicure from '../images/Men/Paraffin Manicure.jpeg';
import paraffinPedicure from '../images/Men/Paraffin Pedicure.jpeg';
import premiumPackage from '../images/Men/Premium Package.jpeg';
import proteinSpa from '../images/Men/Protein spa.jpeg';
import redWineFacial from '../images/Men/Red Wine Facial.jpeg';
import regularManicure from '../images/Men/Regular Manicure.jpeg';
import regularPedicure from '../images/Men/Regular Pedicure.jpeg';
import shahnazCleanUp from '../images/Men/Shahnaz Clean-up.jpeg';
import shahnazFacial from '../images/Men/Shahnaz Facial.jpeg';
import shampooBlowDry from '../images/Men/Shampoo+BlowDry.jpg';
import shave from '../images/Men/Shave.jpg';

// Create image mapping object
const imageMap = {
  'Anti Hair fall treatment': antiHairFallTreatment,
  'Anti-Acne Clean-Up': antiAcneCleanUp,
  'Anti-Acne Facial': antiAcneFacial,
  'Anti-Dandruff Treatment': antiDandruffTreatment,
  'Anti-Hair fall Treatment': antiHairFallTreatment,
  'Aroma Manicure': aromaManicure,
  'Aroma Pedicure': aromaPedicure,
  'Aroma Therapy Massage': aromaTherapyMassage,
  'Aroma Therapy': aromaTherapy,
  'Back massage': backMassage,
  'Balinese Massage': balineseMassage,
  'BasicPackage': basicPackage,
  'Beard Designing': beardDesigning,
  'Beard Triming': beardTrimming,
  'BeardGreyCoverage': beardGreyCoverage,
  'Black Tattoo': blackTattoo,
  'Colour Tattoo': colourTattoo,
  'Cysteine Infusion': cysteineInfusion,
  'Deep Tissue Massage': deepTissueMassage,
  'De-Stress Spa': deStressSpa,
  'Diamond Facial': diamondFacial,
  'Ear Piercing': earPiercing,
  'Enhance Spa': enhanceSpa,
  'Face & Neck': faceNeck,
  'Fairness Facial': fairnessFacial,
  'Foot massage': footMassage,
  'Fresh Fruit clean up': freshFruitCleanUp,
  'Fresh Fruit Facial': freshFruitFacial,
  'Front Back': frontBack,
  'Full Arms': fullArms,
  'Full Body': fullBody,
  'Full Legs': fullLegs,
  "Global Colouring (L’Oreal Majirel)": globalColouringMajirel,
  "Global Colouring (L’Oreal Inoa)": globalColouringInoa,
  'Gold Facial': goldFacial,
  'Hair Colour': hairColour,
  'Hair colouring': hairColouring,
  'Hair cut': hairCut,
  'Hair Spa': hairSpa,
  'Hair Straightening & Smoothening': hairStraightening,
  'HairStyle Change': hairStyleChange,
  'Half Legs': halfLegs,
  'Head massage': headMassage,
  'Highlights Colouring': highlightsColouring,
  'Hot Oil Aroma Spirit Therapy': hotOilAromaSpiritTherapy,
  'Hot stone massage': hotStoneMassage,
  'Hot Stone Therapy': hotStoneTherapy,
  'kids haircut': kidsHaircut,
  'Lomi-Lomi Therapy': lomiLomiTherapy,
  'Moroccan Oil Spa': moroccanOilSpa,
  'O3 Diamond Facial': o3DiamondFacial,
  'Papaya Facial': papayaFacial,
  'Paraffin Manicure': paraffinManicure,
  'Paraffin Pedicure': paraffinPedicure,
  'Premium Package': premiumPackage,
  'Protein spa': proteinSpa,
  'Red Wine Facial': redWineFacial,
  'Regular Manicure': regularManicure,
  'Regular Pedicure': regularPedicure,
  'Shahnaz Clean-up': shahnazCleanUp,
  'Shahnaz Facial': shahnazFacial,
  'Shampoo+BlowDry': shampooBlowDry,
  'Shave': shave
};

// --- YOUR FULL, CORRECT DATA SET ---
const categories = [
  {
    id: 'haircuts',
    name: 'Haircuts & Styling',
    services: [
      { name: 'Haircut', description: 'Personalized haircut by skilled stylists.', image: imageMap['Hair cut'] },
      { name: 'Kids Haircut', description: 'Fun and stylish haircuts for children.', image: imageMap['kids haircut'] },
      { name: 'Hair Style Change', description: 'Transform your look with a brand new hairstyle.', image: imageMap['HairStyle Change'] },
      { name: 'Shampoo + Blow Dry', description: 'Professional hair wash and stylish blow dry for a polished look.', image: imageMap['Shampoo+BlowDry'] },
      { name: 'Shave', description: 'A classic, clean shave for a smooth finish.', image: imageMap['Shave'] },
      { name: 'Beard Designing', description: 'Expert shaping and styling to perfect your beard.', image: imageMap['Beard Designing'] },
      { name: 'Beard Trimming', description: 'A quick trim to keep your beard neat and well-maintained.', image: imageMap['Beard Triming'] },
      { name: 'Beard Grey Coverage', description: 'Discreetly blend away grey hairs in your beard for a youthful appearance.', image: imageMap['BeardGreyCoverage'] },
    ]
  },
  {
    id: 'hairColoring',
    name: 'Hair Colouring',
    services: [
      { name: 'Hair Colour', description: 'Hairstyles shine and luster with good chemical free colours. Give that dash of spunk with our super friendly services.', image: imageMap['Hair Colour'] },
      { name: "L'Oreal (Majirel) / Schwarzkopf (Igora Royal)", description: 'High-quality permanent hair coloring for vibrant, long-lasting results.', image: imageMap["Global Colouring (L’Oreal Majirel)"] },
      { name: "L'Oreal (Inoa) / Schwarzkopf (Essencity) – Ammonia-Free", description: 'Gentle, ammonia-free hair coloring for healthy, shiny hair.', image: imageMap["Global Colouring (L’Oreal Inoa)"] },
      { name: 'Global Highlights', description: 'Highlights throughout your entire hair for a sun-kissed or dramatic effect.', image: imageMap['Highlights Colouring'] },
    ]
  },
  {
    id: 'treatmentsSpa',
    name: 'Treatments & Hair Spa',
    services: [
      { name: 'De-Stress Spa', description: 'A relaxing hair spa designed to relieve stress and nourish your hair.', image: imageMap['De-Stress Spa'] },
      { name: 'Hair Spa', description: 'Experience the joy of a hair salon just like home with our services. Naturals spa is a miracle booster that every human needs.', image: imageMap['Hair Spa'] },
      { name: 'Hair Straightening & Smoothening', description: 'Mane matters for every man at Naturals care comes first and our salonist offers the best style first and smoothening.', image: imageMap['Hair Straightening & Smoothening'] },
      { name: 'Anti-Dandruff Treatment', description: 'Specialized treatment to combat dandruff and soothe your scalp.', image: imageMap['Anti-Dandruff Treatment'] },
      { name: 'Anti-Hairfall Treatment', description: 'Reduces hair fall and promotes stronger, healthier hair growth.', image: imageMap['Anti-Hair fall Treatment'] },
      { name: 'Enhance Spa', description: 'Boosts hair shine and texture, making it more manageable.', image: imageMap['Enhance Spa'] },
      { name: 'Protein Spa', description: 'Strengthens hair and repairs damage with essential proteins.', image: imageMap['Protein spa'] },
      { name: 'Moroccan Oil Spa', description: 'Deeply conditions and moisturizes hair with the benefits of Moroccan oil.', image: imageMap['Moroccan Oil Spa'] },
      { name: 'Cysteine Infusion', description: 'A treatment to improve hair strength, smoothness, and reduce frizz.', image: imageMap['Cysteine Infusion'] },
    ]
  },
  {
    id: 'facialsCleanUps',
    name: 'Facials & Clean-Ups',
    services: [
      { name: 'Fresh Fruit Clean-Up', description: 'A refreshing clean-up using natural fruit extracts for a healthy glow.', image: imageMap['Fresh Fruit clean up'] },
      { name: 'Shahnaz Clean-Up', description: 'A specialized clean-up using Shahnaz Hussain products for clear skin.', image: imageMap['Shahnaz Clean-up'] },
      { name: 'Anti-Acne Clean-Up', description: 'Helps to cleanse pores and reduce acne breakouts.', image: imageMap['Anti-Acne Clean-Up'] },
      { name: 'Fresh Fruit Facial', description: 'A nourishing facial using fresh fruits to rejuvenate your skin.', image: imageMap['Fresh Fruit Facial'] },
      { name: 'Papaya Facial', description: 'Utilizes the exfoliating properties of papaya for brighter, smoother skin.', image: imageMap['Papaya Facial'] },
      { name: 'Shahnaz Facial', description: 'A luxurious facial using authentic Shahnaz Hussain formulations.', image: imageMap['Shahnaz Facial'] },
      { name: 'Gold Facial', description: 'Indulge in a radiant gold facial for an instant glow.', image: imageMap['Gold Facial'] },
      { name: 'Fairness Facial', description: 'Enhances skin fairness and luminosity.', image: imageMap['Fairness Facial'] },
      { name: 'Diamond Facial', description: 'A premium facial for deep purification and sparkling radiance.', image: imageMap['Diamond Facial'] },
      { name: 'Anti-Acne Facial', description: 'Comprehensive facial treatment to combat and prevent acne.', image: imageMap['Anti-Acne Facial'] },
      { name: 'Red Wine Facial', description: 'Rejuvenating facial with antioxidant-rich red wine for youthful skin.', image: imageMap['Red Wine Facial'] },
      { name: 'O3 Diamond Facial', description: 'Advanced O3+ Diamond facial for ultimate skin purification and glow.', image: imageMap['O3 Diamond Facial'] },
    ]
  },
  {
    id: 'bleachTanPacks',
    name: 'Bleach & Tan Packs',
    services: [
      { name: 'Face & Neck', description: 'Gentle bleaching for a brighter face and neck.', image: imageMap['Face & Neck'] },
      { name: 'Full Arms', description: 'Bleaching service for a uniform tone on full arms.', image: imageMap['Full Arms'] },
      { name: 'Half Legs', description: 'Bleaching for the lower half of your legs.', image: imageMap['Half Legs'] },
      { name: 'Full Legs', description: 'Complete leg bleaching for even skin tone.', image: imageMap['Full Legs'] },
      { name: 'Front / Back', description: 'Bleaching service for either the front or back torso area.', image: imageMap['Front Back'] },
      { name: 'Full Body', description: 'Comprehensive full body bleaching for overall skin brightening.', image: imageMap['Full Body'] },
    ]
  },
  {
    id: 'pedicureManicure',
    name: 'Pedicure & Manicure',
    services: [
      { name: 'Regular Pedicure', description: 'Essential foot care including nail shaping, cuticle care, and a relaxing foot massage.', image: imageMap['Regular Pedicure'] },
      { name: 'Aroma Pedicure', description: 'Indulge your feet with essential oils for a deeply relaxing and aromatic experience.', image: imageMap['Aroma Pedicure'] },
      { name: 'Paraffin Pedicure', description: 'Deeply moisturizing treatment for dry feet, leaving them soft and smooth.', image: imageMap['Paraffin Pedicure'] },
      { name: 'Regular Manicure', description: 'Classic hand and nail care for well-groomed hands.', image: imageMap['Regular Manicure'] },
      { name: 'Aroma Manicure', description: 'A pampering manicure infused with aromatic essential oils.', image: imageMap['Aroma Manicure'] },
      { name: 'Paraffin Manicure', description: 'Intensely hydrating treatment for dry hands and cuticles.', image: imageMap['Paraffin Manicure'] },
    ]
  },
  {
    id: 'therapies',
    name: 'Therapies',
    services: [
      { name: 'Head Massage', description: 'Your hair means relaxing your mind and regenerating them for hair home with our services. Come experience a natural..', image: imageMap['Head massage'] },
      { name: 'Balinese Massage', description: 'A full-body, deep-tissue, holistic treatment using a combination of gentle stretches, acupressure, reflexology, and aromatherapy.', image: imageMap['Balinese Massage'] },
      { name: 'Aroma Therapy', description: 'Uses aromatic essential oils therapeutically to improve physical and psychological well-being.', image: imageMap['Aroma Therapy'] },
      { name: 'Deep Tissue Massage', description: 'Focuses on realigning deeper layers of muscles and connective tissue, often used for chronic aches and pains.', image: imageMap['Deep Tissue Massage'] },
      { name: 'Back massage', description: 'Relieves tension and stress in the back muscles.', image: imageMap['Back massage'] },
      { name: 'Foot massage', description: 'Soothing massage to relax tired feet and improve circulation.', image: imageMap['Foot massage'] },
    ]
  },
  {
    id: 'bestSellerTherapies',
    name: 'Best Seller Therapies',
    services: [
      { name: 'Hot Stone Therapy', description: 'Heated, smooth stones are placed on specific points on the body to warm and relax muscles.', image: imageMap['Hot Stone Therapy'] },
      { name: 'Hot Oil Aroma Spirit Therapy', description: 'A deeply relaxing therapy combining warm essential oils with soothing massage techniques.', image: imageMap['Hot Oil Aroma Spirit Therapy'] },
      { name: 'Lomi-Lomi Therapy', description: 'A traditional Hawaiian massage known for its long, flowing, dance-like strokes, often using forearms and elbows.', image: imageMap['Lomi-Lomi Therapy'] },
      { name: 'Hot stone massage', description: 'Relaxing massage using heated stones to ease muscle tension.', image: imageMap['Hot stone massage'] },
      { name: 'Aroma Therapy Massage', description: 'Combines aromatherapy with massage techniques for enhanced relaxation.', image: imageMap['Aroma Therapy Massage'] },
    ]
  },
  {
    id: 'groomPackages',
    name: 'Groom Packages',
    services: [
      { name: 'Basic Package', description: 'Includes Threading, Haircut, Facial, Hair Spa, Pedicure, Manicure, Waxing, Bleach.', image: imageMap['BasicPackage'] },
      { name: 'Premium Package', description: 'Includes Basic Package + Hair Spa (4 Sittings), Nourishment Treatment, Full Body Wax, Full Body De-Tan Bleach, Body Polishing.', image: imageMap['Premium Package'] },
    ]
  },
  {
    id: 'tattoosPiercing',
    name: 'Tattoos & Piercing',
    services: [
      { name: 'Black Tattoo (Per Inch)', description: 'Get a custom black ink tattoo, priced per inch of design.', image: imageMap['Black Tattoo'] },
      { name: 'Colour Tattoo (Per Inch)', description: 'Vibrant color tattoos, priced per inch.', image: imageMap['Colour Tattoo'] },
      { name: 'Ear Piercing (2)', description: 'Professional ear piercing service for two ears.', image: imageMap['Ear Piercing'] },
    ]
  },
];



// --- MAIN COMPONENT ---
const MenServices = () => {
    // Initialize selectedCategory with the ID of the first category
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

    // Find the data for the currently selected category
    const activeCategoryData = categories.find(cat => cat.id === selectedCategory);

    return (
        <div className="services-page-wrapper">
            <header className="services-header">
                <h1>Our Services for Men</h1>
                <p>Discover a wide range of grooming and wellness services designed for modern gentlemen.</p>
            </header>

            <div className="services-layout">
                {/* --- STICKY SIDEBAR NAVIGATION --- */}
                <aside className="services-sidebar">
                    <nav className="category-nav-desktop">
                        <ul>
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a
                                        href={`#${category.id}`} // Good for accessibility/fallback
                                        className={selectedCategory === category.id ? 'active' : ''}
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default anchor link jump
                                            setSelectedCategory(category.id); // Update the state to show this category
                                            // Optional: Scroll to the top of the content area for better UX
                                            const contentTop = document.querySelector('.services-content');
                                            if (contentTop) {
                                                contentTop.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* --- MOBILE DROPDOWN NAVIGATION --- */}
                <div className="category-nav-mobile">
                    <select
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            // Optional: Scroll to the top of the content area for better UX on mobile
                            const contentTop = document.querySelector('.services-content');
                            if (contentTop) {
                                contentTop.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* --- DYNAMIC CONTENT AREA --- */}
                <main className="services-content">
                    {/* Only render the content for the currently active category */}
                    {activeCategoryData ? (
                        <div id={activeCategoryData.id} className="service-category-section active-category">
                            <h2>{activeCategoryData.name}</h2>
                            <div className="Mensservices-grid">
                                {activeCategoryData.services.map((service, index) => (
                                    <div className="service-card" key={index}>
                                        <img src={service.image} alt={service.name} className="service-card-image" />
                                        <div className="service-card-content">
                                            <h3 className="service-card-title">{service.name}</h3>
                                            <p className="service-card-description">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>No services found for this category.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default MenServices;