"use client";
import React from "react";
import { motion } from "motion/react";

const SectionHeading = ({
	badge,
	title,
	description,
}: {
	badge: string;
	title: string;
	description: string;
}) => {
	return (
		<motion.section
			viewport={{ amount: 0.1, once: true }}
			initial={{ y: 30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.7 }}
			className="mb-16 flex h-fit w-full flex-col items-center justify-center"
		>
			<div className="badge text-primary">{badge}</div>
			<section className="mx-auto mt-3 flex w-full max-w-5xl flex-col text-center">
				<h2 className="text-5xl leading-14 font-bold">{title}</h2>
				<p className="text-lg leading-relaxed font-medium">{description}</p>
			</section>
		</motion.section>
	);
};

export default SectionHeading;
