<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout: 'header'
});

</script>


<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <header class="mb-12">
      <h1 class="text-4xl font-bold mb-4">Terms of Service</h1>
      <p class="text-muted-foreground">Last Updated: January 19, 2026</p>
    </header>

    <div class="bg-card text-card-foreground rounded-lg shadow-sm p-8 space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p class="leading-relaxed">By downloading, installing, or using Postchi (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">2. License Types and Pricing</h2>
        <p class="leading-relaxed mb-4">The App is available under the following license types:</p>

        <div class="ml-4 space-y-6">
          <div class="border-l-4 border-primary/50 pl-4">
            <h3 class="text-lg font-semibold mb-2">2.1 Free Version</h3>
            <p class="leading-relaxed">The free version provides basic functionality at no cost. We reserve the right to modify or discontinue the free version at any time.</p>
          </div>

          <div class="border-l-4 border-primary/50 pl-4">
            <h3 class="text-lg font-semibold mb-2">2.2 Individual License</h3>
            <p class="leading-relaxed mb-2">The Individual License is valid for one (1) year from the date of purchase and includes:</p>
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li>Access to all premium features</li>
              <li>Updates released during the subscription period</li>
              <li>Perpetual use of App versions released during your active subscription</li>
              <li>Use on devices owned or controlled by a single individual</li>
            </ul>
            <p class="leading-relaxed mt-3">After the subscription expires, you may continue to use versions of the App that were released during your active subscription period, but you will not receive new updates or access to versions released after expiration.</p>
          </div>

          <div class="border-l-4 border-primary/50 pl-4">
            <h3 class="text-lg font-semibold mb-2">2.3 Team License</h3>
            <p class="leading-relaxed mb-2">The Team License is valid for one (1) year from the date of purchase and includes:</p>
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li>Access to all premium features for multiple users within an organization</li>
              <li>Updates released during the subscription period</li>
              <li>Access valid only for the duration of the active subscription</li>
              <li>Number of seats as specified at the time of purchase</li>
            </ul>
            <p class="leading-relaxed mt-3">The Team License requires an active subscription. Upon expiration, the App will revert to free version functionality unless the subscription is renewed.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">3. Payment and Renewal</h2>
        <p class="leading-relaxed mb-3">All payments are processed securely through our payment provider. Subscriptions automatically renew unless manually disabled.</p>
        <p class="leading-relaxed">All fees are non-refundable except as required by law or as explicitly stated in our refund policy.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">4. Permitted Use</h2>
        <p class="leading-relaxed mb-3">You may use the App in accordance with your license type. You agree not to:</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Reverse engineer, decompile, or disassemble the App</li>
          <li>Remove or modify any proprietary notices or labels</li>
          <li>Share your Individual License with others or use it on more devices than permitted</li>
          <li>Exceed the number of seats included in your Team License</li>
          <li>Use the App for any illegal or unauthorized purpose</li>
          <li>Distribute, sublicense, or resell the App without authorization</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
        <p class="leading-relaxed">The App and all associated intellectual property rights remain the exclusive property of the developer. These Terms grant you a limited, non-exclusive, non-transferable license to use the App in accordance with your license type.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">6. Updates and Modifications</h2>
        <p class="leading-relaxed">We may update the App from time to time. Your access to updates depends on your license type and subscription status as described in Section 2. We reserve the right to modify, suspend, or discontinue any aspect of the App at any time.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">7. Warranty Disclaimer</h2>
        <div class="bg-muted/50 border border-border rounded p-4">
          <p class="leading-relaxed uppercase text-sm">THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
        <div class="bg-muted/50 border border-border rounded p-4">
          <p class="leading-relaxed uppercase text-sm">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.</p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">9. Termination</h2>
        <p class="leading-relaxed">We reserve the right to terminate or suspend your access to the App at any time for violation of these Terms. Upon termination, you must cease all use of the App and delete all copies in your possession.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">10. Privacy</h2>
        <p class="leading-relaxed">Your use of the App is also governed by our <ULink to="privacy">Privacy Policy</ULink>, which describes how we collect, use, and protect your information.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
        <p class="leading-relaxed">We reserve the right to modify these Terms at any time. We will notify users of material changes through the App or via email. Your continued use of the App after changes constitutes acceptance of the modified Terms.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">12. Governing Law</h2>
        <p class="leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the developer is located, without regard to its conflict of law provisions.</p>
      </section>
    </div>

    <footer class="mt-12 text-center text-muted-foreground text-sm">
      <p>© 2026 Dramatically Incorrect. All rights reserved.</p>
    </footer>
  </div>

</template>