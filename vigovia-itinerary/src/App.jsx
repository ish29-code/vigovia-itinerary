import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import FormPage from "./pages/FormPage";
import ItineraryPreview from "./pages/ItineraryPreview";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/preview" element={<ItineraryPreview />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
