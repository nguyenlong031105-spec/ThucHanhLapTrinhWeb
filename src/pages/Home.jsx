import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home">
      <div className="home-box">
        <h1>Welcome, {user?.username}</h1>
        <p>Bạn đã đăng nhập thành công.</p>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    </div>
  );
}

export default Home;