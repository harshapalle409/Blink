import React, { useState, useRef, useEffect } from 'react';
import '../Styles/WomensService.css';

// Import all images
import testImage from '../images/salon1.jpg';

// Service Image Imports
import Shoulder_Length from '../images/Women/Shoulder Length.jpeg';
import Shampoo_Condition_Blow_dry from '../images/Women/Shampoo+ Blow-Dry.jpeg';
import Mid_back_Length from '../images/Women/Mid back Length.jpeg';
import Haircut_Hair_Trim_Includes_Hair_Wash_and_Blast_Dry from '../images/Women/Haircut & Hair Trim (Includes Hair Wash and Blast Dry).jpeg';
import U_Cut_straight_cut_Fringes from '../images/Women/U Cut (straight cut & Fringes).jpeg';
import Waist_Length from '../images/Women/Waist Length.jpeg';
import Blow_Dry from '../images/Women/Blow Dry.jpeg';
import Any_change_of_Hair_Style from '../images/Women/Any change of Hair Style.jpeg';
import Hair_Wash_Ultimate_blow_dry from '../images/Women/Hair Wash & Ultimate blow dry.jpeg';
import Dream_curls_Tongs from '../images/Women/Dream curls Tongs.jpeg';
import Hair_Do from '../images/Women/Hair Do.jpeg';
import Straight_finish_ironing from '../images/Women/Straight finish ironing.jpeg';
import Additional_charge_for_volume_thickness_extra from '../images/Women/Additional charge for volume thickness (extra).jpeg';
import Scalp_Massage from '../images/Women/Scalp Massage.jpeg';
import Serious_Conditioning from '../images/Women/Serious Conditioning.jpeg';
import Shimmer_Boost from '../images/Women/Shimmer Boost.jpeg';
import Health_Boost from '../images/Women/Health Boost.jpeg';
import Deep_Conditioning from '../images/Women/Deep Conditioning.jpeg';
import Moroccan_Oil_Massage from '../images/Women/Moroccan Oil Massage.jpeg';
import Root_Touch_Up from '../images/Women/Root Touch-Up.jpeg';
import Global_Colouring_LOreal_Majirel_Schwarzkopf_Igora_Royal from '../images/Women/Global Colouring LOreal Majirel Schwarzkopf Igora Royal.jpeg';
import Global_Colouring_LOreal_Inoa_Schwarzkopf_Essential from '../images/Women/Global Colouring.jpeg';
import Highlights_Colouring from '../images/Women/Highlights Colouring.jpeg';
import De_Stress_Spa from '../images/Women/De-Stress Spa.jpeg';
import Enhance_Spa from '../images/Women/Enhance Spa.jpeg';
import Protein_Spa from '../images/Women/Protein Spa.jpeg';
import Anti_Dandruff from '../images/Women/Anti Dandruff.jpeg';
import Anti_Hair_fall from '../images/Women/Anti Hair fall.jpeg';
import Morocain_Oil_Spa from '../images/Women/Morocain Oil Spa.jpeg';
import Straightening from '../images/Women/Straightening.jpeg';
import Smoothening from '../images/Women/Smoothening.jpeg';
import Cysteine_Infusion from '../images/Women/Cysteine Infusion.jpeg';
import Fresh_Fruit_Clean_up from '../images/Women/Fresh Fruit Clean up.jpeg';
import Shahnaz_Clean_up from '../images/Women/Shahnaz Clean up.jpeg';
import Anti_Acne_Clean_up from '../images/Women/Anti Acne Clean up.jpeg';
import Skin_Brightening_Clean_up from '../images/Women/Skin Brightening Clean up.jpeg';
import Fresh_Fruit_Facial from '../images/Women/Fresh Fruit Facial.jpeg';
import Papaya_Facial from '../images/Women/Papaya Facial.jpeg';
import Whitening_Facial from '../images/Women/Whitening Facial.jpeg';
import Tan_Removal_Facial from '../images/Women/Tan Removal Facial.jpeg';
import Shahnaz_Facial from '../images/Women/Shahnaz Facial.jpeg';
import Gold_Facial from '../images/Women/Gold Facial.jpeg';
import Fairness_Facial from '../images/Women/Fairness Facial.jpeg';
import Diamond_Facial from '../images/Women/Diamond Facial.jpeg';
import Anti_Acne_Facial from '../images/Women/Anti Acne Facial.jpeg';
import Red_Wine_Facial from '../images/Women/Red Wine Facial.jpeg';
import Young_Radiance_Facial from '../images/Women/Young Radiance Facial.jpeg';
import Skin_Brightening_Facial from '../images/Women/Skin Brightening Facial.jpeg';
import O3_Diamond_Facial_Moroccan_oil from '../images/Women/O3 Diamond Facial.jpeg';
import Eye_Brows from '../images/Women/Eye Brows.jpeg';
import Fore_Head from '../images/Women/Fore Head.jpeg';
import Upper_Lip from '../images/Women/Upper Lip.jpeg';
import Lower_Lip from '../images/Women/Lower Lip.jpeg';
import Chin from '../images/Women/Chin.jpeg';
import Sides from '../images/Women/Sides.jpeg';
import Jaw_Line from '../images/Women/Jaw Line.jpeg';
import Neck from '../images/Women/Neck.jpeg';
import Full_Face from '../images/Women/Full Face.jpeg';
import Face_Neck from '../images/Women/Face & Neck.jpeg';
import Full_Arms from '../images/Women/Full Arms.jpeg';
import Half_Legs from '../images/Women/Half Legs.jpeg';
import Full_Legs from '../images/Women/Full Legs.jpeg';
import Front_Back from '../images/Women/Front Back.jpeg';
import Under_Arms from '../images/Women/Under Arms.jpeg';
import Full_Body from '../images/Women/Full Body.jpeg';
import Regular_Pedicure from '../images/Women/Regular Pedicure.jpeg';
import Aroma_Pedicure from '../images/Women/Aroma Pedicure.jpeg';
import Paraffin_Pedicure from '../images/Women/Paraffin Pedicure.jpeg';
import Chocolate_Pedicure from '../images/Women/Chocolate Pedicure.jpeg';
import French_Pedicure from '../images/Women/French Pedicure.jpeg';
import AHA_Pedicure from '../images/Women/A.H.A Pedicure.jpeg';
import Regular_Manicure from '../images/Women/Regular Manicure.jpeg';
import Aroma_Manicure from '../images/Women/Aroma Manicure.jpeg';
import Chocolate_Manicure from '../images/Women/Chocolate Manicure.jpeg';
import Paraffin_Manicure from '../images/Women/Paraffin Manicure.jpeg';
import French_Manicure from '../images/Women/French Manicure.jpeg';
import AHA_Manicure from '../images/Women/A.H.A Manicure.jpeg';
import Regular_Waxing from '../images/Women/Regular Waxing.jpeg';
import Package_Full_Waxing_FA_UA_FL from '../images/Women/Full Waxing.jpeg';
import Flavoured_Waxing from '../images/Women/Flavoured Waxing.jpeg';
import Face_Waxing from '../images/Women/Face Waxing.jpeg';
import Under_Arms_Waxing from '../images/Women/Under Arms Waxing.jpeg';
import Bikini_Waxing from '../images/Women/Bikini Waxing.jpeg';
import Full_Waxing_FA_FL_UA from '../images/Women/Full Waxing.jpeg';
import Traditional_Thai_Massage from '../images/Women/Traditional Thai Massage.jpeg';
import Balinese_Massage from '../images/Women/Balinese Massage.jpeg';
import Aroma_Therapy_Massage from '../images/Women/Aroma Therapy Massage.jpeg';
import Swedish_Massage from '../images/Women/Swedish Massage.jpeg';
import Deep_Tissue_Massage from '../images/Women/Deep Tissue Massage.jpeg';
import Thai_Foot_Reflexology from '../images/Women/Thai Foot Reflexology.jpeg';
import Foot_Massage_With_Head_And_Shoulder_Massage from '../images/Women/Foot Massage With Head And Shoulder Massage.jpeg';
import Foot_Massage_With_Back_And_Shoulder_Massage from '../images/Women/Foot Massage With Back And Shoulder Massage.jpeg';
import Hot_Stone_Therapy from '../images/Women/Hot Stone Therapy.jpeg';
import Hot_Oil_Aroma_Spirit_Therapy from '../images/Women/Hot Oil Aroma Spirit Therapy.jpeg';
import Lomi_Lomi_Therapy from '../images/Women/Lomi-Lomi Therapy.jpeg';
import Shiatsu_Therapy from '../images/Women/Shiatsu Therapy.jpeg';
import Min_Thai_Therapy from '../images/Women/60 Min Thai Therapy.jpeg';
import Min_Aroma_Therapy from '../images/Women/60 Min Aroma Therapy.jpeg';
import Min_Thai_Min_Swedish_Massage from '../images/Women/60 Min Thai + 60 Min Swedish Massage.jpeg';
import Min_Thai_Min_Balinese_Massage from '../images/Women/60 Min Thai + 60 Min Balinese Massage.jpeg';
import Min_Thai_Min_Deep_Tissue_Massage from '../images/Women/60 Min Thai + 60 Min Deep Tissue Massage.jpeg';
import Min_Thai_Min_Swedish_Massage_2 from '../images/Women/30 Min Thai + 60 Min Swedish Massage.jpeg';
import Min_Thai_Min_Balinese_Massage_2 from '../images/Women/30 Min Thai + 60 Min Balinese Massage.jpeg';
import Min_Thai_Min_Deep_Tissue_Massage_2 from '../images/Women/30 Min Thai + 60 Min Deep Tissue Massage.jpeg';
import Min_Foot_Reflexology_Min_Aroma_Therapy from '../images/Women/30 Min Foot Reflexology + 60 Min Aroma Therapy.jpeg';
import Min_Foot_Reflexology_Min_Swedish_Massage from '../images/Women/Foot Reflexology + 60 Min Swedish Massage.jpeg';
import Min_Foot_Reflexology_Min_Balinese_Massage from '../images/Women/30 Min Foot Reflexology + 60 Min Balinese Massage.jpeg';
import Hand_Massage from '../images/Women/Hand Massage.jpeg';
import Back_Massage from '../images/Women/Back Massage.jpeg';
import Foot_Massage from '../images/Women/Foot Massage.jpeg';
import Hands_Polishing from '../images/Women/Hand Polishing.jpeg';
import Face_Polishing from '../images/Women/Face polishing.jpeg';
import Full_Body_Massage_Aroma from '../images/Women/Full Body Massage (Aroma).jpeg';
import Full_Body_Massage_Exclusive from '../images/Women/Full Body Massage (Exclusive).jpeg';
import Full_Body_Polishing from '../images/Women/Full Body Polishing.jpeg';
import Full_Body_Exclusive_Anti_tan_pack_Multi_scrub_Cream_Massage_Glow_Pack_Toning from '../images/Women/Full Body Exclusive Anti tan pack + Multi scrub + Cream Massage + Glow Pack + Toning.jpeg';
import Light_Party_Makeup from '../images/Women/Light Party Makeup.jpeg';
import Night_Party_Makeup from '../images/Women/Night Party Makeup.jpeg';
import Engagement_Makeup from '../images/Women/Engagement Makeup.jpeg';
import Sangeeth_Makeup from '../images/Women/Sangeeth Makeup.jpeg';
import Bridal_Makeup from '../images/Women/Bridal Makeup.jpeg';
import Wedding_Makeup from '../images/Women/Wedding Makeup.jpeg';
import Reception_Makeup from '../images/Women/Reception Makeup.jpeg';
import Friends_of_Bride_Makeup from '../images/Women/Friends of Bride Makeup.jpeg';
import Basic_Trial_Makeup from '../images/Women/Basic Trial Makeup.jpeg';
import Kryalon_Trial_Makeup from '../images/Women/Kryalon Trial Makeup.jpeg';
import MAC_Trial_Makeup from '../images/Women/MAC Trial Makeup.jpeg';
import Classic_Hair_Do from '../images/Women/Classic Hair Do.jpeg';
import Elite_Hair_Do from '../images/Women/Elite Hair Do.jpeg';
import Classic_Saree_Drape from '../images/Women/Classic Saree Drape.jpeg';
import Elite_Saree_Drape from '../images/Women/Elite Saree Drape.jpeg';
import Basic_Package from '../images/Women/Basic Package.jpeg';
import Standard_Package from '../images/Women/Standard Package.jpeg';
import Premium_Package from '../images/Women/Premium Package.jpeg';
import Black_Tattoo from '../images/Women/Black Tattoo.jpeg';
import Color_Tattoo from '../images/Women/Color Tattoo.jpeg';
import Warts_Removal from '../images/Women/Warts Removal.jpeg';
import Nose_Piercing from '../images/Women/Nose Piercing.jpeg';
import Ear_Piercing_2 from '../images/Women/Ear Piercing.jpeg';

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
// Image mapping
const imageMap = {
  "Shoulder Length": Shoulder_Length,
  "Shampoo + Condition + Blow dry": Shampoo_Condition_Blow_dry,
  "Mid back Length": Mid_back_Length,
  "Haircut & Hair Trim (Includes Hair Wash and Blast Dry)": Haircut_Hair_Trim_Includes_Hair_Wash_and_Blast_Dry,
  "U Cut (straight cut & Fringes)": U_Cut_straight_cut_Fringes,
  "Waist Length": Waist_Length,
  "Blow Dry": Blow_Dry,
  "Any change of Hair Style": Any_change_of_Hair_Style,
  "Hair Wash & Ultimate blow dry": Hair_Wash_Ultimate_blow_dry,
  "Dream curls Tongs": Dream_curls_Tongs,
  "Hair Do": Hair_Do,
  "Straight finish ironing": Straight_finish_ironing,
  "Additional charge for volume / thickness (extra)": Additional_charge_for_volume_thickness_extra,
  "Scalp Massage": Scalp_Massage,
  "Serious Conditioning": Serious_Conditioning,
  "Shimmer Boost": Shimmer_Boost,
  "Health Boost": Health_Boost,
  "Deep Conditioning": Deep_Conditioning,
  "Moroccan Oil Massage": Moroccan_Oil_Massage,
  "Root Touch-Up": Root_Touch_Up,
  "Global Colouring (L'Oreal Majirel / Schwarzkopf Igora Royal)": Global_Colouring_LOreal_Majirel_Schwarzkopf_Igora_Royal,
  "Global Colouring (L'Oreal Inoa / Schwarzkopf Essential)": Global_Colouring_LOreal_Inoa_Schwarzkopf_Essential,
  "Highlights Colouring": Highlights_Colouring,
  "De-Stress Spa": De_Stress_Spa,
  "Enhance Spa": Enhance_Spa,
  "Protein Spa": Protein_Spa,
  "Anti Dandruff": Anti_Dandruff,
  "Anti Hair fall": Anti_Hair_fall,
  "Morocain Oil Spa": Morocain_Oil_Spa,
  "Straightening": Straightening,
  "Smoothening": Smoothening,
  "Cysteine Infusion": Cysteine_Infusion,
  "Fresh Fruit Clean up": Fresh_Fruit_Clean_up,
  "Shahnaz Clean up": Shahnaz_Clean_up,
  "Anti Acne Clean up": Anti_Acne_Clean_up,
  "Skin Brightening Clean up": Skin_Brightening_Clean_up,
  "Fresh Fruit Facial": Fresh_Fruit_Facial,
  "Papaya Facial": Papaya_Facial,
  "Whitening Facial": Whitening_Facial,
  "Tan Removal Facial": Tan_Removal_Facial,
  "Shahnaz Facial": Shahnaz_Facial,
  "Gold Facial": Gold_Facial,
  "Fairness Facial": Fairness_Facial,
  "Diamond Facial": Diamond_Facial,
  "Anti Acne Facial": Anti_Acne_Facial,
  "Red Wine Facial": Red_Wine_Facial,
  "Young Radiance Facial": Young_Radiance_Facial,
  "Skin Brightening Facial": Skin_Brightening_Facial,
  "O3 Diamond Facial (Moroccan oil)": O3_Diamond_Facial_Moroccan_oil,
  "Eye Brows": Eye_Brows,
  "Fore Head": Fore_Head,
  "Upper Lip": Upper_Lip,
  "Lower Lip": Lower_Lip,
  "Chin": Chin,
  "Sides": Sides,
  "Jaw Line": Jaw_Line,
  "Neck": Neck,
  "Full Face": Full_Face,
  "Face & Neck": Face_Neck,
  "Full Arms": Full_Arms,
  "Half Legs": Half_Legs,
  "Full Legs": Full_Legs,
  "Front / Back": Front_Back,
  "Under Arms": Under_Arms,
  "Full Body": Full_Body,
  "Regular Pedicure": Regular_Pedicure,
  "Aroma Pedicure": Aroma_Pedicure,
  "Paraffin Pedicure": Paraffin_Pedicure,
  "Chocolate Pedicure": Chocolate_Pedicure,
  "French Pedicure": French_Pedicure,
  "A.H.A Pedicure": AHA_Pedicure,
  "Regular Manicure": Regular_Manicure,
  "Aroma Manicure": Aroma_Manicure,
  "Chocolate Manicure": Chocolate_Manicure,
  "Paraffin Manicure": Paraffin_Manicure,
  "French Manicure": French_Manicure,
  "A.H.A Manicure": AHA_Manicure,
  "Regular Waxing": Regular_Waxing,
  "Full Waxing": Package_Full_Waxing_FA_UA_FL,
  "Flavoured Waxing": Flavoured_Waxing,
  "Face Waxing": Face_Waxing,
  "Under Arms Waxing": Under_Arms_Waxing,
  "Bikini Waxing": Bikini_Waxing,
  "Full Waxing (FA+FL+UA)": Full_Waxing_FA_FL_UA,
  "Traditional Thai Massage": Traditional_Thai_Massage,
  "Balinese Massage": Balinese_Massage,
  "Aroma Therapy Massage": Aroma_Therapy_Massage,
  "Swedish Massage": Swedish_Massage,
  "Deep Tissue Massage": Deep_Tissue_Massage,
  "Thai Foot Reflexology": Thai_Foot_Reflexology,
  "Foot Massage With Head And Shoulder Massage": Foot_Massage_With_Head_And_Shoulder_Massage,
  "Foot Massage With Back And Shoulder Massage": Foot_Massage_With_Back_And_Shoulder_Massage,
  "Hot Stone Therapy": Hot_Stone_Therapy,
  "Hot Oil Aroma Spirit Therapy": Hot_Oil_Aroma_Spirit_Therapy,
  "Lomi-Lomi Therapy": Lomi_Lomi_Therapy,
  "Shiatsu Therapy": Shiatsu_Therapy,
  "60 Min Thai Therapy": Min_Thai_Therapy,
  "60 Min Aroma Therapy": Min_Aroma_Therapy,
  "60 Min Thai + 60 Min Swedish Massage": Min_Thai_Min_Swedish_Massage,
  "60 Min Thai + 60 Min Balinese Massage": Min_Thai_Min_Balinese_Massage,
  "60 Min Thai + 60 Min Deep Tissue Massage": Min_Thai_Min_Deep_Tissue_Massage,
  "30 Min Thai + 60 Min Swedish Massage": Min_Thai_Min_Swedish_Massage_2,
  "30 Min Thai + 60 Min Balinese Massage": Min_Thai_Min_Balinese_Massage_2,
  "30 Min Thai + 60 Min Deep Tissue Massage": Min_Thai_Min_Deep_Tissue_Massage_2,
  "30 Min Foot Reflexology + 60 Min Aroma Therapy": Min_Foot_Reflexology_Min_Aroma_Therapy,
  "30 Min Foot Reflexology + 60 Min Swedish Massage": Min_Foot_Reflexology_Min_Swedish_Massage,
  "30 Min Foot Reflexology + 60 Min Balinese Massage": Min_Foot_Reflexology_Min_Balinese_Massage,
  "Hand Massage": Hand_Massage,
  "Back Massage": Back_Massage,
  "Foot Massage": Foot_Massage,
  "Hands Polishing": Hands_Polishing,
  "Face Polishing": Face_Polishing,
  "Full Body Massage (Aroma)": Full_Body_Massage_Aroma,
  "Full Body Massage (Exclusive)": Full_Body_Massage_Exclusive,
  "Full Body Polishing": Full_Body_Polishing,
  "Full Body Exclusive Anti tan pack + Multi scrub + Cream Massage + Glow Pack + Toning": Full_Body_Exclusive_Anti_tan_pack_Multi_scrub_Cream_Massage_Glow_Pack_Toning,
  "Light Party Makeup": Light_Party_Makeup,
  "Night Party Makeup": Night_Party_Makeup,
  "Engagement Makeup": Engagement_Makeup,
  "Sangeeth Makeup": Sangeeth_Makeup,
  "Bridal Makeup": Bridal_Makeup,
  "Wedding Makeup": Wedding_Makeup,
  "Reception Makeup": Reception_Makeup,
  "Friends of Bride Makeup": Friends_of_Bride_Makeup,
  "Basic Trial Makeup": Basic_Trial_Makeup,
  "Kryalon Trial Makeup": Kryalon_Trial_Makeup,
  "MAC Trial Makeup": MAC_Trial_Makeup,
  "Classic Hair Do": Classic_Hair_Do,
  "Elite Hair Do": Elite_Hair_Do,
  "Classic Saree Drape": Classic_Saree_Drape,
  "Elite Saree Drape": Elite_Saree_Drape,
  "Basic Package": Basic_Package,
  "Standard Package": Standard_Package,
  "Premium Package": Premium_Package,
  "Black Tattoo": Black_Tattoo,
  "Color Tattoo": Color_Tattoo,
  "Warts Removal": Warts_Removal,
  "Nose Piercing": Nose_Piercing,
  "Ear Piercing (2)": Ear_Piercing_2
};

