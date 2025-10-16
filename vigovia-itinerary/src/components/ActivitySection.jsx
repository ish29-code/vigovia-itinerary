import React from "react";

const ActivitySection = ({ activities }) => (
  <div className="mt-4">
    {/* TITLE */}
    <h2 className="text-[20px] font-semibold text-gray-900 mb-4">
      Activity <span className="text-[#6C33C5]">Table</span>
    </h2>

    {/* TABLE */}
    <div className="overflow-hidden">
      <table className="w-full text-[13px] text-gray-800 border-separate border-spacing-x-2">
        {/* HEADER */}
        <thead>
          <tr className="bg-[#321E5D] text-white">
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[15%] " style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
              City
            </th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[40%] ">
              Activity
            </th>
            <th className="p-3font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[20%] ">
              Type
            </th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[20%] ">
              Time
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-[#F9EEFF]">
          {activities.map((a, i) => (
            <tr key={i}>
              <td
                className={`p-3 text-center ${
                  i === activities.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {a.city}
              </td>
              <td
                className={`p-3 text-center ${
                  i === activities.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {a.activity}
              </td>
              <td
                className={`p-3 text-center ${
                  i === activities.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {a.type}
              </td>
              <td
                className={`p-3 text-center ${
                  i === activities.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {a.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

     {/*Trems*/}
     <h2 className="mt-4 text-[20px] font-semibold text-gray-900 mb-4">
      Terms <span className="text-[#6C33C5]">Conditions</span>
    </h2>
    <a className="text-[#2F80ED] underline">View all terms and conditions</a>
  </div>
);

export default ActivitySection;
