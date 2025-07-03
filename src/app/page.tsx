import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CallToActionBanner from "@/pages/HomePage/CallToActionBanner";
import Faq from "@/pages/HomePage/Faq";
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
			<Faq />
			<CallToActionBanner />
			<Footer />
		</main>
	);
}
