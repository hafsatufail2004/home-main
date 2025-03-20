import React from "react";
import Image from "next/image";
import Button from "./Button";

interface Item {
  id: number;
  image: string;
  title: string;
  description: string;
}

const WhoIsKnockFor = () => {
  const data: Item[] = [
    {
      id: 1,
      image: "/marketing.png",
      title: "Marketing",
      description:
        "Drive demand with the most intelligent marketing in multifamily.",
    },
    {
      id: 2,
      image: "/property-managers.png",
      title: "Property Managers",
      description:
        "Get the transparency you need to create high-performing teams.",
    },
    {
      id: 3,
      image: "/leasing-teams.png",
      title: "Leasing Teams",
      description:
        "Delight your onsite teams with a fun and gamified leasing experience that drives leasing and renewals.",
    },
    {
      id: 4,
      image: "/operations-team.png",
      title: "Operations",
      description:
        "Create the most efficient leasing operations through automation and insights.",
    },
    {
      id: 5,
      image: "/IT.png",
      title: "IT",
      description:
        "Utilize our industry-leading partnership APIs and PMS integrations to adopt the technology your teams need, without creating new headaches for IT.",
    },
    {
      id: 6,
      image: "/family-owners.png",
      title: "Multifamily Owners",
      description:
        "Increase NOI with the most efficient performance management tech in the industry.",
    },
  ];

  return (
    <section className=" my-40 mx-2 md:mx-8 lg:mx-20">
      <div className="grid justify-center justify-items-center">
        {/* heading */}
        <h1 className="text-[#082649] text-2xl md:text-3xl lg:5xl text-center font-extrabold">
        Who is Knock for?
        </h1>

        {/* image and data section start */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4 px-4 md:px-10 mt-12">
          {data.map((item: Item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-4 grid items-center justify-center text-center gap-4 w-full max-w-md "
            >
              <Image
                src={item.image}
                alt={item.title}
                className="md:w-[250px] mx-auto md:h-[250px] w-[70px] h-[70px]"
                width={250}
                height={250}
              />
              <div className="flex-1">
                <h2 className="text-lg md:text-xl lg:text-2xl text-[#082649] font-bold">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base mt-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* image and data section end */}

        {/* button */}
        <div className="mt-7">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default WhoIsKnockFor;
