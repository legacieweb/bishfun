import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import type { AffiliateLink, TrackingParams } from "@/integrations/travelpayouts";

interface DestinationCardProps {
  slug: string;
  name: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  size?: "sm" | "md" | "lg";
  to?: string;
  badge?: { text: string; variant?: string };
}

export const DestinationCard = ({
  slug,
  name,
  subtitle,
  description,
  image,
  imageAlt,
  tags,
  size = "md",
  to,
  badge,
}: DestinationCardProps) => {
  const linkHref = to || `/destinations/${slug}`;
  const sizeClasses = {
    sm: "aspect-[3/2]",
    md: "aspect-[4/3]",
    lg: "aspect-[16/9]",
  };

  return (
    <Link to={linkHref} className="group block">
      <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-250">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={600}
          height={450}
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-accent-subtle text-accent">
              {badge.text}
            </span>
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors duration-250">
          {name}
        </h3>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        {description && (
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        )}
        {tags && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

interface GuideCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  authorName: string;
  authorImage?: string;
  publishedAt: string;
  readingTime: number;
  contentType: string;
}

export const GuideCard = ({
  slug,
  title,
  description,
  image,
  imageAlt,
  authorName,
  authorImage,
  publishedAt,
  readingTime,
  contentType,
}: GuideCardProps) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link to={`/guides/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-250">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={600}
          height={480}
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
            {contentType}
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-250 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span>{authorName}</span>
          </span>
          <span>•</span>
          <span>{readingTime} min read</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};

interface HotelCardProps {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  price: number;
  originalPrice?: number;
  currency: string;
  currencySymbol: string;
  rating: number;
  reviewCount: number;
  amenities?: string[];
  isDemo?: boolean;
}

export const HotelCard = ({
  slug,
  name,
  description,
  image,
  imageAlt,
  price,
  originalPrice,
  currency,
  currencySymbol,
  rating,
  reviewCount,
  amenities,
  isDemo,
}: HotelCardProps) => {
  return (
    <Link to={`/hotels/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-250">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={600}
          height={480}
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
            <span>★</span>
            {rating.toFixed(1)}
          </span>
        </div>
        {isDemo && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700">
              Demo
            </span>
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        {amenities && (
          <div className="mt-2 flex flex-wrap gap-1">
            {amenities.slice(0, 3).map((a) => (
              <span key={a} className="text-xs text-gray-500">
                • {a}
              </span>
            ))}
          </div>
        )}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">
            {currencySymbol}{price.toFixed(0)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {currencySymbol}{originalPrice.toFixed(0)}
            </span>
          )}
          <span className="text-sm text-gray-500">per night</span>
        </div>
        <div className="mt-1 text-xs text-gray-500">
          {reviewCount} reviews
        </div>
      </div>
    </Link>
  );
};

interface FlightCardProps {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  price: number;
  currencySymbol: string;
  isDemo?: boolean;
}

export const FlightCard = ({
  from,
  to,
  departureDate,
  returnDate,
  price,
  currencySymbol,
  isDemo,
}: FlightCardProps) => (
  <div className="border border-gray-200 rounded-xl p-4 hover:border-accent hover:shadow-md transition-all">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-900">{from}</span>
        <span className="text-gray-400">→</span>
        <span className="font-bold text-gray-900">{to}</span>
      </div>
      {isDemo && <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Demo</span>}
    </div>
    <div className="flex justify-between text-sm text-gray-600 mb-3">
      <span>Depart: {departureDate}</span>
      {returnDate && <span>Return: {returnDate}</span>}
    </div>
    <div className="flex items-baseline justify-between">
      <span className="text-2xl font-bold text-gray-900">{currencySymbol}{price.toFixed(0)}</span>
      <span className="text-sm text-gray-500">per person</span>
    </div>
  </div>
);

interface ExperienceCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  price: number;
  currencySymbol: string;
  duration: string;
  rating?: number;
  isDemo?: boolean;
}

