import React, { useState } from "react";
import { FaHome, FaBuilding, FaNewspaper, FaRegEdit, FaUser , FaBars, FaTimes } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom"; 
import "./assets/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Background overlay for futuristic glow effect */}
      <div className="header__bg-overlay"></div>
      
      <div className="header__container">
        {/* Logo with animated glow */}
        <div className="header__logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">BĐS Phú Cát</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav header__nav--desktop">
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <FaHome className="nav-icon" /> <span>Nhà đất bán</span>
          </Link>
          <Link to="/cho-thue" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <FaBuilding className="nav-icon" /> <span>Nhà đất cho thuê</span>
          </Link>
          <Link to="/du-an" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <MdWork className="nav-icon" /> <span>Dự án</span>
          </Link>
          <Link to="/tin-tuc" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <FaNewspaper className="nav-icon" /> <span>Tin tức</span>
          </Link>
          <Link to="/dang-tin" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <FaRegEdit className="nav-icon" /> <span>Đăng Tin</span>
          </Link>
        </nav>

        {/* User Section */}
        <div className="header__user">
          <Link to="/login" className="user-link" onClick={() => setIsMenuOpen(false)}>
            <FaUser  className="user-icon" /> <span>Tài khoản</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="header__mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation (Hidden on desktop) */}
        <nav className={`header__nav header__nav--mobile ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link mobile-nav-link" onClick={toggleMenu}>
            <FaHome className="nav-icon" /> <span>Nhà đất bán</span>
          </Link>
          <Link to="/cho-thue" className="nav-link mobile-nav-link" onClick={toggleMenu}>
            <FaBuilding className="nav-icon" /> <span>Nhà đất cho thuê</span>
          </Link>
          <Link to="/du-an" className="nav-link mobile-nav-link" onClick={toggleMenu}>
            <MdWork className="nav-icon" /> <span>Dự án</span>
          </Link>
          <Link to="/tin-tuc" className="nav-link mobile-nav-link" onClick={toggleMenu}>
            <FaNewspaper className="nav-icon" /> <span>Tin tức</span>
          </Link>
          <Link to="/dang-tin" className="nav-link mobile-nav-link" onClick={toggleMenu}>
            <FaRegEdit className="nav-icon" /> <span>Đăng Tin</span>
          </Link>
          <Link to="/login" className="user-link mobile-user-link" onClick={toggleMenu}>
            <FaUser  className="user-icon" /> <span>Tài khoản</span>
          </Link>
        </nav>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && <div className="header__mobile-backdrop" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
