import React, { useState, useRef, useEffect } from 'react';
import '../Styles/WomensService.css'; // Ensure this path is correct

// Import the single test image for all services
// import testImage from '../images/salon1.jpg'; // Ensure this path is correct
// Import all Women_new images
import Thirty_Min_Thai_60_Min_Swedish from '../images/Women_new/30 Min Thai + 60 Min Swedish.jpg';
import Sixty_Min_Thai_60_Min_Swedish from '../images/Women_new/60 Min Thai + 60 Min Swedish.jpg';
import A from '../images/Women_new/A..jpg';
import AHA_maniac from '../images/Women_new/A.H.A maniac.jpg';
import AHA_Pedi from '../images/Women_new/A.H.A Pedi.jpg';
import Additional_charge_for_volume from '../images/Women_new/Additional charge for volume.jpg';
import Anti_Acne_Facial from '../images/Women_new/Anti Acne Facial.jpg';
import Any_change_of_Hair_Style from '../images/Women_new/Any change of Hair Style.jpg';
import Bikini from '../images/Women_new/Bikini.jpg';
import Brazilian from '../images/Women_new/Brazilian.jpeg';
import Chin from '../images/Women_new/Chin.jpg';
import Cysteine_infusion from '../images/Women_new/Cysteine infusion.jpg';
import Dream_curls_Tongs from '../images/Women_new/Dream curls Tongs.jpg';
import Enhance_Spa from '../images/Women_new/Enhance Spa.jpg';
import EyeBrows from '../images/Women_new/EyeBrows.jpg';
import Face_waxingg from '../images/Women_new/Face waxingg.jpg';
import Facials from '../images/Women_new/Facials.jpg';
import Flavoured from '../images/Women_new/Flavoured.jpg';
import Forehead from '../images/Women_new/Forehead.jpg';
import FrenchPedi from '../images/Women_new/FrenchPedi.jpg';
import Full_Face from '../images/Women_new/Full Face.jpg';
import Full_Waxing from '../images/Women_new/Full Waxing.jpg';
import Global_Colouring_Essent from '../images/Women_new/Global Colouring - Essent...jpg';
import Global_Colouring from '../images/Women_new/Global Colouring.jpg';
import Hair_colouring from '../images/Women_new/Hair colouring.jpg';
import Hair_Do from '../images/Women_new/Hair Do.jpg';
import Hair_MakeOver_Straight from '../images/Women_new/Hair MakeOver - Straight...jpg';
import Hair_Spa from '../images/Women_new/Hair Spa.jpg';
import Haircut_Hair_Trim from '../images/Women_new/Haircut & Hair Trim (Inclu...jpg';
import hair_salon_n_46 from '../images/Women_new/hair-salon-n-46.jpg';
import Health_Boost from '../images/Women_new/Health Boost.jpg';
import Highlighting_Colouring from '../images/Women_new/Highlighting Colouring.jpg';
import Hot_Oil_Aroma_Spirit from '../images/Women_new/Hot Oil Aroma Spirit.jpg';
import Jaw_Line from '../images/Women_new/Jaw Line.jpg';
import Lomi_Lomi from '../images/Women_new/Lomi-Lomi.jpg';
import Mid_back_Length from '../images/Women_new/Mid back Length.jpg';
import Papaya_Facials from '../images/Women_new/Papaya Facials.jpg';
import Regular_waxing from '../images/Women_new/Regular waxing.jpg';
import Root_touch_up from '../images/Women_new/Root touch up.jpg';
import shiatsu from '../images/Women_new/shiatsu.jpg';
import Shimmer_Boost from '../images/Women_new/Shimmer Boost.jpg';
import Shoulder_length_haircuts_women from '../images/Women_new/Shoulder length haircuts women.jpg';
import Smoothening from '../images/Women_new/Smoothening.jpg';
import Straight_finish_ironing from '../images/Women_new/Straight finish ironing.jpg';
import Straightening from '../images/Women_new/Straightening.jpg';
import swedish_massage from '../images/Women_new/swedish massage.jpg';
import T_Reflexology_60_Min_Sw from '../images/Women_new/T Reflexology + 60 Min Sw...jpg';
import Tan_Removal from '../images/Women_new/Tan Removal.jpg';
import Threading from '../images/Women_new/Threading.jpg';
import U_Cut from '../images/Women_new/U Cut (straight cut & Fringes).jpg';
import underarm from '../images/Women_new/underarm.jpg';
import Upper_Lip from '../images/Women_new/Upper Lip.jpg';
import Waist_Length from '../images/Women_new/Waist Length.jpg';
import woman_is_cutting_her_hair from '../images/Women_new/woman-is-cutting-her-hair-hair-s...jpg';