// Service data arrays with updated images
// 1. Hair Care / Haircuts & Styling
const hairCare = [
    { name: 'Shoulder Length', description: null, image: imageMap['Shoulder Length'] },
    { name: 'Shampoo + Condition + Blow dry', description: null, image: imageMap['Shampoo + Condition + Blow dry'] || testImage },
    { name: 'Mid back Length', description: null, image: imageMap['Mid back Length'] || testImage },
    { name: 'Haircut & Hair Trim (Includes Hair Wash and Blast Dry)', description: null, image: imageMap['Haircut & Hair Trim (Includes Hair Wash and Blast Dry)'] || testImage },
    { name: 'U Cut (straight cut & Fringes)', description: null, image: imageMap['U Cut (straight cut & Fringes)'] || testImage },
    { name: 'Waist Length', description: null, image: imageMap['Waist Length'] || testImage },
    { name: 'Blow Dry', description: null, image: imageMap['Blow Dry'] || testImage },
    { name: 'Any change of Hair Style', description: null, image: imageMap['Any change of Hair Style'] || testImage },
    { name: 'Hair Wash & Ultimate blow dry', description: null, image: imageMap['Hair Wash & Ultimate blow dry'] || testImage },
    { name: 'Dream curls Tongs', description: null, image: imageMap['Dream curls Tongs'] || testImage },
    { name: 'Hair Do', description: null, image: imageMap['Hair Do'] || testImage },
    { name: 'Straight finish ironing', description: null, image: imageMap['Straight finish ironing'] || testImage },
    { name: 'Additional charge for volume / thickness (extra)', description: null, image: imageMap['Additional charge for volume / thickness (extra)'] || testImage },
];

