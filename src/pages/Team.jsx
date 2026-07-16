import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import CTASection from '../components/CTASection';
import TiltCard from '../components/animations/TiltCard';
import SchemaInjector from '../components/seo/SchemaInjector';

const teamMembers = [
  {
    id: 'shashank',
    name: 'Shashank Jain',
    role: 'Director',
    expertise: 'Finance & Strategy',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/team/shashank_jain.png',
    icon: <TrendingUp size={24} color="var(--brand-orange)" />,
    bio: "With a profound background in corporate finance, investment strategy, and global market expansion, Shashank Jain serves as the financial architect of AAA 2 Innovate. His strategic foresight and mastery of complex financial ecosystems have been instrumental in steering the company through rapid, sustainable growth. A visionary leader, Shashank ensures that our fiscal operations remain robust, allowing us to deliver unparalleled value and scalability to our clients worldwide.",
    linkedin: 'https://www.linkedin.com/in/shashank-jain-5586b023/',
    email: 'mailto:shashank@aaa2innovate.com'
  },
  {
    id: 'rohit',
    name: 'Rohit Singh',
    role: 'Director',
    expertise: 'Logistics Operations & Sales',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/team/rohit_singh.png',
    icon: <ShieldCheck size={24} color="var(--brand-orange)" />,
    bio: "An industry veteran with a razor-sharp focus on global supply chain mechanics, Rohit Singh drives the operational and commercial success at AAA 2 Innovate. His deep expertise in complex logistics operations and high-stakes international sales allows us to seamlessly bridge markets across continents. Rohit's dynamic leadership and relentless pursuit of operational excellence ensure that our clients receive best-in-class service, from the factory floor directly to the consumer's hands.",
    linkedin: 'https://www.linkedin.com/in/rohit-singh-97b60417/',
    email: 'mailto:rohit@aaa2innovate.com',
    objectPosition: 'left center'
  }
];

const Team = () => {
return (
    <div style={{paddingTop: '90px',  backgroundColor: '#02040A', minHeight: '100vh', fontFamily: 'Outfit, sans-serif' }}>
      <Helmet>
        <title>Leadership Team | Global Supply Chain Visionaries | AAA 2 Innovate</title>
        <meta name="description" content="Meet the visionary directors behind AAA 2 Innovate. Discover the experts driving our corporate finance, logistics operations, and international market expansion." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leadership Team | Global Supply Chain Visionaries | AAA 2 Innovate" />
        <meta property="og:description" content="Meet the visionary directors behind AAA 2 Innovate. Discover the experts driving our corporate finance, logistics operations, and international market expansion." />
        <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/team" />
      </Helmet>
      
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@graph": teamMembers.map(member => ({
          "@type": "Person",
          "name": member.name,
          "jobTitle": member.role,
          "description": member.bio,
          "image": member.image,
          "sameAs": [ member.linkedin ],
          "worksFor": {
            "@type": "Organization",
            "name": "AAA 2 Innovate"
          }
        }))
      }} />

      {/* Hero Section */}
      <section style={{height: '60vh', minHeight: '500px',  
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        }}>
        {/* Background Image & Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url(https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/about/about_hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(11, 15, 25, 0.8) 0%, rgba(11, 15, 25, 0.95) 100%)',
          zIndex: 2
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 24px', borderRadius: '50px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#9CA3AF', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}
          >
            Leadership
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-2px', marginBottom: '24px', lineHeight: 1.1 }}
          >
            Meet The <span style={{ color: 'var(--brand-orange)' }}>Visionaries</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: '20px', color: '#9CA3AF', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, textAlign: 'center' }}
          >
            A dynamic fusion of seasoned expertise across high-stakes finance, global logistics, and enterprise scale.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section style={{ padding: '60px 0 100px 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <TiltCard 
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
                    gap: '40px', 
                    alignItems: 'center',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    borderRadius: '32px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    padding: '40px',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Image Column */}
                  <div style={{ order: isEven ? 1 : 2, position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(45deg, var(--brand-orange), transparent)', filter: 'blur(20px)', opacity: 0.2, borderRadius: '50%' }}></div>
                    <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '3/4', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <img loading="lazy" src={member.image} 
                        alt={member.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.objectPosition || 'center', display: 'block' }} 
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }}></div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div style={{ order: isEven ? 2 : 1, padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                      <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(255,87,34,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,87,34,0.2)' }}>
                        {member.icon}
                      </div>
                      <div>
                        <h4 style={{ color: 'var(--brand-orange)', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>{member.expertise}</h4>
                      </div>
                    </div>
                    
                    <h2 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.1 }}>{member.name}</h2>
                    <h3 style={{ fontSize: '24px', fontWeight: 300, color: '#9CA3AF', marginBottom: '32px' }}>{member.role}</h3>
                    
                    <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.8, marginBottom: '40px', textAlign: 'justify' }}>
                      {member.bio}
                    </p>

                    <div style={{ display: 'flex', gap: '16px' }}>
                      <a aria-label="LinkedIn" href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', color: '#FFFFFF', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.borderColor = '#0A66C2'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a aria-label="Email" href={member.email} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', color: '#FFFFFF', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--brand-orange)'; e.currentTarget.style.borderColor = 'var(--brand-orange)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>

                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        titlePrefix="Ready to"
        highlightText="Collaborate?"
        description="Partner with our visionary leadership to scale your physical supply chain and digital infrastructure globally."
        buttonText="Contact the Team"
      />
    </div>
  );
};

export default Team;

