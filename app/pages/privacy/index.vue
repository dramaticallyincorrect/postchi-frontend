<script setup lang="ts">
definePageMeta({
  layout: 'header',
});
</script>

<style>

.privacy-policy-page .container {
  background-color: white;
  max-width: 56rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}
.privacy-policy-page header {
  margin-bottom: 3rem;
}
.privacy-policy-page h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}
.privacy-policy-page .intro {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 2rem;
}
.privacy-policy-page .intro strong {
  color: #111827;
}
.privacy-policy-page .content-box {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 2rem;
}
.privacy-policy-page section {
  margin-bottom: 2rem;
}
.privacy-policy-page h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}
.privacy-policy-page h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
  margin-top: 1rem;
}
.privacy-policy-page p {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 0.75rem;
}
.privacy-policy-page ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #374151;
}
.privacy-policy-page ul li {
  margin-bottom: 0.5rem;
}
.privacy-policy-page a {
  color: #3b82f6;
  text-decoration: none;
}
.privacy-policy-page a:hover {
  text-decoration: underline;
}
.privacy-policy-page .separator {
  height: 1px;
  background-color: #e5e7eb;
  margin: 1.5rem 0;
}
.privacy-policy-page footer {
  margin-top: 3rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>

<template>

  <UMain>
    <UPage>
      <div class="privacy-policy-page">
        <div class="container">
          <header>
            <h1>Privacy Policy</h1>
          </header>

          <div class="content-box">
            <p class="intro"><strong>Dramatically Incorrect</strong> ("Dramatically Incorrect", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use Postchi, our offline desktop API client, and when you visit our website.</p>

            <p class="intro">By using Postchi or visiting our website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the Software or our website.</p>

            <section>
              <h2>1. Information We Collect</h2>
              <div class="separator"></div>

              <h3>Desktop Application</h3>
              <p>The Postchi desktop application is designed to operate offline and does not collect any telemetry or usage data. API requests, responses, and all other data remain on-device.</p>

              <p>Some usage information such as time of first launch, license status, number of launches, app version, and operating system are sent to the Dramatically Incorrect notification and update endpoints. This information is used to provide update functionality and display relevant messages.</p>

              <h3>Website</h3>
              <p>The Postchi website may collect the following information:</p>

              <ul>
                <li>Usage statistics (e.g., pages visited, features used)</li>
                <li>Browser and device information</li>
                <li>Country code, derived from IP address</li>
                <li>Referral sources</li>
              </ul>

              <p>This website data helps us improve online services and user experience.</p>
            </section>

            <section>
              <h2>2. How We Use the Information</h2>
              <div class="separator"></div>

              <h3>We use website analytics data to:</h3>

              <ul>
                <li>Understand how visitors interact with our website</li>
                <li>Improve website performance and user experience</li>
                <li>Identify and address technical issues</li>
                <li>Optimize our content and marketing efforts</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Protect Your Information</h2>
              <div class="separator"></div>

              <h3>We take the following measures to protect any data we collect:</h3>

              <ul>
                <li>Encryption: Any transmitted data is encrypted using industry-standard methods.</li>
                <li>Limited Access: Only authorized personnel have access to collected data.</li>
                <li>Storage: Website analytics data is stored securely in a database owned by Postchi.</li>
              </ul>

              <p>We do not sell, rent, or share your data with third parties.</p>
            </section>

            <section>
              <h2>4. Your Rights</h2>
              <div class="separator"></div>

              <h3>For website analytics data, you may have certain rights depending on your location:</h3>

              <ul>
                <li>Right to access information we have about you</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt-out of certain data collection</li>
              </ul>

              <p>To exercise these rights, please contact us using the information below.</p>
            </section>

            <section>
              <h2>5. Changes to This Policy</h2>
              <div class="separator"></div>

              <h3>We may update this Privacy Policy from time to time. The latest version will always be available on our website. If significant changes are made, we will provide notice on our website.</h3>
            </section>

            <section>
              <h2>6. Contact Information</h2>
              <div class="separator"></div>

              <p>If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:support@getpostchi.com">support@getpostchi.com</a></p>

              <p>By continuing to use Postchi, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
            </section>
          </div>

          <footer>
            <p>© 2026 Dramatically Incorrect. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </UPage>
  </UMain>

</template>