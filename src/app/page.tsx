import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContactSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
