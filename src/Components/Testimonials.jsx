// src/components/Testimonials.jsx

import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Testimonials.css'; // Import the CSS file

const testimonialsData = [
    {
        quote: "Went Blink beauty salon for waxing, Threading, hair spa, facial done by Sridevi and Mahesh. They gave me wonderful service and made me feel so comfortable. Sridevi garu adviced everything which type of service suitable for my body and face. She is very good at her work. Thankyou so much people..",
        author: "PRADEEPTHI SAISRI"
    },
    {
        quote: "When it comes to salon for hairdressing, this is a gem in this area of Aparna Hill Park. Chandu gave me a perfect haircut as desires by me and also gave many inputs regarding the hair care which makes him a perfect salon professional as it is not just about the services they provide but the attention and they care they show towards customers so that they keep coming back. Highly recommended hair salon for women.",
        author: "LAKSH G"
    },
    {
        quote: "Had an excellent experience with Sreedevi for facial and hair services! She did a fantastic job, and I highly recommend Blink Salon for their professional yet budget-friendly beauty services.",
        author: "VALLI CH"
    },
    {
        quote: "Waxing and treading done by deepika.very much satisfied by the work done by her. Good job deepika",
        author: "ASHWITHA WH"
    },
    {
        quote: "I liked the service here, all are very friendly. And I  appreciate they advice best thing for our beauty.",
        author: "SEJAL SRIVASTAV"
    },
    {
        quote: "I and my friend had a great hair spa experience! The prices were fair, and the service was excellent. Saya and Saritha were very professional and took great care of us. Our hair felt smooth and refreshed after the process. I always prefer to go back for any salon services and recommend it to others!",
        author: "MUVVA LIKHITHA"
    },
     {
        quote: "I had an hair cut today .mr.chandu did an excellent job .I recommend blink for their professional and also budget friendly.",
        author: "KARTHIKEYA ADVAITH"
    },
     {
        quote: "I had hairwash, blow dry and hair cut services at blink. Chandu was very patient and handled my hair with care as it is very long. Too good, i will recommend it for my friends as well.",
        author: "VAISHNAVI VERAGANTI"
    },
     {
        quote: "Had a wonderful experience at the salon. Mr. Mahesh did an excellent job with my haircut, and Ms. Sridevi provided great facial threading. Both services were delivered with professionalism. I truly appreciated their friendly and courteous behavior, making the visit pleasant and satisfying.Highly satisfied and happy to give a 5-star rating.",
        author: "ARCHNA SINGH"
    },
     {
        quote: "Got my hair spa and threading done by Saya and Sarika. They have done a great job. Staff is very friendly and skilled. Been visiting for about 3 years now and have had a good experience every time.",
        author: "NAGARGINI SANGALA"
    }
];

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Index of the first visible testimonial
    const [slidesToShow, setSlidesToShow] = useState(3); // Default for desktop
    const carouselRef = useRef(null);

    // --- 1. Responsive Slides to Show ---
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) { // Mobile/Tablet
                setSlidesToShow(1);
            } else { // Desktop
                setSlidesToShow(3);
            }
        };

        handleResize(); // Set initially
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- 2. Automatic Scrolling ---
    useEffect(() => {
        let intervalId;
        if (carouselRef.current) {
            const scrollContainer = carouselRef.current;
            
            // Function to get the actual width of one card based on current slidesToShow
            const getCardWidth = () => {
                // Ensure there's at least one child and get its offsetWidth
                const firstCard = scrollContainer.querySelector('.testimonial_card');
                if (firstCard) {
                    // This calculates the width of one card including its right margin/gap
                    // It divides the total visible width by the number of cards shown
                    return scrollContainer.offsetWidth / slidesToShow;
                }
                return 0;
            };

            intervalId = setInterval(() => {
                setCurrentSlide(prevSlide => {
                    const nextSlide = (prevSlide + 1) % testimonialsData.length; // Loop through all testimonials indices

                    // Calculate scroll position based on nextSlide and actual card width
                    const cardWidth = getCardWidth();
                    if (cardWidth) {
                        scrollContainer.scrollTo({
                            left: nextSlide * cardWidth,
                            behavior: 'smooth'
                        });
                    }
                    
                    // If we're at the end and about to loop, jump back without animation
                    if (nextSlide === 0 && prevSlide === testimonialsData.length - 1) {
                         // Reset scroll position instantly to beginning for seamless loop start
                         setTimeout(() => {
                            scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
                         }, 800); // Give enough time for the smooth scroll to finish before resetting
                    }

                    return nextSlide;
                });
            }, 3000); // Scroll every 3 seconds

        }

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [testimonialsData.length, slidesToShow]); // Re-run if data length or slidesToShow changes

    // --- 3. Manual Dot Click Scrolling ---
    const handleDotClick = (index) => {
        setCurrentSlide(index);
        if (carouselRef.current) {
            const scrollContainer = carouselRef.current;
            const firstCard = scrollContainer.querySelector('.testimonial_card');
            const cardWidth = firstCard ? scrollContainer.offsetWidth / slidesToShow : 0; // Recalculate card width
            
            if (cardWidth) {
                scrollContainer.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Calculate total dots: one dot per individual testimonial
    const totalDots = testimonialsData.length;

    return (
        <section className="testimonials_section">
            <p className="testimonials_subheading">Testimonials</p>
            <h2 className="testimonials_main_heading">What are People Saying</h2>

            <div className="testimonials_carousel_container">
                <div 
                    className="testimonials_carousel_track" 
                    ref={carouselRef}
                    style={{ '--slides-to-show': slidesToShow }} // Pass slidesToShow as a CSS variable
                >
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="testimonial_card">
                            <span className="quote_icon">“</span>
                            <p className="testimonial_quote">{testimonial.quote}</p>
                            <p className="testimonial_author">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="carousel_pagination_dots">
                {Array.from({ length: totalDots }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;