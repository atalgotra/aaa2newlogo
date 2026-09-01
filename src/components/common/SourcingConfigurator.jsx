import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import {
  CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2, ShieldCheck, Sparkles,
  Shirt, Briefcase, Gem, Factory, Laptop, Check
} from 'lucide-react';

const categories = [
  { id: 'apparel', title: 'Apparel & Fashion', Icon: Shirt, iconColor: '#4F46E5', badge: '100+ Textile Mills' },
  { id: 'bags', title: 'Designer Bags & Leather', Icon: Briefcase, iconColor: '#4F46E5', badge: 'ISO Leather Hubs' },
  { id: 'jewellery', title: 'Fashion Jewellery', Icon: Gem, iconColor: '#4F46E5', badge: 'Anti-Tarnish Plating' },
  { id: 'manufacturing', title: 'Custom Manufacturing', Icon: Factory, iconColor: '#4F46E5', badge: 'Zero Defect AQL' },
  { id: 'tech', title: 'Digital Ops & AI Tech', Icon: Laptop, iconColor: '#4F46E5', badge: 'Gen-Z IT Squad' }
];

const volumes = [
  { id: 'v1', label: '100 – 500 pcs', desc: 'Pilot & Fast-Fashion Run' },
  { id: 'v2', label: '500 – 2,000 pcs', desc: 'Standard Production Scale' },
  { id: 'v3', label: '2,000 – 10,000 pcs', desc: 'High Volume Brand Run' },
  { id: 'v4', label: '10,000+ Enterprise', desc: 'Global Container Dispatch' }
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

  useEffect(() => {
    if (selectedCategoryFromModal) {
      const query = selectedCategoryFromModal.toLowerCase();
      const match = categories.find(cat => 
        cat.title.toLowerCase().includes(query) || 
        query.includes(cat.title.toLowerCase()) ||
        cat.id === selectedCategoryFromModal ||
        cat.title.toLowerCase().split(' ')[0] === query.split(' ')[0]
      );
      if (match) {
        setSelectedCat(match);
        setStep(1);
      }
    }
  }, [selectedCategoryFromModal]);

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

      toast.success('Project brief submitted! Our team will contact you within 4 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        timeline: 'Standard (3-4 Weeks)',
        message: ''
      });
      setStep(1);
    } catch (err) {
      toast.error('Something went wrong. Please try again or email info@aaa2innovate.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="configurator-container"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '20px',
        border: '1px solid var(--border-light)',
        padding: 'clamp(20px, 2.5vw, 28px)',
        boxShadow: '0 10px 30px rgba(34, 1, 80, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '480px',
        height: '480px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 1. Fixed Header with Stepper Tabs */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-indigo)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            <Sparkles size={13} /> Sourcing Configurator
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>Step {step} of 3</span>
        </div>

        {/* Stepper Progress Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
          {[
            { num: 1, label: 'Category' },
            { num: 2, label: 'Volume' },
            { num: 3, label: 'Details' }
          ].map((s) => (
            <div
              key={s.num}
              onClick={() => s.num < step && setStep(s.num)}
              style={{
                cursor: s.num < step ? 'pointer' : 'default',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div
                style={{
                  height: '3px',
                  borderRadius: '3px',
                  backgroundColor: step >= s.num ? 'var(--brand-indigo)' : 'rgba(34, 1, 80, 0.1)',
                  transition: 'background-color 0.4s ease'
                }}
              />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: step === s.num ? 'var(--brand-indigo)' : step > s.num ? 'var(--brand-indigo)' : '#94A3B8',
                  transition: 'color 0.3s ease'
                }}
              >
                {s.num}. {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Fixed-Height Step Content Body (No Scrollbars) */}
      <div className="configurator-content-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden' }}>

        {/* STEP 1: CATEGORY SELECTION (COMPACT LIST - NO SCROLLBAR) */}
        {step === 1 && (
          <div>
            <div style={{ marginBottom: '10px' }}>
              <h3 style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 800, color: 'var(--brand-indigo)', marginBottom: '20px' }}>
                Select Your Sourcing Category
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {categories.map((cat) => {
                const isSelected = selectedCat.id === cat.id;
                const IconComponent = cat.Icon;
                return (
                  <div
                    key={cat.id}
                    onClick={() => handleCatSelect(cat)}
                    style={{
                      backgroundColor: isSelected ? 'rgba(34, 1, 80, 0.06)' : 'transparent',
                      border: isSelected ? '1px solid rgba(34, 1, 80, 0.2)' : '1px solid var(--border-light)',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 4px 12px rgba(34, 1, 80, 0.06)' : 'none'
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(34, 1, 80, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={15} color="var(--brand-indigo)" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary, #0F172A)', margin: 0 }}>
                        {cat.title}
                      </h4>
                    </div>
                    {isSelected && <Check size={15} color="var(--brand-indigo)" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: VOLUME SELECTION */}
        {step === 2 && (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', fontWeight: 800, color: 'var(--brand-indigo)', margin: '0 0 0' }}>
                Select Estimated Order Scale
              </h3>
            </div>

            <div className="configurator-volume-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {volumes.map((vol) => {
                const isSelected = selectedVol.id === vol.id;
                return (
                  <div
                    key={vol.id}
                    onClick={() => handleVolSelect(vol)}
                    className="configurator-volume-card"
                    style={{
                      backgroundColor: isSelected ? 'rgba(34, 1, 80, 0.06)' : 'transparent',
                      border: isSelected ? '1px solid rgba(34, 1, 80, 0.2)' : '1px solid var(--border-light)',
                      borderRadius: '14px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: '80px',
                      boxShadow: isSelected ? '0 6px 18px rgba(34, 1, 80, 0.06)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div className="configurator-volume-card-title" style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--brand-indigo)' }}>{vol.label}</div>
                      {isSelected && <Check size={16} color="var(--brand-indigo)" />}
                    </div>

                    <div className="configurator-volume-card-desc" style={{ fontSize: '11px', color: isSelected ? 'var(--brand-indigo)' : 'var(--text-secondary)' }}>{vol.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT DETAILS & DISPATCH */}
        {step === 3 && (
          <form id="sourcing-config-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Quick summary strip */}
            <div
              className="configurator-summary-strip"
              style={{
                backgroundColor: 'rgba(34, 1, 80, 0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(34, 1, 80, 0.1)',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11.5px',
                color: 'var(--text-secondary)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--brand-indigo)', fontWeight: 700 }}>{selectedCat.title}</span>
              </div>
              <div style={{ color: 'var(--brand-indigo)', fontWeight: 600 }}>{selectedVol.label}</div>
            </div>

            <div className="configurator-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label className="configurator-label" style={{ display: 'block', color: 'var(--text-primary, #0F172A)', fontWeight: 600, marginBottom: '3px' }}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="configurator-input"
                  style={{ width: '100%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', color: 'var(--text-primary, #0F172A)', padding: '8px 10px', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                  onBlur={(e) => e.target.style.borderColor = ''}
                />
              </div>

              <div>
                <label className="configurator-label" style={{ display: 'block', color: 'var(--text-primary, #0F172A)', fontWeight: 600, marginBottom: '3px' }}>Corporate Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@company.com"
                  className="configurator-input"
                  style={{ width: '100%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', color: 'var(--text-primary, #0F172A)', padding: '8px 10px', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                  onBlur={(e) => e.target.style.borderColor = ''}
                />
              </div>
            </div>

            <div className="configurator-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label className="configurator-label" style={{ display: 'block', color: 'var(--text-primary, #0F172A)', fontWeight: 600, marginBottom: '3px' }}>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company / Brand"
                  className="configurator-input"
                  style={{ width: '100%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', color: 'var(--text-primary, #0F172A)', padding: '8px 10px', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                  onBlur={(e) => e.target.style.borderColor = ''}
                />
              </div>

              <div>
                <label className="configurator-label" style={{ display: 'block', color: 'var(--text-primary, #0F172A)', fontWeight: 600, marginBottom: '3px' }}>Target Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="configurator-select"
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-primary, #0F172A)',
                    padding: '8px 36px 8px 10px',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23220150' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 14px center',
                    backgroundSize: '14px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                  onBlur={(e) => e.target.style.borderColor = ''}
                >
                  <option value="Urgent (2-3 Weeks)">Urgent (2-3 Weeks)</option>
                  <option value="Standard (3-4 Weeks)">Standard (3-4 Weeks)</option>
                  <option value="Flexible (4-8 Weeks)">Flexible (4-8 Weeks)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="configurator-label" style={{ display: 'block', color: 'var(--text-primary, #0F172A)', fontWeight: 600, marginBottom: '3px' }}>Custom Specs / Notes</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Fabric specs, material requirements, tech stack or any additional details..."
                className="configurator-textarea"
                style={{ width: '100%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-light)', color: 'var(--text-primary, #0F172A)', padding: '6px 10px', borderRadius: '8px', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-indigo)'}
                onBlur={(e) => e.target.style.borderColor = ''}
              />
            </div>
          </form>
        )}
      </div>

      {/* 3. Fixed Pinned Footer Navigation */}
      <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(34, 1, 80, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            style={{
              color: 'var(--text-secondary)',
              border: 'none',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
              padding: '8px 0'
            }}
          >
            <ArrowLeft size={15} /> Back
          </button>
        ) : (
          <div />
        )}

        {step === 1 && (
          <button
            type="button"
            onClick={() => setStep(2)}
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 24px', borderRadius: '10px', fontSize: '13px' }}
          >
            Continue to Volume <ArrowRight size={15} />
          </button>
        )}

        {step === 2 && (
          <button
            type="button"
            onClick={() => setStep(3)}
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 24px', borderRadius: '10px', fontSize: '13px' }}
          >
            Finalize Brief <ArrowRight size={15} />
          </button>
        )}

        {step === 3 && (
          <button
            type="submit"
            form="sourcing-config-form"
            disabled={loading}
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 26px', borderRadius: '10px', fontSize: '13px', fontWeight: 700 }}
          >
            {loading ? <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={15} />}
            {loading ? 'Transmitting...' : 'Dispatch Inquiry'}
          </button>
        )}
      </div>
    </div>
  );
};

export default SourcingConfigurator;
