
import React, { useState } from "react";
import "./assets/LoginRegister.css"; // file CSS riêng

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Đăng nhập thành công!");
    window.location.href = "/"; // về trang chủ
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert("Đăng ký thành công!");
    window.location.href = "/";
  };

  return (
    <div className="login-body">
      {/* Nút quay lại trang chủ */}
      {/* <a href="/" className="back-home">
        <i className="bx bx-home"></i> Trang chủ
      </a> */}

      {/* Form */}
      <div className="wrapper">
        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <h1>Đăng nhập</h1>
            <div className="input-box">
              <input type="text" placeholder="Tên đăng nhập" required />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Mật khẩu" required />
              <i className="bx bx-lock"></i>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Ghi nhớ
              </label>
              <a href="#">Quên mật khẩu?</a>
            </div>
            <button type="submit" className="btn">Đăng nhập</button>
            <div className="register-link">
              <p>
                Chưa có tài khoản?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>Đăng ký</a>
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit}>
            <h1>Đăng ký</h1>
            <div className="input-box">
              <input type="text" placeholder="Tên đăng nhập" required />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Mật khẩu" required />
              <i className="bx bx-lock"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Nhập lại mật khẩu" required />
              <i className="bx bx-lock"></i>
            </div>
            <button type="submit" className="btn">Đăng ký</button>
            <div className="register-link">
              <p>
                Đã có tài khoản?{" "}
                <a href="#" onClick={() => setIsLogin(true)}>Đăng nhập</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
