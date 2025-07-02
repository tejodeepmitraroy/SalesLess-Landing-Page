import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import FeaturesSection from "@/pages/HomePage/FeaturesSection";
import HeroSection from "@/pages/HomePage/HeroSection";
import HowItWorks from "@/pages/HomePage/HowItWorks";
import PaymentSection from "@/pages/HomePage/PaymentSection";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <PaymentSection />
      <Footer />
    </main>
  );
}
