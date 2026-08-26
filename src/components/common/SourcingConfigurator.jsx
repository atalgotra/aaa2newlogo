import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2, ShieldCheck, Sparkles,
  Shirt, Briefcase, Gem, Factory, Laptop, Check
} from 'lucide-react';

const categories = [
  { id: 'apparel', title: 'Apparel & Fashion', Icon: Shirt, iconColor: '#60A5FA', badge: '100+ Textile Mills' },
  { id: 'bags', title: 'Designer Bags & Leather', Icon: Briefcase, iconColor: '#F59E0B', badge: 'ISO Leather Hubs' },
  { id: 'jewellery', title: 'Fashion Jewellery', Icon: Gem, iconColor: '#EC4899', badge: 'Anti-Tarnish Plating' },
  { id: 'manufacturing', title: 'Custom Manufacturing', Icon: Factory, iconColor: '#34D399', badge: 'Zero Defect AQL' },
  { id: 'tech', title: 'Digital Ops & AI Tech', Icon: Laptop, iconColor: '#818CF8', badge: 'Gen-Z IT Squad' }
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

      toast.success('Project brief submitted! Our directors will contact you within 4 hours.');
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
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '28px',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.4)',
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#818CF8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            <Sparkles size={13} /> Sourcing Configurator
          </div>
          <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>Step {step} of 3</span>
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
                  backgroundColor: step >= s.num ? '#2563EB' : 'rgba(255, 255, 255, 0.1)',
                  transition: 'background-color 0.4s ease'
                }}
              />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: step === s.num ? '#FFFFFF' : step > s.num ? '#93C5FD' : '#64748B',
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
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden' }}>

        {/* STEP 1: CATEGORY SELECTION (COMPACT LIST - NO SCROLLBAR) */}
        {step === 1 && (
          <div>
            <div style={{ marginBottom: '10px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
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
                      backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.22)' : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected ? '1px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 4px 12px rgba(37, 99, 235, 0.2)' : 'none'
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '7px',
                        backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.35)' : 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={15} color={isSelected ? '#93C5FD' : cat.iconColor} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                        {cat.title}
                      </h4>
                    </div>
                    {isSelected && <Check size={15} color="#60A5FA" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: VOLUME SELECTION */}
        {step === 2 && (
          <div>
            <div style={{ marginBottom: '14px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 2px 0' }}>
                Select Estimated Order Scale
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '12.5px', margin: 0 }}>
                Tier for <span style={{ color: '#93C5FD', fontWeight: 600 }}>{selectedCat.title}</span>
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {volumes.map((vol) => {
                const isSelected = selectedVol.id === vol.id;
                return (
                  <div
                    key={vol.id}
                    onClick={() => handleVolSelect(vol)}
                    style={{
                      backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.22)' : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected ? '1px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '14px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: '80px',
                      boxShadow: isSelected ? '0 6px 18px rgba(37, 99, 235, 0.25)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#FFFFFF' }}>{vol.label}</div>
                      {isSelected && <Check size={16} color="#60A5FA" />}
                    </div>
                    <div style={{ fontSize: '11px', color: isSelected ? '#93C5FD' : '#94A3B8' }}>{vol.desc}</div>
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
              style={{
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                borderRadius: '10px',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11.5px',
                color: '#CBD5E1'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#4ADE80" />
                <span style={{ color: '#FFFFFF', fontWeight: 700 }}>{selectedCat.title}</span>
              </div>
              <div style={{ color: '#FDE68A', fontWeight: 600 }}>{selectedVol.label}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#7DD3FC' }}>
                <ShieldCheck size={13} /> Audited Match
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ display: 'block', color: '#FFFFFF', fontSize: '11.5px', fontWeight: 600, marginBottom: '3px' }}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.18)', color: '#FFF', padding: '8px 10px', borderRadius: '8px', fontSize: '12.5px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#FFFFFF', fontSize: '11.5px', fontWeight: 600, marginBottom: '3px' }}>Corporate Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@company.com"
                  style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.18)', color: '#FFF', padding: '8px 10px', borderRadius: '8px', fontSize: '12.5px', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ display: 'block', color: '#FFFFFF', fontSize: '11.5px', fontWeight: 600, marginBottom: '3px' }}>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company / Brand"
                  style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.18)', color: '#FFF', padding: '8px 10px', borderRadius: '8px', fontSize: '12.5px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#FFFFFF', fontSize: '11.5px', fontWeight: 600, marginBottom: '3px' }}>Target Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.18)', color: '#FFF', padding: '8px 10px', borderRadius: '8px', fontSize: '12.5px', outline: 'none' }}
                >
                  <option value="Urgent (2-3 Weeks)">Urgent (2-3 Weeks)</option>
                  <option value="Standard (3-4 Weeks)">Standard (3-4 Weeks)</option>
                  <option value="Flexible (4-8 Weeks)">Flexible (4-8 Weeks)</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', color: '#FFFFFF', fontSize: '11.5px', fontWeight: 600, marginBottom: '3px' }}>Custom Specs / Notes</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                placeholder="Fabric specs, GSM, AQL requirements, or tech stack..."
                style={{ width: '100%', backgroundColor: '#140038', border: '1px solid rgba(255,255,255,0.18)', color: '#FFF', padding: '8px 10px', borderRadius: '8px', fontSize: '12.5px', outline: 'none', resize: 'none' }}
              />
            </div>
          </form>
        )}
      </div>

      {/* 3. Fixed Pinned Footer Navigation */}
      <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            style={{
              color: '#94A3B8',
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
