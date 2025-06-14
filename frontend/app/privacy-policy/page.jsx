import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#10325a] font-sans">
      <header className="bg-gradient-to-r bg-[#10325a]  text-white py-8 text-center shadow-md">
        <h1 className="text-6xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-6 text-2xl font-light">Committed to protecting your personal information</p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-2xl p-12 space-y-16 border border-gray-200">
          {[
            {
              title: '1. Introduction',
              content: 'JoinMarriages values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.',
            },
            {
              title: '2. Information We Collect',
              list: [
                'Personal details (name, email, phone number, etc.)',
                'Profile information (age, gender, religion, preferences, etc.)',
                'Activity logs and interaction data',
                'IP address and browser/device details'
              ]
            },
            {
              title: '3. How We Use Your Information',
              list: [
                'Facilitate meaningful connections',
                'Enhance user experience',
                'Send communication and updates',
                'Maintain site security and integrity'
              ]
            },
            {
              title: '4. Sharing of Information',
              content: 'We do not sell your data. We may share information with trusted third parties for service delivery (e.g., payment processors, email providers) under strict confidentiality agreements.'
            },
            {
              title: '5. Security Measures',
              content: 'We implement robust security practices to protect your information. However, no online system can be 100% secure.'
            },
            {
              title: '6. Your Rights',
              content: 'You have the right to access, correct, or delete your personal data. To request changes, contact us at ',
              email: 'info@joinmarriages.com'
            },
            {
              title: '7. Updates to This Policy',
              content: 'This Privacy Policy may be updated periodically. Changes will be posted on this page with the updated date.'
            },
            {
              title: '8. Contact Us',
              content: 'If you have any questions or concerns about this Privacy Policy, reach out to us at ',
              email: 'info@joinmarriages.com'
            }
          ].map(({ title, content, list, email }, idx) => (
            <section key={idx}>
              <h2 className="text-3xl font-bold text-[#10325a] mb-4 border-l-4 border-[#45a183] pl-4">{title}</h2>
              {content && (
                <p className="text-lg leading-relaxed text-gray-700">
                  {content}
                  {email && (
                    <a href={`mailto:${email}`} className="text-[#45a183] underline ml-1">{email}</a>
                  )}
                </p>
              )}
              {list && (
                <ul className="list-disc pl-6 space-y-2 text-lg mt-4 text-gray-700">
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>

    </div>
  );
}
