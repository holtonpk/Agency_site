"use client";

import Link from "next/link";
import Image from "next/image";
import {useParams, useSelectedLayoutSegment} from "next/navigation";
import useScroll from "@/lib/hooks/use-scroll";
import clsx from "clsx";
import {siteConfig} from "@/config/site";
import {LinkButton} from "@/components/ui/link";
import {marketingConfig} from "@/config/marketing";
import {cn} from "@/lib/utils";

const navItems = ["pricing", "changelog"];

const transparentHeaderSegments = new Set(["metatags", "pricing"]);

export default function Nav() {
  const {domain = "dub.sh"} = useParams() as {domain: string};

  const scrolled = useScroll(20);
  const segment = useSelectedLayoutSegment();

  return (
    <div
      className={clsx(`sticky inset-x-0  top-0 z-30 w-full transition-all`, {
        "border-b-border border-b bg-background/75 backdrop-blur-lg": scrolled,
        "border-b-border border-b bg-background":
          segment && !transparentHeaderSegments.has(segment),
      })}
    >
      <div className="mx-auto w-full  container ">
        <div className="flex h-20 items-center justify-between w-full">
          <div className="flex justify-between md:justify-start w-full items-center sticky  md:gap-10 ">
            <Link
              href={
                domain === "dub.sh"
                  ? "/"
                  : `https://dub.sh?utm_source=${domain}&utm_medium=referral&utm_campaign=custom-domain`
              }
              className="flex  items-center"
            >
              <div className="h-6 w-6 rounded-br-full bg-violet-500 relative">
                <div className="h-4 w-4 rounded-br-full bg-primary  absolute right-0 bottom-0 "></div>
              </div>
              <span className="text-2xl p-2 text-primary font-bold  flex items-center ">
                <span className="ml-1 text-primary">{siteConfig.name}</span>
              </span>
            </Link>

            {marketingConfig.mainNav?.length ? (
              <nav className="hidden gap-6 md:flex">
                {marketingConfig.mainNav?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                      item.href.startsWith(`/${segment}`)
                        ? "text-foreground"
                        : "text-foreground/60",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>

          <div className="hidden items-center space-x-6 sm:flex">
            <LinkButton
              href="/onboarding/register"
              variant={scrolled ? "default" : "outline"}
              size="lg"
              className="px-4 whitespace-nowrap"
            >
              Login
            </LinkButton>
            <LinkButton
              href="/onboarding/register"
              variant={scrolled ? "default" : "default"}
              size="lg"
              className="px-4 whitespace-nowrap"
            >
              Get Started
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
