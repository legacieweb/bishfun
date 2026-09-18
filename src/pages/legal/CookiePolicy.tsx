import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Learn how Bishfun uses cookies and similar tracking technologies."
        canonical={`https://${brandConfig.domain}/cookie-policy`}
      />

      <section className="section-sm pt-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="heading-display mb-6">Cookie Policy</h1>

          <div className="prose prose-lg">
            <p>
              Bishfun uses cookies and similar tracking technologies to enhance your experience
              and understand how our platform is used.
            </p>

            <h2>Types of Cookies We Use</h2>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the platform to function. Without them, certain
              features may not be available.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies (via Google Analytics or similar) to understand how
              visitors interact with our content. This helps us improve the platform.
            </p>

            <h3>Preference Cookies</h3>
            <p>
              These cookies remember your preferences (e.g., saved trips, recently viewed
              destinations) to provide a personalized experience. Saved trips are stored in
              localStorage and do not require server-side cookies.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              We may use third-party services (e.g., Travelpayouts widgets) that set their own
              cookies. We do not control these cookies.
            </p>

            <h2>Managing Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. Most browsers allow you to set
              preferences to refuse cookies or to indicate when a cookie is being set. However,
              disabling cookies may affect your experience on Bishfun.
            </p>

            <h2>Updates</h2>
            <p>
              We may update this policy. Any changes will be posted here.
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

export default CookiePolicy;