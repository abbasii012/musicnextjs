import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooceUs from "@/components/WhyChooceUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import { main } from "motion/react-client";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grade-white/[0.02]">
      <HeroSection key="hero-section" />
      <FeatureCourses key="feature-courses" />
      <WhyChooceUs key="why-choose-us" />
      <TestimonialCards key="testimonial-cards" />
      <UpComingWebinars key="upcoming-webinars" />
      <Instructors key="instructors" />
      <Footer key="footer" />
    </main>
  );
}
