import HeroSection from "@/components/HeroSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import StepsSection from "@/components/StepsSection";
import UrgencySection from "@/components/UrgencySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background arabic-text" dir="rtl">
      <HeroSection />
      <DifferentiationSection />
      <SuccessStoriesSection />
      <StepsSection />
      <UrgencySection />
      <Footer />
    </div>
  );
};

export default Index;
