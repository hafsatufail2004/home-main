import React from "react";
import Image from "next/image";
import Button from "./Button";

export interface Item {
  id: number;
  image: string;
  title: string;
  description: string;
}

const WhatWeDo = () => {
  const data: Item[] = [
    {
      id: 1,
      image: "/scheduling-icon.jpg",
      title: "Scheduling",
      description:
        "With Knock Now™, prospective renters can self-schedule tours from any website or app, increasing tour volume 2.5x with no additional marketing expenses..",
    },
    {
      id: 2,
      image: "/attribution-icon.jpg",
      title: "Attribution",
      description: "With source attribution data, automated campaigns, and tools for every marketing channel, Knock® makes marketing easier (and smarter) than ever before.",
    },
    {
      id: 3,
      image: "/messaging-icon.jpg",
      title: "Messaging",
      description: "Communicate with high-quality leads across marketing channels — including email, text, voice, and chat — all through a single screen.",
    },
    {
      id: 4,
      image: "/task-management-icon.jpg",
      title: "Task Management",
      description: "Increase efficiency and drive NOI with a gamified leasing experience that prevents prospects from falling through the cracks and helps onsite teams hit their goals.",
    },
    {
      id: 5,
      image: "/visitor-experience-icon.jpg",
      title: "Visitor Experience",
      description: "Create a modern renter experience by providing the most flexible conversion process in the industry." 
       },
    {
      id: 6,
      image: "/team-oversight-icon.jpg",
      title: "Team Oversight",
      description: "With benchmarking and performance trends that provide clear visibility into leasing team activity, leadership can give credit to high performers and provide additional support where needed."
       },
    {
      id: 7,
      image: "/centralization-icon.jpg",
      title: "Centralization",
      description:"Empower leasing agents to work from anywhere, keep high-quality leads inside their company’s portfolio, and provide prospects more opportunities to lease — all from one dashboard.",

    },
    {
      id: 8,
      image: "/strategic-planning-icon.jpg",
      title: "Strategic Planning",
      description: "Knock Insights has changed the way multifamily uses data, distilling billions of data points to help corporate teams and onsite managers gather quick insights, measure team performance, and budget with confidence."
    },
   
    {
      id: 9,
      image: "/mobile-workforce-icon.jpg",
      title: "Mobile Workforce",
      description: "Knock Mobile ensures on-the-go leasing teams stay connected to their tasks, prospects, and property metrics, creating a fully mobile workforce that can close leads from anywhere."
   
    },
  ];

  return (
    <section className=" my-40 mx-2 md:mx-8 lg:mx-20"> 
    <div className="grid justify-center justify-items-center">
      {/* heading */}
      <div className="grid items-center justify-center mx-1 md:mx-32 mb-6">
        <h1 className="text-[#082649] text-2xl md:text-3xl lg:5xl text-center font-extrabold">
          What We Do
        </h1>
        <p className="text-xl mt-7 text-center">
          Our integrated suite of front office technology provides multifamily
          owners and operators the levers they need to improve efficiency,
          maximize NOI, and effortlessly guide renters from lead to lease to
          retained resident.
        </p>
      </div>

      {/* image and data section start */}  
       <div className="grid grid-cols-1  md:grid-cols-3 gap-4 px-4 md:px-10 mt-12">
          {data.map((item: Item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 flex  gap-4 w-full max-w-md ">
              <Image
                src={item.image}
                alt={item.title}
                className="md:w-[70px]  md:h-[70px] w-[40px] h-[40px]"
                width={70}
                height={70}
              />
              <div className="flex-1">
                <h2 className="text-lg md:text-xl lg:text-2xl text-[#082649] font-bold">{item.title}</h2>
                <p className="text-sm md:text-base mt-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      {/* image and data section end */}  


{/* button */}
<div className="mt-7">
<Button/>
  </div>      
</div>


    </section>
  );
};

export default WhatWeDo;
