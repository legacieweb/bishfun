import { useState } from "react";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { experiences, experienceCategories } from "@/data/experiences";
import { ExperienceCard } from "@/ui/components/shared/Cards";

function Experiences() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof experienceCategories)[number]["slug"] | "all"
  >("all");

  const filteredExperiences = activeCategory === "all"
    ? experiences
    : experiences.filter((experience) => experience.category === activeCategory);

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
          <p className="text-lead mt-4">Curated experiences for every travel style.</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Experience categories">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                activeCategory === "all"
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {experienceCategories.map((category) => (
              <button
                type="button"
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeCategory === category.slug
                    ? "bg-accent text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {filteredExperiences.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiences.map((experience) => (
                <ExperienceCard
                  key={experience.slug}
                  slug={experience.slug}
                  title={experience.title}
                  description={experience.description}
                  image={experience.image}
                  imageAlt={experience.imageAlt}
                  category={experience.category}
                  price={experience.price}
                  currencySymbol={experience.currencySymbol}
                  duration={experience.duration}
                  rating={experience.rating as number}
                />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-gray-500">No experiences found in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Experiences;
