"use client";
import SectionHeading from "@/components/SectionHeading";
import React, { useState } from "react";
import { Card, CardBody } from "@/components/ui/Card";
import { FiGift, FiZap } from "react-icons/fi";
import { FaCrown, FaRocket } from "react-icons/fa";

const plans = [
	{
		id: "free",
		icon: <FiGift className="text-primary h-8 w-8" />,
		title: "Free plan",
		description:
			"Perfect for individuals looking for secure and affordable storage.",
		monthlyPrice: "$0/month",
		yearlyPrice: "$0/year",
		buttonText: "Get started",
		features: [
			"10 GB secure cloud storage",
			"Basic file sharing",
			"Single device sync",
			"Basic upload and download speeds",
			"Community support",
		],
	},
	{
		id: "pro",
		icon: <FaRocket className="text-primary h-8 w-8" />,
		title: "Pro plan",
		description:
			"Enjoy ample space to store and organize all your files without worry.",
		monthlyPrice: "$29/month",
		yearlyPrice: "$313/year",
		buttonText: "Get started",
		isPopular: true,
		features: [
			"1 TB of high-speed storage",
			"Multi device synchronization",
			"Enhanced security features",
			"Priority customer support",
			"Customizable file sharing options",
		],
	},
	{
		id: "business",
		icon: <FaCrown className="text-primary h-8 w-8" />,
		title: "Business plan",
		description:
			"Scale your storage needs without limits, perfect for teams and businesses.",
		monthlyPrice: "$59/month",
		yearlyPrice: "$637/year",
		buttonText: "Get started",
		features: [
			"Unlimited cloud storage",
			"Advanced team collaboration tools",
			"Custom user permissions",
			"Dedicated account manager",
			"Reporting and analytics",
		],
	},
];

const PaymentSection = () => {
	const [isYearly, setIsYearly] = useState(false);

	return (
		<section className="bg-base-100 w-full px-4 py-16 sm:px-6 md:py-24 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<SectionHeading
					badge="Pricing"
					title="Flexible pricing plans"
					description="Choose the perfect plan that fits your needs"
				/>

				<div className="mb-12 flex justify-center">
					<div className="bg-base-200 flex items-center rounded-full p-1">
						<span
							className={`rounded-full px-6 py-2 ${!isYearly ? "bg-base-100 shadow" : ""}`}
						>
							Monthly
						</span>
						<label className="relative inline-flex cursor-pointer items-center px-2">
							<input
								type="checkbox"
								className="peer sr-only"
								checked={isYearly}
								onChange={() => setIsYearly(!isYearly)}
							/>
							<div className="bg-base-300 peer peer-checked:after:border-base-100 after:bg-base-100 after:border-base-300 peer-checked:bg-primary h-7 w-14 rounded-full peer-focus:outline-none after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6 after:rounded-full after:border after:transition-all after:content-[''] peer-checked:after:translate-x-7"></div>
						</label>
						<div className="flex items-center">
							<span
								className={`rounded-full px-6 py-2 ${isYearly ? "bg-base-100 shadow" : ""}`}
							>
								Yearly <span className="text-primary ml-1">10% off</span>
							</span>
						</div>
					</div>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{plans.map((plan) => (
						<div key={plan.id} className="relative">
							{plan.isPopular && (
								<div className="absolute -top-3 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
									<FiZap className="mr-1" /> Most popular
								</div>
							)}
							<Card
								className={`h-full transition-all duration-300 hover:shadow-xl ${plan.isPopular ? "border-primary border-2" : "border-base-300"}`}
							>
								<CardBody className="flex h-full flex-col p-8">
									<div className="mb-6 flex items-center">
										{plan.icon}
										<h3 className="ml-3 text-2xl font-bold">{plan.title}</h3>
									</div>
									<p className="text-base-content/70 mb-6">
										{plan.description}
									</p>
									<div className="mt-auto">
										<p className="mb-6 text-3xl font-bold">
											{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
											{!isYearly && (
												<span className="text-base-content/60 text-base font-normal">
													/month
												</span>
											)}
										</p>
										<ul className="mb-8 space-y-3">
											{plan.features.map((feature, index) => (
												<li key={index} className="flex items-center">
													<svg
														className="mr-2 h-5 w-5 text-green-500"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M5 13l4 4L19 7"
														></path>
													</svg>
													{feature}
												</li>
											))}
										</ul>
										<button
											className={`btn w-full ${plan.isPopular ? "btn-primary" : "btn-outline"}`}
										>
											{plan.buttonText}
										</button>
									</div>
								</CardBody>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PaymentSection;
