import NavBar from "@/components/NavBar";
import FeaturesSection from "@/pages/HomePage/FeaturesSection";
import HeroSection from "@/pages/HomePage/HeroSection";


export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
