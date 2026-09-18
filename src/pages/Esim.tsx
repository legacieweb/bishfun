import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function Esim() {
  return (
    <>
      <SEO
        title="Travel eSIM Data"
        description="Stay connected abroad with flexible eSIM data and travel connectivity from Bishfun."
        canonical={`https://${brandConfig.domain}/esim`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <p className="eyebrow">Stay connected</p>
          <h1 className="heading-display mt-2">Travel with unlimited data</h1>
          <p className="text-lead mt-4">
            Go ahead and watch that video, listen to that song, or download that app with uninterrupted connection wherever you travel.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="esim-widget-panel">
            <iframe
              className="esim-widget-frame"
              src="/esim-widget.html"
              title="Travel eSIM plans"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="esim-benefit-card">
            <p className="eyebrow">Stay online</p>
            <h2 className="heading-h2 mt-2">Feel the freedom of unlimited data</h2>
            <p className="text-gray-600 mt-3">
              Keep maps, messages, music, and memories moving without hunting for public Wi-Fi or swapping physical SIM cards.
            </p>
          </article>
          <article className="esim-benefit-card esim-benefit-card-accent">
            <p className="eyebrow">Travel smarter</p>
            <h2 className="heading-h2 mt-2">Get rewarded every time you travel</h2>
            <p className="text-gray-600 mt-3">
              Earn up to 10% cashback automatically. The more you travel, the more you save.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Esim;
