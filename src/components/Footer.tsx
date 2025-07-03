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
    <footer className="footer sm:footer-horizontal bg-base-100 text-base-content flex gap-0 flex-col  border-t border-base-300">
      <section className=" flex w-full max-w-[90rem] mx-auto py-28 ">
        <section className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
          <h2 className="text-2xl col-span-3 font-bold flex items-center gap-2">
            <Image src="/logo/logo.png" alt="" width={40} height={40} />
            SalesSync
          </h2>
          <p className="text-sm col-span-2">
            Unmatched cloud storage with top security, seamless integrations,
            and flexible plans. Take control today.
          </p>
          <div className="flex gap-2 col-span-3">
            <FaFacebook className="text-2xl text-base-content" />
            <FaTwitter className="text-2xl text-base-content" />
            <FaInstagram className="text-2xl text-base-content" />
            <FaLinkedin className="text-2xl text-base-content" />
          </div>
        </section>
        <section className="w-full grid grid-cols-2 md:grid-cols-3 gap-5">
          {footerLink.map((item, index) => {
            return (
              <nav className="flex flex-col gap-2" key={index}>
                <h6 className="footer-title font-medium">{item.title}</h6>
                {item.links.map((link, index) => {
                  return <Link href={link} className="link link-hover " key={index}>{link}</Link>;
                })}
              </nav>
            );
          })}
        </section>
      </section>
      <aside className="w-full  p-8  bg-base-200">
        <section className="flex w-full max-w-[90rem] mx-auto items-center justify-between">
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
