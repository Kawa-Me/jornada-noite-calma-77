import VSLSection from "@/components/VSLSection";
import BenefitsSection from "@/components/BenefitsSection";
import CourseModulesSection from "@/components/CourseModulesSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* VSL Section */}
      <VSLSection />
      
      {/* Benefits Reinforcement */}
      <BenefitsSection />
      
      {/* Course Modules */}
      <CourseModulesSection />
      
      {/* Instructor Presentation */}
      <InstructorSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Main Offer */}
      <OfferSection />
      
      {/* Guarantee */}
      <GuaranteeSection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Final CTA */}
      <FinalCTASection />
    </main>
  );
};

export default Index;