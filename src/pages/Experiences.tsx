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
  const categoryWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const widgetUrls: Partial<Record<typeof activeCategory, string>> = {
      beach:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1113039%2C1018926%2C993053%2C1091593%2C1055096%2C1113561%2C1024541%2C1020312%2C1123855%2C1094266%2C1119519%2C1054749%2C983517%2C1101222%2C1035180%2C1094495%2C1091620%2C1091862%2C1059768%2C1033997&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      adventure:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1013451%2C1025947%2C975618%2C1032480%2C975455%2C1094112%2C1024579%2C1028026%2C1070299%2C1102940%2C1124299%2C1017376%2C1034605%2C975648%2C1007609%2C1095489%2C975362%2C1087081%2C974800%2C1111518&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      food:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1095496%2C1129660%2C1081774%2C1039204%2C1090849%2C1052050%2C1113640%2C1035437%2C1028740%2C1117124%2C1107093%2C1038172%2C1104769%2C1114527%2C1118824%2C1056105%2C1102050%2C1040707%2C1097479%2C1126920%2C1091669&language=en&layout=responsive&powered_by=true&campaign_id=89&promo_id=3948",
    };
    const widgetUrl = widgetUrls[activeCategory];
    if (!widgetUrl) return;

    const container = categoryWidgetRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.src =
      widgetUrl;
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

          {activeCategory === "beach" || activeCategory === "adventure" || activeCategory === "food" ? (
            <div ref={categoryWidgetRef} className="w-full overflow-hidden" />
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
