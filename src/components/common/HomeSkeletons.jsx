import React from 'react';

/* ── 0. Navbar & Logo Skeleton ── */
export const LogoSkeleton = ({ size = 50 }) => (
  <div
    className="skeleton-dark"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '8px',
      flexShrink: 0
    }}
  />
);

/* ── 1. Hero Skeleton ── */
export const HeroSkeleton = () => (
  <section
    style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#0a0015',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '0 24px'
    }}
  >
    <div style={{ width: '100%', maxWidth: '860px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Title lines */}
      <div className="skeleton-dark" style={{ width: '80%', height: '44px', marginBottom: '12px', borderRadius: '12px' }} />
      <div className="skeleton-dark" style={{ width: '60%', height: '44px', marginBottom: '24px', borderRadius: '12px' }} />

      {/* Subtitle */}
      <div className="skeleton-dark" style={{ width: '70%', height: '28px', marginBottom: '32px', borderRadius: '8px' }} />

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="skeleton-dark" style={{ width: '220px', height: '50px', borderRadius: '50px' }} />
        <div className="skeleton-dark" style={{ width: '220px', height: '50px', borderRadius: '50px' }} />
      </div>
    </div>
  </section>
);

/* ── 2. About Us Skeleton ── */
export const AboutSkeleton = () => (
  <section style={{ padding: 'clamp(50px, 7vw, 80px) 0', backgroundColor: 'var(--bg-main, #FFFFFF)' }}>
    <div className="container">
      <div className="about-grid" style={{ alignItems: 'center', gap: 'clamp(32px, 4vw, 56px)' }}>
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="skeleton-light" style={{ width: '120px', height: '18px', borderRadius: '6px' }} />
          <div className="skeleton-light" style={{ width: '90%', height: '36px', borderRadius: '10px' }} />
          <div className="skeleton-light" style={{ width: '75%', height: '36px', borderRadius: '10px' }} />
          <div className="skeleton-light" style={{ width: '100%', height: '16px', marginTop: '10px', borderRadius: '6px' }} />
          <div className="skeleton-light" style={{ width: '85%', height: '16px', borderRadius: '6px' }} />
          <div className="skeleton-light" style={{ width: '160px', height: '44px', marginTop: '16px', borderRadius: '50px' }} />
        </div>

        {/* Right card */}
        <div className="skeleton-card-light" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="skeleton-light" style={{ width: '160px', height: '20px', borderRadius: '6px' }} />
            <div className="skeleton-light" style={{ width: '100px', height: '14px', borderRadius: '6px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <div>
              <div className="skeleton-light" style={{ width: '70px', height: '32px', marginBottom: '6px', borderRadius: '8px' }} />
              <div className="skeleton-light" style={{ width: '110px', height: '12px', borderRadius: '4px' }} />
            </div>
            <div>
              <div className="skeleton-light" style={{ width: '70px', height: '32px', marginBottom: '6px', borderRadius: '8px' }} />
              <div className="skeleton-light" style={{ width: '110px', height: '12px', borderRadius: '4px' }} />
            </div>
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className="skeleton-light" style={{ width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0 }} />
              <div style={{ width: '100%' }}>
                <div className="skeleton-light" style={{ width: '140px', height: '14px', marginBottom: '4px', borderRadius: '4px' }} />
                <div className="skeleton-light" style={{ width: '90%', height: '12px', borderRadius: '4px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── 3. Capabilities Bento Grid Skeleton ── */
export const CapabilitiesSkeleton = () => (
  <section style={{ padding: 'clamp(50px, 7vw, 80px) 0', backgroundColor: 'var(--bg-secondary, #F8FAFC)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '44px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div className="skeleton-light" style={{ width: '240px', height: '34px', borderRadius: '10px' }} />
        <div className="skeleton-light" style={{ width: '480px', maxWidth: '90%', height: '16px', borderRadius: '6px' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="skeleton-card-light" style={{ padding: '24px', height: '210px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="skeleton-light" style={{ width: '42px', height: '42px', borderRadius: '12px' }} />
            <div>
              <div className="skeleton-light" style={{ width: '120px', height: '18px', marginBottom: '8px', borderRadius: '6px' }} />
              <div className="skeleton-light" style={{ width: '100%', height: '13px', marginBottom: '4px', borderRadius: '4px' }} />
              <div className="skeleton-light" style={{ width: '80%', height: '13px', borderRadius: '4px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── 4. Product Showcase Skeleton ── */
export const ProductShowcaseSkeleton = () => (
  <section style={{ padding: 'clamp(50px, 7vw, 80px) 0', backgroundColor: '#220150' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '44px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div className="skeleton-dark" style={{ width: '280px', height: '36px', borderRadius: '10px' }} />
        <div className="skeleton-dark" style={{ width: '520px', maxWidth: '90%', height: '16px', borderRadius: '6px' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton-card-dark" style={{ overflow: 'hidden', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="skeleton-dark" style={{ width: '100%', height: '240px', borderRadius: '14px' }} />
            <div className="skeleton-dark" style={{ width: '60%', height: '20px', borderRadius: '6px' }} />
            <div className="skeleton-dark" style={{ width: '90%', height: '14px', borderRadius: '4px' }} />
            <div className="skeleton-dark" style={{ width: '100%', height: '42px', borderRadius: '10px', marginTop: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── 5. Ethical Sourcing Skeleton ── */
export const EthicalSourcingSkeleton = () => (
  <section style={{ padding: 'clamp(40px, 6vw, 60px) 0', backgroundColor: '#220150' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '36px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="skeleton-dark" style={{ width: '85%', height: '34px', borderRadius: '10px' }} />
          <div className="skeleton-dark" style={{ width: '100%', height: '14px', borderRadius: '4px' }} />
          <div className="skeleton-dark" style={{ width: '70%', height: '14px', borderRadius: '4px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '10px' }}>
            <div className="skeleton-dark" style={{ height: '80px', borderRadius: '16px' }} />
            <div className="skeleton-dark" style={{ height: '80px', borderRadius: '16px' }} />
          </div>
        </div>

        <div className="skeleton-dark" style={{ width: '100%', height: '320px', borderRadius: '20px' }} />
      </div>
    </div>
  </section>
);

/* ── 6. Contact Section & Configurator Skeleton ── */
export const ContactSectionSkeleton = () => (
  <section style={{ padding: 'clamp(40px, 6vw, 60px) 0', backgroundColor: '#0d1f30' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '32px' }}>
        {/* 4 info cards on left */}
        <div style={{ height: '480px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton-card-dark" style={{ flex: 1, padding: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className="skeleton-dark" style={{ width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0 }} />
              <div style={{ width: '100%' }}>
                <div className="skeleton-dark" style={{ width: '100px', height: '12px', marginBottom: '6px', borderRadius: '4px' }} />
                <div className="skeleton-dark" style={{ width: '70%', height: '14px', borderRadius: '4px' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Sourcing Configurator on right */}
        <div className="skeleton-card-dark" style={{ height: '480px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div className="skeleton-dark" style={{ flex: 1, height: '32px', borderRadius: '20px' }} />
            <div className="skeleton-dark" style={{ flex: 1, height: '32px', borderRadius: '20px' }} />
            <div className="skeleton-dark" style={{ flex: 1, height: '32px', borderRadius: '20px' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '20px 0' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="skeleton-dark" style={{ width: '100%', height: '44px', borderRadius: '10px' }} />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="skeleton-dark" style={{ width: '80px', height: '36px', borderRadius: '8px' }} />
            <div className="skeleton-dark" style={{ width: '100px', height: '36px', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── 7. Testimonials Skeleton ── */
export const TestimonialsSkeleton = () => (
  <section style={{ padding: 'clamp(32px, 5vw, 48px) 0', backgroundColor: 'var(--bg-main, #FFFFFF)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div className="skeleton-light" style={{ width: '220px', height: '28px', borderRadius: '8px' }} />
        <div className="skeleton-light" style={{ width: '380px', maxWidth: '85%', height: '14px', borderRadius: '6px' }} />
      </div>

      <div style={{ display: 'flex', gap: '16px', overflow: 'hidden' }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton-card-light" style={{ width: '310px', height: '190px', padding: '20px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div className="skeleton-light" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
              <div>
                <div className="skeleton-light" style={{ width: '90px', height: '12px', marginBottom: '4px', borderRadius: '4px' }} />
                <div className="skeleton-light" style={{ width: '60px', height: '10px', borderRadius: '4px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="skeleton-light" style={{ width: '100%', height: '12px', borderRadius: '4px' }} />
              <div className="skeleton-light" style={{ width: '85%', height: '12px', borderRadius: '4px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── 8. FAQ Skeleton ── */
export const FAQSkeleton = () => (
  <section style={{ padding: 'clamp(32px, 5vw, 48px) 0', backgroundColor: 'var(--bg-secondary, #F8FAFC)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '36px', alignItems: 'start' }}>
        {/* Left CTA card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="skeleton-light" style={{ width: '220px', height: '32px', borderRadius: '8px' }} />
          <div className="skeleton-light" style={{ width: '100%', height: '14px', borderRadius: '4px' }} />
          <div className="skeleton-card-light" style={{ padding: '20px', marginTop: '12px', height: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div className="skeleton-light" style={{ width: '34px', height: '34px', borderRadius: '8px' }} />
              <div className="skeleton-light" style={{ width: '130px', height: '16px', borderRadius: '4px' }} />
            </div>
            <div className="skeleton-light" style={{ width: '100%', height: '12px', borderRadius: '4px' }} />
            <div className="skeleton-light" style={{ width: '140px', height: '36px', borderRadius: '8px' }} />
          </div>
        </div>

        {/* Right FAQ Accordion items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton-card-light" style={{ padding: '16px 20px', height: '54px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="skeleton-light" style={{ width: '70%', height: '15px', borderRadius: '4px' }} />
              <div className="skeleton-light" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── 9. Marquee Skeleton ── */
export const MarqueeSkeleton = () => (
  <div style={{ padding: '16px 0', backgroundColor: 'var(--bg-main, #FFFFFF)', borderTop: '1px solid rgba(34, 1, 80, 0.08)', borderBottom: '1px solid rgba(34, 1, 80, 0.08)', overflow: 'hidden' }}>
    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i} className="skeleton-light" style={{ width: '140px', height: '20px', borderRadius: '6px', flexShrink: 0 }} />
      ))}
    </div>
  </div>
);

/* ── Comprehensive Full Homepage Skeleton ── */
const HomeSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-main, #FFFFFF)', position: 'relative' }}>
      <HeroSkeleton />
      <AboutSkeleton />
      <CapabilitiesSkeleton />
      <ProductShowcaseSkeleton />
      <EthicalSourcingSkeleton />
      <ContactSectionSkeleton />
      <TestimonialsSkeleton />
      <FAQSkeleton />
      <MarqueeSkeleton />
    </div>
  );
};

export default HomeSkeleton;
