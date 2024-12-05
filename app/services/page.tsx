"use client";

import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <Section className="py-16 animate-fade-in">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-4xl font-extrabold leading-tight animate-fade-down">
          Find Your Perfect Analyst Plan
        </h2>
        <p className="text-lg opacity-70 max-w-xl mx-auto animate-fade-down">
          <Balancer>
            Choose the plan that empowers your business journey with personalized analyst and expert guidance
          </Balancer>
        </p>

        <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* Starter Insights Plan */}
          <div className="flex flex-col rounded-2xl bg-slate-800 p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 animate-slide-in">
            <h3 className="text-xl font-semibold text-white">
              Starter Insights
            </h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[#FA7513]">Rp 0</span>
            </div>
            <ul className="mt-6 space-y-4 text-left text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Only 5 interactions/month</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gain access to advanced features, including the ability to download data in JSON and CSV formats</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unlock comprehensive reviews and ratings from multiple e-commerce platforms, providing you with valuable insights for your analysis</span>
              </li>
            </ul>
            <a href="http://10.15.42.102:3442/" target="_blank" rel="noopener noreferrer">
              <Button
                className="mt-8 transform transition-transform duration-300 hover:scale-105"
                variant="outline"
              >
                Free Trial
              </Button>
            </a>
          </div>

          {/* Conversion Booster Plan */}
          <div className="flex flex-col rounded-2xl bg-slate-800 p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 animate-slide-in">
            <h3 className="text-xl font-semibold text-white">
              Conversion Booster
            </h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[#FA7513]">
                Rp 79.000
              </span>
            </div>
            <ul className="mt-6 space-y-4 text-left text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unlimited interactions with no monthly cap</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gain access to advanced features, including the ability to download data in JSON and CSV formats</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unlock comprehensive reviews and ratings from multiple e-commerce platforms, providing you with valuable insights for your analysis</span>
              </li>
            </ul>
            <a href="http://10.15.42.102:3442/" target="_blank" rel="noopener noreferrer">
              <Button className="mt-8 transform transition-transform duration-300 hover:scale-105">
                Upgrade to Premium
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesPage;