// Image mapping object
const imageMap = {
  "30 Min Thai + 60 Min Swedish": Thirty_Min_Thai_60_Min_Swedish,
  "60 Min Thai + 60 Min Swedish": Sixty_Min_Thai_60_Min_Swedish,
  "A.": A,
  "A.H.A maniac": AHA_maniac,
  "A.H.A Pedi": AHA_Pedi,
  "Additional charge for volume": Additional_charge_for_volume,
  "Anti Acne Facial": Anti_Acne_Facial,
  "Any change of Hair Style": Any_change_of_Hair_Style,
  "Bikini": Bikini,
  "Brazilian": Brazilian,
  "Chin": Chin,
  "Cysteine infusion": Cysteine_infusion,
  "Dream curls Tongs": Dream_curls_Tongs,
  "Enhance Spa": Enhance_Spa,
  "EyeBrows": EyeBrows,
  "Face waxingg": Face_waxingg,
  "Facials": Facials,
  "Flavoured": Flavoured,
  "Forehead": Forehead,
  "FrenchPedi": FrenchPedi,
  "Full Face": Full_Face,
  "Full Waxing": Full_Waxing,
  "Global Colouring - Essent...": Global_Colouring_Essent,
  "Global Colouring": Global_Colouring,
  "Hair colouring": Hair_colouring,
  "Hair Do": Hair_Do,
  "Hair MakeOver - Straight...": Hair_MakeOver_Straight,
  "Hair Spa": Hair_Spa,
  "Haircut & Hair Trim (Inclu...)": Haircut_Hair_Trim,
  "hair-salon-n-46": hair_salon_n_46,
  "Health Boost": Health_Boost,
  "Highlighting Colouring": Highlighting_Colouring,
  "Hot Oil Aroma Spirit": Hot_Oil_Aroma_Spirit,
  "Jaw Line": Jaw_Line,
  "Lomi-Lomi": Lomi_Lomi,
  "Mid back Length": Mid_back_Length,
  "Papaya Facials": Papaya_Facials,
  "Regular waxing": Regular_waxing,
  "Root touch up": Root_touch_up,
  "shiatsu": shiatsu,
  "Shimmer Boost": Shimmer_Boost,
  "Shoulder length haircuts women": Shoulder_length_haircuts_women,
  "Smoothening": Smoothening,
  "Straight finish ironing": Straight_finish_ironing,
  "Straightening": Straightening,
  "swedish massage": swedish_massage,
  "T Reflexology + 60 Min Sw...": T_Reflexology_60_Min_Sw,
  "Tan Removal": Tan_Removal,
  "Threading": Threading,
  "U Cut (straight cut & Fringes)": U_Cut,
  "underarm": underarm,
  "Upper Lip": Upper_Lip,
  "Waist Length": Waist_Length,
  "woman-is-cutting-her-hair-hair-s...": woman_is_cutting_her_hair
};

