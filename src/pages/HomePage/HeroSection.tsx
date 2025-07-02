import React from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="  flex flex-col ">
      <section className="max-w-2xl mx-auto  pt-36 flex items-center text-center justify-start flex-col">
        <div className="badge badge-lg shadow-lg mb-5 py-5 bg-zinc-50">
          ⚡Best Ecommerce CRM{" "}
        </div>
        <section className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-6xl font-bold">Your secure space in the cloud</h1>
          <p className="text-lg leading-relaxed font-medium">
            Unmatched cloud storage with top security, seamless integrations,
            and flexible plans. Take control today.
          </p>
        </section>

        <section className="flex flex-col  w-full mt-10 items-center justify-center gap-3 ">
          <button className="btn py-6  btn-primary w-64  rounded-xl ">
            <Zap className="mr-1 fill-amber-400 text-amber-400" />
            Started 14 days Trials
          </button>
          <button className="btn py-6 btn-outline w-64 rounded-xl ">
            See Watch Demo
          </button>
        </section>
      </section>
      <section className="w-full mt-14 max-w-7xl h-fit mx-auto">
        <section className="w-full flex items-center justify-center">
          <div className="tabs  flex items-center gap-4 justify-center tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-lg"
              aria-label="Product Management"
              defaultChecked
            />
            <div className="tab-content border-base-300 bg-base-100 ">
              <div className="mockup-browser shadow-xl border-base-200 rounded-5xl bg-base-100  w-full">
                <div className="mockup-browser-toolbar ">
                  <div className="input">https://daisyui.com</div>
                </div>
                <Image
                  src="/image_1.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-lg"
              aria-label="Inventory Management"
              
            />
            <div className="tab-content border-base-300 bg-base-100 ">
              <div className="mockup-browser border-base-200 rounded-3xl border bg-base-100  w-full">
                <div className="mockup-browser-toolbar ">
                  <div className="input">https://daisyui.com</div>
                </div>
                <Image
                  src="/image_1.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-lg"
              aria-label="Order Management"
            />
            <div className="tab-content border-base-300 bg-base-100 ">
              <div className="mockup-browser border-base-200 rounded-3xl border bg-base-100  w-full">
                <div className="mockup-browser-toolbar ">
                  <div className="input">https://daisyui.com</div>
                </div>
                <Image
                  src="/image_1.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
