import { useParams, Link, useNavigate } from "react-router-dom";
import { regions } from "@/data/destinations/regions";
import { countries, getCountriesByRegion } from "@/data/destinations/countries";
import SEO from "@/ui/components/shared/Seo";
import { DestinationCard } from "@/ui/components/shared/Cards";
import { brandConfig } from "@/config/brand";

function RegionPage() {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const navigate = useNavigate();

  const region = regions.find((r) => r.slug === regionSlug);

  if (!region) {
    navigate("/destinations");
    return null;
  }

  const regionCountries = getCountriesByRegion(region.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${region.name} Destinations`,
    description: region.description,
    url: `https://${brandConfig.domain}/destinations/${region.slug}`,
    hasPart: regionCountries.map((c) => ({
      "@type": "Country",
      name: c.name,
      url: `https://${brandConfig.domain}/destinations/${region.slug}/${c.slug}`,
    })),
  };

  return (
    <>
      <SEO
        title={`${region.name} Travel Guide`}
        description={region.description}
        canonical={`https://${brandConfig.domain}/destinations/${region.slug}`}
        structuredData={structuredData}
      />

      <section
        className="relative min-h-[50vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('${region.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{region.name}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{region.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-6">
            {regionCountries.length} Countries to Explore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionCountries.map((country) => (
              <Link
                key={country.slug}
                to={`/destinations/${region.slug}/${country.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl shadow-md h-40">
                  <img
                    src={country.heroImage}
                    alt={country.heroImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white font-bold text-xl">{country.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-gray-50">
        <div className="container mx-auto text-center">
          <Link to="/plan" className="btn btn-primary btn-lg h-auto py-3 px-8">
            Plan a Trip in {region.name}
          </Link>
        </div>
      </section>
    </>
  );
}

export default RegionPage;
