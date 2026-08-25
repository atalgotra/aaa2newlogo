import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2, ShieldCheck, Zap, Package, Sparkles } from 'lucide-react';

const categories = [
  { id: 'apparel', title: 'Apparel & Fashion', icon: '👕', badge: '100+ Textile Mills' },
  { id: 'bags', title: 'Designer Bags & Leather', icon: '💼', badge: 'ISO Leather Hubs' },
  { id: 'jewellery', title: 'Fashion Jewellery', icon: '💎', badge: 'Anti-Tarnish Plating' },
  { id: 'manufacturing', title: 'Custom Manufacturing', icon: '🏭', badge: 'Zero Defect AQL' },
  { id: 'tech', title: 'Digital Ops & AI Tech', icon: '💻', badge: 'Gen-Z IT Squad' }
];

const volumes = [
  { id: 'v1', label: '100 – 500 pcs', desc: 'Pilot & Fast-Fashion Run' },
  { id: 'v2', label: '500 – 2,000 pcs', desc: 'Standard Production Scale' },
  { id: 'v3', label: '2,000 – 10,000 pcs', desc: 'High Volume Brand Run' },
  { id: 'v4', label: '10,000+ Enterprise', desc: 'Global Distribution Container' }
];

const SourcingConfigurator = ({ selectedCategoryFromModal }) => {
  const [step, setStep] = useState(1);
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  const [selectedVol, setSelectedVol] = useState(volumes[1]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: 'Standard (3-4 Weeks)',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleCatSelect = (cat) => {
    setSelectedCat(cat);
  };

  const handleVolSelect = (vol) => {
    setSelectedVol(vol);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    const messagePayload = `[INQUIRY CONFIGURATOR]
Category: ${selectedCat.title}
Target Volume: ${selectedVol.label} (${selectedVol.desc})
Timeline: ${formData.timeline}
Company: ${formData.company || 'N/A'}
Notes: ${formData.message || 'None'}`;

    try {
      const response = await fetch('https://finance.devapi.zipaworld.com/api/contactUs/contactMailAaa2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Sourcing Inquiry - ${selectedCat.title} (${selectedVol.label})`,
          message: messagePayload,
          company: formData.company || ''
        })
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message || 'Submission failed');

      setSubmitStatus({ type: 'success', message: '🎉 Your project spec has been configured and submitted! Our sourcing directors will reach out within 4 hours.' });
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again or email info@aaa2innovate.com' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '28px', border: '1px solid rgba(255, 255, 255, 0.14)', padding: '36px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Configurator Header & Progress Pills */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
            <Sparkles size={14} /> Interactive Sourcing Configurator
          </div>
          <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600 }}>Step {step} of 3</span>
        </div>

        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: '8px', height: '4px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ flex: 1, backgroundColor: step >= 1 ? '#2563EB' : 'transparent', transition: 'all 0.4s ease' }} />
          <div style={{ flex: 1, backgroundColor: step >= 2 ? '#2563EB' : 'transparent', transition: 'all 0.4s ease' }} />
          <div style={{ flex: 1, backgroundColor: step >= 3 ? '#2563EB' : 'transparent', transition: 'all 0.4s ease' }} />
        </div>
      </div>

      {/* STEP 1: CATEGORY SELECTOR */}
      {step === 1 && (
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
            1. Select Your Sourcing Category
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '24px' }}>
            Choose your primary product line or digital engineering requirement.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '32px' }}>
            {categories.map((cat) => {
              const isSelected = selectedCat.id === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleCatSelect(cat)}
                  style={{
                    backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                    border: isSelected ? '1px solid #2563EB' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isSelected ? '0 10px 25px rgba(37, 99, 235, 0.3)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{cat.icon}</div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 6px 0' }}>{cat.title}</h4>
                  <span style={{ fontSize: '11px', color: isSelected ? '#93C5FD' : '#64748B', fontWeight: 600 }}>{cat.badge}</span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setStep(2)}
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '12px', fontSize: '14px' }}
            >
              Continue to Order Volume <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: VOLUME & MOQ SELECTOR */}
      {step === 2 && (
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
            2. Select Estimated Order Scale ({selectedCat.title})
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '24px' }}>
            Choose your target production quantity to pre-calculate factory tiering and lead times.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '32px' }}>
            {volumes.map((vol) => {
              const isSelected = selectedVol.id === vol.id;
              return (
                <div
                  key={vol.id}
                  onClick={() => handleVolSelect(vol)}
                  style={{
                    backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                    border: isSelected ? '1px solid #2563EB' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>{vol.label}</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>{vol.desc}</div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => setStep(1)}
              style={{ color: '#94A3B8', border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '12px', fontSize: '14px' }}
            >
              Finalize Project Brief <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CONTACT & REAL-TIME AUDIT SUMMARY */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
            3. Finalize &amp; Dispatch Project Brief
          </h3>

          {/* Real-Time Spec Summary Box */}
          <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', borderRadius: '16px', border: '1px solid rgba(37, 99, 235, 0.3)', padding: '16px 20px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FFFFFF', fontWeight: 700 }}>
              <CheckCircle2 size={16} color="#4ADE80" /> Category: <span style={{ color: '#93C5FD' }}>{selectedCat.title}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FFFFFF', fontWeight: 700 }}>
              <Package size={16} color="#F59E0B" /> Scale: <span style={{ color: '#FDE68A' }}>{selectedVol.label}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FFFFFF', fontWeight: 700 }}>
              <ShieldCheck size={16} color="#38BDF8" /> Factory Match: <span style={{ color: '#7DD3FC' }}>100% Verified</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Corporate Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Company / Brand Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Global Inc."
                style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Target Delivery Window</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
              >
                <option value="Urgent (2-3 Weeks)">Urgent (2-3 Weeks)</option>
                <option value="Standard (3-4 Weeks)">Standard (3-4 Weeks)</option>
                <option value="Flexible (4-8 Weeks)">Flexible (4-8 Weeks)</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#FFFFFF', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Project Notes / Custom Requirements</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Specify fabric preferences, tech stack requirements, or target target pricing..."
              style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none', resize: 'vertical' }}
            />
          </div>

          {submitStatus && (
            <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: submitStatus.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', color: submitStatus.type === 'success' ? '#34D399' : '#F87171', fontSize: '14px', marginBottom: '20px' }}>
              {submitStatus.message}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => setStep(2)}
              style={{ color: '#94A3B8', border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 36px', borderRadius: '12px', fontSize: '15px', fontWeight: 700, backgroundColor: '#2563EB' }}
            >
              {loading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={18} />}
              {loading ? 'Transmitting Brief...' : 'Dispatch Sourcing Inquiry'}
            </button>
          </div>
        </form>
      )}

    </div>
  );
};

export default SourcingConfigurator;
