"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const NavBar = () => {
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setIsTop(window.scrollY < 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	console.log(isTop);
	return (
		<div className="fixed top-0 z-50 flex w-full items-center justify-center bg-transparent pt-4">
			<motion.nav
				initial={{ width: "100%" }}
				animate={{
					width: isTop ? "100%" : "fit-content",
					y: isTop ? 0 : 10,
				}}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				className="navbar bg-base-100 mx-auto w-full max-w-5xl rounded-2xl shadow-lg"
			>
				<div className="navbar-start flex w-full items-center gap-3">
					<Image src="/logo/logo.png" alt="Logo" width={30} height={30} />
					<Link href="/" className="text-2xl font-bold">
						SalesSync
					</Link>
				</div>
				<div className="navbar-center hidden px-6 lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<details>
								<summary>Products</summary>
								<ul className="p-2">
									<li>
										<Link href="/crm" className="">
											CRM
										</Link>
									</li>
									<li>
										<Link href="/ai" className=" ">
											AI
										</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<Link href="/about" className="text-zinc">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/pricing" className=" ">
								Pricing
							</Link>
						</li>{" "}
						<li>
							<a href="/blog">Blog</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end flex w-full justify-end gap-3">
					{/* <button className="btn btn-ghost rounded-full">Sign In</button> */}
					<button className="btn btn-primary rounded-2xl text-white">
						Join Waiting List
					</button>
				</div>
			</motion.nav>
		</div>
	);
};

export default NavBar;
