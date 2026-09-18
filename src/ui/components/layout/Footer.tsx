import { Link } from "react-router-dom";
import { brandConfig } from "@/config/brand";
import { regions } from "@/data/destinations/regions";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 md:pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8">
          <div>
            <div className="text-white font-bold text-xl mb-4">{brandConfig.logo.text}</div>
            <p className="text-sm text-gray-400">
              {brandConfig.tagline}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Developed by {brandConfig.developer}.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="footer-link">Destinations</Link></li>
              <li><Link to="/flights" className="footer-link">Flights</Link></li>
              <li><Link to="/hotels" className="footer-link">Hotels</Link></li>
              <li><Link to="/experiences" className="footer-link">Experiences</Link></li>
              <li><Link to="/itineraries" className="footer-link">Itineraries</Link></li>
              <li><Link to="/deals" className="footer-link">Deals</Link></li>
              <li><Link to="/plan" className="footer-link">Plan My Trip</Link></li>
              <li><Link to="/my-trips" className="footer-link">My Trips</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase">Destinations</h4>
            <ul className="space-y-2 text-sm">
              {regions.map((region) => (
                <li key={region.slug}>
                  <Link to={`/destinations/${region.slug}`} className="footer-link">
                    {region.name}
                  </Link>
                </li>
              ))}
              <li><Link to="/destinations" className="footer-link">All Destinations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase">Content</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/content/inspiration" className="footer-link">Travel Inspiration</Link></li>
              <li><Link to="/content/research" className="footer-link">Travel Guides</Link></li>
              <li><Link to="/content/budget-travel" className="footer-link">Budget Travel</Link></li>
              <li><Link to="/content/luxury-travel" className="footer-link">Luxury Travel</Link></li>
              <li><Link to="/content/food" className="footer-link">Food Travel</Link></li>
              <li><Link to="/content/safari" className="footer-link">Safari Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/affiliate-disclosure" className="footer-link">Affiliate Disclosure</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="footer-link">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">
            {brandConfig.name} uses affiliate links. Learn more in our{" "}
            <Link to="/affiliate-disclosure" className="text-gray-400 hover:text-gray-200">
              Affiliate Disclosure
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
