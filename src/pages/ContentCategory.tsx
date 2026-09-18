import { useParams, Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { GuideCard } from "@/ui/components/shared/Cards";
import { guides, getGuidesByType } from "@/data/guides";
import { getFeaturedItineraries } from "@/data/itineraries";
import { getFeaturedExperiences } from "@/data/experiences";
import { getFeaturedDeals } from "@/data/deals";

const contentCategories: { slug: string; name: string; description: string }[] = [
  { slug: "inspiration", name: "Travel Inspiration", description: "Destinations and experiences worth adding to your bucket list." },
  { slug: "research", name: "Travel Guides", description: "In-depth research and planning guides for your next destination." },
  { slug: "budget-travel", name: "Budget Travel", description: "How to travel more for less, without sacrificing experiences." },
  { slug: "luxury-travel", name: "Luxury Travel", description: "Premium experiences and high-end accommodations." },
  { slug: "adventure", name: "Adventure", description: "Thrilling activities and adventure travel guides." },
  { slug: "family-travel", name: "Family Travel", description: "Family-friendly destinations and travel tips." },
  { slug: "solo-travel", name: "Solo Travel", description: "Guides and tips for traveling alone." },
  { slug: "food", name: "Food Travel", description: "Culinary adventures and the world's best dishes." },
  { slug: "safari", name: "Safari", description: "Wildlife guides and safari planning resources." },
  { slug: "culture", name: "Culture", description: "Cultural experiences and heritage travel." },
  { slug: "city-guides", name: "City Guides", description: "Urban travel guides for major cities worldwide." },
  { slug: "road-trips", name: "Road Trips", description: "Epic road trip routes and planning guides." },
  { slug: "weekend-getaways", name: "Weekend Getaways", description: "Perfect short breaks for every season." },
  { slug: "seasonal-travel", name: "Seasonal Travel", description: "Travel guides organized by season and weather." },
];

function ContentCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = contentCategories.find((c) => c.slug === categorySlug);
  const displayCategory = category || {
    name: "Travel Content",
    description: "Bishfun travel intelligence.",
  };

  const categoryGuides = getGuidesByType(categorySlug || "") || guides.slice(0, 6);

  return (
    <>
      <SEO
        title={displayCategory.name}
        description={displayCategory.description}
        canonical={`https://${brandConfig.domain}/content/${categorySlug}`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">{displayCategory.name}</h1>
          <p className="text-lead mt-4">{displayCategory.description}</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          {categoryGuides.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {categoryGuides.map((guide) => (
                <GuideCard
                  key={guide.slug}
                  slug={guide.slug}
                  title={guide.title}
                  description={guide.description}
                  image={guide.heroImage}
                  imageAlt={guide.heroImageAlt}
                  authorName="Amara Okello"
                  publishedAt={guide.publishedAt}
                  readingTime={guide.readingTime}
                  contentType={guide.contentType}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default ContentCategory;