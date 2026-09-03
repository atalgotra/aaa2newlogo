import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
return (
    <div style={{paddingTop: '90px',  backgroundColor: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '80px' }}>
      <Helmet>
        <title>Terms of Service | AAA 2 Innovate</title>
        <meta name="description" content="Review the terms and conditions governing your use of AAA 2 Innovate's website and services." />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.aaa2innovate.com/terms-of-service" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms of Service | AAA 2 Innovate" />
        <meta property="og:description" content="Review the terms and conditions governing your use of AAA 2 Innovate's website and services." />
        <meta property="og:image" content="https://www.aaa2innovate.com/favicon.png" />
        <meta property="og:url" content="https://www.aaa2innovate.com/terms-of-service" />
      </Helmet>
      
      <div className="container">
        <div style={{ maxWidth: '1100px', margin: '0 auto', backgroundColor: '#FFFFFF', padding: 'clamp(32px, 5vw, 60px)', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '32px' }}>Terms of Service</h1>
          
          <div style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p><strong>Effective Date:</strong> January 1, 2026</p>
            
            <p>
              Welcome to AAA 2 Innovate. These Terms of Service outline the rules and regulations for the use of AAA 2 Innovate Pvt. Ltd.'s Website and Services.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>1. Acceptance of Terms</h3>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use AAA 2 Innovate if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>2. Services Provided</h3>
            <p>
              AAA 2 Innovate provides consulting, sourcing, manufacturing, logistics, and IT engineering services. The specifics of any service rendered will be governed by a separate mutual contract between the client and AAA 2 Innovate.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>3. Intellectual Property</h3>
            <p>
              Unless otherwise stated, AAA 2 Innovate and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from AAA 2 Innovate for your own personal use subjected to restrictions set in these terms and conditions.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>4. Limitation of Liability</h3>
            <p>
              In no event shall AAA 2 Innovate, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
            </p>

            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', fontWeight: 700, marginTop: '16px' }}>5. Contact Information</h3>
            <p>
              If you have any questions regarding these terms, please contact us at <strong>info@aaa2innovate.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

