import { AdvantageGrid } from "@/components/sections/AdvantageGrid";
import { ComplianceHub } from "@/components/sections/ComplianceHub";
import { CustomerStories } from "@/components/sections/CustomerStories";
import { Footer } from "@/components/sections/Footer";
import { GlobalCoverage } from "@/components/sections/GlobalCoverage";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PlatformTabs } from "@/components/sections/PlatformTabs";
import { Reviews } from "@/components/sections/Reviews";
import { ScaleBlock } from "@/components/sections/ScaleBlock";
import { StatsRow } from "@/components/sections/StatsRow";
import { StepsCTA } from "@/components/sections/StepsCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <PlatformTabs />
        <ScaleBlock />
        <Testimonials />
        <StatsRow />
        <ComplianceHub />
        <AdvantageGrid />
        <GlobalCoverage />
        <CustomerStories />
        <StepsCTA />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
