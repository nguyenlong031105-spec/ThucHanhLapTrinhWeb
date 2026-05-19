import {
  FaDragon,
  FaFutbol,
  FaCrosshairs,
  FaChessKnight,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaDragon />,
    title: "Fantasy",
  },
  {
    icon: <FaCrosshairs />,
    title: "FPS",
  },
  {
    icon: <FaFutbol />,
    title: "Sports",
  },
  {
    icon: <FaChessKnight />,
    title: "Strategy",
  },
];

function Categories() {
  return (
    <section className="categories">
      <div className="section-header">
        <h2>Danh mục game</h2>
      </div>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            {item.icon}
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;