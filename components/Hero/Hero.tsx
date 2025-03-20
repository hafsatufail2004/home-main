import React from 'react'
import styles from './Home.module.css';
import Image from 'next/image';
import h1 from "../../public/aaaanewphonesn.png"
import capriet from "../../public/capreit_blue.png"
import highmark_blue from "../../public/highmark_blue.png"
import gables_blue from "../../public/gables_blue.png"
import zrs_transparent_blue from "../../public/zrs_transparent_blue.jpg"
import first_transparent_blue from "../../public/first_transparent_blue.png"
import fpi_transparent_blue from "../../public/fpi_transparent_blue.png"


const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content} >
        <div className='grid md:flex justify-evenly pt-12 gap-x-0 md:gap-x-10 lg:gap-x-24 '>

          <div className='py-14 md:py-24  lg:py-48'>
        <h1 className='text-[#082649] w-44 md:w-[450px] text-xl md:text-3xl lg:text-5xl font-bold'>Multifamily Made Easy</h1>
        <p className='text-black text-xs w-44 md:w-[450px] mt-3 md:text-md lg:text-xl'>We deliver the most enjoyable leasing experience for renters and the most efficient tools for leasing teams.</p>
        <button className="bg-gradient-to-r from-[#094d7b] to-[#092649] w-48 h-16 mt-6 text-white text-lg 
rounded-lg cursor-pointer transition-all duration-300 hover:bg-gradient-to-l">
   Schedule a Demo
 </button>

        </div>


         <Image src={h1} alt="h1" className='h-[30vh] w-[150px] lg:w-[350px]  lg:h-[90vh]'/>
        </div>
        <div className='hidden lg:block   '>
        <div className="b w-[96%] bg-white -mt-24 mx-auto h-24 py-6 flex justify-evenly rounded-xl ">
          <Image src={capriet} alt="capriet"  width={150} height={10} />
          <Image src={highmark_blue} alt="highmark_blue"  width={150} height={10} />
          <Image src={gables_blue} alt="gables_blue"  width={150} height={10} />
          <Image src={zrs_transparent_blue} alt="zrs_transparent_blue"  width={150} height={10} />
          <Image src={first_transparent_blue} alt="first_transparent_blue"  width={150} height={10} />
          <Image src={fpi_transparent_blue} alt="fpi_transparent_blue"  width={150} height={10} />

        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
