import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    company: "TII India Pvt LTD",
    text: "Working with AAA 2 INNOVATE has been exceptional. From day one, their team demonstrated deep technical expertise, precision sourcing, and delivered cutting-edge operations."
  },
  {
    id: 2,
    company: "Jaquar & Company PVT LTD",
    text: "One of the standout aspects of AAA 2 INNOVATE is their forward-thinking approach. Their commitment to quality, rapid turnaround, and transparency is truly commendable."
  },
  {
    id: 3,
    company: "Landmark Group",
    text: "What really stood out was their top-notch supply chain execution. Their solutions are efficient, highly reliable, and easy to scale across multiple product categories."
  },
  {
    id: 4,
    company: "BDP UGL Global Logistics",
    text: "Reliable, efficient, and forward-thinking. Their seamless operations and proactive communication made international distribution effortless for our team."
  },
  {
    id: 5,
    company: "Integrate Consulting",
    person: "Sanjay Kumar",
    text: "Logistics and sourcing services of AAA 2 Innovate are the most reliable. Their team brings vast domain knowledge across manufacturing and digital operations."
  },
  {
    id: 6,
    company: "Swati Enterprises",
    person: "Prakash Bhide",
    text: "Working with AAA 2 Innovate gives total peace of mind. Transparent tracking, cost-effective routing, and zero defect delivery every time."
  },
  {
    id: 7,
    company: "Chintamani Cargo Logistics",
    person: "Nandu Raul",
    text: "Their wide range of supply chain and business process outsourcing solutions across critical sectors is truly admirable and dependable."
  },
  {
    id: 8,
    company: "Chanda Marbles",
    person: "Deepak Jain",
    text: "Precise handling, quick turnaround, and impeccable compliance on fragile and high-value cargo. Highly recommended partner."
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
  // Duplicate the array to create a seamless infinite marquee effect
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="testimonial-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>

          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'var(--text-primary, #0F172A)', margin: '0 0 6px 0' }}>
            Trusted by <strong style={{ color: '#220150', fontWeight: 800 }}>Industry Leaders</strong>
          </h2>
          <p style={{ color: '#64748B', fontSize: '14px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
            See what global brands and enterprise partners say about our supply chain and engineering services.
          </p>
        </div>

        {/* Testimonial Slider Container inheriting Container margins */}
        <div className="testimonial-slider-container">
          <div className="testimonial-track">
            {marqueeItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="testimonial-card">
                {/* Background Watermark Quote in brand indigo */}
                <Quote className="quote-watermark" size={60} color="#220150" fill="#220150" />

                <div className="quote-icon-wrapper">
                  <Quote size={14} strokeWidth={2.5} />
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
    </section>
  );
};

export default TestimonialSlider;
