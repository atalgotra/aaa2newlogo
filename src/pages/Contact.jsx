import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, Globe, Loader2 } from 'lucide-react';
import CTASection from '../components/CTASection';
import { motion } from 'framer-motion';
import SchemaInjector from '../components/seo/SchemaInjector';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import TextReveal from '../components/animations/TextReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: 'Sourcing',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://finance.devapi.zipaworld.com/api/contactUs/contactMailAaa2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company || ""
        })
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', company: '', email: '', subject: 'Sourcing', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Oops! Something went wrong. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{paddingTop: '90px',  backgroundColor: '#02040A', minHeight: '100vh', paddingBottom: '0' }}>
      <Helmet>
        <title>Contact Us | Start Your Global Sourcing Journey | AAA 2 Innovate</title>
        <meta name="description" content="Get in touch with AAA 2 Innovate. Partner with our elite team for end-to-end global product sourcing, manufacturing, logistics, and custom IT engineering solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Start Your Global Sourcing Journey | AAA 2 Innovate" />
        <meta property="og:description" content="Get in touch with AAA 2 Innovate. Whether you need custom manufacturing, global logistics, or elite IT engineering, our experts are ready to accelerate your business." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.aaa2innovate.com/contact" />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/contact" />
      </Helmet>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact AAA 2 Innovate",
        "description": "Get in touch with AAA 2 Innovate. Partner with our elite team for end-to-end global product sourcing, manufacturing, logistics, and custom IT engineering solutions.",
        "url": "https://www.aaa2innovate.com/contact"
      }} />

      <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section style={{ minHeight: '60vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', paddingBottom: '60px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img loading="lazy" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/contact_hero.png" 
            alt="Contact Us" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #02040A 0%, rgba(2,4,10,0.3) 100%)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextReveal text="Let's Build the Future" elementType="div" style={{ display: 'inline-flex' }} justifyContent="center" />
            </h1>
            <p style={{ color: '#D1D5DB', fontSize: '22px', lineHeight: 1.6, fontWeight: 300 }}>
              Reach out to AAA 2 Innovate. Whether you're looking for high-end sourcing, tech-driven manufacturing, or design excellence, our global team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: '80px 0 120px 0', backgroundColor: '#02040A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '80px' }}>
            
            {/* Contact Information */}
            <div>
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
                  Get in Touch
                </h2>
                <p style={{ color: '#9CA3AF', fontSize: '18px', lineHeight: 1.6 }}>
                  Our team of experts is standing by to answer your questions and help you scale your operations globally.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(255, 87, 34, 0.1)', padding: '16px', borderRadius: '16px', height: 'fit-content' }}>
                    <MapPin color="var(--brand-orange)" size={32} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Global Headquarters</h3>
                    <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                      AAA 2 Innovate Private Limited<br />
                      1 Floor, F-40, F Block, Sector 6,<br />
                      Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(255, 87, 34, 0.1)', padding: '16px', borderRadius: '16px', height: 'fit-content' }}>
                    <Phone color="var(--brand-orange)" size={32} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Direct Line</h3>
                    <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                      <a href="tel:+911206916907" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseOut={(e) => e.target.style.color = '#9CA3AF'}>
                        +91-120-691-6907
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(255, 87, 34, 0.1)', padding: '16px', borderRadius: '16px', height: 'fit-content' }}>
                    <Mail color="var(--brand-orange)" size={32} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Email Us</h3>
                    <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                      <a href="mailto:info@aaa2innovate.com" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseOut={(e) => e.target.style.color = '#9CA3AF'}>
                        info@aaa2innovate.com
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(255, 87, 34, 0.1)', padding: '16px', borderRadius: '16px', height: 'fit-content' }}>
                    <Clock color="var(--brand-orange)" size={32} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Operating Hours</h3>
                    <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ 
              backgroundColor: '#0A0D16', 
              borderRadius: '24px', 
              padding: '48px', 
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', color: '#FFFFFF', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      style={{ width: '100%', backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', padding: '16px', borderRadius: '12px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand-orange)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', color: '#FFFFFF', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Company</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      style={{ width: '100%', backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', padding: '16px', borderRadius: '12px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand-orange)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#FFFFFF', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    style={{ width: '100%', backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', padding: '16px', borderRadius: '12px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', color: '#FFFFFF', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Inquiry Type *</label>
                  <select 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{ width: '100%', backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', padding: '16px', borderRadius: '12px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s', cursor: 'pointer', appearance: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <option value="Sourcing">Apparel & Bag Sourcing</option>
                    <option value="Design">Design & Product Development</option>
                    <option value="Manufacturing">Manufacturing Setup</option>
                    <option value="Tech">Tech Solutions</option>
                    <option value="Other">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#FFFFFF', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you scale your business?"
                    rows={5}
                    style={{ width: '100%', backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', padding: '16px', borderRadius: '12px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-orange)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  ></textarea>
                </div>

                {submitStatus && (
                  <div style={{
                    marginTop: '16px',
                    padding: '16px',
                    borderRadius: '8px',
                    backgroundColor: submitStatus.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${submitStatus.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                    color: submitStatus.type === 'success' ? '#34D399' : '#F87171',
                    fontSize: '15px'
                  }}>
                    {submitStatus.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%' }}
                >
                  {loading ? (
                    <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
                  ) : (
                    <Send size={20} />
                  )}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map or Global Presence Section */}
      <section style={{ position: 'relative', padding: '100px 0', backgroundColor: '#02040A', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        {/* Animated Map Background */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/world_map_nodes.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #02040A 80%)', zIndex: 1 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '8px 24px', borderRadius: '50px', backgroundColor: 'rgba(255, 87, 34, 0.1)', border: '1px solid rgba(255,87,34,0.3)', marginBottom: '24px' }}>
              <Globe size={20} color="var(--brand-orange)" />
              <span style={{ color: 'var(--brand-orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>Global Reach</span>
            </div>
            
            <h3 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px' }}>
              Global Operations,{' '}<span style={{ 
                background: 'linear-gradient(135deg, #FFF 0%, var(--brand-orange) 100%)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>Local Expertise</span>
            </h3>
            
            <p style={{ color: '#9CA3AF', fontSize: '18px', maxWidth: '600px', margin: '0 auto 48px auto', lineHeight: 1.6 }}>
              Our operations span the globe, allowing us to source and manufacture in India and deliver seamlessly to our clients worldwide.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              {['North America', 'Europe', 'Asia', 'UAE'].map((region, idx) => (
                <motion.div 
                  key={region}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5, type: 'spring' }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,87,34,0.15)', borderColor: 'var(--brand-orange)' }}
                  style={{ 
                    padding: '16px 32px', 
                    backgroundColor: 'rgba(255,255,255,0.03)', 
                    borderRadius: '16px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '16px',
                    cursor: 'default',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-orange)', boxShadow: '0 0 10px var(--brand-orange)' }}></div>
                    {region}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

