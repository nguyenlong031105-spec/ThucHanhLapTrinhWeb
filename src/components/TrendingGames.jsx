const games = [
  {
    title: "PUBG",
    price: "$36",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCKJHefnosMDoYCWlkxD9-VXQi9yvzT6XKmFNBLQKxS_PDzHIGzjWQJD6KNqE65puJ5I0gWtutg3odGKlFlBCMOgtgjJ6HDkniYAM0CI&s=10",
  },
  {
    title: "MineCraft",
    price: "$18",
    image:
      "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg",
  },
  {
    title: "Fc Online",
    price: "Free",
    image:
      "https://play-lh.googleusercontent.com/KjEM7U-WBSbhBHGsSPlylm5c-Mv2KkguCm2Om2QNgJG-TTeyEGYk3BRf3Yh3iXp4v5s",
  },
];

function TrendingGames() {
  return (
    <section className="trending">
      <div className="section-header">
        <h2>Game nổi bật</h2>
      </div>

      <div className="game-grid">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.image} alt="" />

            <div className="game-info">
              <h3>{game.title}</h3>

              <div className="game-bottom">
                <span>{game.price}</span>

                <button>Mua</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingGames;