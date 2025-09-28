import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Link } from "react-router-dom"; // Sử dụng Link cho internal navigation mượt mà
import "./assets/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Background overlay cho futuristic glow */}
      <div className="footer__bg-overlay"></div>
      
      <div className="footer-container">
        {/* Cột 1 - Logo & Mô tả (Futuristic với glow) */}
        <div className="footer-col">
          <h2 className="footer-logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">BĐS Phú Cát</span>
          </h2>
          <p className="footer-desc">
            Nền tảng bất động sản thông minh 2030: Tìm kiếm AR/VR, giao dịch an toàn, 
            kết nối người mua - bán nhanh chóng với công nghệ cao cấp.
          </p>
        </div>

        {/* Cột 2 - Liên kết nhanh (Với hover neon) */}
        <div className="footer-col">
          <h3 className="footer-heading">Liên kết nhanh</h3>
          <ul className="footer-links">
            <li>
              <Link to="/ban" className="footer-link">
                Nhà đất bán
              </Link>
            </li>
            <li>
              <Link to="/thue" className="footer-link">
                Nhà đất cho thuê
              </Link>
            </li>
            <li>
              <Link to="/du-an" className="footer-link">
                Dự án
              </Link>
            </li>
            <li>
              <Link to="/tin-tuc" className="footer-link">
                Tin tức
              </Link>
            </li>
            <li>
              <Link to="/lien-he" className="footer-link">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 3 - Liên hệ & Mạng xã hội (Social icons với neon glow) */}
        <div className="footer-col">
          <h3 className="footer-heading">Kết nối với chúng tôi</h3>
          <div className="social-links">
            <a href="https://facebook.com/bdsphu-cat" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://zalo.me/bdsphu-cat" target="_blank" rel="noreferrer" className="social-link" aria-label="Zalo">
              <SiZalo className="social-icon" />
            </a>
            <a href="https://youtube.com/@bdsphu-cat" target="_blank" rel="noreferrer" className="social-link" aria-label="YouTube">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://instagram.com/bdsphu-cat" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
          </div>
          <div className="footer-contact">
            <p className="contact-item">
              📍 123 Nguyễn Văn Cừ, Q.1, TPHCM
            </p>
            <p className="contact-item">
              📞 0909 999 999
            </p>
            <p className="contact-item">
              ✉️ support@bdspc.vn
            </p>
          </div>
        </div>
      </div>

      {/* Copyright với futuristic text effect */}
      <div className="footer-bottom">
        <p className="copyright-text">
          © 2030 BĐS Phú Cát. All rights reserved. Powered by AI & AR Technology.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
