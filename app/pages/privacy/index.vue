<script setup lang="ts">
definePageMeta({
  layout: 'header',
});
</script>


<template>

  <UMain>
    <UPage>
      <div class="max-w-4xl mx-auto px-6 py-12">
        <header class="mb-12">
          <h1 class="text-4xl font-bold mb-4">Privacy Policy</h1>
        </header>

        <div class="bg-card text-card-foreground rounded-lg shadow-sm p-8 space-y-8">
          <div class="space-y-4">
            <p class="leading-relaxed"><strong>Dramatically Incorrect</strong> ("Dramatically Incorrect", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use Postchi, our offline desktop API client, and when you visit our website.</p>

            <p class="leading-relaxed">By using Postchi or visiting our website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the Software or our website.</p>
          </div>

          <section>
            <h2 class="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <div class="h-px bg-border my-4"></div>

            <h3 class="text-lg font-semibold mb-3 mt-6">Desktop Application</h3>
            <p class="leading-relaxed mb-4">The Postchi desktop application is designed to operate offline and does not collect any telemetry or usage data. API requests, responses, and all other data remain on-device.</p>

            <p class="leading-relaxed mb-4">Some usage information such as time of first launch, license status, number of launches, app version, and operating system are sent to the Dramatically Incorrect notification and update endpoints. This information is used to provide update functionality and display relevant messages.</p>

            <h3 class="text-lg font-semibold mb-3 mt-6">Website</h3>
            <p class="leading-relaxed mb-4">The Postchi website may collect the following information:</p>

            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Usage statistics (e.g., pages visited, features used)</li>
              <li>Browser and device information</li>
              <li>Country code, derived from IP address</li>
              <li>Referral sources</li>
            </ul>

            <p class="leading-relaxed">This website data helps us improve online services and user experience.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4">2. How We Use the Information</h2>
            <div class="h-px bg-border my-4"></div>

            <h3 class="text-lg font-semibold mb-3">We use website analytics data to:</h3>

            <ul class="list-disc ml-6 space-y-2">
              <li>Understand how visitors interact with our website</li>
              <li>Improve website performance and user experience</li>
              <li>Identify and address technical issues</li>
              <li>Optimize our content and marketing efforts</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4">3. How We Protect Your Information</h2>
            <div class="h-px bg-border my-4"></div>

            <h3 class="text-lg font-semibold mb-3">We take the following measures to protect any data we collect:</h3>

            <ul class="list-disc ml-6 space-y-2 mb-4">
              <li>Encryption: Any transmitted data is encrypted using industry-standard methods.</li>
              <li>Limited Access: Only authorized personnel have access to collected data.</li>
              <li>Storage: Website analytics data is stored securely in a database owned by Postchi.</li>
            </ul>

            <p class="leading-relaxed">We do not sell, rent, or share your data with third parties.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4">4. Your Rights</h2>
            <div class="h-px bg-border my-4"></div>

            <h3 class="text-lg font-semibold mb-3">For website analytics data, you may have certain rights depending on your location:</h3>

            <ul class="list-disc ml-6 space-y-2 mb-4">
              <li>Right to access information we have about you</li>
              <li>Right to request deletion of your data</li>
              <li>Right to opt-out of certain data collection</li>
            </ul>

            <p class="leading-relaxed">To exercise these rights, please contact us using the information below.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
            <div class="h-px bg-border my-4"></div>

            <h3 class="text-lg font-semibold mb-3">We may update this Privacy Policy from time to time. The latest version will always be available on our website. If significant changes are made, we will provide notice on our website.</h3>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <div class="h-px bg-border my-4"></div>

            <p class="leading-relaxed mb-4">If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:support@getpostchi.com" class="text-primary hover:underline">support@getpostchi.com</a></p>

            <p class="leading-relaxed">By continuing to use Postchi, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
          </section>
        </div>

        <footer class="mt-12 text-center text-muted-foreground text-sm">
          <p>© 2026 Dramatically Incorrect. All rights reserved.</p>
        </footer>
      </div>
    </UPage>
  </UMain>

</template>