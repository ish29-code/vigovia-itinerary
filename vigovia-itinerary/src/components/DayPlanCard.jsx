import React from "react";

const DayPlanCard = ({ day, date, image, morning, afternoon, evening, subtitle }) => {
  return (
    <div className="relative w-full border-b border-gray-300 pb-10 mb-10 last:mb-0 last:pb-0">
      <div className="flex w-full">
        {/* LEFT PURPLE DAY LABEL */}
        <div className="flex items-center justify-center mr-6">
          <div className="bg-[#321E5D] text-white text-[13px] font-semibold px-0 py-13 rounded-full flex items-center justify-center shadow-sm">
            <div className="-rotate-90 whitespace-nowrap tracking-wide">
              Day {day}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-1 items-start">
          {/* LEFT IMAGE SECTION */}
          <div className="flex flex-col items-center w-[130px]">
            <div className="w-[95px] h-[95px] rounded-full overflow-hidden border-[2px] border-[#fff] shadow-md">
              <img
                src={image}
                alt={`Day ${day}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[12px] font-semibold text-[#321E5D] mt-2">
              {date}
            </p>
            <p className="text-[11px] text-gray-600 text-center leading-snug mt-1">
              {subtitle ||
                (day === 1
                  ? "Arrival in Singapore & City Exploration"
                  : day === 2
                  ? "Singapore City Excursion"
                  : day === 3
                  ? "Gardens By The Bay + Marina Bay"
                  : "Arrival in Genting And Relax")}
            </p>
          </div>

          {/* TIMELINE + CONTENT */}
          <div className="flex flex-1 items-start ml-8">
            {/* TIMELINE */}
            <div className="flex flex-col items-center pt-1 pr-6">
              <div className="w-[9px] h-[9px] border-[2px] border-[#321E5D] rounded-full bg-white"></div>
              <div className="w-[2px] bg-gradient-to-b from-[#2F80ED] to-[#2F80ED] h-[60px]"></div>
              <div className="w-[9px] h-[9px] border-[2px] border-[#321E5D] rounded-full bg-white"></div>
              <div className="w-[2px] bg-gradient-to-b from-[#2F80ED] to-[#2F80ED] h-[60px]"></div>
              <div className="w-[9px] h-[9px] border-[2px] border-[#321E5D] rounded-full bg-white"></div>
            </div>

            {/* TEXT SECTION */}
            <div className="flex-1 text-[12px] leading-relaxed">
              {/* MORNING */}
              <div className="flex items-start mb-3">
                <p className="font-semibold text-gray-700 w-[85px]">Morning</p>
                <p className="text-gray-600 flex-1">
                  {morning ||
                    "Arrive in Singapore. Transfer from Airport to Hotel."}
                </p>
              </div>

              {/* AFTERNOON */}
              <div className="flex items-start mb-3">
                <p className="font-semibold text-gray-700 w-[85px]">Afternoon</p>
                <div className="text-gray-600 flex-1">
                  {afternoon || (
                    <>
                      <p>Check into your hotel.</p>
                      <p>Visit Marina Bay Sands Sky Park (2–3 hours).</p>
                      <p>
                        Optional: Stroll along Marina Bay Waterfront Promenade or
                        Helix Bridge.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* EVENING */}
              <div className="flex items-start">
                <p className="font-semibold text-gray-700 w-[85px]">Evening</p>
                <p className="text-gray-600 flex-1">
                  {evening ||
                    "Explore Gardens By The Bay, including Super Tree Grove (3–4 hours)."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayPlanCard;