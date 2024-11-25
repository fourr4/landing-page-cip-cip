import { Container, Section } from "@/components/craft";
import { StaticImageData } from "next/image";

// assets
import searchIcon from "@/public/search.png";
import messageIcon from "@/public/message.png";
import correspondenceIcon from "@/public/corresponden.png";
import bubbleIcon from "@/public/bubble.png";

type Feature = {
  icon: StaticImageData;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: searchIcon,
    title: "Automatic E-Commerce Filtering",
    description: "Smart filtering system for e-commerce data",
  },
  {
    icon: messageIcon,
    title: "Correspondence with clients",
    description: "Seamless communication management",
  },
  {
    icon: correspondenceIcon,
    title: "Notifications of new offers",
    description: "Stay updated with latest opportunities",
  },
  {
    icon: bubbleIcon,
    title: "Integration with messengers",
    description: "Connect with popular messaging platforms",
  },
];

type FeatureCardProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-5 p-5 transition-transform transform hover:scale-105 hover:bg-gray-800 rounded-lg">
      <img src={icon.src} alt={title} className="h-16 w-16" />
      <div className="space-y-1">
        <h3 className="font-semibold text-xl text-white">{title}</h3>
        <p className="text-base text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default function FeatureSection() {
  return (
    <Section className="py-16 md:py-24">
      <Container className="max-w-7xl mx-auto">
        {" "}
        {/* Adjusted max-width here */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Key <span className="text-orange-500">features</span> of our CartEl
            platform
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-none mx-auto">
          {" "}
          {/* Changed to max-w-none */}
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
