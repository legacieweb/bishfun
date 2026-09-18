import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { DealCard } from "@/ui/components/shared/Cards";
import { deals, dealCategories } from "@/data/deals";
import { isDemoMode } from "@/integrations/travelpayouts";

function Deals() {
  const [activeCategory, setActiveCategory] = useState(
    (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("category")) || "all",
  );

  const filtered = activeCategory === "all"
    ? deals
    : deals.filter((d) => d.category === activeCategory);

  return (
    <>
      <SEO
        title="Travel Deals"
        description="Find the best travel deals on flights, hotels, and experiences from our trusted partners."
        canonical={`https://${brandConfig.domain}/deals`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">Travel Deals</h1>
          <p className="text-lead mt-4">
            Handpicked offers from our travel partners.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                activeCategory === "all"
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Deals
            </button>
            {dealCategories.map((cat) => (
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

          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No deals available in this category right now. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((deal) => (
                <DealCard
                  key={deal.slug}
                  slug={deal.slug}
                  title={deal.title}
                  description={deal.description}
                  type={deal.type}
                  category={deal.category}
                  price={deal.salePrice || deal.price}
                  originalPrice={deal.originalPrice}
                  currencySymbol={deal.currencySymbol}
                  discountPercent={deal.discountPercent}
                  validUntil={deal.validUntil}
                  image={deal.image}
                  imageAlt={deal.imageAlt}
                  isDemo={deal.isDemo}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Deals;