// Service data with updated images
// 1. Hair Care / Haircuts & Styling
const hairCare = [
  { name: 'Shoulder Length', description: null, image: imageMap['Shoulder length haircuts women'] },
  { name: 'Shampoo + Condition + Blow dry', description: null, image: imageMap['Haircut & Hair Trim (Inclu...)'] },
  { name: 'Mid back Length', description: null, image: imageMap['Mid back Length'] },
  { name: 'Haircut & Hair Trim (Includes Hair Wash and Blast Dry)', description: null, image: imageMap['Haircut & Hair Trim (Inclu...)'] },
  { name: 'U Cut (straight cut & Fringes)', description: null, image: imageMap['U Cut (straight cut & Fringes)'] },
  { name: 'Waist Length', description: null, image: imageMap['Waist Length'] },
  { name: 'Blow Dry', description: null, image: imageMap['Haircut & Hair Trim (Inclu...)'] },
  { name: 'Any change of Hair Style', description: null, image: imageMap['Any change of Hair Style'] },
  { name: 'Hair Wash & Ultimate blow dry', description: null, image: imageMap['Haircut & Hair Trim (Inclu...)'] },
  { name: 'Dream curls Tongs', description: null, image: imageMap['Dream curls Tongs'] },
  { name: 'Hair Do', description: null, image: imageMap['Hair Do'] },
  { name: 'Straight finish ironing', description: null, image: imageMap['Straight finish ironing'] },
  { name: 'Additional charge for volume / thickness (extra)', description: null, image: imageMap['Additional charge for volume'] },
];

const scalpMassageAndConditioning = [
  { name: 'Scalp Massage', description: 'Enjoy some old-school hair care with our rejuvenating massage that soothes the scalp while conditioning your hair.', image: imageMap['Hair Spa'] },
  { name: 'Serious Conditioning', description: 'A quick dose of nourishment. A shot of your treatment makes your hair tresses silky and bouncy while adding to their strength.', image: imageMap['Health Boost'] },
  { name: 'Shimmer Boost', description: 'Designed to protect the shine of coloured hair while working to boost gloss, this is a great boost that transforms your locks from plain to dazzling.', image: imageMap['Shimmer Boost'] },
  { name: 'Health Boost', description: 'Instantly review dry hair with our Health Boost Therapy. Improve hair and scalp while balancing moisture content. This procedure will give your locks some much needed nourishment and shine.', image: imageMap['Health Boost'] },
  { name: 'Deep Conditioning', description: 'Add a touch of shine to your tresses while protecting them form UA damage with this spa enriched with nourishing oils. It will bring glow to dull damaged hair. This service also strengthens your hair and improves their manageability.', image: imageMap['Enhance Spa'] },
  { name: 'Moroccan Oil Massage', description: 'Give damaged hair its natural makeover as you indulge in the premium head massage that\'s designed to nourish your scalp while adding shine to your locks.', image: imageMap['Hair Spa'] },
];

// 2. Hair Colouring / Treatments & Spa
const hairColouring = [
  {
    name: 'Root Touch-Up',
    description: 'L\'Oreal (Majirel) / Schwarzkopf (Igora Royal) or L\'Oreal (Inoa) / Schwarzkopf (Essensity)',
    image: imageMap['Root touch up'],
  },
  {
    name: 'Global Colouring (L\'Oreal Majirel / Schwarzkopf Igora Royal)',
    description: null,
    image: imageMap['Global Colouring'],
  },
  {
    name: 'Global Colouring (L\'Oreal Inoa / Schwarzkopf Essential)',
    description: null,
    image: imageMap['Global Colouring - Essent...'],
  },
  {
    name: 'Highlights Colouring',
    description: null,
    image: imageMap['Highlighting Colouring'],
  },
];

const hairSpa = [
  { name: 'De-Stress Spa', description: null, image: imageMap['Hair Spa'] },
  { name: 'Enhance Spa', description: null, image: imageMap['Enhance Spa'] },
  { name: 'Protein Spa', description: null, image: imageMap['Hair Spa'] },
];

const treatments = [
  { name: 'Anti Dandruff', description: null, image: imageMap['Hair Spa'] },
  { name: 'Anti Hair fall', description: null, image: imageMap['Hair Spa'] },
];

const morocainOilSpa = [
  { name: 'Morocain Oil Spa', description: null, image: imageMap['Hair Spa'] },
];

