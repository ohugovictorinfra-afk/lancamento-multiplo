import HeroSection from "@/components/HeroSection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import ForWhomSection from "@/components/ForWhomSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import ComparisonSection from "@/components/ComparisonSection";
import LiveClassSection from "@/components/LiveClassSection";
import AboutLuizSection from "@/components/AboutLuizSection";
import FinalCTASectionV2 from "@/components/FinalCTASectionV2";
import SocialProofSection from "@/components/SocialProofSection";
import { useEffect } from "react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export default function HomeV2() {
  const { trackPageView } = useFacebookPixel();

  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <HeroSection />
        <WhatYouLearnSection />
        <ForWhomSection />
        <ObjectionsSection />
        <ComparisonSection />
        <LiveClassSection />
        <AboutLuizSection />
        <FinalCTASectionV2 />
        <SocialProofSection />
      </main>
    </div>
  );
}