const scalpMassageAndConditioning = [
    { name: 'Scalp Massage', description: 'Enjoy some old-school hair care with our rejuvenating massage that soothes the scalp while conditioning your hair.', image: imageMap['Scalp Massage'] || testImage },
    { name: 'Serious Conditioning', description: 'A quick dose of nourishment. A shot of your treatment makes your hair tresses silky and bouncy while adding to their strength.', image: imageMap['Serious Conditioning'] || testImage },
    { name: 'Shimmer Boost', description: 'Designed to protect the shine of coloured hair while working to boost gloss.', image: imageMap['Shimmer Boost'] || testImage },
    { name: 'Health Boost', description: 'Instantly review dry hair with our Health Boost Therapy. Improve hair and scalp while balancing moisture content.', image: imageMap['Health Boost'] || testImage },
    { name: 'Deep Conditioning', description: 'Add a touch of shine to your tresses while protecting them from UV damage.', image: imageMap['Deep Conditioning'] || testImage },
    { name: 'Moroccan Oil Massage', description: 'Give damaged hair its natural makeover as you indulge in the premium head massage that\'s designed to nourish your scalp while adding shine to your locks.', image: imageMap['Moroccan Oil Massage'] || testImage },
];

// 2. Hair Colouring / Treatments & Spa
const hairColouring = [
    { name: 'Root Touch-Up', description: 'L\'Oreal (Majirel) / Schwarzkopf (Igora Royal) or L\'Oreal (Inoa) / Schwarzkopf (Essensity)', image: imageMap['Root Touch-Up'] || testImage },
    { name: 'Global Colouring (L\'Oreal Majirel / Schwarzkopf Igora Royal)', description: null, image: imageMap['Global Colouring (L\'Oreal Majirel / Schwarzkopf Igora Royal)'] || testImage },
    { name: 'Global Colouring (L\'Oreal Inoa / Schwarzkopf Essential)', description: null, image: imageMap['Global Colouring (L\'Oreal Inoa / Schwarzkopf Essential)'] || testImage },
    { name: 'Highlights Colouring', description: null, image: imageMap['Highlights Colouring'] || testImage },
];