const hairMakeover = [
  {
    name: 'Straightening',
    description: 'If you love poker straight tresses - this one is for you. This treatment gives complex hair a natural and smooth finish that makes it sleek.',
    image: imageMap['Straightening'],
  },
  {
    name: 'Smoothening',
    description: 'Enriched with keratin active care complex, the smoothening process will give your hair a glamorous yet natural blow dry look.',
    image: imageMap['Smoothening'],
  },
  {
    name: 'Cysteine Infusion',
    description: 'Say goodbye to frizz with a therapy that is exclusively designed to release your curls, making your tresses silkier and stronger.',
    image: imageMap['Cysteine infusion'],
  }
];

// 3. Skin Care / Facials & Clean-Ups
const cleanUps = [
  { name: 'Fresh Fruit Clean up', description: null, image: imageMap['Facials'] },
  { name: 'Shahnaz Clean up', description: null, image: imageMap['Facials'] },
  { name: 'Anti Acne Clean up', description: null, image: imageMap['Anti Acne Facial'] },
  { name: 'Skin Brightening Clean up', description: null, image: imageMap['Facials'] },
];

const facials = [
  { name: 'Fresh Fruit Facial', description: 'It provide different agents for softening, exfoliating and cleaning the skin.', image: imageMap['Fresh Fruit Clean up'] },
  { name: 'Papaya Facial', description: 'It makes the skin fairer, spot free also nourishes your skin.', image: imageMap['Papaya Facials'] },
  { name: 'Whitening Facial', description: 'It regenerates clear and healthy layers and give a better glow to the skin.', image: imageMap['Facials'] },
  { name: 'Tan Removal Facial', description: 'It lightens the blemishes, remove\'s dead cells and leaves your skin clean & radiant.', image: imageMap['Tan Removal'] },
  { name: 'Shahnaz Facial', description: 'It is deeply moisturizes the skin.', image: imageMap['Facials'] },
  { name: 'Gold Facial', description: 'It hydrates to the skin, enhances skin plasticity and has revitalizing and rejuvenating effects.', image: imageMap['Facials'] },
  { name: 'Fairness Facial', description: 'It glow the skin.', image: imageMap['Facials'] },
  { name: 'Diamond Facial', description: 'It glow the skin.', image: imageMap['Facials'] },
  { name: 'Anti Acne Facial', description: 'It helps reduce appearance of pores leaves the skin perfectly refined and smooth.', image: imageMap['Anti Acne Facial'] },
  { name: 'Red Wine Facial', description: 'It help in eliminating dead skin, Bring glow to skin, Hydrates an deeply rejuvenates the skin Alcohol can actually reverse the process of aging.', image: imageMap['Facials'] },
  { name: 'Young Radiance Facial', description: 'De Pigmentation it soothes, brightens, energizes the skin and removes brown spots.', image: imageMap['Facials'] },
  { name: 'Skin Brightening Facial', description: 'It can restore a more natural and youthful appearance to your face, removes wrinkles, increase skin elasticity.', image: imageMap['Facials'] },
  { name: 'O3 Diamond Facial', description: '(Moroccan oil) it helps in moisturizing dry rough skin de-cloggers mask size, gives mild & infection free exfoliation result.', image: imageMap['Facials'] },
];

const threading = [
  { name: 'Eye Brows', description: null, image: imageMap['EyeBrows'] },
  { name: 'Fore Head', description: null, image: imageMap['Forehead'] },
  { name: 'Upper Lip', description: null, image: imageMap['Upper Lip'] },
  { name: 'Chin', description: null, image: imageMap['Chin'] },
  { name: 'Jaw Line', description: null, image: imageMap['Jaw Line'] },
  { name: 'Full Face', description: null, image: imageMap['Full Face'] },
];

