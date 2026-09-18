import { Link } from "react-router-dom";
import { clsx } from "clsx";
import type { TrackingParams } from "@/integrations/travelpayouts";
import { trackAffiliateClick } from "@/integrations/travelpayouts";

interface BookingCTAProps {
  title: string;
  description?: string;
  actionText?: string;
  actionUrl?: string;
  variant?: "primary" | "secondary";
  isDemo?: boolean;
  tracking?: TrackingParams;
}

export const BookingCTA = ({
  title,
  description,
  actionText = "Search",
  actionUrl,
  variant = "primary",
  isDemo = false,
  tracking,
}: BookingCTAProps) => {
  const handleClick = () => {
    if (tracking) trackAffiliateClick(tracking);
  };

  return (
    <div
      className={clsx(
        "rounded-xl p-6 md:p-8",
        variant === "primary"
          ? "bg-accent-subtle"
          : "border border-gray-200 bg-gray-50",
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
        {actionUrl && (
          <Link
            to={actionUrl}
            onClick={handleClick}
            className={clsx(
              "btn whitespace-nowrap",
              variant === "primary" ? "btn-primary" : "btn-secondary",
              isDemo && "opacity-70",
            )}
          >
            {actionText}
            {isDemo && <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-1.5 py-0.25 rounded-full">Demo</span>}
          </Link>
        )}
      </div>
    </div>
  );
};

interface AffiliateCTAProps {
  title: string;
  description?: string;
  links: { label: string; href?: string; isExternal?: boolean; isDemo?: boolean; tracking?: TrackingParams }[];
  variant?: "inline" | "card";
  disclosure?: boolean;
}

export const AffiliateCTA = ({
  title,
  description,
  links,
  variant = "card",
  disclosure = false,
}: AffiliateCTAProps) => {
  const content = (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
      <div className="mt-3 flex flex-wrap gap-3">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.href || "#"}
            onClick={() => link.tracking && trackAffiliateClick(link.tracking)}
            className="btn btn-accent"
          >
            {link.label}
            {link.isDemo && <span className="ml-1 text-xs bg-gray-200 text-gray-700 px-1.5 py-0.25 rounded-full">Demo</span>}
          </Link>
        ))}
      </div>
    </div>
  );

  if (variant === "inline") {
    return content;
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      {content}
      {disclosure && (
        <p className="text-xs text-gray-500">
          Links may earn Bishfun a commission at no extra cost to you.
        </p>
      )}
    </div>
  );
};
