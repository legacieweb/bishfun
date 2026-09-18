import { useEffect, useRef, useState } from "react";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { ExperienceCard } from "@/ui/components/shared/Cards";
import { experiences, experienceCategories } from "@/data/experiences";
import { isDemoMode } from "@/integrations/travelpayouts";

function Experiences() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof experienceCategories)[number]["slug"] | "all"
  >("all");
  const beachWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory !== "beach") return;

    const container = beachWidgetRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1113039%2C1018926%2C993053%2C1091593%2C1055096%2C1113561%2C1024541%2C1020312%2C1123855%2C1094266%2C1119519%2C1054749%2C983517%2C1101222%2C1035180%2C1094495%2C1091620%2C1091862%2C1059768%2C1033997&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948";
    script.charset = "utf-8";
    container.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, [activeCategory]);

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
                  {cat.name}
                </button>
              ))}
            </div>
            {isDemoMode() && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Demo data</span>
            )}
          </div>

          {activeCategory === "beach" ? (
            <div ref={beachWidgetRef} className="w-full overflow-hidden" />
          ) : filtered.length === 0 ? (
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
