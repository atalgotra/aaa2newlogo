import React from 'react';
import { Quote } from 'lucide-react';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    company: "TII India Pvt LTD",
    text: "I recently had the pleasure of working with AAA 2 INNOVATE, and I must say, their services are nothing short of exceptional. From the very beginning, their team demonstrated professionalism, technical expertise, and a deep understanding of our needs. Their cutting-edge solutions in AI/ML have significantly improved our business operations."
  },
  {
    id: 2,
    company: "Jaquar & Company PVT LTD",
    text: "I highly recommend AAA 2 INNOVATE to anyone looking for reliable, efficient, and forward-thinking tech solutions. One of the standout aspects of AAA 2 INNOVATE is their futuristic approach. They are always available to provide solutions. Their commitment to quality and innovation is truly commendable."
  },
  {
    id: 3,
    company: "Landmark Group",
    text: "We had the pleasure of working with AAA 2 INNOVATE, and can confidently say they are one of the best in the industry. What really stood out was their top-notch solutions. Their technology is not just efficient but also easy to integrate and scale, making a real difference in how we operate."
  },
  {
    id: 4,
    company: "BDP UGL Global Logistics",
    text: "We highly recommend AAA 2 INNOVATE to anyone looking for reliable, efficient, and forward-thinking tech solutions. Their AI/ML-based solution has been a game-changer for us, offering seamless integration that made adoption effortless."
  },
  {
    id: 5,
    company: "Integrate Consulting",
    person: "Sanjay Kumar",
    text: "Logistics services of AAA 2 Innovate Pvt Ltd. is the most reliable as their experts have a great knowledge and experience of the products and processes. Also using their website development services."
  },
  {
    id: 6,
    company: "Swati Enterprises",
    person: "Prakash Bhide",
    text: "Must say that AAA 2 Innovate Pvt Ltd. has a team of expert logistics consultants. Working with them is a peace of mind. Used their logistics consultancy, now getting the most cost effective and reliable logistics services."
  },
  {
    id: 7,
    company: "Chintamani Cargo Logistics",
    person: "Nandu Raul",
    text: "We have used the Financial Processes Outsourcing services of AAA 2 Innovate Pvt Ltd.. Their wide range of services and expertise in the most required sectors is admirable."
  },
  {
    id: 8,
    company: "Chanda Marbles",
    person: "Deepak Jain",
    text: "We deal with very fragile and valuable marble items, the transportation of which requires precise handling. AAA 2 Innovate's expert know-how on the the domestic road transportation has helped me achieve turnaround time and avoid damages."
  }
];

// Generates a beautiful gradient avatar based on the first letter of the name or company
const Avatar = ({ person, company }) => {
  const initial = person ? person.charAt(0) : company.charAt(0);
  return (
    <div className="avatar-circle">
      {initial.toUpperCase()}
    </div>
  );
};

const TestimonialSlider = () => {
  // We duplicate the array to create a seamless infinite marquee effect
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <div className="testimonial-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(56,189,248,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '24px', border: '1px solid rgba(56,189,248,0.2)' }}>
            <span style={{ color: '#38BDF8', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Client Success</span>
          </div>
          <h2 className="text-h1" style={{ fontWeight: 300, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Trusted by <strong style={{ color: 'var(--brand-orange)', fontWeight: 800 }}>Industry Leaders</strong>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
            Don't just take our word for it. Here is what our global partners have to say about our world-class services.
          </p>
        </div>
      </div>

      <div className="testimonial-slider-container">
        <div className="testimonial-track">
          {marqueeItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="testimonial-card">
              {/* Giant watermark quote in the background */}
              <Quote className="quote-watermark" size={100} color="var(--brand-orange)" fill="var(--brand-orange)" />
              
              <div className="quote-icon-wrapper">
                <Quote size={20} strokeWidth={3} />
              </div>
              
              <p className="testimonial-text">{item.text}</p>
              
              <div className="testimonial-footer">
                <Avatar person={item.person} company={item.company} />
                <div className="author-info">
                  <span className="author-name">{item.person || item.company}</span>
                  {item.person && (
                    <span className="author-company">{item.company}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