const bleachAndDeTan = [
  {
    name: 'Face & Neck',
    description: 'Bleach lightens the facial hair and your complexion. Also it helps to lighten dark spots, removes freckles to even out complexion.',
    image: imageMap['Face & Neck'],
  },
  { name: 'Full Arms', description: null, image: imageMap['Full Arms'] },
  { name: 'Half Legs', description: null, image: imageMap['Half Legs'] },
  { name: 'Full Legs', description: null, image: imageMap['Full Legs'] },
  { name: 'Front / Back', description: null, image: imageMap['Front Back'] },
  { name: 'Under Arms', description: null, image: imageMap['underarm'] },
  { name: 'Full Body', description: null, image: imageMap['Full Body'] },
];

// 4. Hand & Foot Care / Pedicure & Manicure
const pedicureManicure = [
  { name: 'Regular Pedicure', description: null, image: imageMap['Regular Pedicure'] },
  { name: 'Aroma Pedicure', description: null, image: imageMap['Aroma Pedicure'] },
  { name: 'Paraffin Pedicure', description: null, image: imageMap['Paraffin Pedicure'] },
  { name: 'French Pedicure', description: null, image: imageMap['FrenchPedi'] },
  { name: 'A.H.A Pedicure', description: null, image: imageMap['A.H.A Pedi'] },
  { name: 'Regular Manicure', description: null, image: imageMap['Regular Manicure'] },
  { name: 'Aroma Manicure', description: null, image: imageMap['Aroma Manicure'] },
  { name: 'Paraffin Manicure', description: null, image: imageMap['Paraffin Manicure'] },
  { name: 'A.H.A Manicure', description: null, image: imageMap['A.H.A maniac'] },
];

// 5. Waxing / Hair Removal
const regularWaxing = [
  {
    name: 'Regular Waxing',
    description: 'Treat your skin to this traditional hair removal method as we gently, effectively and firmly get rid of unwanted hair while making your skin supple and smooth.',
    image: imageMap['Regular waxing'],
  },
  { name: 'Package: Full Waxing (FA+UA+FL)', description: null, image: imageMap['Full Waxing'] },
];

const flavouredWaxing = [
  {
    name: 'Flavoured Waxing',
    description: 'Choose a hair removal treatment that\'s unique and fun! With flavors like banana, chocolate and aloe vera. This is a service your skin is sure to thank you for don\'t forget ask our expert in the last flavors.',
    image: imageMap['Flavoured'],
  },
  { name: 'Package: Full Waxing (FA+FL+UA)', description: null, image: imageMap['Full Waxing'] },
];

const brazilianWaxing = [
  { name: 'Face Waxing', description: null, image: imageMap['Face waxingg'] },
  { name: 'Under Arms Waxing', description: null, image: imageMap['underarm'] },
  { name: 'Bikini Waxing', description: null, image: imageMap['Bikini'] },
];

const waxingPackage = [
  { name: 'Full Waxing (FA+FL+UA)', description: null, image: imageMap['Full Waxing'] },
];

// 6. Massages / Therapies / Body Pampering
const therapies = [
  {
    name: 'Traditional Thai Massage',
    description: 'The traditional thai dry therapy combines elegant elements of Yoga, shiatsu, acupressure and Ayurvedic energy pathways of the body & the therapy points that are locked around the body and stimulates circulation around the body.',
    image: imageMap['Traditional Thai Massage'],
  },
  {
    name: 'Balinese Massage',
    description: 'Balinese massage techniques include acupressure, skin rolling & flicking, firm & gentle stroking, percussion, and application of essential oils. This deeply relaxes and revitalizes body & mind. Benefits include increased flexibility, relief of joint and muscle tension and a balance of the body\'s energy system.',
    image: imageMap['Balinese Massage'],
  },
  {
    name: 'Aroma Therapy Massage',
    description: 'This holistic treatment has a profound impact on the body, mind and spirit. Experience the deep state of relaxation with our powerful combinations of oil and massage. This treatment ends with a deeply soothing head massage to relieve stress from the mind and body.',
    image: imageMap['Aroma Therapy Massage'],
  },
  {
    name: 'Swedish Massage',
    description: 'An advanced form of Aromatherapy, this treatment focuses on direct medium tissue pressure on various connective tissues. It includes techniques like circular pressure, friction in elbows and joints, firm kneading, percussion like tapping, bending and stretching.',
    image: imageMap['swedish massage'],
  },
  {
    name: 'Deep Tissue Massage',
    description: 'Deep-tissue is a specific type of massage therapy that focuses on deeper layers of muscles and the deeper pressure is beneficial in releasing chronic muscle tension. It focuses on the deepest layers of muscle tissue and fascia. It is most painful that hurts so good. It includes deep finger pressure and slow, firm strokes, deep tissue massage is used to treat a variety of physical ailments.',
    image: imageMap['Deep Tissue Massage'],
  },
  {
    name: 'Thai Foot Reflexology',
    description: 'The traditional Thai dry therapy combines elegant elements of Yoga, shiatsu, acupressure and Ayurvedic energy pathways of the body & the therapy points that are locked around the body and stimulates circulation around the body.',
    image: imageMap['Foot massage'],
  },
];

