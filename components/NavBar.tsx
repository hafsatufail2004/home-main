import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FiMenu } from "react-icons/fi";



import logo from "../public/logo.png";

const NavBar = () => {
  return (
    <div>
      {/* above small div */}
      <div className="h-9 bg-[#EBF0F3]  ">
        <div className="justify-self-end flex  text-6px md:text-xs px-7 md:px-12 gap-5 md:gap-7  lg:text-sm lg:px-32 py-2 lg:gap-12 text-gray-400">
          <p className=" hover:font-bold">Support</p>
          <p className=" hover:font-bold">Login</p>
        </div>
      </div>
      {/* actual navbar div */}
      <div className=" flex items-center gap-20 h-28 px-20">
        {/* // img div */}
        <div>
          <Image
            src={logo}
            alt="logo"
            width={194}
            height={85}
            className=" py-2  "
          />
        </div>
        {/* lg screen */}
        <div className="md:flex hidden gap-x-2 lg:gap-x-20 items-center">
          <div>
            <ul className="gap-x-1 text-black lg:gap-x-10 flex md:flex-wrap justify-center">
              <li className=" text-[8px]   lg:text-sm">
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">Who It&apos;s For</DropdownMenuTrigger>
                  <DropdownMenuContent >
                    <DropdownMenuItem>Marketing</DropdownMenuItem>
                    <DropdownMenuItem>Property Managers</DropdownMenuItem>
                    <DropdownMenuItem>Leasing Teams </DropdownMenuItem>
                    <DropdownMenuItem>Operations</DropdownMenuItem>
                    <DropdownMenuItem>IT</DropdownMenuItem>
                    <DropdownMenuItem>Multifamily Owners</DropdownMenuItem>
                    <DropdownMenuItem>Renters </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className=" text-[8px]  cursor-pointer lg:text-sm">
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">What We Do</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Scheduling</DropdownMenuItem>
                    <DropdownMenuItem>Marketing</DropdownMenuItem>
                    <DropdownMenuItem>Messaging</DropdownMenuItem>
                    <DropdownMenuItem>Task Management</DropdownMenuItem>
                    <DropdownMenuItem>Visitor Experience</DropdownMenuItem>
                    <DropdownMenuItem>Centralization</DropdownMenuItem>
                    <DropdownMenuItem>Team Oversight</DropdownMenuItem>
                    <DropdownMenuItem>Strategic Planning</DropdownMenuItem>

                    <DropdownMenuItem>Mobile Workforce</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className=" text-[8px]  cursor-pointer lg:text-sm">
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">Products</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Overview</DropdownMenuItem>
                    <DropdownMenuItem>Knock CRM</DropdownMenuItem>
                    <DropdownMenuItem>AI Solutions</DropdownMenuItem>
                    <DropdownMenuItem>Advanced Analytics</DropdownMenuItem>
                    <DropdownMenuItem>Data Cloud & API</DropdownMenuItem>
                    <DropdownMenuItem>Tours</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className=" text-[8px]   lg:text-sm">
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">Resources</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Case Studies</DropdownMenuItem>
                    <DropdownMenuItem>E-Books</DropdownMenuItem>
                    <DropdownMenuItem>Research & Templates</DropdownMenuItem>
                    <DropdownMenuItem>Podcast</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className=" text-[8px]   lg:text-sm">
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer"> News</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Blog</DropdownMenuItem>
                    <DropdownMenuItem>Press & News</DropdownMenuItem>
                    <DropdownMenuItem>Events</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className=" text-[8px]   lg:text-sm">
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">Partners </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Partner Directory</DropdownMenuItem>
                    <DropdownMenuItem>KnockNetwork</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <button
              className="bg-gradient-to-r from-[#094d7b] to-[#092649] w-12 h-8 lg:w-40 lg:h-10  mt-6 text-white 
 lg:text-base text-[8px] rounded-lg  transition-all duration-300 hover:bg-gradient-to-l"
            >
              Get a Demo
            </button>
          </div>
        </div>

        {/* smallscreen */}
        
        <DropdownMenu>
  <DropdownMenuTrigger className="cursor-pointer block md:hidden"><FiMenu />  </DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* ---------------------------------- */}
    <DropdownMenuItem><DropdownMenu>
  <DropdownMenuTrigger className="cursor-pointer">Who It&apos;s For</DropdownMenuTrigger>
  <DropdownMenuContent >
    <DropdownMenuItem>Marketing</DropdownMenuItem>
    <DropdownMenuItem>Property Managers</DropdownMenuItem>
    <DropdownMenuItem>Leasing Teams </DropdownMenuItem>
    <DropdownMenuItem>Operations</DropdownMenuItem>
    <DropdownMenuItem>IT</DropdownMenuItem>
    <DropdownMenuItem>Multifamily Owners</DropdownMenuItem>
    <DropdownMenuItem>Renters </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu></DropdownMenuItem>

{/* ---------------------------------- */}
    <DropdownMenuItem><DropdownMenu>
  <DropdownMenuTrigger className="cursor-pointer">What We Do</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Scheduling</DropdownMenuItem>
    <DropdownMenuItem>Marketing</DropdownMenuItem>
    <DropdownMenuItem>Messaging</DropdownMenuItem>
    <DropdownMenuItem>Task Management</DropdownMenuItem>
    <DropdownMenuItem>Visitor Experience</DropdownMenuItem>
    <DropdownMenuItem>Centralization</DropdownMenuItem>
    <DropdownMenuItem>Team Oversight</DropdownMenuItem>
    <DropdownMenuItem>Strategic Planning</DropdownMenuItem>
    <DropdownMenuItem>Mobile Workforce</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu></DropdownMenuItem>
    {/* ---------------------------------- */}
    <DropdownMenuItem><DropdownMenu>
  <DropdownMenuTrigger className="cursor-pointer">Products</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Overview</DropdownMenuItem>
    <DropdownMenuItem>Knock CRM</DropdownMenuItem>
    <DropdownMenuItem>AI Solutions</DropdownMenuItem>
    <DropdownMenuItem>Advanced Analytics</DropdownMenuItem>
    <DropdownMenuItem>Data Cloud & API</DropdownMenuItem>
    <DropdownMenuItem>Tours</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu></DropdownMenuItem>
    {/* ---------------------------------- */}
    <DropdownMenuItem>  <DropdownMenu>
    <DropdownMenuTrigger className="cursor-pointer">Resources</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Case Studies</DropdownMenuItem>
      <DropdownMenuItem>E-Books</DropdownMenuItem>
      <DropdownMenuItem>Research & Templates</DropdownMenuItem>
      <DropdownMenuItem>Podcast</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu></DropdownMenuItem>
    {/* ---------------------------------- */}
    <DropdownMenuItem><DropdownMenu>
  <DropdownMenuTrigger className="cursor-pointer"> News</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Blog</DropdownMenuItem>
    <DropdownMenuItem>Press & News</DropdownMenuItem>
    <DropdownMenuItem>Events</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu></DropdownMenuItem>
    {/* ---------------------------------- */}
    <DropdownMenuItem> <DropdownMenu>
   <DropdownMenuTrigger className="cursor-pointer">Partners </DropdownMenuTrigger>
   <DropdownMenuContent>
     <DropdownMenuItem>Partner Directory</DropdownMenuItem>
     <DropdownMenuItem>KnockNetwork</DropdownMenuItem>
   </DropdownMenuContent>
 </DropdownMenu></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    
    
        {/* small screen */}
      </div>
    </div>
  );
};

export default NavBar;
