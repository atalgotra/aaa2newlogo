import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, TrendingUp, ShieldCheck } from 'lucide-react';
import TiltCard from '../../components/animations/TiltCard';
import PageHero from '../../components/common/PageHero';
import SchemaInjector from '../../components/seo/SchemaInjector';
// import Breadcrumbs from '../../components/seo/Breadcrumbs';
import AccreditationsMarquee from '../../components/common/AccreditationsMarquee';
import { gsap, createGsapScope } from '../../utils/gsapUtils';

const teamMembers = [
  {
    id: 'shashank',
    name: 'Shashank Jain',
    role: 'Director',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/team/shashank_jain.png',
    Icon: TrendingUp,
    bio1: "With a profound background in corporate finance, investment strategy, and global market expansion, Shashank Jain serves as the financial architect of AAA 2 Innovate. His strategic foresight and mastery of complex financial ecosystems have been instrumental in steering the company through rapid, sustainable growth.",
    bio2: "A visionary leader, Shashank ensures that our fiscal operations remain robust, allowing us to deliver unparalleled value and scalability to our clients worldwide.",
    linkedin: 'https://www.linkedin.com/in/shashank-jain-5586b023/',
    email: 'mailto:shashank@aaa2innovate.com'
  },
  {
    id: 'rohit',
    name: 'Rohit Singh',
    role: 'Director',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/team/rohit_singh.png',
    Icon: ShieldCheck,
    bio1: "An industry veteran with a razor-sharp focus on global supply chain mechanics, Rohit Singh drives the operational and commercial success at AAA 2 Innovate. His deep expertise in complex logistics operations and high-stakes international sales allows us to seamlessly bridge markets across continents.",
    bio2: "Rohit's dynamic leadership and relentless pursuit of operational excellence ensure that our clients receive best-in-class service, from the factory floor directly to the consumer's hands.",
    linkedin: 'https://www.linkedin.com/in/rohit-singh-97b60417/',
    email: 'mailto:rohit@aaa2innovate.com',
    objectPosition: 'left center'
  }
];

const Team = () => {
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
              start: 'top 85%',
              once: true
            }
          }
        );
      });
    });
    return () => cleanup();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', backgroundColor: 'var(--bg-main)', paddingTop: '80px', overflowX: 'hidden' }}>
      <Helmet>
        <title>Leadership Team | Global Supply Chain Visionaries | AAA 2 Innovate</title>
        <meta name="description" content="Meet the visionary directors behind AAA 2 Innovate. Discover the experts driving corporate finance, logistics operations, and international market expansion." />
        <link rel="canonical" href="https://www.aaa2innovate.com/team" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leadership Team | Global Supply Chain Visionaries | AAA 2 Innovate" />
        <meta property="og:description" content="Meet the visionary directors behind AAA 2 Innovate. Experts in finance, logistics operations, and international market expansion." />
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
          "sameAs": [member.linkedin],
          "worksFor": {
            "@type": "Organization",
            "name": "AAA 2 Innovate"
          }
        }))
      }} />

      {/* <div style={{ position: 'absolute', top: '80px', left: 0, width: '100%', zIndex: 10 }}>
        <Breadcrumbs />
      </div> */}

      {/* ─── 1. Hero Section ─── */}
      <PageHero
        backgroundImage="images/hero_network_suppliers.png"
        titleLine1="Meet The"
        titleLine2="Visionaries."
        subtitle="A dynamic fusion of seasoned expertise across high-stakes finance, global logistics, and enterprise scale."
        paddingBottom="150px"
      />

      {/* ─── 2. Team Members Section ─── */}
      <section
        className="gsap-section"
        style={{ padding: 'clamp(50px, 6vw, 80px) 0', backgroundColor: 'var(--bg-main)' }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: 'var(--brand-indigo)', marginBottom: '10px', letterSpacing: '-0.01em' }}>
              Driving Global Commerce
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
              Industry leaders who bridge financial mastery with world-class operational expertise.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <TiltCard>
                    <motion.div
                      className="team-member-card"
                      whileHover={{ boxShadow: '0 20px 40px rgba(34, 1, 80, 0.08)', borderColor: 'rgba(34, 1, 80, 0.15)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image Column */}
                      <div className="team-member-image-col" style={{ order: isEven ? 1 : 2 }}>
                        <div
                          style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            aspectRatio: '4/3.35',
                            border: '1px solid var(--border-light)',
                            boxShadow: '0 8px 20px rgba(34, 1, 80, 0.05)',
                            width: '100%',
                            maxWidth: '420px'
                          }}
                        >
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            loading="lazy"
                            src={member.image}
                            alt={`${member.name} - ${member.role}, AAA 2 Innovate`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: member.objectPosition || 'center',
                              display: 'block'
                            }}
                          />
                        </div>
                        </div>

                      {/* Content Column */}
                      <motion.div
                        className="team-member-content-col"
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        style={{ order: isEven ? 2 : 1 }}
                      >

                        {/* Name & Role */}
                        <h2 className="team-member-name">
                          {member.name}
                        </h2>
                        <p className="team-member-role">
                          {member.role}
                        </p>

                        {/* Divider */}
                        <div className="team-member-divider" />

                        {/* Bio */}
                        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px', margin: '0 0 20px 0' }}>
                          {member.bio1}
                        </p>

                        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px', margin: '0 0 20px 0' }}>
                          {member.bio2}
                        </p>

                        {/* Social Links */}
                        <div className="team-member-socials">
                          <motion.a
                            aria-label={`${member.name} LinkedIn`}
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.08, backgroundColor: '#220150', color: '#FFFFFF' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(34, 1, 80, 0.05)',
                              color: 'var(--brand-indigo)',
                              border: '1px solid var(--border-light)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </motion.a>

                          <motion.a
                            aria-label={`Email ${member.name}`}
                            href={member.email}
                            whileHover={{ scale: 1.08, backgroundColor: 'var(--brand-indigo)', borderColor: 'var(--brand-indigo)', color: '#FFFFFF' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(34, 1, 80, 0.06)',
                              color: 'var(--brand-indigo)',
                              border: '1px solid var(--border-light)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <Mail size={16} />
                          </motion.a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. CTA Join Us Section ─── */}
      <section
        className="gsap-section"
        style={{
          padding: 'clamp(50px, 6vw, 70px) 0',
          backgroundColor: '#220150',
          color: '#FFFFFF'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div className="pill-badge pill-badge-dark" style={{ marginBottom: '16px' }}>
              Work With Us
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '14px', lineHeight: 1.2, textAlign: 'center' }}>
              Ready to Collaborate?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '15px', lineHeight: 1.6, marginBottom: '28px', textAlign: 'center', textAlignLast: 'center', textWrap: 'balance' }}>
              Partner with our visionary leadership to scale your physical supply chain and digital infrastructure globally.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary"
              whileHover={{ scale: 1.04, boxShadow: '0 10px 28px rgba(34, 1, 80, 0.5)' }}
              whileTap={{ scale: 0.96 }}
            >
              Contact the Team
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. Accreditations Marquee ─── */}
      <AccreditationsMarquee />

    </div>
  );
};

export default Team;
