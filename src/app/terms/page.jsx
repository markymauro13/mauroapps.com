"use client";

import { Container } from "react-bootstrap";
import "../privacy/policy.css"; // Sharing styles

export default function TermsOfService() {
  return (
    <div className="policy-page">
      <Container className="py-5">
        <h1>Terms of Service</h1>
        <span className="policy-date">Last updated: February 18, 2026</span>

        <section className="mb-5">
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service remain in full force and effect while you use the website. BY USING THE WEBSITE, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE WEBSITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
        </section>

        <section className="mb-5">
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
          </p>
        </section>

        <section className="mb-5">
          <h2>3. User Representations</h2>
          <p>
            By using the website, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the website through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the website for any illegal or unauthorized purpose; and (5) your use of the website will not violate any applicable law or regulation.
          </p>
        </section>

        <section className="mb-5">
          <h2>4. Prohibited Activities</h2>
          <p>
            You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
        </section>

        <section className="mb-5">
          <h2>5. Limitation of Liability</h2>
          <p>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE WEBSITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
        </section>

        <section className="mb-5">
          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of the United States. Mauro Apps LLC and yourself irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </section>

        <section className="mb-5">
          <h2>7. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at mark@mauroapps.com.
          </p>
        </section>
      </Container>
    </div>
  );
}
