import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const defaultData = {
  header: {
    name: "Rahul",
    destination: "Singapore",
    days: 4,
    nights: 3,
    departure: "Mumbai",
    arrival: "Singapore",
    travellers: 4,
  },
  days: [
    {
      day: 1,
      date: "27th November",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      morning: "Arrive in Singapore. Transfer From Airport To Hotel.",
      afternoon:
        "Check Into Your Hotel.\nVisit Marina Bay Sands Sky Park (2-3 Hours).\nOptional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.",
      evening:
        "Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)",
      subtitle: "Arrival In Singapore & City Exploration",
    },
    {
      day: 2,
      date: "27th November",
      image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      morning: "Arrive in Singapore. Transfer From Airport To Hotel.",
      afternoon:
        "Check Into Your Hotel.\nVisit Marina Bay Sands Sky Park (2-3 Hours).\nOptional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.",
      evening:
        "Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)",
      subtitle: "Singapore City Excursion",
    },
    {
      day: 3,
      date: "27th November",
      image: "https://images.unsplash.com/photo-1760533120264-0b82c7f169ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      morning: "Arrive in Singapore. Transfer From Airport To Hotel.",
      afternoon:
        "Check Into Your Hotel.\nVisit Marina Bay Sands Sky Park (2-3 Hours).\nOptional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.",
      evening:
        "Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)",
      subtitle: "Gardens By The Bay + Marina Bay",
    },
    {
      day: 4,
      date: "27th November",
      image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      morning: "Arrive in Singapore. Transfer From Airport To Hotel.",
      afternoon:
        "Check Into Your Hotel.\nVisit Marina Bay Sands Sky Park (2-3 Hours).\nOptional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.",
      evening:
        "Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)",
      subtitle: "Arrive In Genting And Relax",
    },
  ],
  flights: [
    { date: "Thu 10 Jan'24", airline: "Fly Air India (AX-123)", route: "From Delhi (DEL) To Singapore (SIN)." },
    { date: "Thu 10 Jan'24", airline: "Fly Air India (AX-123)", route: "From Delhi (DEL) To Singapore (SIN)." },
    { date: "Thu 10 Jan'24", airline: "Fly Air India (AX-123)", route: "From Delhi (DEL) To Singapore (SIN)." },
    { date: "Thu 10 Jan'24", airline: "Fly Air India (AX-123)", route: "From Delhi (DEL) To Singapore (SIN)." },
  ],
  hotels: [
    { city: "Singapore", checkIn: "24/02/2024", checkOut: "24/02/2024", nights: "2", name: "Super Townhouse Oak\nVashi Formerly Blue Diamond" },
    { city: "Singapore", checkIn: "24/02/2024", checkOut: "24/02/2024", nights: "2", name: "Super Townhouse Oak\nVashi Formerly Blue Diamond" },
    { city: "Singapore", checkIn: "24/02/2024", checkOut: "24/02/2024", nights: "2", name: "Super Townhouse Oak\nVashi Formerly Blue Diamond" },
    { city: "Singapore", checkIn: "24/02/2024", checkOut: "24/02/2024", nights: "2", name: "Super Townhouse Oak\nVashi Formerly Blue Diamond" },
    { city: "Singapore", checkIn: "24/02/2024", checkOut: "24/02/2024", nights: "2", name: "Super Townhouse Oak\nVashi Formerly Blue Diamond" },
  ],
  notes: [
    { point: "Airlines Standard Policy", detail: "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost." },
    { point: "Flight/Hotel Cancellation", detail: "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost." },
    { point: "Trip Insurance", detail: "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost." },
    { point: "Hotel Check In & Check Out", detail: "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost." },
    { point: "Visa Rejection", detail: "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost." },
  ],
  services: [
    { service: "Flight Tickets And Hotel Vouchers", detail: "Delivered 3 Days Post Full Payment" },
    { service: "Web Check-in", detail: "Boarding Pass Delivery Via Email/WhatsApp" },
    { service: "Support", detail: "Chat Support – Response Time 4 Hours" },
    { service: "Cancellation Support", detail: "Provided" },
    { service: "Trip Support", detail: "Response Time 5 Minutes" },
  ],
  inclusions: [
    { category: "Flight", count: "2", details: "All Flights Mentioned", status: "Awaiting Confirmation" },
    { category: "Tourist Tax", count: "2", details: "Hotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)", status: "Awaiting Confirmation" },
    { category: "Hotel", count: "2", details: "Airport To Hotel + Hotel To Attractions + Day Trips If Any", status: "Included" },
  ],
  activities: Array.from({ length: 12 }).map(() => ({
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Taronga Zoo",
    type: "Airlines Standard",
    time: "2-3 Hours",
  })),
  plan: {
    totalAmount: "₹ 9,00,000 For 3 Pax (Inclusive Of GST)",
    tcs: "Not Collected",
    installments: [
      { name: "Installment 1", amount: "₹3,50,000", dueDate: "Initial Payment" },
      { name: "Installment 2", amount: "₹4,00,000", dueDate: "Post Visa Approval" },
      { name: "Installment 3", amount: "Remaining", dueDate: "20 Days Before Departure" },
    ],
  },
  visa: { type: "123456", validity: "123456", processing: "123456" },
  terms: {
    linkText: "View all terms and conditions",
    url: "#",
    footerAddress:
      "Vigovia Tech Pvt. Ltd\nRegistered Office: Hd-109 Cinnabar Hills,\nLinks Business Park, Karnataka, India.",
    footerContact:
      "Phone: +91-9540361112\nEmail ID: Utkarsh@Vigovia.Com\nCIN: U79110KA2024PTC191890",
  },
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaultData);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
