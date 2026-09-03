import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductShowcaseCard from './ProductShowcaseCard';

export const productsData = [
  {
    id: 1,
    key: 'apparel',
    title: 'Apparels',
    category: 'Sourcing & Production',
    description: 'From fast fashion collections to bespoke luxury evening wear, ethically produced in top Indian facilities.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/6a18173c8cb4a.mp4',
    targetHash: 'apparels'
  },
  {
    id: 2,
    key: 'bags',
    title: 'Designer Bags',
    category: 'Accessories & Leather',
    description: 'Statement hardware, luxury synthetic and genuine leather clutches, structured tote bags, and accessories.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/meta_ai_video.mp4',
    targetHash: 'apparels'
  },
  {
    id: 3,
    key: 'jewellery',
    title: 'Fashion Jewellery',
    category: 'Precision Craftsmanship',
    description: 'Imitation jewelry with maximum sparkle, intricate craftsmanship, and premium anti-tarnish plating.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/fine_jewellery_hero.mp4',
    targetHash: 'apparels'
  },
  {
    id: 4,
    key: 'wellness',
    title: 'Holistic Wellness',
    category: 'Ayurvedic & Metalware',
    description: 'Traditional wisdom meets modern luxury. Handcrafted copper vessels, pure brass, and holistic wellness tools.',
    videoSrc: 'https://aaawebisteimages.s3.ap-south-1.amazonaws.com/wellness_hero.mp4',
    targetHash: 'apparels'
  }
];

const ProductShowcaseSection = ({
  title = "B2B Product Showcase",
  subtitle = "Crafted with precision, delivered with speed. Explore our core B2B product lines.",
  items = productsData,
  onProductSelect
}) => {
  const navigate = useNavigate();

  const handleCardClick = (prod) => {
    navigate('/products#apparels');
    if (onProductSelect) {
      onProductSelect(prod);
    }
  };

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

        <div className="product-showcase-grid">
          {items.map((prod) => (
            <ProductShowcaseCard
              key={prod.id}
              title={prod.title}
              category={prod.category}
              description={prod.description}
              videoSrc={prod.videoSrc}
              posterSrc={prod.posterSrc}
              onClick={() => handleCardClick(prod)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
