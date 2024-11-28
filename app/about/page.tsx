import React from "react";
import { Section, Container } from "@/components/craft";

type TeamMember = {
  role: string;
  name: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    role: "Project Manager",
    name: "Andyana M.N.",
    image: "/andy.JPG", // Corrected path
  },
  {
    role: "Software Developer",
    name: "Moh. Sulthan A.R.",
    image: "/sudo.JPG", // Corrected path
  },
  {
    role: "QA Engineer",
    name: "Salmaa Satiha D.R.P.",
    image: "/salma.JPG", // Corrected path
  },
  {
    role: "Business Analyst",
    name: "Vira Datry M.",
    image: "/vira.JPG", // Corrected path
  },
  {
    role: "UI/UX Designer",
    name: "Fathika Afrine A.",
    image: "/IMG_8606.JPG"
  },
];

const ServicesAndTeam = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-12">
          {/* Services Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">WE OFFER EXCITING SERVICES</h2>
            <p className="text-xl">
              Strategic digital services to{" "}
              <span className="text-[#ff5722]">business</span> and{" "}
              <span className="italic">corporations</span>
            </p>
            <button className="bg-[#2a2d31] px-6 py-2 rounded-md w-fit">
              Contact Us
            </button>
          </div>

          {/* Team Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl">
              OUR <span className="text-[#ff5722]">DESIGN</span> EXPERTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  {member.image && (
                    <img
                      src={member.image} // Use the image path from member
                      alt={member.name}
                      className="w-full aspect-square bg-gray-300 rounded-lg object-cover"
                    />
                  )}
                  
                  <div className="text-center">
                    <p className="font-medium">{member.role}</p>
                    <p className="text-sm text-gray-400">{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex gap-12">
            <div className="flex-1">
              <h2 className="text-4xl mb-2">
                LET <span className="text-[#ff5722]">US</span> KNOW
              </h2>
              <h3 className="text-2xl italic mb-4">YOUR QUERRIES</h3>
              <p className="text-gray-400">
                Leave your details and we will contact with you
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-[#2a2d31] border-none"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full p-3 rounded-md bg-[#2a2d31] border-none"
              />
              <button className="bg-[#ff5722] px-6 py-3 rounded-full self-end">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesAndTeam;
