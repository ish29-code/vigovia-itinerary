import React from "react";

const PaymentPlan = ({ plan }) => (
  <div className="mt-10">
    {/* TITLE */}
    <h2 className="text-[18px] font-semibold text-gray-900 mb-4">
      Payment <span className="text-[#6C33C5]">Plan</span>
    </h2>

    {/* TOTAL AMOUNT & TCS */}
    <div className="flex flex-col gap-2 mb-6">
      {[
        { label: "Total Amount", value: plan.totalAmount },
        { label: "TCS", value: plan.tcs },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border border-[#6C33C5] rounded-md overflow-hidden"
        >
          {/* LEFT BOX WITH ARROW */}
          <div className="relative bg-[#F9EEFF] font-semibold text-[13px] px-4 py-2 flex items-center w-[180px] text-[#321E5D]">
            {item.label}
            {/* Arrow Shape */}
            <div
              className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-0 h-0 
              border-t-[16px] border-b-[16px] border-l-[14px]
              border-t-transparent border-b-transparent border-l-[#F9EEFF] z-[2]"
            ></div>
            <div
              className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-0 h-0 
              border-t-[17px] border-b-[17px] border-l-[15px]
              border-t-transparent border-b-transparent border-l-[#6C33C5] z-[1]"
            ></div>
          </div>

          {/* RIGHT SIDE TEXT */}
          <div
            className={`text-[13px] px-4 py-2 ${
              index === 0
                ? "text-gray-900 font-semibold"
                : "text-gray-800 font-normal"
            }`}
          >
            {item.value}
          </div>
        </div>
      ))}
    </div>

    {/* INSTALLMENTS TABLE */}
    <div className="overflow-hidden">
      <table className="w-full text-[13px] text-gray-800 border-separate border-spacing-x-2">
        {/* HEADER */}
        <thead>
          <tr className="bg-[#321E5D] text-white">
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[33%]">Installment</th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[33%]">Amount</th>
            <th className="p-3 font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] w-[33%]">Due Date</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {plan.installments.map((p, i) => (
            <tr key={i}>
              <td
                className={`bg-[#F9EEFF] text-center py-3 ${
                  i === plan.installments.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {p.name}
              </td>
              <td
                className={`bg-[#F9EEFF] text-center py-3 ${
                  i === plan.installments.length - 1 ? "rounded-bl-[20px]" : ""
                }`}
              >
                {p.amount}
              </td>
              <td
                className={`bg-[#F9EEFF] text-center py-3 ${
                  i === plan.installments.length - 1 ? "rounded-br-[20px]" : ""
                }`}
              >
                {p.dueDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PaymentPlan;
