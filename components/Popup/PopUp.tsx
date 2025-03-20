"use client";
import { RxCross2 } from "react-icons/rx";

import {  useEffect, useState } from 'react';

const PopUp = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Check if the modal has been shown before in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');

    if (!hasSeenModal) {
      setShowModal(true);
      sessionStorage.setItem('hasSeenModal', 'true'); // Set flag to prevent re-showing
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }
  }, [showModal]);

  return (
    <div>
      {showModal && (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle h-screen w-3/6 overflow-hidden  text-[#092649] mx-6 md:mx-80">
          <div className="modal-action">
              <form method="dialog">
                <button className="btn ml-[48vw] font-bold"><RxCross2 /></button>
              </form>
            </div>
          <div className="modal-box text-center items-center p-5 md:p-20">
          
          <h3 className="font-bold text-sm md:text-lg">REALPAGE FRONT OFFICE SUITE</h3>
            <p className="font-bold text-lg md:text-4xl mt-4">Delivering Deeper Insights, Flexible Operating Models and Frictionless Experiences to Prospects and Residents</p>
            <p className='text-black text-xs md:text-xl pt-8 pb-8'>Explore how using AI, data and automation can drive informed decisions, scalable efﬁciencies and consistent resident and employee experiences.</p>
            <button className="bg-gradient-to-r from-[#094d7b] to-[#092649]  text-white  text-center  text-sm md:text-base  rounded-lg  hover:bg-gradient-to-l py-4 px-8 font-bold ">Learn More</button>

          </div>
        </dialog>
      )}
    </div>
  );
};

export default PopUp;
