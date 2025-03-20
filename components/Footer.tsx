import React from "react";

import Image from "next/image";
import logo from "../public/knock-logo-24-white.png";
import Link from "next/link";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <footer className="text-white body-font">
        <div className=" py-10 bg-[#082649] ">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* logo */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-4 ml-0 md:p-7 ">
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={200}
                className="mb-3 -mt-7 md:mb-6"
              />

              <p className=" text-base  mt-2 md:text-left text-center">
                Knock, Inc. <br />
                511 Boren Ave N, Suite 200
                <br />
                Seattle, WA 98107
                <br />
              </p>
              <p className=" text-base  mt-2 md:text-left text-center">
                Knock, Inc.{" "}
              </p>
              <div className="flex gap-x-4 mt-6">
                <TfiFacebook className="hover:text-red-700" />
                <TfiLinkedin className="hover:text-red-700" />
                <FaTwitter className="hover:text-red-700" />
                <FaInstagram className="hover:text-red-700" />
              </div>
            </div>

            {/* div1 */}
            <div className="lg:w-1/4 md:w-1/2 w-full py-2 px-4">
              <h2 className="title-font text-myBlackHead tracking-widest text-sm md:text-lg md:font-bold mb-3">
                Platform Features
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70 text-xs md:text-base font-sans "
                  >
                    Scheduling
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base  font-sans "
                  >
                    Attribution
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base  font-sans "
                  >
                    Messaging
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base  font-sans 
"
                  >
                    Task Management
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base  font-sans 
"
                  >
                    Visitor Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base  font-sans 
"
                  >
                    Team Oversight
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base  font-sans 
"
                  >
                    Centerilization
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base  font-sans 
"
                  >
                    Strategic Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base  font-sans 
"
                  >
                    Mobile Workforce
                  </Link>
                </li>
              </nav>
            </div>
            {/* div2 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-2">
              <h2 className="title-font text-myBlackHead tracking-widest text-sm mb-3 md:text-lg md:font-bold">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base font-sans "
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base font-sans 
"
                  >
                    Property Management
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base font-sans 
"
                  >
                    Leasing Teams
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70  text-xs md:text-base font-sans 
"
                  >
                    Operations
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70 text-xs md:text-base font-sans "
                  >
                    IT
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70 text-xs md:text-base font-sans "
                  >
                    Multifamily Owners
                  </Link>
                </li>
              </nav>
            </div>
            {/* div3 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-myBlackHead tracking-widest text-sm mb-3 md:text-lg md:font-bold">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70 text-xs md:text-base font-sans "
                  >
                    For Customers
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70 text-xs md:text-base font-sans "
                  >
                    For Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara pl-2 hover:text-myBlackPara/70 text-xs md:text-base font-sans "
                  >
                    New Vendor Request
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70 text-xs md:text-base font-sans 
"
                  >
                    For the Media
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70 text-xs md:text-base font-sans 
"
                  >
                    Bolg
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-myBlackPara hover:text-myBlackPara/70 text-xs md:text-base font-sans "
                  >
                    Careers
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>

        {/* last div  */}
        <div>
          <div className="  py-6 mx-auto flex items-center justify-between sm:flex-row flex-col">
            <p className="text-md text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2025. All Rights Reserved.
            </p>
            <div className="flex px-2 items-center">
              <p className="border-b-1 border-b-[#7fffe3] text-black hover:border-b-3">
                Privacy Policy
              </p>
              <div className="w-[2px] h-4 bg-gray-400 mx-2" />
              <p className="border-b-1 border-b-[#7fffe3] text-black hover:border-b-3">
                Terms of Use
              </p>
              <div className="w-[2px] h-4 mx-2 bg-gray-400" />
              <p className="border-b-1 border-b-[#7fffe3] text-black hover:border-b-3">
                DMCA Notice
              </p>
              <div className="w-[2px] h-4 mx-2 bg-gray-400" />
              <p className="border-b-1 border-b-[#7fffe3] text-black hover:border-b-3">
                Cookie Policy
              </p>
              <div className="w-[2px] h-4 mx-2 bg-gray-400" />
              <p className="border-b-1 border-b-[#7fffe3] text-black hover:border-b-3">
                Patent marketing
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
