"use client";

import { Container } from "react-bootstrap";
import "./policy.css";

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <Container className="py-5">
        <h1>Privacy Policy</h1>
        <span className="policy-date">Last updated: February 18, 2026</span>

        <section className="mb-5">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Mauro Apps LLC ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website (mauroapps.com) and our mobile applications distributed via the Apple App Store and Google Play Store (collectively, the "Services"). If you have any questions or concerns, please contact us at mark@mauroapps.com.
          </p>
        </section>

        <section className="mb-5">
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide, or that is automatically collected when you use our Services. This may include:
          </p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and credentials when you create an account or sign in via third-party providers (Apple Sign-In, Google Sign-In).</li>
            <li><strong>Usage Data:</strong> Device information, IP address, browser type, operating system, referring URLs, pages visited, and interaction timestamps collected automatically when you use our Services.</li>
            <li><strong>In-App Activity:</strong> Features used, content created or stored within our apps, and subscription status.</li>
            <li><strong>Push Notification Tokens:</strong> Device tokens used to deliver push notifications, collected only if you grant permission.</li>
            <li><strong>Third-Party Identifiers:</strong> Identifiers from <strong>Apple</strong> and <strong>Google</strong> when you use their platforms or authentication services.</li>
            <li><strong>Purchase Information:</strong> Subscription and purchase records processed through Apple App Store or Google Play Store. We do not receive your full payment card details; billing is handled entirely by Apple or Google.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve our Services.</li>
            <li>Manage your account and authenticate your identity.</li>
            <li>Process and manage your subscriptions and in-app purchases.</li>
            <li>Send push notifications (only with your permission).</li>
            <li>Send transactional and administrative communications.</li>
            <li>Analyze usage patterns to improve app performance and user experience.</li>
            <li>Comply with legal obligations and enforce our policies.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share or transfer your information only in the following circumstances:
          </p>
          <ul>
            <li><strong>App Store Platforms:</strong> <strong>Apple</strong> and <strong>Google</strong> process payments and distribution on our behalf. Their respective privacy policies govern data they independently collect.</li>
            <li><strong>Paywall Management:</strong> <strong>Superwall</strong> is used to manage subscription paywalls. Data shared is limited to what is necessary to present and process subscription offerings.</li>
            <li><strong>AI & Processing Services:</strong> We may transmit data to the <strong>Google Gemini API</strong> to power intelligent features within our apps.</li>
            <li><strong>Cloud Storage:</strong> User-generated content may be synced to <strong>Apple iCloud</strong> or <strong>Google Drive</strong> for backup and cross-device synchronization, subject to the user's own cloud account settings.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect the rights and safety of our users or company.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>5. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies (e.g., pixels, web beacons) to collect usage information and improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Please note that some features of our website may not function properly without cookies.
          </p>
          <p>
            Our mobile applications do not use traditional browser cookies. They may use mobile analytics SDKs (such as Firebase Analytics) to collect aggregated, non-personally-identifiable usage data.
          </p>
        </section>

        <section className="mb-5">
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer have a legitimate business need to process your personal information, we will delete or anonymize it.
          </p>
        </section>

        <section className="mb-5">
          <h2>7. Age Restrictions</h2>
          <p>
            Our Services are intended for users who are at least 18 years old. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have collected personal information from an individual under 18, we will take steps to delete such information. If you become aware that a child has provided us with personal information, please contact us at mark@mauroapps.com.
          </p>
        </section>

        <section className="mb-5">
          <h2>8. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Access:</strong> The right to request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> The right to request that we correct inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> The right to request that we delete your personal information ("right to be forgotten").</li>
            <li><strong>Portability:</strong> The right to receive your data in a structured, machine-readable format.</li>
            <li><strong>Opt-Out:</strong> The right to opt out of push notifications at any time through your device settings.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at mark@mauroapps.com. We will respond to your request within 30 days.
          </p>
        </section>

        <section className="mb-5">
          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that differ from the laws of your country. By using our Services, you consent to the transfer of your information to jurisdictions outside your country of residence, including the United States.
          </p>
        </section>

        <section className="mb-5">
          <h2>10. California Residents (CCPA)</h2>
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
          <h2>11. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or misuse.
          </p>
        </section>

        <section className="mb-5">
          <h2>12. Accessibility</h2>
          <p>
            Mauro Apps LLC is committed to ensuring digital accessibility for people with disabilities. We continually work to improve the user experience for everyone and apply the relevant accessibility standards (WCAG 2.1). If you experience any difficulty accessing any part of our website or applications, please contact us at mark@mauroapps.com, and we will work to provide the information you need.
          </p>
        </section>

        <section className="mb-5">
          <h2>13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. For significant changes, we will provide a more prominent notice, such as an in-app notification or email. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-5">
          <h2>14. Contact Us</h2>
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
