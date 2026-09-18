import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const isStaticPage = ["/about", "/privacy", "/terms", "/cookie-policy", "/affiliate-disclosure"].includes(pathname);

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
