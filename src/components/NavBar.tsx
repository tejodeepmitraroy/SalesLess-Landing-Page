import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className=" w-full fixed pt-6 bg-transparent top-0 z-50 flex items-center justify-center">
      <nav className="navbar bg-base-100 w-full shadow-lg max-w-4xl mx-auto rounded-2xl">
        <div className="flex navbar-start w-full gap-3 items-center">
          <Image src="/logo/logo.png" alt="Logo" width={30} height={30} />
          <Link href="/" className=" font-bold text-2xl">
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
              <Link href="/about" className=" text-zinc">
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
        <div className="flex gap-3 navbar-end w-full justify-end">
          <button className="btn btn-ghost rounded-full">Sign In</button>
          <button className="btn btn-primary rounded-2xl btn-outline">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
