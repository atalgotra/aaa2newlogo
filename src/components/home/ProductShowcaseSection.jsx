import React from 'react';
import ProductShowcaseCard from './ProductShowcaseCard';

export const productsData = [
  {
    id: 'apparel',
    title: 'Apparel & Fashion',
    category: 'Sourcing & Production',
    description: 'From fast fashion collections to bespoke luxury evening wear, ethically produced in top Indian facilities.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4',
    ctaText: 'Source Apparel'
  },
  {
    id: 'bags',
    title: 'Designer Bags & Clutches',
    category: 'Accessories & Leather',
    description: 'Statement hardware, luxury synthetic and genuine leather clutches, structured tote bags, and accessories.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/meta_ai_video.mp4',
    ctaText: 'Source Accessories'
  },
  {
    id: 'jewellery',
    title: 'Fashion Jewellery',
    category: 'Precision Craftsmanship',
    description: 'Imitation jewelry with maximum sparkle, intricate craftsmanship, and premium anti-tarnish plating.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/fine_jewellery_hero.mp4',
    ctaText: 'Discover Jewellery'
  }
];

const ProductShowcaseSection = ({
  title = "B2B Product Showcase",
  subtitle = "Crafted with precision, delivered with speed. Explore our core B2B product lines.",
  items = productsData,
  onProductSelect
}) => {
  return (
    <section
      id="products"
      className="section-padding gsap-section"
      style={{ backgroundColor: '#220150', color: '#FFFFFF' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
            {title}
          </h2>
          <p style={{ color: '#E2E8F0', fontSize: '18px', maxWidth: '750px', margin: '16px auto 0 auto', lineHeight: 1.6 }}>
            {subtitle}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '32px' }}>
          {items.map((prod) => (
            <ProductShowcaseCard
              key={prod.id}
              title={prod.title}
              category={prod.category}
              description={prod.description}
              videoSrc={prod.videoSrc}
              posterSrc={prod.posterSrc}
              ctaText={prod.ctaText}
              onCtaClick={() => onProductSelect && onProductSelect(prod)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
