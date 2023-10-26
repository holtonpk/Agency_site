import React from "react";
import {Icons} from "@/components/icons";
import Noise from "@/components/noise";
const benefits: {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}[] = [
  {
    title: "Top-notch quality",
    description:
      "Insane design quality at your fingertips whenever you need it.",
    icon: "paintBrush",
  },
  {
    title: "Flexible and Scalable",
    description: "Scale up or down as needed, and pause or cancel at anytime.",
    icon: "shrub",
  },
  {
    title: "Fixed monthly rate",
    description: "No surprises here! Pay the same fixed price each month.",
    icon: "money",
  },
  {
    title: "Unique and all yours",
    description:
      "We don't reuse designs. You get 100% ownership of everything we create.",
    icon: "fingerprint",
  },
];

const Benefits = () => {
  return (
    <div id="benefits" className="w-full mt-10  p-8 py-20 pb-10 relative">
      <Noise />

      <h1 className="text-5xl font-bold text-center">Membership benefits</h1>
      <p className="text-xl text-center">
        Perks so good you'll never need to go anywhere else for your design.
        Seriously.
      </p>
      <div className="grid grid-cols-4 gap-10 mt-10 z-10 relative">
        {benefits.map((benefit, i) => (
          <Benefit
            key={i}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;

const Benefit = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}) => {
  const Icon = Icons[icon];

  return (
    <div className="flex flex-col gap-3 items-center justify-center  rounded-lg p-6 ">
      <div className="w-16 h-16 bg-violet-400 text-white  rounded-lg flex items-center justify-center">
        <Icon />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-center">{description}</p>
    </div>
  );
};