const hairSpa = [
    { name: 'De-Stress Spa', description: null, image: imageMap['De-Stress Spa'] || testImage },
    { name: 'Enhance Spa', description: null, image: imageMap['Enhance Spa'] || testImage },
    { name: 'Protein Spa', description: null, image: imageMap['Protein Spa'] || testImage },
];

const treatments = [
    { name: 'Anti Dandruff', description: null, image: imageMap['Anti Dandruff'] || testImage },
    { name: 'Anti Hair fall', description: null, image: imageMap['Anti Hair fall'] || testImage },
];

const morocainOilSpa = [
    { name: 'Morocain Oil Spa', description: null, image: imageMap['Morocain Oil Spa'] || testImage },
];

const hairMakeover = [
    { name: 'Straightening', description: 'If you love poker straight tresses - this one is for you. This treatment gives complex hair a natural and smooth finish that makes it sleek.', image: imageMap['Straightening'] || testImage },
    { name: 'Smoothening', description: 'Enriched with keratin active care complex, the smoothening process will give your hair a glamorous yet natural blow dry look.', image: imageMap['Smoothening'] || testImage },
    { name: 'Cysteine Infusion', description: 'Say goodbye to frizz with a therapy that is exclusively designed to release your curls, making your tresses silkier and stronger.', image: imageMap['Cysteine Infusion'] || testImage }
];

