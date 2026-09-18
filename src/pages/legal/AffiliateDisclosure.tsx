import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function AffiliateDisclosure() {
  return (
    <>
      <SEO
        title="Affiliate Disclosure"
        description="Bishfun's affiliate disclosure explains our relationships with travel partners."
        canonical={`https://${brandConfig.domain}/affiliate-disclosure`}
      />

      <section className="section-sm pt-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="heading-display mb-6">Affiliate Disclosure</h1>

          <div className="prose prose-lg">
            <p>
              Bishfun is a participant in the Travelpayouts.com affiliate program. As an
              affiliate, we may earn commissions from qualifying purchases or referrals made
              through links on our platform.
            </p>

            <h2>How It Works</h2>
            <p>
              When you click on an affiliate link on Bishfun and subsequently book a flight,
              hotel, or experience through our partner, we may receive a small commission. This
              commission helps support our platform at no additional cost to you.
            </p>

            <h2>Affiliate Partners</h2>
            <ul>
              <li><strong>Travelpayouts</strong> — Flights, hotels, and experiences</li>
              <li>Other travel affiliate networks as we expand our partnerships</li>
            </ul>

            <h2>Our Commitment to Transparency</h2>
            <p>
              We are committed to providing honest, accurate, and useful travel content. We only
              recommend products and services that we believe will genuinely benefit our readers.
              All affiliate relationships are disclosed here and, where relevant, directly on the
              pages that contain affiliate links.
            </p>

            <h2>Demonstration vs. Live Data</h2>
            <p>
              In the current development version, some content and interfaces are labeled as
              <strong> demo</strong> data. We never present demo data as live pricing,
              availability, or real-time results. When Travelpayouts credentials are configured
              for production, live data replaces demo placeholders.
            </p>

            <h2>Tracking</h2>
            <p>
              Affiliate links may contain tracking parameters (marker, subID, campaign, etc.)
              to attribute referrals to Bishfun. These parameters do not collect personal
              information from you.
            </p>

            <h2>Questions</h2>
            <p>
              If you have any questions about our affiliate relationships, please contact us at
              affiliates@bishfun.com.
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

export default AffiliateDisclosure;