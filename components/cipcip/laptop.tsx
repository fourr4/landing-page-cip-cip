import React from "react";
import Image from "next/image";
import { Section, Container } from "@/components/craft";

const TryCartElSection = () => {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Left Side - Laptop Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              {/* Laptop Image */}
              <div className="absolute left-0 right-0 mx-auto transition-all duration-300 hover:scale-105 hover:z-10">
                <Image
                  src="/1.png"
                  alt="CartEl Platform on Laptop"
                  width={600}
                  height={375}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - CTA Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Try ChaSA for <span className="text-[#FF4D4D]">Free</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Get access to tools for finding clients and seamless
              communication. Start working more efficiently today!
            </p>
            <div className="pt-4">
              <a
                href="http://10.15.42.102:3442" // Ganti "/your-destination" dengan URL yang sesuai
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1a1f2e]"
              >
                Try our platform!
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TryCartElSection;
