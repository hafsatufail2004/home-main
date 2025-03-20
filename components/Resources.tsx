import React from "react";
import Image from "next/image";
import img1 from "../public/tech-buying-guide.jpg";
import img2 from "../public/success-in-multifamily.jpg"
import img3 from "../public/box3.jpg"
import { FaArrowRight, FaRegArrowAltCircleRight } from "react-icons/fa";

const Resources = () => {
  return (
    <section className=" my-40 container">
      <div className="grid justify-center justify-items-center">
        {/* heading */}
        <h1 className="text-[#082649] text-2xl md:text-3xl lg:5xl text-center font-extrabold">
          Who is Knock for?
        </h1>

        {/* image and data section start */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4 px-4 md:px-10 mt-12">
          {/* div1 */}
          <div className="bg-white rounded-xl shadow-2xl h-[500px] w-full max-w-md">
            <Image
              src={img1}
              alt="img"
              className="w-full h-[200px] rounded-t-xl"
            />
            <div className="flex flex-col h-[300px] rounded-b-xl flex-grow justify-between p-5">
              <h2 className="text-lg md:text-xl lg:text-2xl text-[#082649] font-bold">
                The Value-Based Tech Buying Guide for Multifamily
              </h2>

              <button className="text-sm md:text-base ml-auto items-center flex ">
                {" "}
                <p className="border-b-1 border-b-[#7fffe3] hover:border-b-3">
                  Read the Buying Guide
                </p>{" "}
                <FaRegArrowAltCircleRight className="pl-2 w-6 h-6" />
              </button>
            </div>
          </div>
          {/* div2 */}
          <div className="bg-white rounded-xl shadow-2xl h-[500px] w-full max-w-md">
   <Image
     src={img2}
     alt="img"
     className="w-full h-[200px] rounded-t-xl"
   />
   <div className="flex flex-col h-[300px] rounded-b-xl flex-grow justify-between p-5">
     <h2 className="text-lg md:text-xl lg:text-2xl text-[#082649] font-bold">
     Success in Multifamily Leasing Performance: Aligning Frontline and Front Office Priorities     </h2>
     <button className="text-sm md:text-base ml-auto items-center flex ">
       {" "}
       <p className="border-b-1 border-b-[#7fffe3] hover:border-b-3">
         Download the Research Report
       </p>{" "}
       <FaRegArrowAltCircleRight className="pl-2 w-6 h-6" />
     </button>
   </div>
 </div>
          {/* div3 */}
          <div className="bg-white rounded-xl shadow-2xl h-[500px] w-full max-w-md">
   <Image
     src={img3}
     alt="img"
     className="w-full h-[200px] rounded-t-xl"
   />
   <div className="flex flex-col h-[300px] rounded-b-xl flex-grow justify-between p-5">
     <h2 className="text-lg md:text-xl lg:text-2xl text-[#082649] font-bold">
     See how Knockbot boosted Griffis Residential with a 45% increase in leads
     </h2>
     <div>
      <p><a className="text-md"></a>8,800+ units</p>
      <p>45% increase in leads</p>
      <p>365% increase in converted leases
      </p>
     </div>
     <button className="text-sm md:text-base ml-auto items-center flex ">
      
       <p className="border-b-1 border-b-[#7fffe3] hover:border-b-3">
         Read The Case Study
       </p>
       <FaRegArrowAltCircleRight className="pl-2 w-6 h-6" />
     </button>
   </div>
 </div>
        </div>

        {/* image and data section end */}

        <button className="text-sm md:text-base pt-20 items-center flex ">
  {" "}
  <p className="border-b-1 border-b-[#7fffe3] hover:border-b-3">
 More Resourses
  </p>{" "}
  <FaArrowRight className="pl-2 w-6 h-6" />
</button>
      </div>
    </section>
  );
};

export default Resources;
