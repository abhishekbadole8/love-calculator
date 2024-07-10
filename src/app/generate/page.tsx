"use client";

import { useState } from "react";
import { TiHeartFullOutline } from "react-icons/ti";

export default function Page() {

  return (
    <div className="absolute w-screen h-screen bg-white bg-opacity-0">

      <div className="p-11  relative z-10">

        <div className="absolute right-4 sm:right-11 cursor-pointer">
          <button className="text-logout text-xl sm:text-3xl bg-logoutBack flex items-center justify-center gap-2 px-4 sm:px-6 py-2 text-center font-medium border border-none rounded-full shadow-lg cursor-pointer">
            Sign out
          </button>
        </div>

        <div className="absolute transform-translate mx-auto w-full text-center sm:p-0">
 sm
          <h1 className="text-3xl sm:text-5xl font-normal mb-4 text-primary stroke-2">
            Pickup Line Generator
          </h1>

          <p className="mx-auto max-w-md text-left text-xl sm:text-2xl text-third mb-2">
            Tell us about your crush
          </p>

          <textarea
            className="textarea max-w-md mx-auto w-full text-lg sm:text-xl text-primary py-2 px-4 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            placeholder="Tell us about your crush..."
            rows={4}
          ></textarea>

          <p className="text-left text-xl sm:text-2xl mx-auto max-w-md text-third mb-2">
            Style
          </p>

          <input
            type="text"
            className="textarea w-full max-w-md mx-auto text-lg sm:text-xl text-primary py-2 px-4 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Style (e.g., Funny)"
          />
          <button className="w-full mx-auto max-w-md flex items-center justify-center gap-2 text-center text-xl sm:text-2xl font-normal py-1.5 bg-primary text-white border border-none rounded-full shadow-lg hover:bg-pink-600">
            <TiHeartFullOutline size={18} />
            Generate for me
            <TiHeartFullOutline size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
