import React from "react";
import { assets } from "../assets/assets.js";

const Header = ({ name, destination, days, nights, departure, arrival, travellers }) => {
  return (
    <div className="w-full flex flex-col items-center mb-6">
      {/* ✅ LOGO IMAGE */}
      <img
        src={assets.vigovialogo}
        alt="Vigovia Logo"
        className="h-[70px] w-auto mb-3 select-none"
      />

      {/* GRADIENT HEADER */}
      <div className="bg-gradient-to-r from-[#5AB2F0] to-[#9B70E0] text-white py-4 px-8 rounded-[14px] h-[150px] w-[90%] text-center shadow-md">
        <h2 className="text-[22px] font-semibold">Hi, {name || "Rahul"}!</h2>
        <h3 className="text-[22px] font-semibold mt-1">
          {destination || "Singapore"} Itinerary
        </h3>
        <p className="text-[17px] mt-1 opacity-90">
          {days || 4} Days {nights || 3} Nights
        </p>

        {/* ICONS */}
        <div className="flex justify-center font-semibold gap-3 mt-3 text-[#ffffff]/90">
          <img src={assets.flightIcon} alt="Flight Icon" className="h-4 w-4"/>
          <img src={assets.hotelIcon} alt="Hotel Icon" className="h-4 w-4"/>
          <img src={assets.circleIcon} alt="Circle Icon" className="h-4 w-4"/>
          <img src={assets.carIcon} alt="Car Icon" className="h-4 w-4"/>
          <img src={assets.visaIcon} alt="Visa Icon" className="h-4 w-4"/>

        </div>
      </div>

      {/* DETAILS BOX */}
      <div className="flex justify-between mt-5 border border-gray-300 rounded-[10px] text-[11px] w-[90%] px-4 py-2">
        <div className="text-center flex-1">
          <p className="text-gray-500 font-medium">Departure From :</p>
          <p className="font-semibold text-gray-800">{departure || "Mumbai"}</p>
        </div>
        <div className="text-center flex-1">
          <p className="text-gray-500 font-medium">Departure :</p>
          <p className="font-semibold text-gray-800">31/10/2025</p>
        </div>
        <div className="text-center flex-1">
          <p className="text-gray-500 font-medium">Arrival :</p>
          <p className="font-semibold text-gray-800">{arrival || "01/11/2025"}</p>
        </div>
        <div className="text-center flex-1">
          <p className="text-gray-500 font-medium">Destination :</p>
          <p className="font-semibold text-gray-800">{destination || "Singapore"}</p>
        </div>
        <div className="text-center flex-1">
          <p className="text-gray-500 font-medium">No. Of Travellers :</p>
          <p className="font-semibold text-gray-800">{travellers || 4}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;