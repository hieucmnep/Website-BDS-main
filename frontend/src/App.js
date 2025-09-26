import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ListingsSection from "./components/ListingsSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import LoginRegister from "./components/LoginRegister"; // thêm trang login

import "./App.css";

function App() {
  const dummyListings = [
    {
      id: 1,
      title: "Căn hộ quận 7, TPHCM",
      price: "4.2 tỷ",
      area: "80 m²",
      location: "Quận 7, TPHCM",
      image: "Anh1.jpg",
    },
  ];

  const dummyLocations = [
    { name: "TPHCM", count: "75k" },
    { name: "Hà Nội", count: "55k" },
    { name: "Bình Dương", count: "25k" },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Routes>
            {/* Trang chủ */}
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <ListingsSection
                    title="Bất động sản nổi bật"
                    listings={dummyListings}
                  />
                  <LocationSection locations={dummyLocations} />
                </>
              }
            />

            {/* Trang đăng nhập */}
            <Route path="/login" element={<LoginRegister />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
