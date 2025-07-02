import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-transparent text-base-content grid-rows-2 px-4 sm:px-6 lg:px-16 py-10 border-t border-base-300">
      <section className=" lg:flex-row  lg:gap-6 grid grid-cols-2 md:grid-cols-4 w-full max-w-5xl mx-auto gap-6 ">
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Image src="/logo/logo.png" alt="" width={40} height={40} />
            SalesSync
          </h2>
          <p>
            Unmatched cloud storage with top security, seamless integrations,
            and flexible plans. Take control today.
          </p>
          <div className="flex gap-2">
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaLinkedin className="text-2xl" />
          </div>
        </section>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </section>
      <section className="w-full max-w-6xl mx-auto">
        <p>Copyright © 2023 - All right reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
