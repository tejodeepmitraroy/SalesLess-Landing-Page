"use client";
import React from "react";
import { Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const HeroSection = () => {
	return (
		<section className="flex flex-col">
			<section className="mx-auto flex max-w-2xl flex-col items-center justify-start pt-36 text-center">
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
					className="badge badge-lg mb-5 bg-zinc-50 py-5 shadow-lg"
				>
					⚡Best Ecommerce CRM{" "}
				</motion.div>
				<motion.section
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
					className="flex flex-col items-center justify-center gap-3"
				>
					<h1 className="text-6xl font-bold">Your secure space in the cloud</h1>
					<p className="text-lg leading-relaxed font-medium">
						Transform your sales with AI superpowers
					</p>
				</motion.section>

				<motion.section
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className="mt-10 flex w-full flex-col items-center justify-center gap-3"
				>
					<button className="btn btn-primary w-64 rounded-xl py-6">
						<Zap className="mr-1 fill-amber-400 text-amber-400" />
						Started 14 days Trials
					</button>
					<button className="btn btn-outline w-64 rounded-xl py-6">
						See Watch Demo
					</button>
				</motion.section>
			</section>
			<section className="mx-auto mt-14 h-fit w-full max-w-7xl">
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
