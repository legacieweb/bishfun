import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Bishfun's privacy policy explains how we collect, use, and protect your information."
        canonical={`https://${brandConfig.domain}/privacy`}
      />

      <section className="section-sm pt-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="heading-display mb-6">Privacy Policy</h1>

          <div className="prose prose-lg">
            <p>
              This Privacy Policy describes how Bishfun ("we", "us", or "our") collects, uses,
              and protects your information when you use our travel platform.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                <strong>Usage data:</strong> We collect information about how you interact with
                our platform, including pages visited, searches, and clicks.
              </li>
              <li>
                <strong>Travel preferences:</strong> Information you provide when using our Trip
                Planner, including destinations, dates, and budget.
              </li>
              <li>
                <strong>Saved trips:</strong> Data you save to My Trips is stored locally in your
                browser using localStorage.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and improve our platform.</li>
              <li>To personalize your travel planning experience.</li>
              <li>To track analytics for product improvement.</li>
              <li>To facilitate your travel bookings through our affiliate partners.</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience and
              analyze platform usage. See our{" "}
              <a href="/cookie-policy">Cookie Policy</a> for details.
            </p>

            <h2>Data Storage and Security</h2>
            <p>
              For the current version, all trip planning data is stored locally in your browser
              (localStorage). We do not store personal information on our servers. Any server-side
              storage in future versions will be encrypted and secured.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may delete your saved trip data at any time by clearing your browser's local
              storage for our domain. If you have questions about your data, please contact us.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy. Any changes will be posted on this page with an updated
              effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@bishfun.com.
            </p>

            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Privacy;
