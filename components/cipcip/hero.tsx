"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/craft";
import { ArrowRight } from "lucide-react";

// Define prop types for TypeWriter
type TypeWriterProps = {
  text: string;
  speed?: number;
};

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="inline-block" aria-live="polite">
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

// Define prop types for ColorWaveText
type ColorWaveTextProps = {
  text: string;
};

const ColorWaveText: React.FC<ColorWaveTextProps> = ({ text }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const words = text.split(" ");
  const totalWords = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalWords);
    }, 500);

    return () => clearInterval(interval);
  }, [totalWords]);

  return (
    <div className="inline-flex flex-wrap justify-center gap-x-2 gap-y-2">
      {words.map((word, index) => (
        <span
          key={index}
          className={`transition-colors duration-500 ${
            index === activeIndex ? "text-orange-500" : "text-current"
          }`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Section className="h-full flex items-center justify-center py-16 md:py-24">
      <Container className="max-w-7xl mx-auto">
        {" "}
        {/* Changed to max-w-7xl */}
        <div className="flex flex-col gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold tracking-wide uppercase">
              <TypeWriter text="Welcome!" speed={150} />
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <Balancer>
                <ColorWaveText text="ChaSA Platform with chatbot automation, 
saves freelancers time." />
              </Balancer>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <Balancer>
              An innovative platform developed by our teams, featuring a chatbot that 
              searches for e-commerce analyst.
              </Balancer>
            </h2>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              asChild
              className="group bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
            >
              <Link
                href="http://10.15.42.102:3442"
                className="flex items-center gap-2"
                aria-label="Try our platform"
              >
                Try our platform!
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
