import SectionHeading from "@/components/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";
import React from "react";

const FeaturesSection = () => {
	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-16">
			<SectionHeading
				badge="Features"
				title="Powerful Features"
				description="Everything you need to boost your sales and grow your business"
			/>

			<section className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-6">
				<BentoCard
					title="Collaboration made easy"
					className="bg-base-100 col-span-3"
					image="/image_1.png"
					description="Unmatched cloud storage with top security, seamless integrations, and flexible plans. Take control today."
				/>
				<BentoCard
					title="Sales Analytics"
					className="bg-base-100 col-span-3"
					image="/image_1.png"
					description="Track and analyze your sales performance with real-time data and insights."
				/>
				<BentoCard
					title="Sales Analytics"
					className="bg-base-100 col-span-2"
					image="/image_1.png"
					description="Track and analyze your sales performance with real-time data and insights."
				/>
				<BentoCard
					title="Sales Analytics"
					className="bg-base-100 col-span-2"
					image="/image_1.png"
					description="Track and analyze your sales performance with real-time data and insights."
				/>
				<BentoCard
					title="Sales Analytics"
					className="bg-base-100 col-span-2"
					image="/image_1.png"
					description="Track and analyze your sales performance with real-time data and insights."
				/>
			</section>
		</section>
	);
};

export default FeaturesSection;
