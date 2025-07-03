"use client"
import SectionHeading from '@/components/SectionHeading';
import React, { useState } from 'react';
import { Card, CardBody, } from '@/components/ui/Card';
import { FiGift, FiZap } from 'react-icons/fi';
import { FaCrown, FaRocket } from "react-icons/fa";

const plans = [
  {
    id: 'free',
    icon: <FiGift className="w-8 h-8 text-primary" />,
    title: 'Free plan',
    description: 'Perfect for individuals looking for secure and affordable storage.',
    monthlyPrice: '$0/month',
    yearlyPrice: '$0/year',
    buttonText: 'Get started',
    features: [
      '10 GB secure cloud storage',
      'Basic file sharing',
      'Single device sync',
      'Basic upload and download speeds',
      'Community support'
    ]
  },
  {
    id: 'pro',
    icon: <FaRocket className="w-8 h-8 text-primary" />,
    title: 'Pro plan',
    description: 'Enjoy ample space to store and organize all your files without worry.',
    monthlyPrice: '$29/month',
    yearlyPrice: '$313/year',
    buttonText: 'Get started',
    isPopular: true,
    features: [
      '1 TB of high-speed storage',
      'Multi device synchronization',
      'Enhanced security features',
      'Priority customer support',
      'Customizable file sharing options'
    ]
  },
  {
    id: 'business',
    icon: <FaCrown className="w-8 h-8 text-primary" />,
    title: 'Business plan',
    description: 'Scale your storage needs without limits, perfect for teams and businesses.',
    monthlyPrice: '$59/month',
    yearlyPrice: '$637/year',
    buttonText: 'Get started',
    features: [
      'Unlimited cloud storage',
      'Advanced team collaboration tools',
      'Custom user permissions',
      'Dedicated account manager',
      'Reporting and analytics'
    ]
  }
];

const PaymentSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className='w-full bg-base-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <SectionHeading
          badge="Pricing"
          title="Flexible pricing plans"
          description="Choose the perfect plan that fits your needs"
        />
        
        <div className='flex justify-center mb-12'>
          <div className='flex items-center bg-base-200 rounded-full p-1'>
            <span className={`px-6 py-2 rounded-full ${!isYearly ? 'bg-base-100 shadow' : ''}`}>
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer px-2">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="w-14 h-7 bg-base-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-base-100 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-base-100 after:border-base-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
            </label>
            <div className='flex items-center'>
              <span className={`px-6 py-2 rounded-full ${isYearly ? 'bg-base-100 shadow' : ''}`}>
                Yearly <span className='text-primary ml-1'>10% off</span>
              </span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {plans.map((plan) => (
            <div key={plan.id} className='relative'>
              {plan.isPopular && (
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-medium px-3 py-1 rounded-full flex items-center'>
                  <FiZap className='mr-1' /> Most popular
                </div>
              )}
              <Card className={`h-full transition-all duration-300 hover:shadow-xl ${plan.isPopular ? 'border-2 border-primary' : 'border-base-300'}`}>
                <CardBody className='p-8 flex flex-col h-full'>
                  <div className='mb-6 flex items-center'>
                    {plan.icon}
                    <h3 className='text-2xl font-bold ml-3'>{plan.title}</h3>
                  </div>
                  <p className='text-base-content/70 mb-6'>{plan.description}</p>
                  <div className='mt-auto'>
                    <p className='text-3xl font-bold mb-6'>
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      {!isYearly && <span className='text-base font-normal text-base-content/60'>/month</span>}
                    </p>
                    <ul className='space-y-3 mb-8'>
                      {plan.features.map((feature, index) => (
                        <li key={index} className='flex items-center'>
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`btn w-full ${plan.isPopular ? 'btn-primary' : 'btn-outline'}`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