// 3. Skin Care / Facials & Clean-Ups
const cleanUps = [
    { name: 'Fresh Fruit Clean up', description: null, image: imageMap['Fresh Fruit Clean up'] || testImage },
    { name: 'Shahnaz Clean up', description: null, image: imageMap['Shahnaz Clean up'] || testImage },
    { name: 'Anti Acne Clean up', description: null, image: imageMap['Anti Acne Clean up'] || testImage },
    { name: 'Skin Brightening Clean up', description: null, image: imageMap['Skin Brightening Clean up'] || testImage },
];

const facials = [
    { name: 'Fresh Fruit Facial', description: 'It provide different agents for softening, exfoliating and cleaning the skin.', image: imageMap['Fresh Fruit Facial'] || testImage },
    { name: 'Papaya Facial', description: 'It makes the skin fairer, spot free also nourishes your skin.', image: imageMap['Papaya Facial'] || testImage },
    { name: 'Whitening Facial', description: 'It regenerates clear and healthy layers and give a better glow to the skin.', image: imageMap['Whitening Facial'] || testImage },
    { name: 'Tan Removal Facial', description: 'It lightens the blemishes, remove\'s dead cells and leaves your skin clean & radiant.', image: imageMap['Tan Removal Facial'] || testImage },
    { name: 'Shahnaz Facial', description: 'It is deeply moisturizes the skin.', image: imageMap['Shahnaz Facial'] || testImage },
    { name: 'Gold Facial', description: 'It hydrates to the skin, enhances skin plasticity and has revitalizing and rejuvenating effects.', image: imageMap['Gold Facial'] || testImage },
    { name: 'Fairness Facial', description: 'It glow the skin.', image: imageMap['Fairness Facial'] || testImage },
    { name: 'Diamond Facial', description: 'It glow the skin.', image: imageMap['Diamond Facial'] || testImage },
    { name: 'Anti Acne Facial', description: 'It helps reduce appearance of pores leaves the skin perfectly refined and smooth.', image: imageMap['Anti Acne Facial'] || testImage },
    { name: 'Red Wine Facial', description: 'It help in eliminating dead skin, Bring glow to skin, Hydrates an deeply rejuvenates the skin Alcohol can actually reverse the process of aging.', image: imageMap['Red Wine Facial'] || testImage },
    { name: 'Young Radiance Facial', description: 'De Pigmentation it soothes, brightens, energizes the skin and removes brown spots.', image: imageMap['Young Radiance Facial'] || testImage },
    { name: 'Skin Brightening Facial', description: 'It can restore a more natural and youthful appearance to your face, removes wrinkles, increase skin elasticity.', image: imageMap['Skin Brightening Facial'] || testImage },
    { name: 'O3 Diamond Facial', description: '(Moroccan oil) it helps in moisturizing dry rough skin de-cloggers mask size, gives mild & infection free exfoliation result.', image: imageMap['O3 Diamond Facial (Moroccan oil)'] || testImage },
];

