import React from "react";

const InclusionSummary = ({ inclusions }) => (
  <div className="mt-3">
    {/* TITLE */}
    <h2 className="text-[20px] font-semibold text-gray-900 mb-4">
      Inclusion <span className="text-[#6C33C5]">Summary</span>
    </h2>

    {/* TABLE */}
    <div className="overflow-hidden">
      <table className="w-full text-[13px] text-gray-800 border-separate border-spacing-x-2">
        {/* HEADER */}
        <thead>
          <tr className="bg-[#321E5D] text-white">
            <th className="p-2 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[15%] ">
              Category
            </th>
            <th className="p-2 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[10%] ">
              Count
            </th>
            <th className="px-6 py-2 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[40%] ">
              Details
            </th>
            <th className="p-2 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[20%] ">
              Status/Comments
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-[#F9EEFF]">
          {inclusions.map((ii, i) => (
            <tr key={i}>
              <td
                className={`p-1 text-center ${
                  i === inclusions.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {ii.category}
              </td>
              <td
                className={`p-1 text-center ${
                  i === inclusions.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {ii.count}
              </td>
              <td
                className={`p-1 text-center ${
                  i === inclusions.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {ii.details}
              </td>
              <td
                className={`p-1 text-center ${
                  i === inclusions.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {ii.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

     <div className="mt-4 text-[11px] text-gray-700 leading-relaxed">
      <p className="font-semibold text-gray-900">Transfer Policy(Refundable Upon Claim)</p>
      <p>If Any Transfer Is Delayed Beyond 15 Minutes, Customer May Book An App Based Or Radio Taxi And Claim A Refund For That Specific Leg.</p>
    </div>
  </div>
);

export default InclusionSummary;


