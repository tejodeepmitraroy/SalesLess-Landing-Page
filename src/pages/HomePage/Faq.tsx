import SectionHeading from "@/components/SectionHeading";

const Faq = () => {
	const faqItems = [
		{
			id: "faq1",
			question: "How do I create an account?",
			answer:
				'Click the "Sign Up" button in the top right corner and follow the registration process.',
		},
		{
			id: "faq2",
			question: "I forgot my password. What should I do?",
			answer:
				'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
		},
		{
			id: "faq3",
			question: "How do I update my profile information?",
			answer:
				'Go to "My Account" settings and select "Edit Profile" to make changes.',
		},
	];

	return (
		<section className="mx-auto w-full px-4 py-24 sm:px-6 lg:px-16">
			<SectionHeading
				badge="Frequently Asked Questions"
				title="FAQ"
				description="Answers to common questions about our service"
			/>
			<div className="mx-auto w-full max-w-xl space-y-3">
				{faqItems.map((item) => (
					<div key={item.id} className="collapse-plus collapse drop-shadow-xl">
						<input
							type="radio"
							name="faq-accordion"
							id={item.id}
							className="peer"
						/>
						<label
							htmlFor={item.id}
							className="collapse-title bg-base-100 peer-checked:bg-primary peer-checked:bg-opacity-10 flex cursor-pointer items-center rounded-lg font-semibold transition-colors duration-200 peer-checked:text-white"
						>
							{item.question}
						</label>
						<div className="collapse-content">
							<p className="text-base-content pt-5 text-sm">{item.answer}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Faq;
