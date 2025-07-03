import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<div className="fixed top-0 z-50 flex w-full items-center justify-center bg-transparent pt-6">
			<nav className="navbar bg-base-100 mx-auto w-full max-w-4xl rounded-2xl shadow-lg">
				<div className="navbar-start flex w-full items-center gap-3">
					<Image src="/logo/logo.png" alt="Logo" width={30} height={30} />
					<Link href="/" className="text-2xl font-bold">
						SalesSync
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
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
					<button className="btn btn-ghost rounded-full">Sign In</button>
					<button className="btn btn-primary rounded-2xl">Get Started</button>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