const threading = [
    { name: 'Eye Brows', description: null, image: imageMap['Eye Brows'] || testImage },
    { name: 'Fore Head', description: null, image: imageMap['Fore Head'] || testImage },
    { name: 'Upper Lip', description: null, image: imageMap['Upper Lip'] || testImage },
    { name: 'Lower Lip', description: null, image: imageMap['Lower Lip'] || testImage },
    { name: 'Chin', description: null, image: imageMap['Chin'] || testImage },
    { name: 'Sides', description: null, image: imageMap['Sides'] || testImage },
    { name: 'Jaw Line', description: null, image: imageMap['Jaw Line'] || testImage },
    { name: 'Neck', description: null, image: imageMap['Neck'] || testImage },
    { name: 'Full Face', description: null, image: imageMap['Full Face'] || testImage },
];

const bleachAndDeTan = [
    { name: 'Face & Neck', description: 'Bleach lightens the facial hair and your complexion. Also it helps to lighten dark spots, removes freckles to even out complexion.', image: imageMap['Face & Neck'] || testImage },
    { name: 'Full Arms', description: null, image: imageMap['Full Arms'] || testImage },
    { name: 'Half Legs', description: null, image: imageMap['Half Legs'] || testImage },
    { name: 'Full Legs', description: null, image: imageMap['Full Legs'] || testImage },
    { name: 'Front / Back', description: null, image: imageMap['Front / Back'] || testImage },
    { name: 'Under Arms', description: null, image: imageMap['Under Arms'] || testImage },
    { name: 'Full Body', description: null, image: imageMap['Full Body'] || testImage },
];

// 4. Hand & Foot Care / Pedicure & Manicure
const pedicureManicure = [
    { name: 'Regular Pedicure', description: null, image: imageMap['Regular Pedicure'] || testImage },
    { name: 'Aroma Pedicure', description: null, image: imageMap['Aroma Pedicure'] || testImage },
    { name: 'Paraffin Pedicure', description: null, image: imageMap['Paraffin Pedicure'] || testImage },
    { name: 'Chocolate Pedicure', description: null, image: imageMap['Chocolate Pedicure'] || testImage },
    { name: 'French Pedicure', description: null, image: imageMap['French Pedicure'] || testImage },
    { name: 'A.H.A Pedicure', description: null, image: imageMap['A.H.A Pedicure'] || testImage },
    { name: 'Regular Manicure', description: null, image: imageMap['Regular Manicure'] || testImage },
    { name: 'Aroma Manicure', description: null, image: imageMap['Aroma Manicure'] || testImage },
    { name: 'Chocolate Manicure', description: null, image: imageMap['Chocolate Manicure'] || testImage },
    { name: 'Paraffin Manicure', description: null, image: imageMap['Paraffin Manicure'] || testImage },
    { name: 'French Manicure', description: null, image: imageMap['French Manicure'] || testImage },
    { name: 'A.H.A Manicure', description: null, image: imageMap['A.H.A Manicure'] || testImage },
];

// 5. Waxing / Hair Removal
const regularWaxing = [
    { name: 'Regular Waxing', description: 'Treat your skin to this traditional hair removal method as we gently, effectively and firmly get rid of unwanted hair while making your skin supple and smooth.', image: imageMap['Regular Waxing'] || testImage },
    { name: 'Package: Full Waxing (FA+UA+FL)', description: null, image: imageMap['Full Waxing'] || testImage },
];

const flavouredWaxing = [
    { name: 'Flavoured Waxing', description: 'Choose a hair removal treatment that\'s unique and fun! With flavors like banana, chocolate and aloe vera. This is a service your skin is sure to thank you for don\'t forget ask our expert in the last flavors.', image: imageMap['Flavoured Waxing'] || testImage },
    { name: 'Package: Full Waxing (FA+FL+UA)', description: null, image: imageMap['Full Waxing'] || testImage },
];

const brazilianWaxing = [
    { name: 'Face Waxing', description: null, image: imageMap['Face Waxing'] || testImage },
    { name: 'Under Arms Waxing', description: null, image: imageMap['Under Arms Waxing'] || testImage },
    { name: 'Bikini Waxing', description: null, image: imageMap['Bikini Waxing'] || testImage },
];

