import { useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { ExperienceCard } from "@/ui/components/shared/Cards";
import { experiences, experienceCategories } from "@/data/experiences";
import { isDemoMode } from "@/integrations/travelpayouts";

function Experiences() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<
    (typeof experienceCategories)[number]["slug"] | "all"
  >("all");

  const filtered = activeCategory === "all"
    ? experiences
    : experiences.filter((e) => e.category === activeCategory);

  return (
    <>
      <SEO
        title="Experiences"
        description="Discover curated travel experiences across the globe — adventure, culture, food, wellness, and more."
        canonical={`https://${brandConfig.domain}/experiences`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">Experiences</h1>
          <p className="text-lead mt-4">
            Curated experiences for every travel style.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeCategory === "all"
                    ? "bg-accent text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {experienceCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    activeCategory === cat.slug
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
            {isDemoMode() && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Demo data</span>
            )}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No experiences found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((exp) => (
                <ExperienceCard
                  key={exp.slug}
                  slug={exp.slug}
                  title={exp.title}
                  description={exp.description}
                  image={exp.image}
                  imageAlt={exp.imageAlt}
                  category={exp.category}
                  price={exp.price}
                  currencySymbol={exp.currencySymbol}
                  duration={exp.duration}
                  rating={exp.rating as number}
                  isDemo={exp.isDemo}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Experiences;
