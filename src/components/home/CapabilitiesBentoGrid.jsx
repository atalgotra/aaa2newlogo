import React from 'react';
import { useNavigate } from 'react-router-dom';
import CapabilitiesBentoCard from './CapabilitiesBentoCard';

export const capabilitiesData = [
  {
    id: 'sourcing',
    image: '/images/services/sourcing.png',
    title: 'Sourcing',
    description: 'We know the craftsmanship and skills of India and can find the right vendor to bring your product vision to life.',
    isWide: false
  },
  {
    id: 'design',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/design.png',
    title: 'Design & PD',
    description: 'Working with your creative team and buyers we help translate trends and mood boards into real products and samples.',
    isWide: false
  },
  {
    id: 'manufacturing',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/manufacturing_hero_bg.png',
    title: 'Manufacturing',
    description: 'We are production management specialists, overseeing quality and process across every manufacturing stage.',
    isWide: false,
    imageStyle: { scale: 2 }
  },
  {
    id: 'compliance',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/qc_hero_bg.png',
    title: 'Inspection & Compliance',
    description: 'We enforce world-class quality controls standards and statutory compliance audits across the entire supply chain.',
    isWide: false,
    width: 400,
    height: 400
  },
  {
    id: 'warehousing',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/images/services/warehousing.png',
    title: 'Warehousing',
    description: 'Secure, state-of-the-art storage and highly efficient fulfillment hubs positioned for global reach.',
    isWide: false
  },
  {
    id: 'logistics',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/logistics_hero.png',
    title: 'Global Logistics',
    description: 'Ensuring merchandise is ready and dispatched smoothly through our direct logistics partnerships.',
    isWide: false
  },
  {
    id: 'digital-ops',
    image: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/tech_hero.png',
    title: 'Digital Ops & Gen-Z Tech',
    description: 'We deploy our elite Gen-Z IT engineers to build bespoke software, dashboards, and AI integrations necessary to modernize your enterprise operations. Seamless supply chain visibility meets algorithmic efficiency.',
    isWide: true
  }
];

const CapabilitiesBentoGrid = ({
  title = "Our Global Capabilities",
  subtitle = "Bridging the gap between world-class product sourcing and elite technological engineering.",
  items = capabilitiesData
}) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    const routeMap = {
      sourcing: '/capabilities/sourcing',
      design: '/capabilities/design',
      manufacturing: '/capabilities/manufacturing',
      compliance: '/capabilities/quality-control-compliance',
      warehousing: '/capabilities/warehousing',
      logistics: '/capabilities/logistics',
      'digital-ops': '/capabilities/tech'
    };

    const targetRoute = routeMap[id];
    if (targetRoute) {
      navigate(targetRoute);
    }
  };

  return (
    <section
      id="services"
      className="section-padding gsap-section"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="text-h1" style={{ fontWeight: 300, color: 'var(--text-primary)', marginBottom: '8px' }}>
            {title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
            {subtitle}
          </p>
        </div>

        <div className="services-bento-grid">
          {items.map((item) => (
            <CapabilitiesBentoCard
              key={item.id}
              badgeDotColor={item.badgeDotColor}
              image={item.image}
              title={item.title}
              description={item.description}
              isWide={item.isWide}
              width={item.width}
              height={item.height}
              onClick={() => handleCardClick(item.id)}
              imageStyle={item.imageStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesBentoGrid;
