import React from "react";
import styles from './Innovative.module.css';
import Image from "next/image";
import r2 from "../../public/capreit_blue.png"

const Innovative = () => {
  return (
    <section className="my-40 mx-6 md:mx-14 lg:mx-30 ">
      <div className="grig md:flex justify-between ">
        {/* left text section */}
        <div className="w-40 md:w-96">
          <h1 className="text-[#082649] text-3xl font-extrabold">
            The most innovative, trusted, and fun platform in multifamily
          </h1>
          <p className="text-md mt-5">With Knock, you can improve operational efficiency by profitably acquiring and retaining high-value, long-term residents, maximizing your NOI.</p>
        </div>
 
<div><Image src={r2} alt="" width={400} height={400} className="md:w-[400px] md:h-[400px] w-[200px] h-[200px]"/></div>
 
 
{/* video section*/}
{/* <div className={styles.container}> */}
      {/* <Import src="/your-image.jpg" alt="Background Image" className={styles.bgImage} /> */}
      {/* <video autoPlay loop muted className={styles.overlayVideo}> */}
        {/* <source src="/your-video.mp4" type="video/mp4" /> */}
        {/* Your browser does not support the video tag. */}
      {/* </video> */}
    {/* </div> */}
 
</div>
 
 
    </section>
  );
};

export default Innovative;
