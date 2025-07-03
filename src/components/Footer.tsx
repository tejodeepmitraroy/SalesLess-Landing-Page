import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
	const footerLink = [
		{
			title: "Products",
			links: ["Docs by Salesless", "Blogs", "SDK by Salesless"],
		},
		{
			title: "Company",
			links: ["About us", "Contact", "Jobs", "Press kit"],
		},
		{
			title: "Legal",
			links: ["Terms of use", "Privacy policy", "Cookie policy"],
		},
	];
	return (
		<footer className="footer sm:footer-horizontal bg-base-100 text-base-content border-base-300 flex flex-col gap-0 border-t">
			<section className="mx-auto flex w-full max-w-[90rem] py-28">
				<section className="grid w-full grid-cols-1 gap-5 md:grid-cols-4">
					<h2 className="col-span-3 flex items-center gap-2 text-2xl font-bold">
						<Image src="/logo/logo.png" alt="" width={40} height={40} />
						SalesSync
					</h2>
					<p className="col-span-2 text-sm">
						Unmatched cloud storage with top security, seamless integrations,
						and flexible plans. Take control today.
					</p>
					<div className="col-span-3 flex gap-2">
						<FaFacebook className="text-base-content text-2xl" />
						<FaTwitter className="text-base-content text-2xl" />
						<FaInstagram className="text-base-content text-2xl" />
						<FaLinkedin className="text-base-content text-2xl" />
					</div>
				</section>
				<section className="grid w-full grid-cols-2 gap-5 md:grid-cols-3">
					{footerLink.map((item, index) => {
						return (
							<nav className="flex flex-col gap-2" key={index}>
								<h6 className="footer-title font-medium">{item.title}</h6>
								{item.links.map((link, index) => {
									return (
										<Link href={link} className="link link-hover" key={index}>
											{link}
										</Link>
									);
								})}
							</nav>
						);
					})}
				</section>
			</section>
			<aside className="bg-base-200 w-full p-8">
				<section className="mx-auto flex w-full max-w-[90rem] items-center justify-between">
					<p>
						Copyright © {new Date().getFullYear()} - All right reserved by ACME
						Industries Ltd
					</p>
					<section className="flex items-center gap-2">
						<a href="#">Terms of use</a>
						<a href="#">Privacy policy</a>
						<a href="#">Cookie policy</a>
					</section>
				</section>
			</aside>
		</footer>
	);
};

export default Footer;
