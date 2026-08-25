import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, Layers, Send, Package } from 'lucide-react';

const defaultSpecs = {
  apparel: {
    moq: '250 Pieces / Style',
    sampleTime: '5 – 7 Business Days',
    productionTime: '18 – 24 Days',
    materials: '100% GOTS Organic Cotton, Linen, Recycled Blends',
    audits: 'SA8000 Certified, OEKO-TEX Standard 100',
    shipping: 'Air Express Freight / Sea Container'
  },
  bags: {
    moq: '150 Pieces / Model',
    sampleTime: '7 – 10 Business Days',
    productionTime: '21 – 30 Days',
    materials: 'Luxury Vegan Leather, Brass Hardware, Genuine Suede',
    audits: 'Sedex SMETA Audited, ISO 9001 Compliant',
    shipping: 'Custom DDP Air / Ocean Logistics'
  },
  jewellery: {
    moq: '300 Pieces / Design',
    sampleTime: '4 – 6 Business Days',
    productionTime: '14 – 20 Days',
    materials: 'Anti-Tarnish Brass, 18K Gold PVD Plating, Cubic Zirconia',
    audits: 'REACH Compliant, Nickel-Free & Lead-Free',
    shipping: 'Secure Insured Courier Shipping'
  }
};

const ProductSpecModal = ({ isOpen, onClose, productData, onSelectCategory }) => {
  const [requested, setRequested] = useState(false);

  if (!isOpen || !productData) return null;

  const specs = defaultSpecs[productData.id] || defaultSpecs.apparel;

  const handleSampleRequest = () => {
    setRequested(true);
    setTimeout(() => {
      onClose();
      if (onSelectCategory) {
        onSelectCategory(productData.title);
      }
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  };

  return (
    <div className="spec-modal-backdrop" onClick={onClose}>
      <div className="spec-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        >
          <X size={20} />
        </button>

        {/* Header Header Info */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
          {productData.posterSrc && (
            <div style={{ width: '80px', height: '80px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.2)' }}>
              <img src={productData.posterSrc} alt={productData.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#38BDF8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
              {productData.category || 'B2B Specimen'}
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: 800, margin: 0 }}>
              {productData.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
          {productData.description}
        </p>

        {/* Spec Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '14px 18px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
              <Package size={14} color="#F59E0B" /> Minimum Order Quantity (MOQ)
            </div>
            <div style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 700 }}>{specs.moq}</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '14px 18px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
              <Clock size={14} color="#38BDF8" /> Sample Turnaround
            </div>
            <div style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 700 }}>{specs.sampleTime}</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '14px 18px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
              <Layers size={14} color="#C084FC" /> Preferred Materials
            </div>
            <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>{specs.materials}</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '14px 18px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
              <ShieldCheck size={14} color="#4ADE80" /> Statutory Audits
            </div>
            <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>{specs.audits}</div>
          </div>

        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <button
            onClick={handleSampleRequest}
            className="btn-primary"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: requested ? '#10B981' : '#2563EB',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {requested ? <CheckCircle2 size={18} /> : <Send size={18} />}
            {requested ? 'Sample Request Initialized!' : `Request B2B Sample & Quote (${productData.title})`}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductSpecModal;
