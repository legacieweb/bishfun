import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist on Bishfun."
        noIndex
      />

      <section className="min-h-[60vh] flex items-center justify-center py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-200">404</h1>
          <h2 className="heading-h2 mt-4 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            The page you're looking for doesn't exist. It may have been moved or deleted.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;