const bestSellerTherapies = [
  {
    name: 'Hot Stone Therapy',
    description: 'This relaxing massage uses heated stones to generate energy and relax the muscles. Hot stone massage is a practice which has been used since ancient as a soothing and healing touch.',
    image: imageMap['Hot Stone Therapy'],
  },
  {
    name: 'Hot Oil Aroma Spirit Therapy',
    description: 'A deeply relaxing therapy combining warm essential oils with soothing massage techniques.',
    image: imageMap['Hot Oil Aroma Spirit'],
  },
  {
    name: 'Lomi-Lomi Therapy',
    description: 'A traditional Hawaiian massage known for its long, flowing, dance-like strokes, often using forearms and elbows.',
    image: imageMap['Lomi-Lomi'],
  },
  {
    name: 'Shiatsu Therapy',
    description: 'A Japanese bodywork based on the traditional Chinese medicine concept of qi, using localized finger pressure in a rhythmic sequence.',
    image: imageMap['shiatsu'],
  },
];

const therapyCombinations = [
  { name: '60 Min Thai Therapy', description: 'A focused 60-minute session of Traditional Thai Massage.', image: imageMap['Traditional Thai Massage'] },
  { name: '60 Min Aroma Therapy', description: 'A focused 60-minute session of calming Aroma Therapy.', image: imageMap['Aroma Therapy Massage'] },
  { name: '60 Min Thai + 60 Min Swedish Massage', description: 'A luxurious combination of Thai and Swedish massage for complete relaxation.', image: imageMap['60 Min Thai + 60 Min Swedish'] },
  { name: '60 Min Thai + 60 Min Balinese Massage', description: 'Experience the best of both Thai and Balinese massage traditions.', image: imageMap['60 Min Thai + 60 Min Swedish'] },
  { name: '60 Min Thai + 60 Min Deep Tissue Massage', description: 'A powerful combination to address deep muscle tension and promote flexibility.', image: imageMap['60 Min Thai + 60 Min Swedish'] },
  { name: '30 Min Thai + 60 Min Swedish Massage', description: 'A quick Thai warm-up followed by a relaxing Swedish massage.', image: imageMap['30 Min Thai + 60 Min Swedish'] },
  { name: '30 Min Thai + 60 Min Balinese Massage', description: 'A shorter Thai introduction leading into a full Balinese experience.', image: imageMap['30 Min Thai + 60 Min Swedish'] },
  { name: '30 Min Thai + 60 Min Deep Tissue Massage', description: 'Targeted deep tissue work preceded by a quick Thai session.', image: imageMap['30 Min Thai + 60 Min Swedish'] },
  { name: '30 Min Foot Reflexology + 60 Min Aroma Therapy', description: 'A brief Thai session followed by a calming aroma therapy massage.', image: imageMap['T Reflexology + 60 Min Sw...'] },
  { name: '30 Min Foot Reflexology + 60 Min Swedish Massage', description: 'A quick foot session followed by a relaxing Swedish massage.', image: imageMap['T Reflexology + 60 Min Sw...'] },
  { name: '30 Min Foot Reflexology + 60 Min Balinese Massage', description: 'A brief foot session leading into a full Balinese experience.', image: imageMap['T Reflexology + 60 Min Sw...'] },
];

