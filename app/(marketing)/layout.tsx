import { marketingConfig } from "@/config/marketing";
import { LinkButton } from "@/components/ui/link";
import Nav from "./nav";
import { SiteFooter } from "./site-footer";
import MobileNav from "./mobile-nav";
import Background from "@/components/background";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F2F5F9]">
      <Nav />
      <MobileNav />
      <main className="flex-1 z-10">{children}</main>
      <SiteFooter />
      <Background />
    </div>
  );
}
