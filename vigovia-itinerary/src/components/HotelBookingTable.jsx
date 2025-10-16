import React from "react";

const HotelBookingTable = ({ hotels }) => (
  <div className="mt-2">
    {/* TITLE */}
    <h2 className="text-[20px] font-semibold text-gray-900 mb-4">
      Hotel <span className="text-[#6C33C5]">Bookings</span>
    </h2>

    {/* TABLE */}
    <div className="overflow-hidden">
      <table className="w-full text-[13px] text-gray-800 border-separate border-spacing-x-2">
        {/* HEADER */}
        <thead>
          <tr className="bg-[#321E5D] text-white">
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[15%]">
              City
            </th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[20%]">
              Check In
            </th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[20%]">
              Check Out
            </th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[10%]">
              Nights
            </th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[35%]">
              Hotel Name
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-[#F9EEFF]">
          {hotels.map((h, i) => (
            <tr key={i}>
              <td
                className={`p-1 text-center ${
                  i === hotels.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {h.city}
              </td>
              <td
                className={`p-1 text-center ${
                  i === hotels.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {h.checkIn}
              </td>
              <td
                className={`p-1 text-center ${
                  i === hotels.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {h.checkOut}
              </td>
              <td
                className={`p-1 text-center ${
                  i === hotels.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {h.nights}
              </td>
              <td
                className={`p-1 text-center leading-snug ${
                  i === hotels.length - 1 ? "rounded-br-[20px]" : ""
                }`}
              >
                {h.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* NOTES */}
    <div className="mt-4 text-[11px] text-gray-700 leading-relaxed">
      <p>1. All Hotels Are Tentative And Can Be Replaced With Similar.</p>
      <p>2. Breakfast Included For All Hotel Stays.</p>
      <p>3. All Hotels Will Be 4★ And Above Category.</p>
      <p>4. A maximum occupancy of 2 people/room is allowed in most hotels.</p>
    </div>

    {/* BOTTOM BORDER */}
    <div className="w-full border-t border-gray-300 mt-3"></div>
  </div>
);

export default HotelBookingTable;
