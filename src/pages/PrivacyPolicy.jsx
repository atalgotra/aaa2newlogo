import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
return (
    <div style={{paddingTop: '90px',  backgroundColor: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'Outfit, sans-serif' }}>
      <Helmet>
        <title>Privacy Policy | AAA 2 Innovate</title>
              <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/" />
</Helmet>
      
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '60px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '32px' }}>Privacy Policy</h1>
          
          <div style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p><strong>Effective Date:</strong> January 1, 2026</p>
            
            <p>
              At AAA 2 Innovate Pvt. Ltd., we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>1. Information We Collect</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. This may include your name, email address, phone number, and company details.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>2. How We Use Your Information</h3>
            <p>
              We use the information we collect or receive to communicate with you, to provide and improve our services, for marketing and promotional purposes, and for other business purposes. We will not share your personal information with third parties without your explicit consent, except as required by law.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>3. Data Security</h3>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>4. Third-Party Services & Tracking</h3>
            <p>
              We use third-party analytics services to better understand how visitors interact with our website and to improve user experience. These services use cookies and similar technologies.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <strong>Google Analytics 4:</strong> We use Google Analytics to analyze website traffic. Google collects data such as IP addresses, browser types, and pages visited. You can read more in the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Google Privacy Policy</a>.
              </li>
              <li>
                <strong>Microsoft Clarity:</strong> We partner with Microsoft Clarity to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve our products/services. Usage data is captured using first and third-party cookies. You can read more in the <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>Microsoft Privacy Statement</a>.
              </li>
            </ul>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>5. Changes to This Policy</h3>
            <p>
              We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>6. Contact Us</h3>
            <p>
              If you have questions or comments about this policy, you may email us at <strong>info@aaa2innovate.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

