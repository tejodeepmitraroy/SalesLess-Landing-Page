import SectionHeading from "@/components/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";
import React from "react";



const FeaturesSection = () => {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-16 max-w-6xl mx-auto">
      <SectionHeading
        badge="Features"
        title="Powerful Features"
        description="Everything you need to boost your sales and grow your business"
      />

      <section className="mt-16  grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        <BentoCard
          title="Collaboration made easy"
          className="col-span-3 bg-base-100"
          image="/image_1.png"
          description="Unmatched cloud storage with top security, seamless integrations, and flexible plans. Take control today."
        />
        <BentoCard
          title="Sales Analytics"
          className="col-span-3 bg-base-100"
          image="/image_1.png"
          description="Track and analyze your sales performance with real-time data and insights."
        />
        <BentoCard
          title="Sales Analytics"
          className="col-span-2 bg-base-100"
          image="/image_1.png"
          description="Track and analyze your sales performance with real-time data and insights."
        />
        <BentoCard
          title="Sales Analytics"
          className="col-span-2 bg-base-100"
          image="/image_1.png"
          description="Track and analyze your sales performance with real-time data and insights."
        />
        <BentoCard
          title="Sales Analytics"
          className="col-span-2 bg-base-100"
          image="/image_1.png"
          description="Track and analyze your sales performance with real-time data and insights."
        />
      </section>
    </section>
  );
};

export default FeaturesSection;
