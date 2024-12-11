"use client"

import { Hero5 } from "@/components/landingpage/heroes";
import { CTA2 } from "@/components/landingpage/cta";
import { FAQ2 } from "@/components/landingpage/faq";
import { Stats2 } from "@/components/landingpage/stats";
import { Contact1 } from "@/components/landingpage/contact";

const LandingPage = () => {
  return (
    <div>
      <Hero5 />
      <CTA2 />
      <Stats2 />
      <FAQ2 />
      <Contact1/>
    </div>
  );
};

export default LandingPage;
