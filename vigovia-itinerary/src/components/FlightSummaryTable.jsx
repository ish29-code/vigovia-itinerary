import React from "react";

const FlightSummaryTable = ({ flights }) => {
  return (
    <div className="mt-2">
      {/* HEADING */}
      <h2 className="text-[18px] md:text-[22px] font-semibold text-gray-900 mb-4 text-center md:text-left">
        Flight <span className="text-[#6C33C5]">Summary</span>
      </h2>

      {/* FLIGHT LIST */}
      <div className="flex flex-col gap-3">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-start md:items-center border border-[#541C9C] rounded-xl overflow-hidden shadow-sm bg-white"
          >
            {/* LEFT DATE BOX WITH ARROW OUTLINE */}
            <div className="relative flex items-center justify-center w-full md:w-[150px] h-[43px] font-semibold text-[13px] bg-[#F9EEFF] text-black border-b md:border-b-0 md:border-r border-[#6C33C5] text-center">
              {flight.date}

              {/* OUTLINE ARROW (only visible on desktop) */}
              <div
                className="hidden md:block absolute right-[-14px] top-1/2 -translate-y-1/2 w-0 h-0 
                border-t-[18px] border-b-[18px] border-l-[14px]
                border-t-transparent border-b-transparent border-l-[#F9EEFF] z-[2]"
              ></div>

              <div
                className="hidden md:block absolute right-[-15px] top-1/2 -translate-y-1/2 w-0 h-0 
                border-t-[19px] border-b-[19px] border-l-[15px]
                border-t-transparent border-b-transparent border-l-[#541C9C] z-[1]"
              ></div>
            </div>

            {/* FLIGHT DETAILS */}
            <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-2 text-[13px] text-gray-700">
              <p className="text-gray-800 font-semibold mb-1 md:mb-0">
                {flight.airline}
              </p>
              <p className="flex-1 text-sm text-gray-700 leading-snug md:ml-3">
                {flight.route}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTNOTE */}
      <p className="text-[10px] text-gray-500 mt-3 italic text-center md:text-left">
        Note: All flights include meals, seat choice (excluding XL), and 20kg/25kg checked baggage.
      </p>

      {/* SEPARATOR */}
      <div className="w-full border-t border-gray-300 mt-4"></div>
    </div>
  );
};

export default FlightSummaryTable;
