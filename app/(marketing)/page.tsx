import React from "react";
import Nav from "./nav";
import Hero from "./hero";
import Services from "./services";
import FAQ from "./faq";
import { constructMetadata } from "@/lib/utils";
import Pricing from "./pricing";
import Benefits from "./benefits";
export const metadata = constructMetadata({});

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <Pricing />
      <FAQ />
    </>
  );
};

export default page;
