import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas"; // ✅ use html2canvas for perfect Tailwind rendering
import { useData } from "../context/DataContext";

import Header from "../components/Header";
import DayPlanCard from "../components/DayPlanCard";
import FlightSummaryTable from "../components/FlightSummaryTable";
import HotelBookingTable from "../components/HotelBookingTable";
import NotesSection from "../components/NotesSection";
import ScopeOfService from "../components/ScopeOfService";
import InclusionSummary from "../components/InclusionSummary";
import PaymentPlan from "../components/PaymentPlan";
import VisaDetails from "../components/VisaDetails";
import Footer from "../components/Footer";
import ActivitySection from "../components/ActivitySection";

const ItineraryPreview = () => {
  const pdfRef = useRef();
  const navigate = useNavigate();
  const { data } = useData();
  const [isLoading, setIsLoading] = useState(false);

  const itineraryData = data;

 const handleDownloadPDF = async () => {
  if (!pdfRef.current) {
    console.error("❌ PDF reference not found!");
    return;
  }

  setIsLoading(true);

  try {
    const pages = pdfRef.current.querySelectorAll(".page");
    const pdf = new jsPDF("p", "mm", "a4");
    let firstPage = true;

    for (const page of pages) {
      // 🩹 Remove oklch/oklab colors before rendering
      page.querySelectorAll("*").forEach((el) => {
        const style = getComputedStyle(el);
        if (style.color.includes("oklch") || style.color.includes("oklab")) {
          el.style.color = "#000"; // fallback text color
        }
        if (
          style.backgroundColor.includes("oklch") ||
          style.backgroundColor.includes("oklab")
        ) {
          el.style.backgroundColor = "#fff"; // fallback background
        }
      });

      const canvas = await html2canvas(page, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      if (!firstPage) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      firstPage = false;
    }

    pdf.save("vigovia-itinerary.pdf");
    console.log("✅ PDF successfully generated without oklch errors!");
  } catch (error) {
    console.error("⚠️ PDF generation failed:", error);
  } finally {
    setIsLoading(false);
  }
};


  // ✏️ Edit Button Navigation
  const handleEdit = () => navigate("/edit");

  // ⏳ Fallback for missing data
  if (!itineraryData?.header) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading itinerary data...
      </div>
    );
  }

  // ✅ Layout
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* PDF Container */}
      <div ref={pdfRef} id="pdf-content" className="text-gray-800 space-y-6">
        {/* PAGE 1 — Header + Day 1–3 */}
        <div className="page bg-white w-[210mm] h-[297mm] flex flex-col justify-between shadow-lg rounded-2xl p-8 overflow-hidden">
          <div>
            <Header {...itineraryData.header} />
            {itineraryData.days.slice(0, 3).map((day, idx) => (
              <DayPlanCard key={idx} {...day} />
            ))}
          </div>
          <Footer />
        </div>

        {/* PAGE 2 — Day 4 + Flights + Hotels */}
        <div className="page bg-white w-[210mm] h-[297mm] flex flex-col justify-between shadow-lg rounded-2xl p-8 overflow-hidden">
          <div>
            <DayPlanCard {...itineraryData.days[3]} />
            <FlightSummaryTable flights={itineraryData.flights} />
            <HotelBookingTable hotels={itineraryData.hotels} />
          </div>
          <Footer />
        </div>

        {/* PAGE 3 — Notes + Services + Inclusions */}
        <div className="page bg-white w-[210mm] h-[297mm] flex flex-col justify-between shadow-lg rounded-2xl p-8 overflow-hidden">
          <div>
            <NotesSection notes={itineraryData.notes} />
            <ScopeOfService services={itineraryData.services} />
            <InclusionSummary inclusions={itineraryData.inclusions} />
          </div>
          <Footer />
        </div>

        {/* PAGE 4 — Activities */}
        <div className="page bg-white w-[210mm] h-[297mm] flex flex-col justify-between shadow-lg rounded-2xl p-8 overflow-hidden">
          <div>
            <ActivitySection activities={itineraryData.activities} />
          </div>
          <Footer />
        </div>

        {/* PAGE 5 — Payment + Visa */}
        <div className="page bg-white w-[210mm] h-[297mm] flex flex-col justify-between shadow-lg rounded-2xl p-8 overflow-hidden">
          <div>
            <PaymentPlan plan={itineraryData.plan} />
            <VisaDetails visa={itineraryData.visa} />
          </div>
          <Footer />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-8">
        {/* ✏️ Edit */}
        <button
          type="button"
          onClick={handleEdit}
          disabled={isLoading}
          className={`px-8 py-3 rounded-md shadow-md font-medium transition-all ${
            isLoading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          ✏️ Edit
        </button>

        {/* ⬇️ Download */}
        <button
          type="button"
          onClick={handleDownloadPDF}
          disabled={isLoading}
          className={`px-8 py-3 rounded-md shadow-md font-medium transition-all ${
            isLoading
              ? "bg-[#B7A3E2] text-white cursor-wait"
              : "bg-[#4A1E9E] text-white hover:bg-[#321E5D]"
          }`}
        >
          {isLoading ? "⏳ Generating PDF..." : "⬇️ Download PDF"}
        </button>
      </div>

      {/* 🌙 Full-screen overlay while loading */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#4A1E9E]/30 backdrop-blur-md z-50">
          <div className="bg-white rounded-2xl px-8 py-6 flex flex-col items-center shadow-xl border border-[#4A1E9E]/30">
            <div className="animate-spin h-10 w-10 border-4 border-[#4A1E9E] border-t-transparent rounded-full mb-4"></div>
            <p className="text-[#4A1E9E] font-semibold text-sm">
              Generating your PDF, please wait...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryPreview;
