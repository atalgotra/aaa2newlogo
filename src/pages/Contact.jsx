import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, Send, Globe, Loader2, ArrowRight } from 'lucide-react';
import CTASection from '../components/common/CTASection';
import { motion } from 'framer-motion';
import SchemaInjector from '../components/seo/SchemaInjector';
import TextReveal from '../components/animations/TextReveal';
import PageHero from '../components/common/PageHero';
import AccreditationsMarquee from '../components/common/AccreditationsMarquee';
import { gsap, createGsapScope } from '../utils/gsapUtils';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = createGsapScope(containerRef, () => {
      const sections = gsap.utils.toArray('.gsap-section');
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });
    return cleanup;
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: 'Sourcing',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      toast.success('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', company: '', email: '', subject: 'Sourcing', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Oops! Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Helmet>
        <title>Contact Us | AAA 2 Innovate</title>
        <meta name="description" content="Have a question or want to work with us? Contact AAA 2 Innovate's team to discuss your sourcing and manufacturing needs." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | AAA 2 Innovate" />
        <meta property="og:description" content="Have a question or want to work with us? Contact AAA 2 Innovate's team to discuss your sourcing and manufacturing needs." />
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

      {/* Hero Section */}
      <PageHero
        backgroundImage="https://aaa-website-images.s3.ap-south-1.amazonaws.com/assets/contact_hero.png"
        titleLine1="Let's Build the Future"
        subtitle="Reach out to AAA 2 Innovate. Whether you're looking for high-end sourcing, tech-driven manufacturing, or design excellence, our global team is ready to assist."
        minHeight="100vh"
        paddingTop="175px"
        paddingBottom="80px"
        centered={true}
      />

      {/* Main Contact Section */}
      <section className="gsap-section" style={{ padding: 'clamp(40px, 6vw, 70px) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '48px' }}>

            {/* Contact Information */}
            <div>
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: 'var(--brand-indigo)', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                  Get in Touch
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                  Our team of experts is standing by to answer your questions and help you scale your operations globally.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--selector-item-active-bg, rgba(34, 1, 80, 0.05))', padding: '10px', borderRadius: '12px', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin color="var(--brand-indigo)" size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--brand-indigo)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Global Headquarters</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                      AAA 2 Innovate Private Limited<br />
                      1 Floor, F-40, F Block, Sector 6,<br />
                      Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--selector-item-active-bg, rgba(34, 1, 80, 0.05))', padding: '10px', borderRadius: '12px', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone color="var(--brand-indigo)" size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--brand-indigo)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Direct Line</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                      <a href="tel:+911206916907" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--brand-indigo)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        +91-120-691-6907
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--selector-item-active-bg, rgba(34, 1, 80, 0.05))', padding: '10px', borderRadius: '12px', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail color="var(--brand-indigo)" size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--brand-indigo)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Email Us</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                      <a href="mailto:info@aaa2innovate.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--brand-indigo)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        info@aaa2innovate.com
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--selector-item-active-bg, rgba(34, 1, 80, 0.05))', padding: '10px', borderRadius: '12px', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock color="var(--brand-indigo)" size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--brand-indigo)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Operating Hours</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                      Monday – Saturday<br />
                      10:00 AM – 6:30 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: 'var(--bg-main)',
              borderRadius: '20px',
              padding: 'clamp(20px, 2.5vw, 28px)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 10px 30px rgba(34, 1, 80, 0.06)'
            }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-primary)', fontSize: '12.5px', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      style={{ width: '100%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', padding: '10px 12px', borderRadius: '10px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-primary)', fontSize: '12.5px', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      style={{ width: '100%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', padding: '10px 12px', borderRadius: '10px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-primary)', fontSize: '12.5px', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    style={{ width: '100%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', padding: '10px 12px', borderRadius: '10px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', color: 'var(--text-primary)', fontSize: '12.5px', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Inquiry Type *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                      padding: '10px 38px 10px 12px',
                      borderRadius: '10px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      cursor: 'pointer',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      backgroundSize: '14px'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  >
                    <option value="Sourcing">Apparel & Bag Sourcing</option>
                    <option value="Design">Design & Product Development</option>
                    <option value="Manufacturing">Manufacturing Setup</option>
                    <option value="Tech">Tech Solutions</option>
                    <option value="Other">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-primary)', fontSize: '12.5px', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you scale your business?"
                    rows={3}
                    style={{ width: '100%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', padding: '10px 12px', borderRadius: '10px', fontSize: '16px', outline: 'none', resize: 'none', transition: 'border-color 0.3s ease' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', border: 'none', cursor: 'pointer', padding: '12px 20px', fontSize: '14px', borderRadius: '10px', marginTop: '2px' }}
                >
                  {loading ? (
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                  ) : (
                    <Send size={18} />
                  )}
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map or Global Presence Section */}
      <section className="gsap-section" style={{ position: 'relative', padding: '100px 0', backgroundColor: 'var(--section-darker-bg, #140038)', transition: 'background-color 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        {/* Animated Map Background */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://aaa-website-images.s3.ap-south-1.amazonaws.com/assets/world_map_nodes.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, var(--section-darker-bg, #140038) 80%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >


            <h3 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px', fontFamily: 'var(--font-display)' }}>
              <TextReveal text="Global Operations, Local Expertise" elementType="span" justifyContent="center" />
            </h3>

            <p style={{ color: '#CBD5E1', fontSize: '15px', maxWidth: '600px', margin: '0 auto 48px auto', lineHeight: 1.6 }}>
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
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)' }}
                  style={{
                    padding: '12px 28px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '14.5px',
                    cursor: 'default',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--bg-main)', boxShadow: '0 0 10px var(--brand-orange)' }}></div>
                    {region}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accreditations Marquee */}
      <AccreditationsMarquee />
    </div>
  );
};

export default Contact;


