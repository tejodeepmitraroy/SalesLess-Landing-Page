import React from "react";
import Image from "next/image";
const BentoCard = ({
	title,
	description,
	className,
	image,
}: {
	title: string;
	description: string;
	className?: string;
	image: string;
}) => {
	return (
		<div
			className={`${className} card border-base-300 h-full w-full rounded-2xl border-8`}
		>
			<figure className="aspect-video w-full">
				<Image
					src={image}
					alt="Shoes"
					width={1000}
					height={1000}
					className="w-ful h-full object-cover"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default BentoCard;