const waxingPackage = [
    { name: 'Full Waxing (FA+FL+UA)', description: null, image: imageMap['Full Waxing (FA+FL+UA)'] || testImage },
];

// 6. Massages / Therapies / Body Pampering
const therapies = [
    { name: 'Traditional Thai Massage', description: 'The traditional thai dry therapy combines elegant elements of Yoga, shiatsu, acupressure and Ayurvedic energy pathways of the body & the therapy points that are locked around the body and stimulates circulation around the body.', image: imageMap['Traditional Thai Massage'] || testImage },
    { name: 'Balinese Massage', description: 'Balinese massage techniques include acupressure, skin rolling & flicking, firm & gentle stroking, percussion, and application of essential oils. This deeply relaxes and revitalizes body & mind. Benefits include increased flexibility, relief of joint and muscle tension and a balance of the body\'s energy system.', image: imageMap['Balinese Massage'] || testImage },
    { name: 'Aroma Therapy Massage', description: 'This holistic treatment has a profound impact on the body, mind and spirit. Experience the deep state of relaxation with our powerful combinations of oil and massage. This treatment ends with a deeply soothing head massage to relieve stress from the mind and body.', image: imageMap['Aroma Therapy Massage'] || testImage },
    { name: 'Swedish Massage', description: 'An advanced form of Aromatherapy, this treatment focuses on direct medium tissue pressure on various connective tissues. It includes techniques like circular pressure, friction in elbows and joints, firm kneading, percussion like tapping, bending and stretching.', image: imageMap['Swedish Massage'] || testImage },
    { name: 'Deep Tissue Massage', description: 'Deep-tissue is a specific type of massage therapy that focuses on deeper layers of muscles and the deeper pressure is beneficial in releasing chronic muscle tension. It focuses on the deepest layers of muscle tissue and fascia. It is most painful that hurts so good. It includes deep finger pressure and slow, firm strokes, deep tissue massage is used to treat a variety of physical ailments.', image: imageMap['Deep Tissue Massage'] || testImage },
    { name: 'Thai Foot Reflexology', description: 'The traditional Thai dry therapy combines elegant elements of Yoga, shiatsu, acupressure and Ayurvedic energy pathways of the body & the therapy points that are locked around the body and stimulates circulation around the body.', image: imageMap['Thai Foot Reflexology'] || testImage },
    { name: 'Foot Massage With Head And Shoulder Massage', description: 'Ancient Thai healing relieves sore muscles, stimulates circulation as well as increases energy flow.', image: imageMap['Foot Massage With Head And Shoulder Massage'] || testImage },
    { name: 'Foot Massage With Back And Shoulder Massage', description: 'Ancient Thai healing relieves sore muscles, stimulates circulation as well as increases energy flow.', image: imageMap['Foot Massage With Back And Shoulder Massage'] || testImage },
];

const bestSellerTherapies = [
    { name: 'Hot Stone Therapy', description: 'This relaxing massage uses heated stones to generate energy and relax the muscles. Hot stone massage is a practice which has been used since ancient as a soothing and healing touch.', image: imageMap['Hot Stone Therapy'] || testImage },
    { name: 'Hot Oil Aroma Spirit Therapy', description: 'A deeply relaxing therapy combining warm essential oils with soothing massage techniques.', image: imageMap['Hot Oil Aroma Spirit Therapy'] || testImage },
    { name: 'Lomi-Lomi Therapy', description: 'A traditional Hawaiian massage known for its long, flowing, dance-like strokes, often using forearms and elbows.', image: imageMap['Lomi-Lomi Therapy'] || testImage },
    { name: 'Shiatsu Therapy', description: 'A Japanese bodywork based on the traditional Chinese medicine concept of qi, using localized finger pressure in a rhythmic sequence.', image: imageMap['Shiatsu Therapy'] || testImage },
];

const therapyCombinations = [
    { name: '60 Min Thai Therapy', description: 'A focused 60-minute session of Traditional Thai Massage.', image: imageMap['60 Min Thai Therapy'] || testImage },
    { name: '60 Min Aroma Therapy', description: 'A focused 60-minute session of calming Aroma Therapy.', image: imageMap['60 Min Aroma Therapy'] || testImage },
    { name: '60 Min Thai + 60 Min Swedish Massage', description: 'A luxurious combination of Thai and Swedish massage for complete relaxation.', image: imageMap['60 Min Thai + 60 Min Swedish Massage'] || testImage },
    { name: '60 Min Thai + 60 Min Balinese Massage', description: 'Experience the best of both Thai and Balinese massage traditions.', image: imageMap['60 Min Thai + 60 Min Balinese Massage'] || testImage },
    { name: '60 Min Thai + 60 Min Deep Tissue Massage', description: 'A powerful combination to address deep muscle tension and promote flexibility.', image: imageMap['60 Min Thai + 60 Min Deep Tissue Massage'] || testImage },
    { name: '30 Min Thai + 60 Min Swedish Massage', description: 'A quick Thai warm-up followed by a relaxing Swedish massage.', image: imageMap['30 Min Thai + 60 Min Swedish Massage'] || testImage },
    { name: '30 Min Thai + 60 Min Balinese Massage', description: 'A shorter Thai introduction leading into a full Balinese experience.', image: imageMap['30 Min Thai + 60 Min Balinese Massage'] || testImage },
    { name: '30 Min Thai + 60 Min Deep Tissue Massage', description: 'Targeted deep tissue work preceded by a quick Thai session.', image: imageMap['30 Min Thai + 60 Min Deep Tissue Massage'] || testImage },
    { name: '30 Min Foot Reflexology + 60 Min Aroma Therapy', description: 'A brief Thai session followed by a calming aroma therapy massage.', image: imageMap['30 Min Foot Reflexology + 60 Min Aroma Therapy'] || testImage },
    { name: '30 Min Foot Reflexology + 60 Min Swedish Massage', description: 'A quick foot session followed by a relaxing Swedish massage.', image: imageMap['30 Min Foot Reflexology + 60 Min Swedish Massage'] || testImage },
    { name: '30 Min Foot Reflexology + 60 Min Balinese Massage', description: 'A brief foot session leading into a full Balinese experience.', image: imageMap['30 Min Foot Reflexology + 60 Min Balinese Massage'] || testImage },
];

