import React from "react";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import Noise from "@/components/noise";
const Services = () => {
  return (
    // <div className="bg-primary mt-20 pb-10">
    <div
      id="services"
      className="container relative p-8 mt-10 pb-10 bg-primary rounded-xl overflow-hidden"
    >
      <Noise />

      <div className="grid grid-cols-2 gap-6 items-center relative z-10">
        <span className="text-7xl text-background font-bold ">
          What
          <strong className="text-violet-500 mx-3">services</strong>
          do we offer?
        </span>
        <p className="text-muted-foreground text-sm">
          With a perfect blend of creativity, technical expertise, and a deep
          understanding of user experience, we design and develop websites that
          are both aesthetically pleasing and highly functional. Our goal is to
          ensure that your website not only reflects your brand identity but
          also provides a seamless and enjoyable browsing experience for your
          visitors.
        </p>
      </div>
      {/* <div className="grid grid-cols-3 gap-8 h-[300px] w-full mt-10">
        <div className="bg-muted-foreground  rounded-lg"></div>
        <div className="bg-muted-foreground col-span-2  rounded-lg"></div>
      </div> */}
      <div className="flex w-full items-center justify-between text-sm h-[300px] mt-10">
        <FeatureCard
          title="Design"
          description="Our UI/UX design team combines creativity and functionality to deliver captivating user experiences. From intuitive interfaces to seamless interactions, we create visually appealing designs that engage your audience and elevate your brand's digital presence."
          icon="paintBrush"
        />
        <Separator orientation="vertical" className="bg-muted-foreground" />
        <FeatureCard
          title="Devloment"
          description="Our web development services deliver customized, high-quality websites that meet your unique requirements. With expertise in the latest technologies, we create responsive and user-friendly platforms that enhance your online presence and drive business growth."
          icon="code"
        />
        <Separator orientation="vertical" className="bg-muted-foreground" />

        <FeatureCard
          title="Marketing"
          description="Boost your online visibility and drive results with our comprehensive marketing services. From SEO and PPC advertising to social media campaigns, we employ data-driven strategies to increase your website's reach, attract targeted traffic, and generate leads that convert into valuable customers."
          icon="badgeDollarSign"
        />
      </div>
    </div>
    // </div>
  );
};

export default Services;

const FeatureCard = ({
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
    <div className="flex flex-col w-[300px]">
      {/* <div className="aspect-square p-3 rounded-lg bg-accent h-fit w-fit"> */}
      <Icon className="h-8 w-8 text-background " />
      {/* </div> */}
      <h1 className="text-4xl mt-8 text-background ">{title}</h1>
      <p className="mt-3 text-sm text-muted-foreground ">{description}</p>
    </div>
  );
};
