import React from 'react';
import salon1 from '../images/salon1.jpg';
import salon2 from '../images/salon2.jpg';
import salon3 from '../images/salon3.jpg';
import salon4 from '../images/salon4.jpg';
import '../Styles/Gallery.css';
const salonImages = [salon1, salon2, salon3, salon4];


const teamMembers = [
  {
    name: 'Riya Kapoor',
    role: 'Senior Stylist',
    image: '/images/team1.jpg',
  },
  {
    name: 'Arjun Verma',
    role: 'Hair Artist',
    image: '/images/team2.jpg',
  },
  {
    name: 'Neha Singh',
    role: 'Makeup Specialist',
    image: '/images/team3.jpg',
  },
  {
    name: 'Dev Das',
    role: 'Massage Therapist',
    image: '/images/team4.jpg',
  },
];

const Gallery = () => {
  return (
    <div className="gallery_wrapper">
      {/* Salon Images Section */}
      <section className="gallery_section">
        <h2 className="gallery_heading">Salon Gallery</h2>
        <div className="image_grid">
          {salonImages.map((src, index) => (
            <img
  key={index}
  src={src}
  alt={`Salon ${index + 1}`}
  className="gallery_image"
  style={{ width: '250px', height: '250px' }}
/>

          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="gallery_section">
        <h2 className="gallery_heading">Meet Our Team</h2>
        <div className="team_grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team_card">
              <img src={member.image} alt={member.name} className="team_image" />
              <h3 className="team_name">{member.name}</h3>
              <p className="team_role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;