const bodyPampering = [
    { name: 'Hand Massage', description: null, image: imageMap['Hand Massage'] || testImage },
    { name: 'Back Massage', description: null, image: imageMap['Back Massage'] || testImage },
    { name: 'Foot Massage', description: null, image: imageMap['Foot Massage'] || testImage },
    { name: 'Hands Polishing', description: null, image: imageMap['Hands Polishing'] || testImage },
    { name: 'Face Polishing', description: null, image: imageMap['Face Polishing'] || testImage },
    { name: 'Full Body Massage (Aroma)', description: null, image: imageMap['Full Body Massage (Aroma)'] || testImage },
    { name: 'Full Body Massage (Exclusive)', description: null, image: imageMap['Full Body Massage (Exclusive)'] || testImage },
    { name: 'Full Body Polishing', description: null, image: imageMap['Full Body Polishing'] || testImage },
];

const bodyPamperingPackage = [
    { name: 'Full Body Exclusive Anti tan pack + Multi scrub + Cream Massage + Glow Pack + Toning', description: null, image: imageMap['Full Body Exclusive Anti tan pack + Multi scrub + Cream Massage + Glow Pack + Toning'] || testImage },
];

// 7. Specialty Services / Packages
const makeUpServices = [
    { name: 'Light Party Makeup', description: null, image: imageMap['Light Party Makeup'] || testImage },
    { name: 'Night Party Makeup', description: null, image: imageMap['Night Party Makeup'] || testImage },
    { name: 'Engagement Makeup', description: null, image: imageMap['Engagement Makeup'] || testImage },
    { name: 'Sangeeth Makeup', description: null, image: imageMap['Sangeeth Makeup'] || testImage },
    { name: 'Bridal Makeup', description: null, image: imageMap['Bridal Makeup'] || testImage },
    { name: 'Wedding Makeup', description: null, image: imageMap['Wedding Makeup'] || testImage },
    { name: 'Reception Makeup', description: null, image: imageMap['Reception Makeup'] || testImage },
    { name: 'Friends of Bride Makeup', description: null, image: imageMap['Friends of Bride Makeup'] || testImage },
];

const trialMakeup = [
    { name: 'Basic Trial Makeup', description: null, image: imageMap['Basic Trial Makeup'] || testImage },
    { name: 'Kryalon Trial Makeup', description: null, image: imageMap['Kryalon Trial Makeup'] || testImage },
    { name: 'MAC Trial Makeup', description: null, image: imageMap['MAC Trial Makeup'] || testImage },
];

const hairDoDropdown = [
    { name: 'Classic Hair Do', description: null, image: imageMap['Classic Hair Do'] || testImage },
    { name: 'Elite Hair Do', description: null, image: imageMap['Elite Hair Do'] || testImage },
];

const sareeDrape = [
    { name: 'Classic Saree Drape', description: null, image: imageMap['Classic Saree Drape'] || testImage },
    { name: 'Elite Saree Drape', description: null, image: imageMap['Elite Saree Drape'] || testImage },
];

const preBridalPackages = [
    { name: 'Basic Package', description: '1 Sitting. Includes Threading, Haircut, Facial, Hair Spa, Pedicure, Manicure, Waxing (Face, Neck, Back).', image: imageMap['Basic Package'] || testImage },
    { name: 'Standard Package', description: '2 Sittings. Includes Threading, Haircut, Facial Nourishment, Full Bodywax, Hair Spa, Pedicure, Manicure, Bleach (Face, Neck, Back).', image: imageMap['Standard Package'] || testImage },
    { name: 'Premium Package', description: '4 Sittings. Includes Basic Package + Hair Spa (4 Sittings), Nourishment Treatment, Full Body Wax, Full Body De-Tan Bleach, Body Polishing. The ultimate grooming experience.', image: imageMap['Premium Package'] || testImage },
];

const tattoos = [
    { name: 'Black Tattoo', description: 'Per Inch', image: imageMap['Black Tattoo'] || testImage },
    { name: 'Color Tattoo', description: 'Per Inch', image: imageMap['Color Tattoo'] || testImage },
];

const piercing = [
    { name: 'Warts Removal', description: null, image: imageMap['Warts Removal'] || testImage },
    { name: 'Nose Piercing', description: null, image: imageMap['Nose Piercing'] || testImage },
    { name: 'Ear Piercing (2)', description: null, image: imageMap['Ear Piercing (2)'] || testImage },
];

// Categories array remains unchanged
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
const WomensService2 = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const serviceContentRef = useRef(null);

  useEffect(() => {
    if (serviceContentRef.current && window.innerWidth > 992) {
      serviceContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [selectedCategory]);

  const handleDesktopNavClick = (id, event) => {
    event.preventDefault();
    setSelectedCategory(id);
  };

  const activeCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="women_services_wrapper">
      <header className="services-header">
        <h1>Our Services for Women</h1>
        <p>Discover a wide range of beauty and wellness services designed just for you.</p>
      </header>

      <div className="services-layout">
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

        <div className="category-nav-mobile">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
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

        <main className="services-content" ref={serviceContentRef}>
          {activeCategoryData ? (
            <Section
              id={activeCategoryData.id}
              title={activeCategoryData.name}
              services={activeCategoryData.services}
            />
          ) : (
            <p>No services found for this category.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default WomensService2;