import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./ui/components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Flights = lazy(() => import("./pages/Flights"));
const Taxis = lazy(() => import("./pages/Taxis"));
const FlightCompensation = lazy(() => import("./pages/FlightCompensation"));
const Rentals = lazy(() => import("./pages/Rentals"));
const Esim = lazy(() => import("./pages/Esim"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Deals = lazy(() => import("./pages/Deals"));
const PlanTrip = lazy(() => import("./pages/PlanTrip"));
const MyTrips = lazy(() => import("./pages/MyTrips"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const DestinationsIndex = lazy(() => import("./pages/destinations/DestinationsIndex"));
const RegionPage = lazy(() => import("./pages/destinations/RegionPage"));
const CountryPage = lazy(() => import("./pages/destinations/CountryPage"));
const CityPage = lazy(() => import("./pages/destinations/CityPage"));
const GuidePage = lazy(() => import("./pages/guides/GuidePage"));
const ItineraryPage = lazy(() => import("./pages/itineraries/ItineraryPage"));
const Itineraries = lazy(() => import("./pages/Itineraries"));
const ContentCategory = lazy(() => import("./pages/ContentCategory"));
const About = lazy(() => import("./pages/legal/About"));
const Privacy = lazy(() => import("./pages/legal/Privacy"));
const Terms = lazy(() => import("./pages/legal/Terms"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const AffiliateDisclosure = lazy(() => import("./pages/legal/AffiliateDisclosure"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Suspense fallback={null}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/flight-compensation" element={<FlightCompensation />} />
            <Route path="/taxis" element={<Taxis />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/esim" element={<Esim />} />
            <Route path="/hotels" element={<Navigate to="/taxis" replace />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/plan" element={<PlanTrip />} />
            <Route path="/my-trips" element={<MyTrips />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/destinations" element={<DestinationsIndex />} />
            <Route path="/destinations/:regionSlug" element={<RegionPage />} />
            <Route path="/destinations/:regionSlug/:countrySlug" element={<CountryPage />} />
            <Route path="/destinations/:regionSlug/:countrySlug/:citySlug" element={<CityPage />} />
            <Route path="/guides/:guideSlug" element={<GuidePage />} />
             <Route path="/itineraries" element={<Itineraries />} />
             <Route path="/itineraries/:itinerarySlug" element={<ItineraryPage />} />
            <Route path="/content/:categorySlug" element={<ContentCategory />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
