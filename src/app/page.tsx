import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooceUs from "@/components/WhyChooceUs";
import TestimonialCards from "@/components/TestimonialCards";
import { main } from "motion/react-client";


export default function Home() {
  return (
    
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grade-white/[0.02]">
    <HeroSection />
    <FeatureCourses />
    <WhyChooceUs />
    <TestimonialCards />
  </main>
  );
}
