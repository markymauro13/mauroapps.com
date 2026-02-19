"use client";

import { Container } from "react-bootstrap";
import "./policy.css"; // I'll create this for shared policy styles

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <Container className="py-5">
        <h1>Privacy Policy</h1>
        <span className="policy-date">Last updated: February 18, 2026</span>

        <section className="mb-5">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Mauro Apps LLC ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at mark@mauroapps.com.
          </p>
        </section>

        <section className="mb-5">
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on our website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the choices you make, the products and features you use. The personal information we collect may include the following:
          </p>
          <ul>
            <li><strong>Usage Data:</strong> We automatically collect certain information when you visit, use, or navigate the website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and other technical information.</li>
            <li><strong>Third-Party Identifiers:</strong> We may collect identifiers from third-party providers such as <strong>Apple</strong> and <strong>Google</strong> when you use their services to interact with our platform.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To post testimonials.</li>
            <li>Request feedback.</li>
            <li>To enable user-to-user communications.</li>
            <li>To manage user accounts.</li>
            <li>To send administrative information to you.</li>
            <li>To protect our Services.</li>
            <li>To enforce our terms, conditions, and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share or transfer your information in connection with the following:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> We may share data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include <strong>Superwall</strong> for paywall management.</li>
            <li><strong>Third-Party Processing:</strong> We may send your data to third-party services for processing, storage, or analysis. This includes services such as the <strong>Google Gemini API</strong> for intelligent features, <strong>Google Drive</strong> for storage, and <strong>Apple iCloud</strong> for data synchronization and backup.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section className="mb-5">
          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at mark@mauroapps.com.
          </p>
        </section>
      </Container>
    </div>
  );
}
