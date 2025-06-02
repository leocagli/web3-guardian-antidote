
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { CharactersSection } from "@/components/CharactersSection";
import { GamificationSection } from "@/components/GamificationSection";
import { TechnicalSection } from "@/components/TechnicalSection";
import { ImpactSection } from "@/components/ImpactSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CharactersSection />
      <GamificationSection />
      <TechnicalSection />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
