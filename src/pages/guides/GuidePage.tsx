import { useParams, Link, useNavigate } from "react-router-dom";
import { getGuideBySlug } from "@/data/guides";
import { getAuthorById } from "@/data/authors";
import { getDestinationBySlug } from "@/data/destinations/cities";
import { countries } from "@/data/destinations/countries";
import { getRelatedGuides, getGuidesByDestination } from "@/data/guides";
import SEO from "@/ui/components/shared/Seo";
import { GuideCard, HotelCard, ExperienceCard } from "@/ui/components/shared/Cards";
import { getHotelsByDestination } from "@/data/hotels";
import { getExperiencesByDestination } from "@/data/experiences";
import { brandConfig } from "@/config/brand";
import { AffiliateCTA } from "@/ui/components/affiliate/AffiliateCTA";
import { getTrackingForPage } from "@/integrations/travelpayouts";

function GuidePage() {
  const { guideSlug } = useParams<{ guideSlug: string }>();
  const navigate = useNavigate();

  const guide = getGuideBySlug(guideSlug || "");
  const author = guide ? getAuthorById(guide.authorId) : null;

  if (!guide) {
    navigate("/");
    return null;
  }

  const destination = getDestinationBySlug(guide.destinationSlug);
  const country = destination && destination.countrySlug
    ? countries.find((c) => c.slug === destination.countrySlug)
    : null;
  const relatedGuides = getRelatedGuides(guide);
  const destinationGuides = getGuidesByDestination(guide.destinationSlug);
  const destinationHotels = getHotelsByDestination(guide.destinationSlug);
  const destinationExperiences = getExperiencesByDestination(guide.destinationSlug);
  const tracking = getTrackingForPage("guide_page", guide.destinationSlug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: guide.heroImage,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          image: author.image,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: brandConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `https://${brandConfig.domain}/favicon.svg`,
      },
    },
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    articleSection: guide.contentType,
    keywords: guide.seo.keywords.join(", "),
  };

  return (
    <>
      <SEO
        title={guide.title}
        description={guide.description}
        image={guide.heroImage}
        article
        publishedTime={guide.publishedAt}
        modifiedTime={guide.updatedAt}
        canonical={`https://${brandConfig.domain}/guides/${guide.slug}`}
        structuredData={structuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/content/inspiration" },
          { name: guide.title, url: `/guides/${guide.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="pt-6 pb-4">
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <span>/</span>
            <li><Link to="/content/inspiration" className="hover:text-accent">Guides</Link></li>
            <span>/</span>
            <li className="text-gray-900">{guide.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[500px] min-h-[300px]">
        <img
          src={guide.heroImage}
          alt={guide.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={2100}
          height={900}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative z-10 flex h-full items-end pb-12 px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{guide.title}</h1>
            <p className="text-gray-200 mb-3 line-clamp-2">{guide.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>{guide.readingTime} min read</span>
              {author && <span>By {author.name}</span>}
              <span>Published {new Date(guide.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-sm">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: guideBody(guide) }}
              />

              {destination && (
                <aside className="mt-12 bg-gray-50 rounded-xl p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-3">Planning Your {destination.name} Trip?</h3>
                  <p className="text-gray-600 mb-4">
                    Find flights, hotels, and experiences for your journey.
                  </p>
                  <AffiliateCTA
                    title="Start Planning"
                    links={[
                      {
                        label: "Find Flights",
                        href: `/flights`,
                        tracking: getTrackingForPage("guide_page", destination.slug),
                      },
                      {
                        label: `Hotels in ${destination.name}`,
                        href: `/hotels`,
                        tracking: getTrackingForPage("guide_page", destination.slug),
                      },
                      {
                        label: "Explore Experiences",
                        href: `/experiences`,
                        tracking: getTrackingForPage("guide_page", destination.slug),
                      },
                    ]}
                    disclosure
                  />
                </aside>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#introduction" className="text-gray-600 hover:text-accent">Introduction</a></li>
                  <li><a href="#why-visit" className="text-gray-600 hover:text-accent">Why Visit</a></li>
                  <li><a href="#getting-there" className="text-gray-600 hover:text-accent">How to Get There</a></li>
                  <li><a href="#when-to-visit" className="text-gray-600 hover:text-accent">When to Visit</a></li>
                  <li><a href="#where-to-stay" className="text-gray-600 hover:text-accent">Where to Stay</a></li>
                  <li><a href="#what-to-do" className="text-gray-600 hover:text-accent">What to Do</a></li>
                  <li><a href="#travel-tips" className="text-gray-600 hover:text-accent">Travel Tips</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">About the Author</h3>
                {author && (
                  <div className="flex gap-3">
                    <img
                      src={author.image}
                      alt={author.imageAlt}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                    <div>
                      <p className="font-medium">{author.name}</p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-3">{author.bio}</p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-4">
                  {relatedGuides.length > 0 ? (
                    relatedGuides.map((g) => (
                      <Link key={g.slug} to={`/guides/${g.slug}`} className="block group">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg">
                          <img
                            src={g.heroImage}
                            alt={g.heroImageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-250"
                            loading="lazy"
                            width={300}
                            height={225}
                          />
                        </div>
                        <h4 className="font-medium text-sm mt-2 group-hover:text-accent line-clamp-2">
                          {g.title}
                        </h4>
                      </Link>
                    ))
                  ) : (
                    destinationGuides.filter((g) => g.slug !== guide.slug).slice(0, 3).map((g) => (
                      <Link key={g.slug} to={`/guides/${g.slug}`} className="block group">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg">
                          <img
                            src={g.heroImage}
                            alt={g.heroImageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-250"
                            loading="lazy"
                            width={300}
                            height={225}
                          />
                        </div>
                        <h4 className="font-medium text-sm mt-2 group-hover:text-accent line-clamp-2">
                          {g.title}
                        </h4>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="section-sm bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-6">Frequently Asked Questions</h2>
          <div className="max-w-3xl">
            <div className="space-y-4">
              {[
                { q: "How do I get to " + (destination?.name || guide.destinationSlug), a: "The most convenient way is by flying into the nearest international airport. From there, local transport options include taxis, trains, and ride-sharing services." },
                { q: "What is the best time to visit?", a: guide.seo.keywords.includes("best time") ? "See our seasonal guide above for detailed month-by-month recommendations." : "Check the local climate and plan around the dry or peak seasons for the best experience." },
                { q: "What should I pack?", a: "Pack light, versatile layers and comfortable walking shoes. Always bring a reusable water bottle and a universal power adapter." },
                { q: "Is it safe to travel there?", a: "As with any destination, check government travel advisories and register with your embassy. Stick to well-traveled areas and keep valuables secure." },
              ].map((item, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center gap-2 cursor-pointer text-left font-medium text-gray-900 p-4 bg-white rounded-lg shadow-sm">
                    {item.q}
                    <span className="ml-auto transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-4 pb-3 text-gray-600">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function guideBody(guide: { title: string; description: string; destinationSlug: string }): string {
  const paragraphs = [
    `<p>${guide.description}</p>`,
    `<h2 id="why-visit">Why Visit ${guide.destinationSlug}</h2>`,
    `<p>This guide covers the essential information you need to know before booking your trip, including when to visit, where to stay, and what to do.</p>`,
    `<h2 id="getting-there">Getting There</h2>`,
    `<p>The most convenient way to reach ${guide.destinationSlug} is by flying into the nearest international airport. From there, local transport options include taxis, trains, and ride-sharing services. We recommend booking airport transfers in advance during peak seasons.</p>`,
    `<h2 id="when-to-visit">When to Visit</h2>`,
    `<p>The best time to visit varies by season. Consider shoulder seasons for fewer crowds and better prices. Always check weather patterns and local events before finalizing your dates.</p>`,
    `<h2 id="where-to-stay">Where to Stay</h2>`,
    `<p>${guide.destinationSlug} offers accommodations for every budget and travel style. From luxury hotels to boutique stays and budget hostels, there's something for everyone.</p>`,
    `<h2 id="what-to-do">What to Do</h2>`,
    `<p>This guide highlights the top experiences and attractions. Whether you're seeking cultural immersion, outdoor adventure, or culinary delights, you'll find recommendations tailored to your interests.</p>`,
    `<h2 id="travel-tips">Travel Tips</h2>`,
    `<ul><li>Download offline maps and translation apps before you arrive.</li><li>Dress respectfully when visiting religious sites.</li><li>Try local street food from reputable vendors.</li><li>Carry a mix of cash and cards.</li><li>Respect local customs and wildlife.</li></ul>`,
    `<p>Enjoy your trip to ${guide.destinationSlug}. This guide is part of Bishfun's commitment to helping travelers make informed decisions.</p>`,
  ];

  return paragraphs.join("\n\n");
}

export default GuidePage;
