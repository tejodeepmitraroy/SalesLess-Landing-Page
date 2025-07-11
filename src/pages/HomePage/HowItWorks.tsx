import SectionHeading from "@/components/SectionHeading";
import {
	Card,
	CardBody,
	CardDescription,
	CardImage,
	CardTitle,
} from "@/components/ui/Card";
import { MoveRight } from "lucide-react";

const HowItWorks = () => {
	return (
		<section className="bg-primary/10 mx-auto w-full px-4 py-24 sm:px-6 lg:px-16">
			<SectionHeading
				badge="How It Works"
				title="How salesLess helps your business grow"
				description="Everything you need to boost your sales and grow your business"
			/>
			<section className="mx-auto flex w-full max-w-6xl items-center gap-6">
				<Card>
					<CardImage src="/image_1.png" />
					<CardBody>
						<CardTitle>Step 1</CardTitle>
						<CardDescription>
							Track and analyze your sales performance with real-time data and
							insights.
						</CardDescription>
					</CardBody>
				</Card>
				<div className="flex w-fit items-center justify-center">
					<MoveRight />
				</div>
				<Card>
					<CardImage src="/image_1.png" />
					<CardBody>
						<CardTitle>Step 2</CardTitle>
						<CardDescription>
							Track and analyze your sales performance with real-time data and
							insights.
						</CardDescription>
					</CardBody>
				</Card>
				<div className="flex w-fit items-center justify-center">
					<MoveRight />
				</div>
				<Card>
					<CardImage src="/image_1.png" />
					<CardBody>
						<CardTitle>Step 3</CardTitle>
						<CardDescription>
							Track and analyze your sales performance with real-time data and
							insights.
						</CardDescription>
					</CardBody>
				</Card>
			</section>
		</section>
	);
};

export default HowItWorks;
