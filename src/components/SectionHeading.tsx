import React from "react";

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
		<section className="mb-16 flex h-fit w-full flex-col items-center justify-center">
			<div className="badge text-primary">{badge}</div>
			<section className="mx-auto mt-3 flex w-full max-w-5xl flex-col text-center">
				<h2 className="text-5xl leading-14 font-bold">{title}</h2>
				<p className="text-lg leading-relaxed font-medium">{description}</p>
			</section>
		</section>
	);
};

export default SectionHeading;
