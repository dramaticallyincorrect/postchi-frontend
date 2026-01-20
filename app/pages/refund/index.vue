<script setup lang="ts">

import {definePageMeta} from "#imports";

definePageMeta({
  layout: 'header'
})

</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <header class="mb-12">
      <h1 class="text-4xl font-bold mb-4">Refund Policy</h1>
      <p class="text-muted-foreground">Last Updated: January 19, 2026</p>
    </header>

    <div class="bg-card text-card-foreground rounded-lg shadow-sm p-8 space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">1. Overview</h2>
        <p class="leading-relaxed">At Postchi, we want you to be completely satisfied with your purchase. This Refund
          Policy explains the circumstances under which refunds may be requested and granted for our Individual and Team
          licenses.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">2. 30-Day Money-Back Guarantee</h2>
        <div class="bg-primary/10 border-l-4 border-primary p-4 my-4 rounded">
          <p class="leading-relaxed"><strong>We offer a 30-day money-back guarantee on all paid licenses.</strong> If
            you are not satisfied with Postchi for any reason, you may request a full refund within 30 days of your
            original purchase date.</p>
        </div>
        <p class="leading-relaxed">This guarantee applies to both Individual and Team licenses purchased directly from
          us.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">3. Eligibility for Refunds</h2>
        <p class="leading-relaxed mb-3">To be eligible for a refund, the following conditions must be met:</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>The refund request must be submitted within 30 days of the original purchase date</li>
          <li>You must provide the original purchase email address and order number</li>
          <li>The license must not have been previously refunded</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">4. Refund Process by License Type</h2>

        <div class="ml-4 space-y-6">
          <div class="border-l-4 border-primary/50 pl-4">
            <h3 class="text-lg font-semibold mb-2">4.1 Individual License Refunds</h3>
            <p class="leading-relaxed mb-2">If you request a refund for an Individual License within the 30-day
              period:</p>
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li>You will receive a full refund of the purchase price</li>
              <li>Your license will be deactivated</li>
              <li>You may continue to use the free version of Postchi</li>
              <li>Access to premium features will be revoked</li>
            </ul>
          </div>

          <div class="border-l-4 border-primary/50 pl-4">
            <h3 class="text-lg font-semibold mb-2">4.2 Team License Refunds</h3>
            <p class="leading-relaxed mb-2">If you request a refund for a Team License within the 30-day period:</p>
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li>You will receive a full refund of the purchase price</li>
              <li>All team member licenses will be deactivated</li>
              <li>Team members may continue to use the free version of Postchi</li>
              <li>Access to premium features for all team members will be revoked</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">5. How to Request a Refund</h2>
        <p class="leading-relaxed mb-3">To request a refund, please follow these steps:</p>
        <ol class="list-decimal ml-6 space-y-2">
          <li>Contact our support team at the email address provided below</li>
          <li>Include "Refund Request" in the subject line</li>
          <li>Provide your order number and the email address used for purchase</li>
          <li>Briefly explain the reason for your refund request (optional but helpful)</li>
        </ol>
        <p class="leading-relaxed mt-3">We will process your refund request within 5-7 business days and notify you via
          email once it has been approved.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">6. Refund Processing Time</h2>
        <p class="leading-relaxed mb-3">Once your refund is approved:</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>The refund will be issued to the original payment method used for purchase</li>
          <li>Please allow 5-10 business days for the refund to appear in your account, depending on your payment
            provider
          </li>
          <li>You will receive a confirmation email once the refund has been processed</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">7. Exceptions and Special Cases</h2>

        <div class="bg-amber-500/10 border-l-4 border-amber-500 p-4 my-4 rounded">
          <p class="leading-relaxed"><strong>Important:</strong> Refunds will not be granted in the following
            circumstances:</p>
        </div>

        <ul class="list-disc ml-6 space-y-2">
          <li>Requests made more than 30 days after the purchase date</li>
          <li>Abuse of the refund policy (e.g., requesting multiple refunds for the same license type)</li>
          <li>Violation of our Terms of Service</li>
          <li>Renewal purchases (renewals are considered separate transactions and follow the same 30-day policy from
            the renewal date)
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">8. Partial Refunds</h2>
        <p class="leading-relaxed">We do not offer partial refunds or pro-rated refunds based on usage. All approved
          refunds within the 30-day period will be for the full purchase amount.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">9. Failed Payments and Chargebacks</h2>
        <p class="leading-relaxed mb-3">If a payment fails or is reversed through a chargeback:</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Your license will be immediately suspended</li>
          <li>If you believe the payment failure was in error, please contact our support team</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">10. Changes to Refund Policy</h2>
        <p class="leading-relaxed">We reserve the right to modify this Refund Policy at any time. Changes will be
          effective immediately upon posting to our website. Your continued use of Postchi after changes constitutes
          acceptance of the updated policy. However, any changes will not affect refund requests for purchases made
          before the policy change.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">11. Contact Information</h2>
        <p class="leading-relaxed">If you have any questions about this Refund Policy or need to request a refund,
          please contact us at:</p>
        <div class="mt-3 p-4 bg-primary/5 rounded border border-primary/20">
          <p><strong>Email:</strong> support@getpostchi.get</p>
          <p><strong>Subject Line:</strong> Refund Request</p>
          <p><strong>Response Time:</strong> Within 3 business days</p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">12. Additional Support</h2>
        <p class="leading-relaxed mb-3">Before requesting a refund, we encourage you to reach out to support. Many
          issues can be resolved quickly, and we're here to help you get the most out of Postchi. We offer:</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Technical support for installation and configuration issues</li>
          <li>Guidance on using premium features</li>
          <li>Troubleshooting assistance</li>
          <li>Feature requests and feedback</li>
        </ul>
      </section>
    </div>

    <footer class="mt-12 text-center text-muted-foreground text-sm">
      <p>© 2026 Postchi. All rights reserved.</p>
    </footer>
  </div>

</template>