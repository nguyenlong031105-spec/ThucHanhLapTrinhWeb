import {
  FaGamepad,
  FaShoppingCart,
  FaUser
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}

      <div className="logo">
        <FaGamepad />
        <h2>GAME SHOP</h2>
      </div>

      {/* MENU */}

      <nav>
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Flash Sale</a>
        <a href="#">Liên hệ</a>
      </nav>

      {/* RIGHT SIDE */}

      <div className="nav-right">

        <button className="login-btn">
          <FaUser />
          Login
        </button>

        <button className="cart-btn">
          <FaShoppingCart />
        </button>

      </div>

    </header>
  );
}

export default Navbar;