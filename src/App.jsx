import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const user = localStorage.getItem("user");

  return (
    <div className="app">
      <header className="header">
        <h2>Chúng tôi nghiện Game</h2>

        <nav>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main className="main">
        {/* BOX THÀNH VIÊN */}
        <div className="team-box">
          <h3>Thành viên nhóm</h3>

          <ul>
            <li>Phan Hội Anh</li>
            <li>Lê Gia Huy</li>
            <li>Lương Văn Tâm</li>
            <li>Nguyễn Đức Vỹ</li>
            <li>Nguyễn Văn Long</li>
          </ul>
        </div>

        {/* LOGIN / REGISTER */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 Chúng tôi nghiện Game. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;