import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DesktopNav } from "../navigation/NavMenu";
import { MobileNav } from "../navigation/NavMenu";
import { SearchBox } from "../search/SearchBox";
import { usePageTracking } from "@/hooks/useAnalytics";
import { brandConfig } from "@/config/brand";

function Header() {
  usePageTracking();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-40 transition-all duration-300
        ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"}
      `}
    >
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900">
          {brandConfig.logo.text}
        </Link>

        <SearchBox
          placeholder="Search destinations..."
          className="hidden lg:flex flex-1 max-w-md mx-6"
        />

        <nav className="flex items-center gap-4">
          <div className="hidden md:block">
            <DesktopNav />
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>

          <Link
            to="/my-trips"
            className="hidden sm:flex items-center justify-center text-gray-700 hover:text-accent transition-colors p-2 rounded-lg hover:bg-gray-100"
            aria-label="My Trips"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 1.41a1 1 0 0 1 .86 1.46l-1 4a1 1 0 0 1-.34.55z" />
              <path d="M7 7m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
