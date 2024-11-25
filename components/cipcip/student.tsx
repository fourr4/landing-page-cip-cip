import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const TalentedStudentsSection = () => {
  const achievements = [
    {
      id: 1,
      text: "Development of a working platform used by freelancers to improve their productivity and find clients.",
    },
    {
      id: 2,
      text: "Successful implementation of their own freelance projects: Students not only created CartEl, they also use the platform for their own work, improving it based on real-world experience.",
    },
    {
      id: 3,
      text: "Development of a working platform used by freelancers to improve their productivity and find clients.",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                Created by{" "}
                <span className="text-orange-500">Talented Students</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                This platform was developed by students of our program who
                gained invaluable experience in developing a real product.
                Thanks to their talent and diligence, the product helps
                thousands of competitors improve their workflow.
              </p>

              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-orange-500 mb-6">
                  Their achievements include :
                </h3>

                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-2/5">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/all.JPG"
                alt="Students working together"
                width={600}
                height={400}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentedStudentsSection;
