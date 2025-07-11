"use client";
import React from "react";
import { Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const HeroSection = () => {
	return (
		<section className="flex flex-col">
			<section className="mx-auto flex max-w-3xl flex-col items-center justify-start pt-36 text-center">
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
					className="badge badge-lg mb-5 bg-zinc-50 px-6 py-4 text-sm shadow-lg"
				>
					⚡ Best Ecommerce CRM{" "}
				</motion.div>
				<section className="flex flex-col items-center justify-center gap-3">
					<motion.h1
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.7 }}
					>
						Finally, a CRM That Works Everywhere You Do
					</motion.h1>
					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						className="text-lg leading-relaxed font-medium"
					>
						Salesless is a headless CRM for Manage all sales activities of
						businesses focused on single dashboards.
					</motion.p>
				</section>

				<motion.section
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className="mt-10 flex w-full flex-col items-center justify-center gap-3"
				>
					<input
						type="text"
						placeholder="Enter your Email"
						className="input input-lg w-full max-w-xl"
					/>
					<button className="btn btn-primary w-64 rounded-xl py-6 text-white">
						<Zap className="mr-1 fill-amber-400 text-amber-400" />
						Join Waiting List
					</button>
					{/* <button className="btn btn-primary w-64 rounded-xl py-6">
						<Zap className="mr-1 fill-amber-400 text-amber-400" />
						Started 14 days Trials
					</button>
					<button className="btn btn-outline w-64 rounded-xl py-6">
						See Watch Demo
					</button> */}
				</motion.section>
			</section>
			<section className="mx-auto mt-20 h-fit w-full max-w-7xl">
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					className="tabs tabs-border flex items-center justify-center gap-4"
				>
					<input
						type="radio"
						name="my_tabs_2"
						className="tab text-lg"
						aria-label="Product Management"
						defaultChecked
					/>
					<div className="tab-content border-base-300 bg-base-100">
						<div className="mockup-browser border-base-200 rounded-5xl bg-base-100 w-full shadow-xl">
							<div className="mockup-browser-toolbar">
								<div className="input">https://daisyui.com</div>
							</div>
							<Image
								src="/image_1.png"
								alt=""
								width={1000}
								height={1000}
								className="w-full"
							/>
						</div>
					</div>

					<input
						type="radio"
						name="my_tabs_2"
						className="tab text-lg"
						aria-label="Inventory Management"
					/>
					<div className="tab-content border-base-300 bg-base-100">
						<div className="mockup-browser border-base-200 bg-base-100 w-full rounded-3xl border">
							<div className="mockup-browser-toolbar">
								<div className="input">https://daisyui.com</div>
							</div>
							<Image
								src="/image_1.png"
								alt=""
								width={1000}
								height={1000}
								className="w-full"
							/>
						</div>
					</div>

					<input
						type="radio"
						name="my_tabs_2"
						className="tab text-lg"
						aria-label="Order Management"
					/>
					<div className="tab-content border-base-300 bg-base-100">
						<div className="mockup-browser border-base-200 bg-base-100 w-full rounded-3xl border">
							<div className="mockup-browser-toolbar">
								<div className="input">https://daisyui.com</div>
							</div>
							<Image
								src="/image_1.png"
								alt=""
								width={1000}
								height={1000}
								className="w-full"
							/>
						</div>
					</div>
				</motion.div>
			</section>
		</section>
	);
};

export default HeroSection;