export const ExperienceCard = ({
  slug,
  title,
  description,
  image,
  imageAlt,
  category,
  price,
  currencySymbol,
  duration,
  rating,
  isDemo,
}: ExperienceCardProps) => (
  <Link to={`/experiences/${slug}`} className="group block">
    <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-250">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width={600}
        height={480}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute top-3 left-3">
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-white/90 text-gray-800">
          {category}
        </span>
      </div>
      {isDemo && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">
            Demo
          </span>
        </div>
      )}
    </div>
    <div className="mt-3">
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-lg font-bold text-gray-900">
          {currencySymbol}{price.toFixed(0)}
        </span>
        <span className="text-sm text-gray-500">{duration}</span>
      </div>
    </div>
  </Link>
);

interface ItineraryCardProps {
  slug: string;
  title: string;
  description: string;
  days: number;
  image: string;
  imageAlt: string;
  destinationName: string;
  budgetLevel: string;
  estimatedBudget: { budget: number; midRange: number; luxury: number };
  currencySymbol: string;
}

export const ItineraryCard = ({
  slug,
  title,
  description,
  days,
  image,
  imageAlt,
  destinationName,
  budgetLevel,
  estimatedBudget,
  currencySymbol,
}: ItineraryCardProps) => (
  <Link to={`/itineraries/${slug}`} className="group block">
    <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-250">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width={600}
        height={480}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-white/90 text-gray-800">
          {days} days
        </span>
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-white/90 text-gray-800">
          {budgetLevel}
        </span>
      </div>
    </div>
    <div className="mt-3">
      <p className="text-sm text-accent font-medium">{destinationName}</p>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
      <div className="mt-2 text-sm text-gray-500">
        From {currencySymbol}{estimatedBudget.budget}
      </div>
    </div>
  </Link>
);

interface DealCardProps {
  slug: string;
  title: string;
  description: string;
  type: "flight" | "hotel" | "experience";
  category: string;
  price: number;
  originalPrice?: number;
  currencySymbol: string;
  discountPercent?: number;
  validUntil?: string;
  image: string;
  imageAlt: string;
  isDemo?: boolean;
  bookingUrl?: string;
}

export const DealCard = ({
  slug,
  title,
  description,
  type,
  category,
  price,
  originalPrice,
  currencySymbol,
  discountPercent,
  validUntil,
  image,
  imageAlt,
  isDemo,
  bookingUrl,
}: DealCardProps) => (
  <div className="group block">
    <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-250">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width={600}
        height={480}
      />
      {discountPercent && (
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold bg-accent text-white">
            -{discountPercent}%
          </span>
        </div>
      )}
      {isDemo && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">
            Demo
          </span>
        </div>
      )}
    </div>
    <div className="mt-3">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
        <span className="uppercase font-medium">{type}</span>
        <span>•</span>
        <span>{category}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent">{title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-xl font-bold text-gray-900">{currencySymbol}{price.toFixed(0)}</span>
        {originalPrice && (
          <span className="text-sm text-gray-500 line-through">{currencySymbol}{originalPrice.toFixed(0)}</span>
        )}
      </div>
      {validUntil && <p className="text-xs text-gray-500 mt-1">Ends {validUntil}</p>}
    </div>
  </div>
);

interface CTACardProps {
  title: string;
  description?: string;
  primaryText?: string;
  primaryUrl?: string;
  secondaryText?: string;
  secondaryUrl?: string;
  isDemo?: boolean;
  tracking?: TrackingParams;
}

export const CTA = {
  Card: ({ title, description, primaryText, primaryUrl, secondaryText, secondaryUrl, isDemo, tracking }: CTACardProps) => (
    <div className="rounded-xl bg-gray-50 p-6 md:p-8 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {primaryText && (
        <Link
          to={primaryUrl || "#"}
          className={`btn btn-primary mx-auto ${isDemo ? "btn-disabled" : ""}`}
        >
          {primaryText}
        </Link>
      )}
      {secondaryText && secondaryUrl && (
        <Link to={secondaryUrl} className="btn btn-ghost ml-3">
          {secondaryText}
        </Link>
      )}
    </div>
  ),
};

export type { DestinationCardProps, GuideCardProps, HotelCardProps, FlightCardProps, ExperienceCardProps, ItineraryCardProps, DealCardProps, CTACardProps };
