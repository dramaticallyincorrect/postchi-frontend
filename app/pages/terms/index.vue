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
      <p class="text-muted-foreground">Last Updated: April 27, 2026</p>
    </header>

    <div class="bg-card text-card-foreground rounded-lg shadow-sm p-8 space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p class="leading-relaxed">By downloading, installing, or using Postchi (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">2. Free Access</h2>
        <p class="leading-relaxed mb-4">Postchi is free to use. All features are available to every user at no cost. We reserve the right to modify or discontinue any aspect of the App at any time.</p>
        <p class="leading-relaxed">You may optionally make a voluntary payment to support the ongoing development of the App. This support payment is entirely optional and does not unlock additional features or create any subscription or obligation.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">3. Optional Support Payments</h2>
        <p class="leading-relaxed mb-3">If you choose to make a voluntary support payment, please note the following:</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Support payments are voluntary contributions and are not required to use the App</li>
          <li>Payments are processed securely through our payment provider</li>
          <li>Support payments are recurring and will automatically renew until canceled</li>
          <li>You may cancel your support payment at any time; cancellation takes effect at the end of the current billing period</li>
          <li>Support payments are non-refundable</li>
          <li>Making a support payment does not create a license or any contractual entitlement to features, updates, or support</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">4. Permitted Use</h2>
        <p class="leading-relaxed mb-3">The App is released under the MIT License, which grants broad rights to use, copy, modify, merge, publish, distribute, sublicense, and sell the App. You agree not to:</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Remove or alter the copyright and license notices required by the MIT License</li>
          <li>Use the App for any illegal or unauthorized purpose</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
        <p class="leading-relaxed">The App is released under the MIT License. Copyright and all associated intellectual property rights remain the property of the developer. The MIT License grants you broad rights to use, copy, modify, merge, publish, distribute, sublicense, and sell the App, provided the copyright and license notice is preserved in all copies or substantial portions of the App.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">6. Updates and Modifications</h2>
        <p class="leading-relaxed">We may update the App from time to time. We reserve the right to modify, suspend, or discontinue any aspect of the App at any time.</p>
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
        <p class="leading-relaxed">Because the App is released under the MIT License, your rights to the software itself are perpetual and governed by that license. We may, however, suspend or terminate your access to any associated online services or accounts (such as support or payment processing) for violation of these Terms.</p>
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