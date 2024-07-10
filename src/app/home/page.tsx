"use client"

import { Grand_Hotel } from "next/font/google";
import React, { useEffect, useState } from "react";
import { TiHeartFullOutline } from "react-icons/ti";

const grand_hotel = Grand_Hotel({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() { 

  return (
    <div
      className={`${grand_hotel.className} w-screen h-screen relative overflow-hidden`}
    >
      <img
        src="/background/bg-img.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex flex-col items-center h-full">
        <h5 className="text-white text-center text-5xl z-10 mt-20">
          Pickup line <br /> generator
        </h5>

        <button className="m-auto text-3xl flex items-center justify-center gap-2 text-center font-normal py-3 px-7 bg-primary text-white border border-none rounded-full shadow-lg transform  transition-transform">
          <TiHeartFullOutline size={18} />
          Generate one for me
          <TiHeartFullOutline size={18} />
        </button>
      </div>
    </div>
  );
}
