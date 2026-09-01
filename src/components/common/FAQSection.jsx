import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import SchemaInjector from '../seo/SchemaInjector';

const FAQSection = ({ faqs, title = "Frequently Asked Questions", onContactClick, contactButtonText = "Contact Sourcing Team" }) => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      navigate('/contact');
    }
  };

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Generate JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section style={{ padding: 'clamp(32px, 5vw, 48px) 0', backgroundColor: 'var(--bg-secondary, #F8FAFC)', position: 'relative', overflow: 'hidden' }}>
      <SchemaInjector schema={faqSchema} />

      {/* Decorative subtle background accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(34, 1, 80, 0.15), transparent)' }} />
      <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '260px', height: '260px', background: 'radial-gradient(circle, rgba(34, 1, 80, 0.04) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '36px', alignItems: 'start' }}>

          {/* Left Column: Title & Compact CTA (Completely Static & Fixed to Top) */}
          <div
            style={{
              alignSelf: 'start',
              height: 'fit-content'
            }}
          >
            <div>
              <h2 style={{ fontSize: 'clamp(24px, 4.5vw, 36px)', fontWeight: 800, color: 'var(--text-primary, #0F172A)', marginBottom: '10px', lineHeight: 1.25 }}>
                Got Questions?<br />
                <span style={{ color: '#220150' }}>We've Got Answers.</span>
              </h2>
              <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.5, marginBottom: '30px', marginTop: '25px', maxWidth: '380px' }}>
                Everything you need to know about our global sourcing, custom manufacturing, and engineering processes.
              </p>

              <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid rgba(34, 1, 80, 0.08)', boxShadow: '0 6px 20px -6px rgba(34, 1, 80, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div style={{ width: '36px', height: '36px', backgroundColor: 'rgba(34, 1, 80, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle color="#220150" size={16} />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary, #0F172A)', margin: 0 }}>
                    Still have questions?
                  </h3>
                </div>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: 1.4, margin: '0 0 16px 0' }}>
                  Can't find what you're looking for? Reach out directly to our advisory team.
                </p>
                <button
                  onClick={handleContact}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px 20px',
                    backgroundColor: '#220150',
                    color: '#FFF',
                    borderRadius: '10px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.scale = '1.05'}
                  onMouseOut={(e) => e.currentTarget.style.scale = '1'}
                >
                  {contactButtonText}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Compact FAQs Accordion */}
          <div style={{ alignSelf: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: isOpen ? '1px solid rgba(79, 70, 229, 0.4)' : '1px solid rgba(0, 0, 0, 0.06)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: isOpen ? '0 8px 24px -4px rgba(34, 1, 80, 0.08)' : '0 2px 6px rgba(0, 0, 0, 0.02)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        color: isOpen ? '#220150' : '#0F172A',
                        fontSize: '15px',
                        fontWeight: 700,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'color 0.25s ease'
                      }}
                      aria-expanded={isOpen}
                    >
                      <span style={{ paddingRight: '16px', lineHeight: 1.4 }}>{faq.question}</span>
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? '#220150' : 'rgba(0, 0, 0, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.25s ease'
                        }}
                      >
                        {isOpen ?
                          <Minus size={13} color="#FFF" /> :
                          <Plus size={13} color="#475569" />
                        }
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div style={{ padding: '0 20px 16px 20px' }}>
                            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0, fontSize: '13.5px' }}>
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
