import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Gamepad2, Tag, ShieldCheck, Headphones, Send, ArrowLeft } from 'lucide-react';
import './Auth.css';

const LoginIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
  </svg>
);

const RegisterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
  </svg>
);

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    alert(`Mã khôi phục đã được gửi tới email: ${email}\nVui lòng kiểm tra hộp thư đến của bạn.`);
    setIsForgotPassword(false);
  };
  return (
    <div className="game-shop-layout">
      {/* Cảnh nền */}
      <div className="bg-overlay"></div>

      <div className="main-content-wrapper">
        {/* Header */}
        <header className="shop-header">
          <div className="logo-box">
            <Gamepad2 className="logo-icon" size={48} />
            <div className="logo-text">
              <h1>GAME SHOP</h1>
              <p>Nơi hội tụ những tựa game đỉnh cao</p>
            </div>
          </div>
        </header>

        {/* Forms Container */}
        <main className="forms-container single-form">
          
          {isForgotPassword ? (
            /* FORGOT PASSWORD CARD */
            <div className="auth-card forgot-password-card animate-fade-in">
              <div className="card-top-icon purple-icon">
                <Lock />
              </div>
              <h2>Quên mật khẩu</h2>
              <p className="card-subtitle">Nhập email của bạn để chúng tôi gửi<br/>liên kết đặt lại mật khẩu</p>

              <form onSubmit={handleForgotPassword} className="auth-form">
                <div className="input-group">
                  <label>Email</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" size={18} />
                    <input type="email" placeholder="Nhập email của bạn" required />
                  </div>
                </div>

                <button type="submit" className="submit-btn gradient-btn">
                  <Send size={18} /> Gửi liên kết đặt lại mật khẩu
                </button>
              </form>

              <div className="divider">
                <span>HOẶC</span>
              </div>

              <button type="button" className="back-btn" onClick={() => setIsForgotPassword(false)}>
                <ArrowLeft size={18} /> Quay lại đăng nhập
              </button>

              <div className="footer-link">
                Nhớ mật khẩu? <span className="toggle-link" onClick={() => setIsForgotPassword(false)}>Đăng nhập ngay</span>
              </div>
            </div>
          ) : isLogin ? (
            /* LOGIN CARD */
            <div className="auth-card login-card animate-fade-in">
              <div className="card-top-icon blue-icon">
                <LoginIcon />
              </div>
              <h2>Đăng nhập</h2>
              <p className="card-subtitle">Chào mừng bạn quay trở lại!</p>

              <form onSubmit={handleLogin} className="auth-form">
                <div className="input-group">
                  <label>Email hoặc tên đăng nhập</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input type="text" placeholder="Nhập email hoặc tên đăng nhập" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Mật khẩu</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input 
                      type={showLoginPassword ? 'text' : 'password'} 
                      placeholder="Nhập mật khẩu" 
                      required 
                    />
                    <button type="button" className="toggle-password" onClick={() => setShowLoginPassword(!showLoginPassword)}>
                      {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Ghi nhớ đăng nhập
                  </label>
                  <span className="forgot-password" style={{cursor: 'pointer'}} onClick={() => setIsForgotPassword(true)}>Quên mật khẩu?</span>
                </div>

                <button type="submit" className="submit-btn blue-btn">Đăng nhập</button>
              </form>

              <div className="footer-link">
                Chưa có tài khoản? <span className="toggle-link" onClick={() => setIsLogin(false)}>Đăng ký ngay</span>
              </div>
            </div>
          ) : (
            /* REGISTER CARD */
            <div className="auth-card register-card animate-fade-in">
              <div className="card-top-icon purple-icon">
                <RegisterIcon />
              </div>
              <h2>Đăng ký</h2>
              <p className="card-subtitle">Tạo tài khoản để trải nghiệm ngay!</p>

              <form onSubmit={handleRegister} className="auth-form">
                <div className="input-group">
                  <label>Họ và tên</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input type="text" placeholder="Nhập họ và tên" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" size={18} />
                    <input type="email" placeholder="Nhập email của bạn" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Tên đăng nhập</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input type="text" placeholder="Nhập tên đăng nhập" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Mật khẩu</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input 
                      type={showRegPassword ? 'text' : 'password'} 
                      placeholder="Tạo mật khẩu" 
                      required 
                    />
                    <button type="button" className="toggle-password" onClick={() => setShowRegPassword(!showRegPassword)}>
                      {showRegPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="input-group">
                  <label>Nhập lại mật khẩu</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input 
                      type={showConfirmPassword ? 'text' : 'password'} 
                      placeholder="Nhập lại mật khẩu" 
                      required 
                    />
                    <button type="button" className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    Tôi đồng ý với <a href="#" className="text-link">Điều khoản sử dụng</a> và <a href="#" className="text-link">Chính sách bảo mật</a>
                  </label>
                </div>

                <button type="submit" className="submit-btn purple-btn">Đăng ký</button>
              </form>

              <div className="footer-link">
                Đã có tài khoản? <span className="toggle-link" onClick={() => setIsLogin(true)}>Đăng nhập ngay</span>
              </div>
            </div>
          )}
        </main>

        {/* Features Row */}
        <section className="features-row">
          <div className="feature-item">
            <div className="feature-icon"><Gamepad2 size={24} /></div>
            <div className="feature-text">Kho game<br/>đa dạng</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Tag size={24} /></div>
            <div className="feature-text">Giá cả<br/>hấp dẫn</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><ShieldCheck size={24} /></div>
            <div className="feature-text">Thanh toán<br/>an toàn</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Headphones size={24} /></div>
            <div className="feature-text">Hỗ trợ 24/7<br/>tận tâm</div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Auth;
