import React from "react";

const VisaDetails = ({ visa }) => (
  <div className="mt-10">
    {/* TITLE */}
    <h2 className="text-[18px] font-semibold text-gray-900 mb-4">
      Visa <span className="text-[#6C33C5]">Details</span>
    </h2>

    {/* VISA DETAILS BOX */}
    <div className="border border-[#6C33C5] rounded-xl p-4 text-[13px] text-gray-800">
      <div className="flex justify-between flex-wrap gap-4">
        <p className="font-semibold">
          Visa Type :{" "}
          <span className="font-normal text-gray-700">{visa.type}</span>
        </p>
        <p className="font-semibold">
          Validity :{" "}
          <span className="font-normal text-gray-700">{visa.validity}</span>
        </p>
        <p className="font-semibold">
          Processing Date :{" "}
          <span className="font-normal text-gray-700">{visa.processing}</span>
        </p>
      </div>
    </div>

    {/* DIVIDER */}
    <div className="w-full border-t border-gray-300 my-6"></div>

    {/* CTA SECTION */}
    <div className="text-center">
      <p className="font-extrabold text-[20px] text-[#321E5D] tracking-wide mb-3">
        PLAN.PACK.GO!
      </p>
      <button className="bg-[#4A1E9E] text-white text-[13px] font-semibold px-8 py-2.5 rounded-full shadow-sm hover:bg-[#3a1680] transition-all">
        Book Now
      </button>
    </div>
  </div>
);

export default VisaDetails;
