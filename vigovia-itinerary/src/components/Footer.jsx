import React from "react";
import {assets} from "../assets/assets.js";

const Footer = () => {
  return (
    <div className="flex justify-between items-start mt-10 pt-6 border-t border-gray-300 text-[10px] text-gray-600 w-[90%] mx-auto">
      {/* LEFT SIDE */}
      <div className="text-left leading-relaxed">
        <p className="font-semibold text-gray-800">Vigovia Tech Pvt. Ltd</p>
        <p>Registered Office: Hd-109 Cimbabar Hills,</p>
        <p>Links Business Park, Karnataka, India.</p>
      </div>

      {/* CENTER SIDE */}
      <div className="text-left leading-relaxed">
        <p><span className="font-semibold">Phone:</span> +91-9540361112</p>
        <p><span className="font-semibold">Email ID:</span> Utkarsh@Vigovia.Com</p>
        <p><span className="font-semibold">CIN:</span> U79110KA2024PTC191890</p>
      </div>

      {/* RIGHT SIDE LOGO */}
      <div className="flex flex-col items-center">
        <img src={assets.vigovialogo} alt="Vigovia Logo" className="h-[57px] w-auto mb-1" />
      </div>
    </div>
  );
};

export default Footer;
