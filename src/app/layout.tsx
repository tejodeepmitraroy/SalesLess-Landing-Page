import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "SalesLess",
	description:
		"SalesLess is a headless sales analytics platform that helps you to track and analyze your sales performance with real-time data and insights.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<SmoothScrolling>{children}</SmoothScrolling>
			</body>
		</html>
	);
}
