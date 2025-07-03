import Image from "next/image";
import React from "react";

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={`${className} card bg-base-100 border-base-300 h-full w-full rounded-2xl border-8`}
		>
			{children}
		</div>
	);
};

export const CardBody = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return <div className={`${className} card-body`}>{children}</div>;
};

export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return <h3 className={`${className} card-title`}>{children}</h3>;
};

export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return <p className={`${className} card-description text-sm`}>{children}</p>;
};

export const CardImage = ({
	className,
	src,
}: {
	className?: string;
	src: string;
}) => {
	return (
		<figure className={`${className} card-image`}>
			<Image src={src} alt="" width={1000} height={1000} />
		</figure>
	);
};
