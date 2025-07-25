import React, { useState, useRef, useEffect } from 'react';
import '../Styles/WomensService.css'; // Ensure this path is correct

// Import the single test image for all services
import testImage from '../images/salon1.jpg'; // Ensure this path is correct

// --- REVISED Section COMPONENT (NO INTERNAL PAGINATION) ---
// This component now simply renders all services passed to it in a grid.
// The main WomensService component will handle which services are passed based on the selected category.
const Section = ({ title, services, id }) => { // Added 'id' prop for linking
    return (
        <div id={id} className="service-category-section"> {/* Added id for scroll linking */}
            <h2>{title}</h2>
            <div className="Womensservices-grid">
                {services.map((item, idx) => (
                    <div key={id + '-' + idx} className="service-card"> {/* Unique key */}
                        <img src={item.image} alt={item.name} className="service-card-image" />
                        <div className="service-card-content">
                            <h3 className="service-card-title">{item.name}</h3>
                            {item.description && <p className="service_card_description">{item.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- WOMEN'S SERVICES DATA (NO PRICES, SINGLE IMAGE) - Data structure remains the same ---

// 1. Hair Care / Haircuts & Styling
const hairCare = [
    { name: 'Shoulder Length', description: null, image: testImage },
    { name: 'Shampoo + Condition + Blow dry', description: null, image: testImage },
    { name: 'Mid back Length', description: null, image: testImage },
    { name: 'Haircut & Hair Trim (Includes Hair Wash and Blast Dry)', description: null, image: testImage },
    { name: 'U Cut (straight cut & Fringes)', description: null, image: testImage },
    { name: 'Waist Length', description: null, image: testImage },
    { name: 'Blow Dry', description: null, image: testImage },
    { name: 'Any change of Hair Style', description: null, image: testImage },
    { name: 'Hair Wash & Ultimate blow dry', description: null, image: testImage },
    { name: 'Dream curls Tongs', description: null, image: testImage },
    { name: 'Hair Do', description: null, image: testImage },
    { name: 'Straight finish ironing', description: null, image: testImage },
    { name: 'Additional charge for volume / thickness (extra)', description: null, image: testImage },
];

const scalpMassageAndConditioning = [
    { name: 'Scalp Massage', description: 'Enjoy some old-school hair care with our rejuvenating massage that soothes the scalp while conditioning your hair.', image: testImage },
    { name: 'Serious Conditioning', description: 'A quick dose of nourishment. A shot of your treatment makes your hair tresses silky and bouncy while adding to their strength.', image: testImage },
    { name: 'Shimmer Boost', description: 'Designed to protect the shine of coloured hair while working to boost gloss, this is a great boost that transforms your locks from plain to dazzling.', image: testImage },
    { name: 'Health Boost', description: 'Instantly review dry hair with our Health Boost Therapy. Improve hair and scalp while balancing moisture content. This procedure will give your locks some much needed nourishment and shine.', image: testImage },
    { name: 'Deep Conditioning', description: 'Add a touch of shine to your tresses while protecting them form UA damage with this spa enriched with nourishing oils. It will bring glow to dull damaged hair. This service also strengthens your hair and improves their manageability.', image: testImage },
    { name: 'Moroccan Oil Massage', description: 'Give damaged hair its natural makeover as you indulge in the premium head massage that\'s designed to nourish your scalp while adding shine to your locks.', image: testImage },
];

// 2. Hair Colouring / Treatments & Spa
const hairColouring = [
    {
        name: 'Root Touch-Up',
        description: 'L\'Oreal (Majirel) / Schwarzkopf (Igora Royal) or L\'Oreal (Inoa) / Schwarzkopf (Essensity)',
        image: testImage,
    },
    {
        name: 'Global Colouring (L\'Oreal Majirel / Schwarzkopf Igora Royal)',
        description: null,
        image: testImage,
    },
    {
        name: 'Global Colouring (L\'Oreal Inoa / Schwarzkopf Essential)',
        description: null,
        image: testImage,
    },
    {
        name: 'Highlights Colouring',
        description: null,
        image: testImage,
    },
];

const hairSpa = [
    { name: 'De-Stress Spa', description: null, image: testImage },
    { name: 'Enhance Spa', description: null, image: testImage },
    { name: 'Protein Spa', description: null, image: testImage },
];

const treatments = [
    { name: 'Anti Dandruff', description: null, image: testImage },
    { name: 'Anti Hair fall', description: null, image: testImage },
];

const morocainOilSpa = [
    { name: 'Morocain Oil Spa', description: null, image: testImage },
];

const hairMakeover = [
    {
        name: 'Straightening',
        description: 'If you love poker straight tresses - this one is for you. This treatment gives complex hair a natural and smooth finish that makes it sleek.',
        image: testImage,
    },
    {
        name: 'Smoothening',
        description: 'Enriched with keratin active care complex, the smoothening process will give your hair a glamorous yet natural blow dry look.',
        image: testImage,
    },
    {
        name: 'Cysteine Infusion',
        description: 'Say goodbye to frizz with a therapy that is exclusively designed to release your curls, making your tresses silkier and stronger.',
        image: testImage,
    }
];

// 3. Skin Care / Facials & Clean-Ups
const cleanUps = [
    { name: 'Fresh Fruit Clean up', description: null, image: testImage },
    { name: 'Shahnaz Clean up', description: null, image: testImage },
    { name: 'Anti Acne Clean up', description: null, image: testImage },
    { name: 'Skin Brightening Clean up', description: null, image: testImage },
];

const facials = [
    { name: 'Fresh Fruit Facial', description: 'It provide different agents for softening, exfoliating and cleaning the skin.', image: testImage },
    { name: 'Papaya Facial', description: 'It makes the skin fairer, spot free also nourishes your skin.', image: testImage },
    { name: 'Whitening Facial', description: 'It regenerates clear and healthy layers and give a better glow to the skin.', image: testImage },
    { name: 'Tan Removal Facial', description: 'It lightens the blemishes, remove\'s dead cells and leaves your skin clean & radiant.', image: testImage },
    { name: 'Shahnaz Facial', description: 'It is deeply moisturizes the skin.', image: testImage },
    { name: 'Gold Facial', description: 'It hydrates to the skin, enhances skin plasticity and has revitalizing and rejuvenating effects.', image: testImage },
    { name: 'Fairness Facial', description: 'It glow the skin.', image: testImage },
    { name: 'Diamond Facial', description: 'It glow the skin.', image: testImage },
    { name: 'Anti Acne Facial', description: 'It helps reduce appearance of pores leaves the skin perfectly refined and smooth.', image: testImage },
    { name: 'Red Wine Facial', description: 'It help in eliminating dead skin, Bring glow to skin, Hydrates an deeply rejuvenates the skin Alcohol can actually reverse the process of aging.', image: testImage },
    { name: 'Young Radiance Facial', description: 'De Pigmentation it soothes, brightens, energizes the skin and removes brown spots.', image: testImage },
    { name: 'Skin Brightening Facial', description: 'It can restore a more natural and youthful appearance to your face, removes wrinkles, increase skin elasticity.', image: testImage },
    { name: 'O3 Diamond Facial', description: '(Moroccan oil) it helps in moisturizing dry rough skin de-cloggers mask size, gives mild & infection free exfoliation result.', image: testImage },
];

const threading = [
    { name: 'Eye Brows', description: null, image: testImage },
    { name: 'Fore Head', description: null, image: testImage },
    { name: 'Upper Lip', description: null, image: testImage },
    { name: 'Lower Lip', description: null, image: testImage },
    { name: 'Chin', description: null, image: testImage },
    { name: 'Sides', description: null, image: testImage },
    { name: 'Jaw Line', description: null, image: testImage },
    { name: 'Neck', description: null, image: testImage },
    { name: 'Full Face', description: null, image: testImage },
];

const bleachAndDeTan = [
    {
        name: 'Face & Neck',
        description: 'Bleach lightens the facial hair and your complexion. Also it helps to lighten dark spots, removes freckles to even out complexion.',
        image: testImage,
    },
    { name: 'Full Arms', description: null, image: testImage },
    { name: 'Half Legs', description: null, image: testImage },
    { name: 'Full Legs', description: null, image: testImage },
    { name: 'Front / Back', description: null, image: testImage },
    { name: 'Under Arms', description: null, image: testImage },
    { name: 'Full Body', description: null, image: testImage },
];

// 4. Hand & Foot Care / Pedicure & Manicure
const pedicureManicure = [
    { name: 'Regular Pedicure', description: null, image: testImage },
    { name: 'Aroma Pedicure', description: null, image: testImage },
    { name: 'Paraffin Pedicure', description: null, image: testImage },
    { name: 'Chocolate Pedicure', description: null, image: testImage },
    { name: 'French Pedicure', description: null, image: testImage },
    { name: 'A.H.A Pedicure', description: null, image: testImage },
    { name: 'Regular Manicure', description: null, image: testImage },
    { name: 'Aroma Manicure', description: null, image: testImage },
    { name: 'Chocolate Manicure', description: null, image: testImage },
    { name: 'Paraffin Manicure', description: null, image: testImage },
    { name: 'French Manicure', description: null, image: testImage },
    { name: 'A.H.A Manicure', description: null, image: testImage },
];

// 5. Waxing / Hair Removal
const regularWaxing = [
    {
        name: 'Regular Waxing',
        description: 'Treat your skin to this traditional hair removal method as we gently, effectively and firmly get rid of unwanted hair while making your skin supple and smooth.',
        image: testImage,
    },
    { name: 'Package: Full Waxing (FA+UA+FL)', description: null, image: testImage },
];

const flavouredWaxing = [
    {
        name: 'Flavoured Waxing',
        description: 'Choose a hair removal treatment that\'s unique and fun! With flavors like banana, chocolate and aloe vera. This is a service your skin is sure to thank you for don\'t forget ask our expert in the last flavors.',
        image: testImage,
    },
    { name: 'Package: Full Waxing (FA+FL+UA)', description: null, image: testImage },
];

const brazilianWaxing = [
    { name: 'Face Waxing', description: null, image: testImage },
    { name: 'Under Arms Waxing', description: null, image: testImage },
    { name: 'Bikini Waxing', description: null, image: testImage },
];

const waxingPackage = [
    { name: 'Full Waxing (FA+FL+UA)', description: null, image: testImage },
];

// 6. Massages / Therapies / Body Pampering
const therapies = [
    {
        name: 'Traditional Thai Massage',
        description: 'The traditional thai dry therapy combines elegant elements of Yoga, shiatsu, acupressure and Ayurvedic energy pathways of the body & the therapy points that are locked around the body and stimulates circulation around the body.',
        image: testImage,
    },
    {
        name: 'Balinese Massage',
        description: 'Balinese massage techniques include acupressure, skin rolling & flicking, firm & gentle stroking, percussion, and application of essential oils. This deeply relaxes and revitalizes body & mind. Benefits include increased flexibility, relief of joint and muscle tension and a balance of the body\'s energy system.',
        image: testImage,
    },
    {
        name: 'Aroma Therapy Massage',
        description: 'This holistic treatment has a profound impact on the body, mind and spirit. Experience the deep state of relaxation with our powerful combinations of oil and massage. This treatment ends with a deeply soothing head massage to relieve stress from the mind and body.',
        image: testImage,
    },
    {
        name: 'Swedish Massage',
        description: 'An advanced form of Aromatherapy, this treatment focuses on direct medium tissue pressure on various connective tissues. It includes techniques like circular pressure, friction in elbows and joints, firm kneading, percussion like tapping, bending and stretching.',
        image: testImage,
    },
    {
        name: 'Deep Tissue Massage',
        description: 'Deep-tissue is a specific type of massage therapy that focuses on deeper layers of muscles and the deeper pressure is beneficial in releasing chronic muscle tension. It focuses on the deepest layers of muscle tissue and fascia. It is most painful that hurts so good. It includes deep finger pressure and slow, firm strokes, deep tissue massage is used to treat a variety of physical ailments.',
        image: testImage,
    },
    {
        name: 'Thai Foot Reflexology',
        description: 'The traditional Thai dry therapy combines elegant elements of Yoga, shiatsu, acupressure and Ayurvedic energy pathways of the body & the therapy points that are locked around the body and stimulates circulation around the body.',
        image: testImage,
    },
    {
        name: 'Foot Massage With Head And Shoulder Massage',
        description: 'Ancient Thai healing relieves sore muscles, stimulates circulation as well as increases energy flow.',
        image: testImage,
    },
    {
        name: 'Foot Massage With Back And Shoulder Massage',
        description: 'Ancient Thai healing relieves sore muscles, stimulates circulation as well as increases energy flow.',
        image: testImage,
    },
];

const bestSellerTherapies = [
    {
        name: 'Hot Stone Therapy',
        description: 'This relaxing massage uses heated stones to generate energy and relax the muscles. Hot stone massage is a practice which has been used since ancient as a soothing and healing touch.',
        image: testImage,
    },
    {
        name: 'Hot Oil Aroma Spirit Therapy',
        description: 'A deeply relaxing therapy combining warm essential oils with soothing massage techniques.',
        image: testImage,
    },
    {
        name: 'Lomi-Lomi Therapy',
        description: 'A traditional Hawaiian massage known for its long, flowing, dance-like strokes, often using forearms and elbows.',
        image: testImage,
    },
    {
        name: 'Shiatsu Therapy',
        description: 'A Japanese bodywork based on the traditional Chinese medicine concept of qi, using localized finger pressure in a rhythmic sequence.',
        image: testImage,
    },
];

const therapyCombinations = [
    { name: '60 Min Thai Therapy', description: 'A focused 60-minute session of Traditional Thai Massage.', image: testImage },
    { name: '60 Min Aroma Therapy', description: 'A focused 60-minute session of calming Aroma Therapy.', image: testImage },
    { name: '60 Min Thai + 60 Min Swedish Massage', description: 'A luxurious combination of Thai and Swedish massage for complete relaxation.', image: testImage },
    { name: '60 Min Thai + 60 Min Balinese Massage', description: 'Experience the best of both Thai and Balinese massage traditions.', image: testImage },
    { name: '60 Min Thai + 60 Min Deep Tissue Massage', description: 'A powerful combination to address deep muscle tension and promote flexibility.', image: testImage },
    { name: '30 Min Thai + 60 Min Swedish Massage', description: 'A quick Thai warm-up followed by a relaxing Swedish massage.', image: testImage },
    { name: '30 Min Thai + 60 Min Balinese Massage', description: 'A shorter Thai introduction leading into a full Balinese experience.', image: testImage },
    { name: '30 Min Thai + 60 Min Deep Tissue Massage', description: 'Targeted deep tissue work preceded by a quick Thai session.', image: testImage },
    { name: '30 Min Foot Reflexology + 60 Min Aroma Therapy', description: 'A brief Thai session followed by a calming aroma therapy massage.', image: testImage },
    { name: '30 Min Foot Reflexology + 60 Min Swedish Massage', description: 'A quick foot session followed by a relaxing Swedish massage.', image: testImage },
    { name: '30 Min Foot Reflexology + 60 Min Balinese Massage', description: 'A brief foot session leading into a full Balinese experience.', image: testImage },
];

const bodyPampering = [
    { name: 'Hand Massage', description: null, image: testImage },
    { name: 'Back Massage', description: null, image: testImage },
    { name: 'Foot Massage', description: null, image: testImage },
    { name: 'Hands Polishing', description: null, image: testImage },
    { name: 'Face Polishing', description: null, image: testImage },
    { name: 'Full Body Massage (Aroma)', description: null, image: testImage },
    { name: 'Full Body Massage (Exclusive)', description: null, image: testImage },
    { name: 'Full Body Polishing', description: null, image: testImage },
];

const bodyPamperingPackage = [
    { name: 'Full Body Exclusive Anti tan pack + Multi scrub + Cream Massage + Glow Pack + Toning', description: null, image: testImage },
];


// 7. Specialty Services / Packages
const makeUpServices = [
    { name: 'Light Party Makeup', description: null, image: testImage },
    { name: 'Night Party Makeup', description: null, image: testImage },
    { name: 'Engagement Makeup', description: null, image: testImage },
    { name: 'Sangeeth Makeup', description: null, image: testImage },
    { name: 'Bridal Makeup', description: null, image: testImage },
    { name: 'Wedding Makeup', description: null, image: testImage },
    { name: 'Reception Makeup', description: null, image: testImage },
    { name: 'Friends of Bride Makeup', description: null, image: testImage },
];

const trialMakeup = [
    { name: 'Basic Trial Makeup', description: null, image: testImage },
    { name: 'Kryalon Trial Makeup', description: null, image: testImage },
    { name: 'MAC Trial Makeup', description: null, image: testImage },
];

const hairDoDropdown = [ // Renamed to avoid conflict if Hair Do is also under Hair Care
    { name: 'Classic Hair Do', description: null, image: testImage },
    { name: 'Elite Hair Do', description: null, image: testImage },
];

const sareeDrape = [
    { name: 'Classic Saree Drape', description: null, image: testImage },
    { name: 'Elite Saree Drape', description: null, image: testImage },
];


const preBridalPackages = [
    {
        name: 'Basic Package',
        description: '1 Sitting. Includes Threading, Haircut, Facial, Hair Spa, Pedicure, Manicure, Waxing (Face, Neck, Back).',
        image: testImage,
    },
    {
        name: 'Standard Package',
        description: '2 Sittings. Includes Threading, Haircut, Facial Nourishment, Full Bodywax, Hair Spa, Pedicure, Manicure, Bleach (Face, Neck, Back).',
        image: testImage,
    },
    {
        name: 'Premium Package',
        description: '4 Sittings. Includes Basic Package + Hair Spa (4 Sittings), Nourishment Treatment, Full Body Wax, Full Body De-Tan Bleach, Body Polishing. The ultimate grooming experience.',
        image: testImage,
    },
];

const tattoos = [
    { name: 'Black Tattoo', description: 'Per Inch', image: testImage },
    { name: 'Color Tattoo', description: 'Per Inch', image: testImage },
];

const piercing = [
    { name: 'Warts Removal', description: null, image: testImage },
    { name: 'Nose Piercing', description: null, image: testImage },
    { name: 'Ear Piercing (2)', description: null, image: testImage },
];


// Define your categories and their corresponding data arrays
// This array will drive your tab navigation
const categories = [
    { id: 'hairCare', name: 'Hair Care & Styling', services: hairCare },
    { id: 'scalpMassageConditioning', name: 'Scalp Massage & Conditioning', services: scalpMassageAndConditioning },
    { id: 'hairColouring', name: 'Hair Colouring', services: hairColouring },
    { id: 'hairSpa', name: 'Hair Spa', services: hairSpa },
    { id: 'treatments', name: 'Hair Treatments', services: treatments },
    { id: 'morocainOilSpa', name: 'Moroccan Oil Spa', services: morocainOilSpa },
    { id: 'hairMakeover', name: 'Hair Makeover (Straightening, etc.)', services: hairMakeover },
    { id: 'facials', name: 'Facials', services: facials },
    { id: 'cleanUps', name: 'Clean Ups', services: cleanUps },
    { id: 'threading', name: 'Threading', services: threading },
    { id: 'bleachDeTan', name: 'Bleach & De-Tan', services: bleachAndDeTan },
    { id: 'pedicureManicure', name: 'Pedicure & Manicure', services: pedicureManicure },
    { id: 'regularWaxing', name: 'Regular Waxing', services: regularWaxing },
    { id: 'flavouredWaxing', name: 'Flavoured Waxing', services: flavouredWaxing },
    { id: 'brazilianWaxing', name: 'Brazilian Waxing', services: brazilianWaxing },
    { id: 'waxingPackage', name: 'Waxing Package', services: waxingPackage },
    { id: 'therapies', name: 'Therapies', services: therapies },
    { id: 'bestSellerTherapies', name: 'Best Seller Therapies', services: bestSellerTherapies },
    { id: 'therapyCombinations', name: 'Therapy Combinations', services: therapyCombinations },
    { id: 'bodyPampering', name: 'Body Pampering', services: bodyPampering },
    { id: 'bodyPamperingPackage', name: 'Body Pampering Package', services: bodyPamperingPackage },
    { id: 'preBridalPackages', name: 'Pre Bridal Package Services', services: preBridalPackages },
    { id: 'makeUpServices', name: 'Makeup Services', services: makeUpServices },
    { id: 'trialMakeup', name: 'Trial Makeup', services: trialMakeup },
    { id: 'hairDoDropdown', name: 'Hair Do (Special Occasion)', services: hairDoDropdown },
    { id: 'sareeDrape', name: 'Saree Drape', services: sareeDrape },
    { id: 'tattoos', name: 'Tattoos', services: tattoos },
    { id: 'piercing', name: 'Piercing', services: piercing },
];


const WomensService = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
    const serviceContentRef = useRef(null); // Ref to scroll the content area

    // Find the currently active category data
    const activeCategoryData = categories.find(cat => cat.id === selectedCategory);

    // Scroll to the top of the content area when category changes on desktop
    useEffect(() => {
        // Only scroll if on desktop (window width > 992px)
        // and if the ref is attached to an element
        if (serviceContentRef.current && window.innerWidth > 992) {
            serviceContentRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [selectedCategory]); // Depend on selectedCategory changing

    // Handle smooth scroll for desktop sidebar clicks
    const handleDesktopNavClick = (id, event) => {
        event.preventDefault(); // Prevent default anchor link behavior
        setSelectedCategory(id);
        // The useEffect hook will handle the scroll to top of content area
    };

    return (
        <div className="women_services_wrapper">
            <header className="services-header">
                <h1>Our Services for Women</h1>
                <p>Discover a wide range of beauty and wellness services designed just for you.</p>
            </header>

            <div className="services-layout">
                {/* --- STICKY SIDEBAR NAVIGATION (DESKTOP) --- */}
                <aside className="services-sidebar">
                    <nav className="category-nav-desktop">
                        <ul>
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a
                                        href={`#${category.id}`} 
                                        className={selectedCategory === category.id ? 'active' : ''}
                                        onClick={(e) => handleDesktopNavClick(category.id, e)}
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
                            // For mobile, also scroll to top of content area immediately
                            if (serviceContentRef.current) {
                                serviceContentRef.current.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
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

                {/* --- DYNAMIC CONTENT AREA (ONLY ACTIVE CATEGORY IS RENDERED) --- */}
                <main className="services-content" ref={serviceContentRef}>
                    {/* Conditionally render the Section component only for the active category */}
                    {activeCategoryData ? (
                        <Section
                            id={activeCategoryData.id}
                            title={activeCategoryData.name}
                            services={activeCategoryData.services}
                        />
                    ) : (
                        // Fallback message if no category is selected or data is missing (shouldn't happen with initial state)
                        <p>No services found for this category.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default WomensService;