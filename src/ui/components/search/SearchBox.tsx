import { useState } from "react";
import { clsx } from "clsx";

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  showFilters?: boolean;
  categories?: { value: string; label: string }[];
  className?: string;
}

export const SearchBox = ({
  placeholder = "Search destinations, guides, experiences...",
  onSearch,
  showFilters = false,
  categories,
  className,
}: SearchBoxProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className={clsx("relative flex gap-2", className)}>
      <div className="relative flex-1">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 bg-white pl-4 pr-10 py-2.5 text-base focus:border-accent focus:ring-accent outline-none transition-colors"
          aria-label="Search"
        />
        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="15.657" y2="15.657" />
          </svg>
        </button>
      </div>
      {showFilters && categories && (
        <select className="hidden sm:block rounded-lg border border-gray-300 bg-white px-3 text-base focus:border-accent focus:ring-accent outline-none">
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      )}
    </form>
  );
};
