import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const Section = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-5 mb-6">
    <h3 className="text-lg font-semibold text-[#4A3ADB] mb-3">{title}</h3>
    {children}
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className={`border border-gray-300 rounded-md px-3 py-2 w-full text-sm ${props.className || ""}`}
  />
);

const Textarea = (props) => (
  <textarea
    rows={props.rows || 3}
    {...props}
    className={`border border-gray-300 rounded-md px-3 py-2 w-full text-sm ${props.className || ""}`}
  />
);

export default function FormPage() {
  const { data, setData } = useData();
  const navigate = useNavigate();

  const update = (path, value) => {
    // simple path setter "header.name", "flights[0].date", etc.
    const parts = path.replace(/\]/g, "").split(/[.\[]/g);
    const copy = structuredClone(data);
    let ref = copy;
    parts.slice(0, -1).forEach((k) => (ref = ref[k]));
    ref[parts[parts.length - 1]] = value;
    setData(copy);
  };

  const addRow = (key, row) => setData({ ...data, [key]: [...data[key], row] });
  const removeRow = (key, idx) =>
    setData({ ...data, [key]: data[key].filter((_, i) => i !== idx) });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-[#4A3ADB] mb-6">
          Travel Itinerary — Edit Details
        </h1>

        <Section title="Header">
          <div className="grid grid-cols-2 gap-3">
            <Input value={data.header.name} onChange={(e)=>update("header.name", e.target.value)} placeholder="Traveller Name"/>
            <Input value={data.header.destination} onChange={(e)=>update("header.destination", e.target.value)} placeholder="Destination"/>
            <Input value={data.header.departure} onChange={(e)=>update("header.departure", e.target.value)} placeholder="Departure From"/>
            <Input value={data.header.arrival} onChange={(e)=>update("header.arrival", e.target.value)} placeholder="Arrival"/>
            <Input type="number" value={data.header.days} onChange={(e)=>update("header.days", Number(e.target.value))} placeholder="Days"/>
            <Input type="number" value={data.header.nights} onChange={(e)=>update("header.nights", Number(e.target.value))} placeholder="Nights"/>
            <Input type="number" value={data.header.travellers} onChange={(e)=>update("header.travellers", Number(e.target.value))} placeholder="Travellers"/>
          </div>
        </Section>

        <Section title="Day-wise Plan">
          {data.days.map((d, i) => (
            <div key={i} className="border rounded-xl p-4 mb-3">
              <div className="grid grid-cols-6 gap-3">
                <Input value={d.day} onChange={(e)=>update(`days[${i}].day`, e.target.value)} placeholder="Day"/>
                <Input value={d.date} onChange={(e)=>update(`days[${i}].date`, e.target.value)} placeholder="Date"/>
                <Input className="col-span-2" value={d.subtitle} onChange={(e)=>update(`days[${i}].subtitle`, e.target.value)} placeholder="Subtitle"/>
                <Input className="col-span-2" value={d.image} onChange={(e)=>update(`days[${i}].image`, e.target.value)} placeholder="Image URL"/>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <Textarea value={d.morning} onChange={(e)=>update(`days[${i}].morning`, e.target.value)} placeholder="Morning"/>
                <Textarea value={d.afternoon} onChange={(e)=>update(`days[${i}].afternoon`, e.target.value)} placeholder="Afternoon"/>
                <Textarea value={d.evening} onChange={(e)=>update(`days[${i}].evening`, e.target.value)} placeholder="Evening"/>
              </div>
              <div className="text-right mt-2">
                <button onClick={()=>removeRow("days", i)} className="text-red-600 text-sm">Remove</button>
              </div>
            </div>
          ))}
          <button
            className="text-sm px-3 py-2 rounded-md border"
            onClick={() =>
              addRow("days", {
                day: data.days.length + 1,
                date: "",
                image: "",
                morning: "",
                afternoon: "",
                evening: "",
                subtitle: "",
              })
            }
          >
            + Add Day
          </button>
        </Section>

        <Section title="Flights">
          {data.flights.map((f, i) => (
            <div key={i} className="grid grid-cols-3 gap-3 mb-2">
              <Input value={f.date} onChange={(e)=>update(`flights[${i}].date`, e.target.value)} placeholder="Date"/>
              <Input value={f.airline} onChange={(e)=>update(`flights[${i}].airline`, e.target.value)} placeholder="Airline"/>
              <Input value={f.route} onChange={(e)=>update(`flights[${i}].route`, e.target.value)} placeholder="Route"/>
              <div className="col-span-3 text-right -mt-1">
                <button onClick={()=>removeRow("flights", i)} className="text-red-600 text-sm">Remove</button>
              </div>
            </div>
          ))}
          <button className="text-sm px-3 py-2 rounded-md border" onClick={()=>addRow("flights", {date:"", airline:"", route:""})}>+ Add Flight</button>
        </Section>

        <Section title="Hotels">
          {data.hotels.map((h, i) => (
            <div key={i} className="grid grid-cols-5 gap-3 mb-2">
              <Input value={h.city} onChange={(e)=>update(`hotels[${i}].city`, e.target.value)} placeholder="City"/>
              <Input value={h.checkIn} onChange={(e)=>update(`hotels[${i}].checkIn`, e.target.value)} placeholder="Check In"/>
              <Input value={h.checkOut} onChange={(e)=>update(`hotels[${i}].checkOut`, e.target.value)} placeholder="Check Out"/>
              <Input value={h.nights} onChange={(e)=>update(`hotels[${i}].nights`, e.target.value)} placeholder="Nights"/>
              <Input value={h.name} onChange={(e)=>update(`hotels[${i}].name`, e.target.value)} placeholder="Hotel Name"/>
              <div className="col-span-5 text-right -mt-1">
                <button onClick={()=>removeRow("hotels", i)} className="text-red-600 text-sm">Remove</button>
              </div>
            </div>
          ))}
          <button className="text-sm px-3 py-2 rounded-md border" onClick={()=>addRow("hotels", {city:"", checkIn:"", checkOut:"", nights:"", name:""})}>+ Add Hotel</button>
        </Section>

        <Section title="Important Notes">
          {data.notes.map((n, i) => (
            <div key={i} className="grid grid-cols-3 gap-3 mb-2">
              <Input value={n.point} onChange={(e)=>update(`notes[${i}].point`, e.target.value)} placeholder="Point"/>
              <Textarea className="col-span-2" value={n.detail} onChange={(e)=>update(`notes[${i}].detail`, e.target.value)} placeholder="Detail"/>
              <div className="col-span-3 text-right -mt-1">
                <button onClick={()=>removeRow("notes", i)} className="text-red-600 text-sm">Remove</button>
              </div>
            </div>
          ))}
          <button className="text-sm px-3 py-2 rounded-md border" onClick={()=>addRow("notes", {point:"", detail:""})}>+ Add Note</button>
        </Section>

        <Section title="Scope Of Service">
          {data.services.map((s, i) => (
            <div key={i} className="grid grid-cols-3 gap-3 mb-2">
              <Input value={s.service} onChange={(e)=>update(`services[${i}].service`, e.target.value)} placeholder="Service"/>
              <Textarea className="col-span-2" value={s.detail} onChange={(e)=>update(`services[${i}].detail`, e.target.value)} placeholder="Detail"/>
              <div className="col-span-3 text-right -mt-1">
                <button onClick={()=>removeRow("services", i)} className="text-red-600 text-sm">Remove</button>
              </div>
            </div>
          ))}
          <button className="text-sm px-3 py-2 rounded-md border" onClick={()=>addRow("services", {service:"", detail:""})}>+ Add Service</button>
        </Section>

        <Section title="Inclusion Summary">
          {data.inclusions.map((x, i) => (
            <div key={i} className="grid grid-cols-4 gap-3 mb-2">
              <Input value={x.category} onChange={(e)=>update(`inclusions[${i}].category`, e.target.value)} placeholder="Category"/>
              <Input value={x.count} onChange={(e)=>update(`inclusions[${i}].count`, e.target.value)} placeholder="Count"/>
              <Input value={x.details} onChange={(e)=>update(`inclusions[${i}].details`, e.target.value)} placeholder="Details"/>
              <Input value={x.status} onChange={(e)=>update(`inclusions[${i}].status`, e.target.value)} placeholder="Status / Comments"/>
              <div className="col-span-4 text-right -mt-1">
                <button onClick={()=>removeRow("inclusions", i)} className="text-red-600 text-sm">Remove</button>
              </div>
            </div>
          ))}
          <button className="text-sm px-3 py-2 rounded-md border" onClick={()=>addRow("inclusions", {category:"", count:"", details:"", status:""})}>+ Add Inclusion</button>
        </Section>

        <Section title="Activity Table">
          {data.activities.map((a, i) => (
            <div key={i} className="grid grid-cols-4 gap-3 mb-2">
              <Input value={a.city} onChange={(e)=>update(`activities[${i}].city`, e.target.value)} placeholder="City"/>
              <Input value={a.activity} onChange={(e)=>update(`activities[${i}].activity`, e.target.value)} placeholder="Activity"/>
              <Input value={a.type} onChange={(e)=>update(`activities[${i}].type`, e.target.value)} placeholder="Type"/>
              <Input value={a.time} onChange={(e)=>update(`activities[${i}].time`, e.target.value)} placeholder="Time Required"/>
              <div className="col-span-4 text-right -mt-1">
                <button onClick={()=>removeRow("activities", i)} className="text-red-600 text-sm">Remove</button>
              </div>
            </div>
          ))}
          <button className="text-sm px-3 py-2 rounded-md border" onClick={()=>addRow("activities", {city:"", activity:"", type:"", time:""})}>+ Add Activity</button>
        </Section>

        <Section title="Payment Plan">
          <Input value={data.plan.totalAmount} onChange={(e)=>update("plan.totalAmount", e.target.value)} placeholder="Total Amount Row (exact text)"/>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <Input value={data.plan.tcs} onChange={(e)=>update("plan.tcs", e.target.value)} placeholder="TCS Row (e.g., Not Collected)"/>
          </div>
          {data.plan.installments.map((inst, i) => (
            <div key={i} className="grid grid-cols-3 gap-3 mt-3">
              <Input value={inst.name} onChange={(e)=>update(`plan.installments[${i}].name`, e.target.value)} placeholder="Installment"/>
              <Input value={inst.amount} onChange={(e)=>update(`plan.installments[${i}].amount`, e.target.value)} placeholder="Amount"/>
              <Input value={inst.dueDate} onChange={(e)=>update(`plan.installments[${i}].dueDate`, e.target.value)} placeholder="Due Date"/>
            </div>
          ))}
        </Section>

        <Section title="Visa Details">
          <div className="grid grid-cols-3 gap-3">
            <Input value={data.visa.type} onChange={(e)=>update("visa.type", e.target.value)} placeholder="Visa Type"/>
            <Input value={data.visa.validity} onChange={(e)=>update("visa.validity", e.target.value)} placeholder="Validity"/>
            <Input value={data.visa.processing} onChange={(e)=>update("visa.processing", e.target.value)} placeholder="Processing Date"/>
          </div>
        </Section>

        <div className="flex justify-end gap-3">
          <button
            onClick={()=>navigate("/preview")}
            className="bg-[#4A3ADB] text-white px-5 py-2 rounded-md"
          >
            Preview & Download
          </button>
        </div>
      </div>
    </div>
  );
}
