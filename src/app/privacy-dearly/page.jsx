import { Container } from "react-bootstrap";
import "../privacy/policy.css";

export const metadata = {
  title: "Dearly Privacy Policy",
  description: "Privacy Policy for the Dearly app. Learn how we handle your photos, scans, and personal data.",
  alternates: {
    canonical: "/privacy-dearly",
  },
};

export default function DearlyPrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mauroapps.com"
      },
       {
        "@type": "ListItem",
        "position": 2,
        "name": "Dearly Privacy Policy",
        "item": "https://mauroapps.com/privacy-dearly"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DearlyPrivacyPolicy />
    </>
  );
}

function DearlyPrivacyPolicy() {
  return (
    <div className="policy-page">
      <Container className="py-5">
        <h1>Dearly Privacy Policy</h1>
        <span className="policy-date">Last updated: March 2, 2026</span>

        <section className="mb-5">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Dearly, developed by Mauro Apps LLC ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to the Dearly mobile application distributed via the Apple App Store ("App"). If you have any questions or concerns, please contact us at support@mauroapps.com.
          </p>
        </section>

        <section className="mb-5">
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide, or that is automatically collected when you use Dearly. This may include:
          </p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and credentials when you create an account or sign in via Apple Sign-In.</li>
            <li><strong>Photos and Scans:</strong> Photos of greeting cards that you capture using your device camera are processed and stored locally on your device. If you enable iCloud sync, these photos are synced to your personal iCloud account and are subject to Apple's iCloud privacy policy.</li>
            <li><strong>Usage Data:</strong> Device information, operating system version, app version, and interaction timestamps collected automatically when you use the App.</li>
            <li><strong>In-App Activity:</strong> Features used, cards scanned, and subscription status.</li>
            <li><strong>Push Notification Tokens:</strong> Device tokens used to deliver push notifications, collected only if you grant permission.</li>
            <li><strong>Purchase Information:</strong> Subscription and purchase records processed through the Apple App Store. We do not receive your full payment card details; billing is handled entirely by Apple.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>3. Camera and Photo Access</h2>
          <p>
            Dearly requires camera access to scan physical greeting cards. When you take a photo within the app:
          </p>
          <ul>
            <li>Photos are processed and stored <strong>locally on your device</strong>.</li>
            <li>No photos are uploaded to our servers unless you explicitly enable cloud backup features.</li>
            <li>If you enable <strong>iCloud sync</strong>, your photos are backed up to your personal iCloud account using Apple's iCloud infrastructure. This sync is end-to-end encrypted and subject to Apple's privacy policy.</li>
            <li>You can revoke camera permissions at any time through your device Settings → Privacy → Camera.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>4. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve Dearly.</li>
            <li>Manage your account and authenticate your identity.</li>
            <li>Process and manage your subscriptions and in-app purchases.</li>
            <li>Send push notifications (only with your permission).</li>
            <li>Send transactional and administrative communications.</li>
            <li>Analyze usage patterns to improve app performance and user experience.</li>
            <li>Comply with legal obligations and enforce our policies.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>5. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share or transfer your information only in the following circumstances:
          </p>
          <ul>
            <li><strong>Apple App Store:</strong> Apple processes payments and distribution on our behalf. Apple's privacy policy governs data they independently collect.</li>
            <li><strong>Paywall Management:</strong> Superwall is used to manage subscription paywalls. Data shared is limited to what is necessary to present and process subscription offerings.</li>
            <li><strong>AI Processing Services:</strong> We may transmit card text or metadata to the Google Gemini API to power intelligent features within the app (such as card categorization or sentiment analysis). No photos are sent to third-party AI services—only extracted text if you use AI-powered features.</li>
            <li><strong>Cloud Storage:</strong> User-generated content may be synced to Apple iCloud for backup and cross-device synchronization, subject to your iCloud account settings.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect the rights and safety of our users or company.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>6. Analytics and Tracking</h2>
          <p>
            Dearly may collect aggregated, non-personally-identifiable usage data to help us understand how the app is used and to improve user experience. This data is collected anonymously and cannot be used to identify you personally.
          </p>
        </section>

        <section className="mb-5">
          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer have a legitimate business need to process your personal information, we will delete or anonymize it.
          </p>
          <p>
            Photos and scans stored locally on your device remain there until you delete them. iCloud-synced data is retained according to your iCloud storage settings.
          </p>
        </section>

        <section className="mb-5">
          <h2>8. Age Restrictions</h2>
          <p>
            Dearly is suitable for users ages 4 and up. For users under the age of 13, we recommend parental supervision and consent. We are committed to protecting children's privacy and comply with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13 without verifiable parental consent. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete such information. If you are a parent or guardian and become aware that your child has provided us with personal information, please contact us at mark@mauroapps.com.
          </p>
        </section>

        <section className="mb-5">
          <h2>9. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Access:</strong> The right to request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> The right to request that we correct inaccurate or incomplete information.</li>
            <li><strong>Account and Data Deletion:</strong> You have the right to request the deletion of your account and personal data. You can initiate this deletion directly within Dearly via the account settings, or by contacting us at mark@mauroapps.com. Upon request, we will delete your account and associated data, subject to any legal retention requirements. Note that photos stored locally on your device or in your iCloud account must be deleted separately through your device or iCloud settings.</li>
            <li><strong>Portability:</strong> The right to receive your data in a structured, machine-readable format.</li>
            <li><strong>Opt-Out:</strong> The right to opt out of push notifications at any time through your device settings.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at mark@mauroapps.com. We will respond to your request within 30 days.
          </p>
        </section>

        <section className="mb-5">
          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that differ from the laws of your country. By using Dearly, you consent to the transfer of your information to jurisdictions outside your country of residence, including the United States.
          </p>
        </section>

        <section className="mb-5">
          <h2>11. California Residents (CCPA)</h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Right to Know:</strong> You have the right to request that we disclose the categories and specific pieces of personal information we have collected about you, the categories of sources from which that information is collected, the business or commercial purpose for collecting it, and the categories of third parties with whom we share it.</li>
            <li><strong>Right to Delete:</strong> You have the right to request that we delete the personal information we have collected from you, subject to certain exceptions.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights. We will not deny you goods or services, charge you different prices, or provide you with a different level of quality.</li>
            <li><strong>Do Not Sell:</strong> We do not sell personal information as defined by the CCPA.</li>
          </ul>
          <p>
            To exercise your CCPA rights, please contact us at mark@mauroapps.com. We will verify your identity before fulfilling your request and respond within 45 days.
          </p>
        </section>

        <section className="mb-5">
          <h2>12. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or misuse.
          </p>
          <p>
            Photos stored on your device are protected by your device's security features (passcode, Face ID, Touch ID). Photos synced to iCloud are encrypted using Apple's iCloud security standards.
          </p>
        </section>

        <section className="mb-5">
          <h2>13. Accessibility</h2>
          <p>
            Mauro Apps LLC is committed to ensuring digital accessibility for people with disabilities. We continually work to improve the user experience for everyone and apply the relevant accessibility standards (WCAG 2.1). If you experience any difficulty accessing any part of Dearly, please contact us at mark@mauroapps.com, and we will work to provide the information you need.
          </p>
        </section>

        <section className="mb-5">
          <h2>14. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. For significant changes, we will provide a more prominent notice, such as an in-app notification or email. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-5">
          <h2>15. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:<br />
            <strong>Mauro Apps LLC</strong><br />
            Email: mark@mauroapps.com
          </p>
        </section>
      </Container>
    </div>
  );
}
