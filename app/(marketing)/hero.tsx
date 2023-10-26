import React from "react";
import {Icons} from "@/components/icons";
import {Button} from "@/components/ui/button";
import {LinkButton} from "@/components/ui/link";
import Image from "next/image";
import {Progress} from "@/components/ui/progress";
import {Separator} from "@/components/ui/separator";
import Noise from "@/components/noise";
import {siteConfig} from "@/config/site";

const Hero = () => {
  return (
    <>
      <div className=" grid grid-cols-2 mt-10 gap-16 justify-between  container">
        <div className="flex flex-col gap-6 pb-20 ">
          <h1 className="text-7xl font-bold text-primary">
            Digital marketing is hard.. not for us
          </h1>
          <p className="text-xl text-muted-foreground ">
            Tackling digital marketing can be a daunting task, but you
            don&apos;t have to face it alone. Our team of seasoned experts is
            here to ease the burden and guide you toward success.
          </p>
          <div className="flex">
            <LinkButton
              target="_blank"
              href={siteConfig.calendly_url}
              variant="default"
              className="text-base "
              size="lg"
            >
              Schedule a call
              <Icons.arrowRight className="w-5 h-5 ml-2" />
            </LinkButton>
            <Button variant="link" className="text-base underline" size="lg">
              View a demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8  w-full grid-rows-2 h-[500px] ">
          <div className="w-full relative">
            {/* <div className="absolute h-fit w-fit -translate-y-1/2 translate-x-1/2 left-[60%] shadow-lg  aspect-square bg-primary text-sky-400 rounded-full p-3 z-20">
              <Icons.phone className="w-8 h-8" />
            </div> */}
            <div className="w-full  h-full rounded-tl-[400px]  rounded-xl relative overflow-hidden">
              <Image
                src="/images/computer.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="w-full bg-slate-200 dark:bg-neutral-800 rounded-xl flex flex-col justify-between items-center relative p-6">
            <Noise />

            <h2 className="font-bold text-7xl ">230+</h2>
            <p className="text-muted-foreground">
              some big companies that we work with and trust us very much i need
              more text heres
            </p>
            <Progress value={73} />
          </div>
          <div className="w-full  col-span-2 rounded-xl bg-primary grid grid-cols-[50%_1fr] relative">
            <Noise />

            <div className="flex flex-col gap-4 justify-center pr-0 p-4 relative z-10">
              <div className="flex w-[80%] items-center gap-2">
                <div className="flex-grow">
                  <Separator orientation="horizontal" />
                </div>

                <p className=" text-background">Drive more traffic and sales</p>
              </div>
              <h1 className="text-4xl text-background">
                Drive more traffic and product sales
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-4 h-full items-end px-4 relative z-10">
              <div className="h-[50%] bg-violet-400 rounded-t-lg" />
              <div className="h-[75%] bg-violet-500 rounded-t-lg" />
              <div className="h-[90%] bg-violet-600 rounded-t-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
