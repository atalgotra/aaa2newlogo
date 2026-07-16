import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SchemaInjector from './SchemaInjector';

const FAQSection = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState(0);

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
    <section style={{ padding: 'clamp(40px, 8vw, 60px) 0', backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <SchemaInjector schema={faqSchema} />
      
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255, 90, 0, 0.2), transparent)' }}></div>
      <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 90, 0, 0.03) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '60px', alignItems: 'flex-start' }}>
          
          {/* Left Column: Title & CTA */}
          <div className="faq-sticky-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px', lineHeight: 1.2, fontFamily: 'Outfit, sans-serif' }}>
                Got Questions?<br />
                <span style={{ color: 'var(--brand-orange)' }}>We've Got Answers.</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px', maxWidth: '400px' }}>
                Everything you need to know about our processes, quality standards, and how we scale your business globally.
              </p>
              
              <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255, 90, 0, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <MessageCircle color="var(--brand-orange)" size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>Still have questions?</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '24px' }}>
                  Can't find the answer you're looking for? Please chat to our friendly team.
                </p>
                <Link 
                  to="/contact"
                  style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'var(--text-primary)', color: '#FFF', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', transition: 'all 0.3s' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'var(--brand-orange)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'var(--text-primary)'}
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: FAQs Accordion */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ 
                      backgroundColor: '#FFFFFF', 
                      border: isOpen ? '1px solid rgba(255, 90, 0, 0.3)' : '1px solid var(--border-light)', 
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: isOpen ? '0 20px 40px rgba(255, 90, 0, 0.05)' : '0 4px 10px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button 
                      onClick={() => toggleFaq(index)}
                      style={{ 
                        width: '100%', 
                        padding: '24px 32px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        color: isOpen ? 'var(--brand-orange)' : 'var(--text-primary)',
                        fontSize: '18px',
                        fontWeight: 600,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease'
                      }}
                      aria-expanded={isOpen}
                    >
                      <span style={{ paddingRight: '20px', lineHeight: 1.4 }}>{faq.question}</span>
                      <div 
                        style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '50%', 
                          backgroundColor: isOpen ? 'var(--brand-orange)' : 'rgba(0,0,0,0.04)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isOpen ? 
                          <Minus size={16} color="#FFF" /> : 
                          <Plus size={16} color="var(--text-primary)" />
                        }
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div style={{ padding: '0 32px 32px 32px' }}>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: '16px' }}>
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
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


