import React from "react";
import { FaHome, FaBuilding, FaNewspaper, FaRegEdit, FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom"; 
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">🏠 BĐS Phú Cát</div>
      <nav className="header__nav">
        <Link to="/"><FaHome /> Nhà đất bán</Link>
        <Link to="/cho-thue"><FaBuilding /> Nhà đất cho thuê</Link>
        <Link to="/du-an"><MdWork /> Dự án</Link>
        <Link to="/tin-tuc"><FaNewspaper /> Tin tức</Link>
        <Link to="/dang-tin"><FaRegEdit /> Đăng Tin</Link>
      </nav>
      <div className="header__user">
        <Link to="/login">
          <FaUser /> Tài khoản
        </Link>
      </div>
    </header>
  );
}

export default Header;
