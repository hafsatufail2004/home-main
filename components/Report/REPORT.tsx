"use client";

import React from "react";
import styles from "./Report.module.css";
import Image from "next/image";
import h1 from "./success-in-multifamily.png";

const Report: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className="grid md:flex justify-evenly pt-12 gap-x-0 md:gap-x-10 lg:gap-x-24  ">
          <div className="py-auto w-[200px] md:w-[500px] p-6 ">
            <p
              className="text-[#082649] font-sans
        text-xs"
            >
              R E P O R T
            </p>
            <h1 className="text-[#082649] text-lg md:text-3xl  font-extrabold">
              Success in Multifamily Leasing Performance
            </h1>
            <p className="text-black text-xs text-md mt-8">
              Our survey of 700+ multifamily professionals reveals top
              operational priorities and areas of friction — and illuminates
              paths to align frontline and front office goals, improve
              performance, and drive success.
            </p>

            <div className="py-8">
              <input
                type="text"
                placeholder="First Name*"
                className="bg-white  text-black mt-2 px-2 h-6 md:h-10 w-60 md:w-96 rounded-md"
              ></input>
              <input
                type="text"
                placeholder="Last Name*"
                className="bg-white text-black mt-2 px-2 h-6 md:h-10 w-60 md:w-96 rounded-md"
              ></input>
              <input
                type="text"
                placeholder="Company*"
                className="bg-white text-black mt-2 px-2 h-6 md:h-10 w-60 md:w-96 rounded-md"
              ></input>
              <input
                type="text"
                placeholder="Phone*"
                className="bg-white text-black mt-2 px-2 h-6 md:h-10 w-60 md:w-96 rounded-md"
              ></input>
              <input
                type="text"
                placeholder="Email*"
                className="bg-white text-black mt-2 px-2 h-6 md:h-10 w-60 md:w-96 rounded-md"
              ></input>
              <input
                type="text"
                placeholder="Job Title*"
                className="bg-white text-black mt-2 px-2 h-6 md:h-10 w-60 md:w-96 rounded-md"
              ></input>
              {/* checkbox */}
              <div className="flex h-6 mt-2 w-60 md:w-96 items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 
dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-[8px] md:text-xs font-medium text-gray-900 dark:text-gray-300"
                >
                  By checking this box, I consent to RealPage processing my
                  personal information in accordance with the RealPage
                  <a className="underline text-[#092649]"> Privacy Policy.</a>
                </label>
              </div>
              {/* button */}

              <button className="bg-gradient-to-r from-[#094d7b] to-[#09 h-62md:649] w-60 md:w-96 h-10 text-white text-[20px] rounded-lg cursor-pointer transition-all duration-300 hover:bg-gradient-to-l">
                DOWNLOAD
              </button>
            </div>
          </div>

          <Image
            src={h1}
            alt="h1"
            className="w-[180px] h-[140px] px-2 md:w-[300px] md:h-[250px] lg:w-[560px] lg:h-[450px] "
          />
        </div>
      </div>
    </div>
  );
};


export default Report;