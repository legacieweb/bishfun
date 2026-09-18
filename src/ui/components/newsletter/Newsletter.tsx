import { useState } from "react";
import { trackEvent } from "@/hooks/useAnalytics";
import { brandConfig } from "@/config/brand";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const validateEmail = (value: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      setStatus("error");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      trackEvent("newsletter_signup", { source: "homepage_newsletter" });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="text-center">
      <div className="mb-6">
        <h2 className="heading-h2">Travel Smarter.</h2>
        <p className="text-lead mx-auto">
          Get destination inspiration, practical travel guides, new itineraries and travel opportunities delivered to your inbox.
        </p>
      </div>

      {status === "success" ? (
        <div className="max-w-md mx-auto bg-gray-50 rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">✓</div>
          <h3 className="text-lg font-semibold mb-2">Welcome to the Journey!</h3>
          <p className="text-gray-600">
            You'll receive {brandConfig.name} travel inspiration at <strong>{email}</strong>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) {
                  setError("");
                  setStatus("idle");
                }
              }}
              className={
                "flex-1 rounded-lg border px-4 py-2.5 text-base focus:border-accent focus:ring-accent outline-none " +
                (status === "error" ? "border-error" : "border-gray-300")
              }
              aria-label="Email address"
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "newsletter-error" : undefined}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary whitespace-nowrap"
            >
              {status === "loading" ? (
                <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-4 h-4" />
              ) : (
                "Join"
              )}
            </button>
          </div>
          {status === "error" && error && (
            <p
              id="newsletter-error"
              className="mt-2 text-sm text-error"
              role="alert"
            >
              {error}
            </p>
          )}
        </form>
      )}
    </section>
  );
}

export { Newsletter };
