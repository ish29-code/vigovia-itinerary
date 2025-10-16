import React from "react";

const ScopeOfService = ({ services }) => (
  <div className="mt-3">
    {/* TITLE */}
    <h2 className="text-[20px] font-semibold text-gray-900 mb-4">
      Scope Of <span className="text-[#6C33C5]">Service</span>
    </h2>

    {/* TABLE */}
    <div className="overflow-hidden">
      <table className="w-full text-[13px] text-gray-800 border-separate border-spacing-x-2">
        {/* HEADER */}
        <thead>
          <tr className="bg-[#321E5D] text-white">
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[15%] ">
              Services
            </th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[20%] ">
              Details
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-[#F9EEFF]">
          {services.map((s, i) => (
            <tr key={i}>
              <td
                className={`p-2 text-center ${
                  i === services.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {s.service}
              </td>
              <td
                className={`p-2 text-center ${
                  i === services.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {s.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ScopeOfService;

