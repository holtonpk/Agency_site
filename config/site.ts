import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Agency",
  title:
    "Agency - a digital agency the specializes in building digital products",
  description: "a digital agency the specializes in building digital products",
  url: process.env.NEXT_PUBLIC_SITE_URL as string,
  logo: "/logo.png",
  calendly_url: "https://calendly.com/holtonpk/intro?month=2023-07",
  links: {
    twitter: "",
    github: "",
  },
  contact: {
    supportEmail: "support@arbilio.io",
  },
};
