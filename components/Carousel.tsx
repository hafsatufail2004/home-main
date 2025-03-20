"use client";

import React from "react";
import styles from "../styles/Carousel.module.css";
import Image from "next/image";
import img from "../public/video-background-blob.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselItem {
  id: number;
  image: string;
  name:string;
  title: string;
  description: string;
}

const Carousel = () => {
  const carouselData: CarouselItem[] = [
    {
      id: 1,
      image: "/diego_headshot.png",
      name:"Nacho Diego",
      title: "Principal at Wesley Apartment Homes",
      description:
        " We use only the best in breed and have trusted Knock as our go-to and only leasing technology platform. Their team has taken time to listen to our feedback and build leasing tools that optimize our leasing performance, which has increased not only our revenue but also the satisfaction of our tenants. ",
    },
    {
        id: 2,
        image: "/Krista-M-Hendrickson.jpeg",
        name:"Krista M. Hendrickson",
        title: "Leasing Director at United Communities",
        description:
          "Our leasing teams have been able to successfully work from home, ensuring we are doing our part in social distancing, keeping our staff and customers safe while allowing us to maintain communication and service with our customers. Our teams have been able to connect with prospects and residents, secure applications sight unseen, and also facilitate move-ins without ever meeting the prospect face to face at almost every one of our communities..",
      },
      {
        id: 3,
        image: "/pauline.jpg",
        name:"Pauline Houchins",
        title: "Executive Vice President of Development at First Communities",
        description:
          "Knock Tours gives us immediate visibility into data points across every tour, not just the shops. We have an accurate 360-degree view on our leasing operations to immediately help us zero in on improvements. This data has also added significant performance value. During our initial pilot, communities using Knock Tours had a 63% higher visit-to-lease rate than those without it. It was a no-brainer for us to expand.",
      },
      {
        id: 4,
        image: "/pauline.jpg",
        name:"Brian Murphy",
        title: "Director of Property Management at Aspen Square Management",
        description:
          "Knock has given us clarity to control costs. Before, we were manually tracking leads and leases from each advertising source and figuring out costs.",
      },
      {
        id: 5,
        image: "/pauline.jpg",
        name:"Amy Johnson",
        title: "Director of Marketing and Leasing, Roers Company",
        description:
          "Knock continues to take giant steps in bringing us the most efficient, cutting-edge technology — the intelligent front office — that brings us more peace of mind and confidence in continuing to optimize our leasing performance.",
      },
      {
        id: 6,
        image: "/pauline.jpg",
        name:"Erica Prada" ,
        title: "Assistant Manager, the Standard at Eastpoint",
        description:
          "Being onsite, you have so many things to worry about. It’s nice to know that leasing is taken care of with Knock.",
      },
      {
        id: 7,
        image: "/pauline.jpg",
        name:"Tjuana Williams",
        title: "Leasing Manager, The Standard at Eastpoint",
        description:
          "We want to make sure we can get everything done effectively, and Knock has enabled us to do that. Knock made things so much easier..",
      },
      {
        id: 8,
        image: "/pauline.jpg",
        name:"Wendy Simpson",
        title: "Vice President of Marketing, Edgewood and Vantage Management",
        description:
          "Knock gives us the info we need, as we need it. It’s performance data on steroids.",
      },
      {
        id: 9,
        image: "/pauline.jpg",
        name:"Shelly Grimm",
        title: "Director of Training, Aspen Square Management",
        description:
          "In the analytics from Knock, we can drill down by property and for each employee. It really helps me identify challenges and gives me the visibility I need to be able to provide additional resources to help employees succeed.",
      },
      {
        id: 10,
        image: "/pauline.jpg",
        name:"Audrey Grant-Lott",
        title: "Director of People Development, Carroll Properties",
        description:
          "Knock had the right tools for a successful integration. It was seamless.",
      },
      {
        id: 11,
        image: "/lee.jpeg",
        name:"Lee Little",
        title: "Property Management at Davis Development",
        description:
          "Knock has got to be one of the best companies at customer care I’ve seen in my 40 years of property management.",
      },
      {
        id: 12,
        image: "/pauline.jpg",
        name:"Allison Crawford",
        title: "Director of Operations Support, Knightvest Residential",
        description:
          "Knock Tours has really helped us optimize the leasing experiences of our onsite teams and prospective renters because everything our agents need is right in the app. Now, when prospects have questions during a tour, we can answer them on the spot instead of making renters wait and giving them the option to fall in love with another property.",
      },
      {
        id: 13,
        image: "/ashley.jpeg",
        name:"Ashley Allen",
        title: "Director of Marketing and Training, Carter-Haston Real Estate",
        description:
          "In all of my years, I believe y’all are the first company that has stayed true to any road-map timeline ever presented to me…hats off to you all!",
      },
      {
        id: 14,
        image: "/bonnie.jpeg",
        name:"Bonnie Spinks",
        title: "Director of Marketing Platforms, Pegasus Residential",
        description:
          "Marketing looks at the engagement score report every week. It’s a singular thing we can point to to let our regional and onsite teams know how they are doing. If someone isn’t doing well, we can pull up their engagement score in Knock and know right away if it’s a sales issue or a marketing issue. That is one of the best parts about Knock in our world!",
      },
      {
        id: 15,
        image: "/pauline.jpg",
        name:"Michelle Lazebnik",
        title: "Vice President of Administrations, Wimmer Communities",
        description:
          "Knock gives us faster response times, and helps us stay aligned with our prospects’ interest and timelines.",
      },
  ];
  return (
    <section className=" my-40 mx-2  md:mx-8 ">
      <div className="grid justify-center justify-items-center">
        {/* heading */}

        <h1 className="text-[#082649] w-[200px] md:w-auto text-xl md:text-3xl lg:5xl text-center font-extrabold">
          What People Are Saying About Knock
        </h1>

              {/* carousel */}

      <div className="mt-10">
        <div className={styles.container}>
          {/* bg-image */}
          <Image
            src={img}
            alt="Background Image"
            className={styles.bgImage}
            width={500}
            height={500}
          />
         
            {/* swiper */}
                    
            <div className="w-full mx-auto mt-14">
            <Swiper
  modules={[Navigation]}
  loop
  className="rounded-lg flex justify-evenly items-center "
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10 }, // Extra Small (Phones)
    640: { slidesPerView: 1, spaceBetween: 10 }, // Small
    768: { slidesPerView: 3, spaceBetween: 10 }, // Medium
    1024: { slidesPerView: 3, spaceBetween: 16 }, // Large
    1280: { slidesPerView: 3, spaceBetween: 30 }, // XL
  }}
>
  {carouselData.map((item: CarouselItem) => (
    <SwiperSlide key={item.id} className="flex">
  <div className="relative bg-white rounded-md w-[150px] lg:w-[250px] p-6 shadow-2xl md:h-[600px] h-[500px] mx-auto flex flex-col justify-between">
    {/* Description at the top */}
    <p className="text-sm text-center">{item.description}</p>

    {/* Image & text at the bottom */}
    <div className="flex p-2 mt-auto items-center">
      {/* Image */}
      <Image
        src={item.image}
        alt={item.title}
        className="md:w-[50px] md:h-[50px] w-[25px] h-[25px] rounded-full"
        width={50}
        height={50}
      />
      {/* Text */}
      <div className="ml-4">
        <h2 className="text-sm font-bold">{item.name}</h2>
        <h3 className="text-[8px] font-light text-gray-700">{item.title}</h3>
      </div>
    </div>
  </div>
</SwiperSlide>

  ))}
</Swiper>

</div>

</div>
      </div>
      {/* carousel end */}                                                                        
      </div>
    </section>
  );
};

export default Carousel;
