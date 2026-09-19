import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import PagePreloader from "./PagePreloader";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const isStaticPage = ["/about", "/privacy", "/terms", "/cookie-policy", "/affiliate-disclosure"].includes(pathname);

  return (
    <>
      <PagePreloader pageKey={pathname} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
