<script setup lang="ts">

import {definePageMeta} from "#imports";

definePageMeta({
      layout: 'header'
    }
)

</script>

<style>
.refund-policy-page .container {
  max-width: 56rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.refund-policy-page header {
  margin-bottom: 3rem;
}

.refund-policy-page h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.refund-policy-page .last-updated {
  color: #6b7280;
}

.refund-policy-page .content-box {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.refund-policy-page section {
  margin-bottom: 2rem;
}

.refund-policy-page h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.refund-policy-page h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.refund-policy-page p {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 0.75rem;
}

.refund-policy-page ul, ol {
  margin-left: 1.5rem;
  color: #374151;
}

.refund-policy-page ul li, ol li {
  margin-bottom: 0.5rem;
}

.refund-policy-page .highlight-box {
  background-color: #dbeafe;
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.25rem;
}

.refund-policy-page .highlight-box p {
  margin-bottom: 0;
}

.refund-policy-page .warning-box {
  background-color: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.25rem;
}

.refund-policy-page .contact-box {
  margin-top: 0.75rem;
  padding: 1rem;
  background-color: #eff6ff;
  border-radius: 0.25rem;
  border: 1px solid #bfdbfe;
}

.refund-policy-page .license-section {
  margin-left: 1rem;
  margin-bottom: 1.5rem;
}

.refund-policy-page footer {
  margin-top: 3rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>

<template>
  <div class="refund-policy-page">
    <div class="container">
      <header>
        <h1>Refund Policy</h1>
        <p class="last-updated">Last Updated: January 19, 2026</p>
      </header>

      <div class="content-box">
        <section>
          <h2>1. Overview</h2>
          <p>At Postchi, we want you to be completely satisfied with your purchase. This Refund Policy explains the
            circumstances under which refunds may be requested and granted for our Individual and Team licenses.</p>
        </section>

        <section>
          <h2>2. 30-Day Money-Back Guarantee</h2>
          <div class="highlight-box">
            <p><strong>We offer a 30-day money-back guarantee on all paid licenses.</strong> If you are not satisfied with
              Postchi for any reason, you may request a full refund within 30 days of your original purchase date.</p>
          </div>
          <p>This guarantee applies to both Individual and Team licenses purchased directly from us.</p>
        </section>

        <section>
          <h2>3. Eligibility for Refunds</h2>
          <p>To be eligible for a refund, the following conditions must be met:</p>
          <ul>
            <li>The refund request must be submitted within 30 days of the original purchase date</li>
            <li>You must provide the original purchase email address and order number</li>
            <li>The license must not have been previously refunded</li>
          </ul>
        </section>

        <section>
          <h2>4. Refund Process by License Type</h2>

          <div class="license-section">
            <h3>4.1 Individual License Refunds</h3>
            <p>If you request a refund for an Individual License within the 30-day period:</p>
            <ul>
              <li>You will receive a full refund of the purchase price</li>
              <li>Your license will be deactivated</li>
              <li>You may continue to use the free version of Postchi</li>
              <li>Access to premium features will be revoked</li>
            </ul>
          </div>

          <div class="license-section">
            <h3>4.2 Team License Refunds</h3>
            <p>If you request a refund for a Team License within the 30-day period:</p>
            <ul>
              <li>You will receive a full refund of the purchase price</li>
              <li>All team member licenses will be deactivated</li>
              <li>Team members may continue to use the free version of Postchi</li>
              <li>Access to premium features for all team members will be revoked</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>5. How to Request a Refund</h2>
          <p>To request a refund, please follow these steps:</p>
          <ol>
            <li>Contact our support team at the email address <span class="text-primary">support@getpostchi.com</span>
            </li>
            <li>Include "Refund Request" in the subject line</li>
            <li>Provide your order number and the email address used for purchase</li>
            <li>Briefly explain the reason for your refund request (optional but helpful)</li>
          </ol>
          <p>We will process your refund request within 5-7 business days and notify you via email once it has been
            approved.</p>
        </section>

        <section>
          <h2>6. Refund Processing Time</h2>
          <p>Once your refund is approved:</p>
          <ul>
            <li>The refund will be issued to the original payment method used for purchase</li>
            <li>Please allow 5-10 business days for the refund to appear in your account, depending on your payment
              provider
            </li>
            <li>You will receive a confirmation email once the refund has been processed</li>
          </ul>
        </section>

        <section>
          <h2>7. Exceptions and Special Cases</h2>

          <div class="warning-box">
            <p><strong>Important:</strong> Refunds will not be granted in the following circumstances:</p>
          </div>

          <ul>
            <li>Requests made more than 30 days after the purchase date</li>
            <li>Abuse of the refund policy (e.g., requesting multiple refunds for the same license type)</li>
            <li>Violation of our Terms of Service</li>
            <li>Renewal purchases (renewals are considered separate transactions and follow the same 30-day policy from
              the renewal date)
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Partial Refunds</h2>
          <p>We do not offer partial refunds or pro-rated refunds based on usage. All approved refunds within the 30-day
            period will be for the full purchase amount.</p>
        </section>

        <section>
          <h2>9. Failed Payments and Chargebacks</h2>
          <p>If a payment fails or is reversed through a chargeback:</p>
          <ul>
            <li>Your license will be immediately suspended</li>
            <li>If you believe the payment failure was in error, please contact our support</li>
            <li>Initiating a chargeback instead of requesting a refund through our official process may result in
              permanent suspension of your account
            </li>
          </ul>
        </section>

        <section>
          <h2>10. Changes to Refund Policy</h2>
          <p>We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon
            posting to our website. Your continued use of Postchi after changes constitutes acceptance of the updated
            policy. However, any changes will not affect refund requests for purchases made before the policy change.</p>
        </section>

        <section>
          <h2>11. Contact Information</h2>
          <p>If you have any questions about this Refund Policy or need to request a refund, please contact us at:</p>
          <div class="contact-box">
            <p><strong>Email:</strong> support@getpostchi.com</p>
            <p><strong>Subject Line:</strong> Refund Request</p>
            <p><strong>Response Time:</strong> Within 3 business days</p>
          </div>
        </section>

        <section>
          <h2>12. Additional Support</h2>
          <p>Before requesting a refund, we encourage you to reach out to our support team. Many issues can be resolved
            quickly, and we're here to help you get the most out of Postchi. We offer:</p>
          <ul>
            <li>Technical support for installation and configuration issues</li>
            <li>Guidance on using premium features</li>
            <li>Troubleshooting assistance</li>
            <li>Feature requests and feedback</li>
          </ul>
        </section>
      </div>

      <footer>
        <p>© 2026 Postchi. All rights reserved.</p>
      </footer>
    </div>
  </div>

</template>