// 7. Specialty Services / Packages
const makeUpServices = [
  { name: 'Light Party Makeup', description: null, image: imageMap['Facials'] },
  { name: 'Night Party Makeup', description: null, image: imageMap['Facials'] },
  { name: 'Engagement Makeup', description: null, image: imageMap['Facials'] },
  { name: 'Sangeeth Makeup', description: null, image: imageMap['Facials'] },
  { name: 'Bridal Makeup', description: null, image: imageMap['Facials'] },
  { name: 'Wedding Makeup', description: null, image: imageMap['Facials'] },
  { name: 'Reception Makeup', description: null, image: imageMap['Facials'] },
  { name: 'Friends of Bride Makeup', description: null, image: imageMap['Facials'] },
];

const trialMakeup = [
  { name: 'Basic Trial Makeup', description: null, image: imageMap['Facials'] },
  { name: 'Kryalon Trial Makeup', description: null, image: imageMap['Facials'] },
  { name: 'MAC Trial Makeup', description: null, image: imageMap['Facials'] },
];

const hairDoDropdown = [
  { name: 'Classic Hair Do', description: null, image: imageMap['Hair Do'] },
  { name: 'Elite Hair Do', description: null, image: imageMap['Hair Do'] },
];

const sareeDrape = [
  { name: 'Classic Saree Drape', description: null, image: imageMap['Facials'] },
  { name: 'Elite Saree Drape', description: null, image: imageMap['Facials'] },
];

const preBridalPackages = [
  {
    name: 'Basic Package',
    description: '1 Sitting. Includes Threading, Haircut, Facial, Hair Spa, Pedicure, Manicure, Waxing (Face, Neck, Back).',
    image: imageMap['BasicPackage'],
  },
  {
    name: 'Premium Package',
    description: '4 Sittings. Includes Basic Package + Hair Spa (4 Sittings), Nourishment Treatment, Full Body Wax, Full Body De-Tan Bleach, Body Polishing. The ultimate grooming experience.',
    image: imageMap['Premium Package'],
  },
];

const tattoos = [
  { name: 'Black Tattoo', description: 'Per Inch', image: imageMap['Black Tattoo'] },
  { name: 'Color Tattoo', description: 'Per Inch', image: imageMap['Colour Tattoo'] },
];

const piercing = [
  { name: 'Warts Removal', description: null, image: imageMap['Warts Removal'] },
  { name: 'Ear Piercing (2)', description: null, image: imageMap['Ear Piercing'] },
];

// Categories array
const categories = [
  { id: 'hairCare', name: 'Hair Care & Styling', services: hairCare },
  { id: 'scalpMassageConditioning', name: 'Scalp Massage & Conditioning', services: scalpMassageAndConditioning },
  { id: 'hairColouring', name: 'Hair Colouring', services: hairColouring },
  { id: 'hairSpa', name: 'Hair Spa', services: hairSpa },
  { id: 'treatments', name: 'Hair Treatments', services: treatments },
  { id: 'morocainOilSpa', name: 'Moroccan Oil Spa', services: morocainOilSpa },
  { id: 'hairMakeover', name: 'Hair Makeover', services: hairMakeover },
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
  { id: 'preBridalPackages', name: 'Pre Bridal Packages', services: preBridalPackages },
  { id: 'makeUpServices', name: 'Makeup Services', services: makeUpServices },
  { id: 'trialMakeup', name: 'Trial Makeup', services: trialMakeup },
  { id: 'hairDoDropdown', name: 'Special Occasion Hair', services: hairDoDropdown },
  { id: 'sareeDrape', name: 'Saree Drape', services: sareeDrape },
  { id: 'tattoos', name: 'Tattoos', services: tattoos },
  { id: 'piercing', name: 'Piercing', services: piercing },
];
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



const WomensService3 = () => {
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

export default WomensService3;