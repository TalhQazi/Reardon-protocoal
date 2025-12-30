import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SplitPathways } from "@/components/SplitPathways";
import { SciencePreview } from "@/components/SciencePreview";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        <SplitPathways />
        <SciencePreview />
      </main>

      <Footer />
      <PhilosophyBar />
    </div>
  );
};

export default Index;
