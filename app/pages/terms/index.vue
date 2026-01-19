<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout: 'header'
});

useHead({
  bodyAttrs: {
    class: 'h-full bg-gray-50 text-gray-900',
  },
  htmlAttrs: {
    class: 'h-full',
  }
});

</script>

<style>
.terms-policy-page * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.terms-policy-page body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f9fafb;
  color: #111827;
  line-height: 1.6;
}
.terms-policy-page .container {
  max-width: 56rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}
.terms-policy-page header {
  margin-bottom: 3rem;
}
.terms-policy-page h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}
.terms-policy-page .last-updated {
  color: #6b7280;
}
.terms-policy-page .content-box {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 2rem;
}
.terms-policy-page section {
  margin-bottom: 2rem;
}
.terms-policy-page h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}
.terms-policy-page h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}
.terms-policy-page p {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 0.75rem;
}
.terms-policy-page ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #374151;
}
.terms-policy-page ul li {
  margin-bottom: 0.5rem;
}
.terms-policy-page .license-box {
  padding-left: 1rem;
  border-left: 4px solid;
  margin-bottom: 1.5rem;
}
.terms-policy-page .license-box.free {
  border-color: #3b82f6;
}
.terms-policy-page .license-box.individual {
  border-color: #10b981;
}
.terms-policy-page .license-box.team {
  border-color: #8b5cf6;
}
.terms-policy-page .license-types {
  margin-left: 1rem;
}
.terms-policy-page .disclaimer-box {
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  padding: 1rem;
}
.terms-policy-page .disclaimer-box p {
  font-size: 0.875rem;
  text-transform: uppercase;
}
.terms-policy-page .contact-box {
  margin-top: 0.75rem;
  padding: 1rem;
  background-color: #eff6ff;
  border-radius: 0.25rem;
  border: 1px solid #bfdbfe;
}
.terms-policy-page footer {
  margin-top: 3rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>

<template>
  <div class="terms-policy-page">
    <div class="container">
      <header>
        <h1>Terms of Service</h1>
        <p class="last-updated">Last Updated: January 19, 2026</p>
      </header>

      <div class="content-box">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By downloading, installing, or using Postchi (the "App"), you agree to be bound by these Terms of Service
            ("Terms"). If you do not agree to these Terms, do not use the App.</p>
        </section>

        <section>
          <h2>2. License Types and Pricing</h2>
          <p>The App is available under the following license types:</p>

          <div class="license-types">
            <div class="license-box free">
              <h3>2.1 Free Version</h3>
              <p>The free version provides basic functionality at no cost. We reserve the right to modify or discontinue
                the free version at any time.</p>
            </div>

            <div class="license-box individual">
              <h3>2.2 Individual License</h3>
              <p>The Individual License is valid for one (1) year from the date of purchase and includes:</p>
              <ul>
                <li>Access to all premium features</li>
                <li>Updates released during the subscription period</li>
                <li>Perpetual use of App versions released during your active subscription</li>
                <li>Use on devices owned or controlled by a single individual</li>
              </ul>
              <p>After the subscription expires, you may continue to use versions of the App that were released during
                your active subscription period, but you will not receive new updates or access to versions released
                after
                expiration.</p>
            </div>

            <div class="license-box team">
              <h3>2.3 Team License</h3>
              <p>The Team License is valid for one (1) year from the date of purchase and includes:</p>
              <ul>
                <li>Access to all premium features for multiple users within an organization</li>
                <li>Updates released during the subscription period</li>
                <li>Access valid only for the duration of the active subscription</li>
                <li>Number of seats as specified at the time of purchase</li>
              </ul>
              <p>The Team License requires an active subscription. Upon expiration, the App will revert to free version
                functionality unless the subscription is renewed.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>3. Payment and Renewal</h2>
          <p>All payments are processed securely through our payment provider. Subscriptions automatically renew unless
            manually disabled</p>
          <p>All fees are non-refundable except as required by law or as explicitly stated in our refund policy.</p>
        </section>

        <section>
          <h2>4. Permitted Use</h2>
          <p>You may use the App in accordance with your license type. You agree not to:</p>
          <ul>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Remove or modify any proprietary notices or labels</li>
            <li>Share your Individual License with others or use it on more devices than permitted</li>
            <li>Exceed the number of seats included in your Team License</li>
            <li>Use the App for any illegal or unauthorized purpose</li>
            <li>Distribute, sublicense, or resell the App without authorization</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>The App and all associated intellectual property rights remain the exclusive property of the developer.
            These Terms grant you a limited, non-exclusive, non-transferable license to use the App in accordance with
            your license type.</p>
        </section>

        <section>
          <h2>6. Updates and Modifications</h2>
          <p>We may update the App from time to time. Your access to updates depends on your license type and
            subscription status as described in Section 2. We reserve the right to modify, suspend, or discontinue any
            aspect of the App at any time.</p>
        </section>

        <section>
          <h2>7. Warranty Disclaimer</h2>
          <div class="disclaimer-box">
            <p>THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
              LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT
              WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</p>
          </div>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <div class="disclaimer-box">
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR
              INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE
              APP.</p>
          </div>
        </section>

        <section>
          <h2>9. Termination</h2>
          <p>We reserve the right to terminate or suspend your access to the App at any time for violation of these
            Terms. Upon termination, you must cease all use of the App and delete all copies in your possession.</p>
        </section>

        <section>
          <h2>10. Privacy</h2>
          <p>Your use of the App is also governed by our Privacy Policy, which describes how we collect, use, and
            protect your information.</p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify users of material changes through
            the App or via email. Your continued use of the App after changes constitutes acceptance of the modified
            Terms.</p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the
            developer is located, without regard to its conflict of law provisions.</p>
        </section>

        <footer class="mt-12 text-center text-gray-600 text-sm">
          <p>© 2026 Dramatically Incorrect. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>

</template>