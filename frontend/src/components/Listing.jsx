import React from "react";
import "./assets/Listing.css";
import { FaMapMarkerAlt, FaRulerCombined, FaMoneyBillWave } from "react-icons/fa";

function Listing() {
  const properties = [
    {
      id: 1,
      image: "can-ho-q7.jpg",
      title: "Căn hộ Quận 7, TPHCM",
      price: "4.2 tỷ",
      size: "80 m²",
      location: "Quận 7, TPHCM"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/500x300",
      title: "Nhà phố Quận 9",
      price: "2 tỷ",
      size: "100 m²",
      location: "Quận 9, TPHCM"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/500x300",
      title: "Biệt thự Bình Dương",
      price: "8.5 tỷ",
      size: "250 m²",
      location: "TP Thủ Dầu Một, Bình Dương"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/500x300",
      title: "Chung cư Hà Đông",
      price: "1.9 tỷ",
      size: "65 m²",
      location: "Hà Đông, Hà Nội"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/500x300",
      title: "Shophouse Quận 2",
      price: "12 tỷ",
      size: "180 m²",
      location: "Quận 2, TPHCM"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/500x300",
      title: "Căn hộ cao cấp Vinhomes",
      price: "5.8 tỷ",
      size: "90 m²",
      location: "Bình Thạnh, TPHCM"
    },
    {
      id: 7,
      image: "https://via.placeholder.com/500x300",
      title: "Biệt thự ven sông",
      price: "15 tỷ",
      size: "300 m²",
      location: "Quận 7, TPHCM"
    },
    {
      id: 8,
      image: "https://via.placeholder.com/500x300",
      title: "Nhà mặt phố Hoàn Kiếm",
      price: "22 tỷ",
      size: "150 m²",
      location: "Hoàn Kiếm, Hà Nội"
    },
    {
      id: 9,
      image: "https://via.placeholder.com/500x300",
      title: "Căn hộ mini Đà Nẵng",
      price: "1.3 tỷ",
      size: "50 m²",
      location: "Hải Châu, Đà Nẵng"
    }
  ];

  return (
    <section className="listing">
      <h2 className="listing-title">🏡 Bất động sản nổi bật</h2>
      <div className="listing-grid">
        {properties.map((item) => (
          <div key={item.id} className="listing-card">
            <div className="card-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="listing-info">
              <h3>{item.title}</h3>
              <p><FaMoneyBillWave className="icon" /> {item.price}</p>
              <p><FaRulerCombined className="icon" /> {item.size}</p>
              <p><FaMapMarkerAlt className="icon" /> {item.location}</p>
              <button className="btn-detail">Xem chi tiết</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Listing;
