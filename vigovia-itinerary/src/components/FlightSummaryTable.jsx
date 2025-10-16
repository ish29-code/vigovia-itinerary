import React from "react";

const FlightSummaryTable = ({ flights }) => {
  return (
    <div className="mt-0">
      {/* HEADING */}
      <h2 className="text-[20px] font-semibold text-gray-900 mb-4">
        Flight <span className="text-[#6C33C5]">Summary</span>
      </h2>

      {/* FLIGHT ROWS */}
      <div className="flex flex-col gap-3">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="relative flex items-center border border-[#541C9C] rounded-md overflow-hidden h-[43px]"
          >
            {/* LEFT DATE BOX WITH ARROW OUTLINE */}
            <div className="relative flex items-center justify-center w-[150px] font-semibold text-[13px] bg-[#F9EEFF] text-black border-r border-[#6C33C5]">
              {flight.date}

              {/* OUTLINE ARROW (no fill) */}
              <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-0 h-0 
                border-t-[18px] border-b-[18px] border-l-[14px]
                border-t-transparent border-b-transparent border-l-[#F9EEFF] z-[2]"></div>

              <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-0 h-0 
                border-t-[19px] border-b-[19px] border-l-[15px]
                border-t-transparent border-b-transparent border-l-[#541C9C] z-[1]"></div>
            </div>

            {/* FLIGHT DETAILS */}
            <div className="flex-1 flex items-center justify-start px-6 text-[13px]">
              <p className="text-gray-800 font-semibold mr-2 whitespace-nowrap">
                {flight.airline}
              </p>
              <p className="text-gray-700 flex-1 text-sm leading-tight">
                {flight.route}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTNOTE */}
      <p className="text-[10px] text-gray-500 mt-2 italic">
        Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25kg Checked Baggage.
      </p>

      {/* BOTTOM BORDER */}
      <div className="w-full border-t border-gray-300 mt-3"></div>
    </div>
  );
};

export default FlightSummaryTable;
