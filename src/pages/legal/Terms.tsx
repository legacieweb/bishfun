import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Bishfun's terms of service governing the use of our travel platform."
        canonical={`https://${brandConfig.domain}/terms`}
      />

      <section className="section-sm pt-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="heading-display mb-6">Terms of Service</h1>

          <div className="prose prose-lg">
            <p>
              These Terms of Service govern your use of the Bishfun travel platform. By accessing
              or using Bishfun, you agree to these terms.
            </p>

            <h2>1. Platform Use</h2>
            <p>
              Bishfun is a travel discovery and planning platform. We do not operate as a tour
              operator, travel agent, or booking agent. We provide content, planning tools, and
              links to third-party providers.
            </p>

            <h2>2. Third-Party Bookings</h2>
            <p>
              When you click through to book flights, hotels, experiences, or other services, you
              are transacting directly with the third-party provider. Bishfun is not a party to
              those transactions and is not responsible for bookings made through our links.
            </p>

            <h2>3. Content and Accuracy</h2>
            <p>
              While we strive for accuracy, travel information changes frequently. We do not
              guarantee the accuracy, completeness, or timeliness of any content. Always verify
              important details with official sources before making travel plans.
            </p>

            <h2>4. Affiliate Relationships</h2>
            <p>
              Some links on Bishfun are affiliate links that may earn us a commission at no
              additional cost to you. See our{" "}
              <a href="/affiliate-disclosure">Affiliate Disclosure</a>.
            </p>

            <h2>5. User Content</h2>
            <p>
              Your saved trip data is stored locally in your browser. We do not collect or store
              personal information on our servers in the current version.
            </p>

            <h2>6. Disclaimer</h2>
            <p>
              Bishfun is provided "as is" without warranties of any kind. We shall not be liable
              for any damages arising from your use of the platform.
            </p>

            <h2>7. Changes</h2>
            <p>
              We may update these terms. Changes are effective upon posting.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions, contact us at hello@bishfun.com.
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

export default Terms;