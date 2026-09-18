import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function About() {
  return (
    <>
      <SEO
        title="About Bishfun"
        description="Learn about Bishfun's mission to help travelers discover, research, and plan journeys worldwide."
        canonical={`https://${brandConfig.domain}/about`}
      />

      <section className="section-sm pt-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="heading-display mb-6">About Bishfun</h1>

          <div className="prose prose-lg">
            <p>
              Bishfun is a global travel discovery and planning platform. We help people
              discover where to go, research what to do, and plan how to get there — without
              pretending to be a tour operator or booking directly.
            </p>

            <h2>Our Mission</h2>
            <p>
              We believe travel should be thoughtful, rewarding, and empowering. Bishfun exists to
              provide trusted, practical, and beautifully curated travel content that helps you
              plan confidently and travel responsibly.
            </p>

            <h2>Our Approach</h2>
            <p>
              Bishfun is built around a simple flywheel:
            </p>
            <ol>
              <li><strong>Discover</strong> — Find destinations and inspiration.</li>
              <li><strong>Research</strong> — Understand where to go, when, and what to do.</li>
              <li><strong>Plan</strong> — Build an itinerary around your time, budget, and style.</li>
              <li><strong>Compare &amp; Book</strong> — Connect with trusted third-party providers.</li>
            </ol>

            <h2>How Bishfun Makes Money</h2>
            <p>
              Bishfun is an affiliate-powered travel platform. When you click through to book flights,
              hotels, or experiences with our travel partners, we may earn a commission at no
              additional cost to you. See our{" "}
              <a href="/affiliate-disclosure">Affiliate Disclosure</a> for full details.
            </p>

            <h2>Our Relationship to Iyoni Corp</h2>
            <p>
              Bishfun is developed by Iyoni Corp. While we share infrastructure and values, Bishfun
              operates as an independent consumer brand focused on global travel discovery and
              planning.
            </p>

            <h2>Transparency</h2>
            <p>
              We are transparent about our affiliate relationships. When content includes affiliate
              links, we clearly label them. We do not fabricate prices, availability, or reviews.
              Where Travelpayouts (our primary affiliate partner) is not yet configured, our
              interfaces are built integration-ready and clearly labeled as demo or placeholder.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;