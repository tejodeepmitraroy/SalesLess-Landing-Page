import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import React from "react";

const CallToActionBanner = () => {
	return (
		<section className="bg-base-100 w-full py-24">
			<Card className="text-base-200 bg-primary/70 mx-auto flex w-full max-w-5xl flex-row border">
				<div
					// className={cn(
					//   "absolute inset-0",
					//   "[background-size:20px_20px]",
					//   // "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					//   // "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					//   "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
					// )}
					className={`absolute inset-0 [background-size:20px_20px] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]`}
				/>
				<section className="flex flex-col items-start justify-between gap-4 p-14">
					<CardTitle className="text-2xl font-bold">
						Call To Action Banner
					</CardTitle>

					<CardDescription className="text-lg font-medium">
						Unmatched cloud storage with top security, seamless integrations,
						and flexible plans. Take control today.
					</CardDescription>
				</section>
				<section className="flex w-full items-center justify-center"></section>
			</Card>
		</section>
	);
};

export default CallToActionBanner;
