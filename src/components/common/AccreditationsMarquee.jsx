import React from 'react';
import {
  Sun, Globe, Users, ShieldCheck, Leaf, Award, Cloud, LayoutGrid, BadgeCheck, Server
} from 'lucide-react';

const AccreditationsMarquee = ({ style = {} }) => {
  const partners = [
    { name: 'OEKO-TEX STANDARD 100', Icon: Sun },
    { name: 'SEDEX', Icon: Globe },
    { name: 'BSCI', Icon: Users },
    { name: 'C-TPAT', Icon: ShieldCheck },
    { name: 'GOTS', Icon: Leaf },
    { name: 'ISO 9001', Icon: Award },
    { name: 'AWS ADVANCED PARTNER', Icon: Cloud },
    { name: 'MICROSOFT GOLD', Icon: LayoutGrid },
    { name: 'CONTROL UNION', Icon: BadgeCheck },
    { name: 'GOOGLE CLOUD', Icon: Server },
    // Duplicate set for seamless loop:
    { name: 'OEKO-TEX STANDARD 100', Icon: Sun },
    { name: 'SEDEX', Icon: Globe },
    { name: 'BSCI', Icon: Users },
    { name: 'C-TPAT', Icon: ShieldCheck },
    { name: 'GOTS', Icon: Leaf },
    { name: 'ISO 9001', Icon: Award }
  ];

  return (
    <div
      className="marquee-container"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderTop: '1px solid var(--border-light)',
        ...style
      }}
    >
      <div className="marquee-track">
        {partners.map((partner, index) => (
          <div key={index} className="marquee-item">
            <partner.Icon size={16} style={{ marginRight: '8px', color: '#220150' }} />
            <span>{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccreditationsMarquee;
