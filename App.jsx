import { useState } from "react";

const sampleCards = [
  {
    id: 1,
    title: "Ocean Retreat",
    description:
      "Calming blue tones and gentle waves. Perfect for focus or relaxation.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    tag: "Nature",
    price: 20,
  },
  {
    id: 2,
    title: "City Nights",
    description:
      "Skylines, neon, and late-night vibes for your urban inspiration.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    tag: "Urban",
    price: 15,
  },
  {
    id: 3,
    title: "Forest Walk",
    description:
      "A path through pines and light — take a breath and reset.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    tag: "Outdoors",
    price: 30,
  },
  {
    id: 4,
    title: "Minimal Desk",
    description:
      "Clutter-free workspace for deep work and clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tag: "Workspace",
    price: 55,
  },
  {
    id: 5,
    title: "Golden Desert",
    description:
      "Warm sands and endless dunes to spark wanderlust.",
    image:
      "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1200&auto=format&fit=crop",
    tag: "Travel",
    price: 45,
  },
  {
    id: 6,
    title: "Cozy Reading",
    description:
      "Soft light, hot tea, and your favorite book.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
    tag: "Lifestyle",
    price: 65,
  },
];

export default function App() {
  const [likedCards, setLikedCards] = useState([]);
  const [sortOption, setSortOption] = useState(""); // sorting state

  const toggleLike = (cardId) => {
    setLikedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId]
    );
  };

  const totalLikedPrice = sampleCards
    .filter((card) => likedCards.includes(card.id))
    .reduce((sum, card) => sum + card.price, 0);

  // SORTING LOGIC
  const sortedCards = [...sampleCards].sort((a, b) => {
    if (sortOption === "low-high") return a.price - b.price;
    if (sortOption === "high-low") return b.price - a.price;
    if (sortOption === "title-az") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <>
      <div className="top-bar">
        <h1>Grid Cards</h1>
      </div>

      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="text">Explore</h3>

          {/* SORT DROPDOWN */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          >
            <option value="">Sort by...</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="title-az">Title: A → Z</option>
          </select>
        </div>

        <div className="grid">
          {sortedCards.map((card) => {
            const isLiked = likedCards.includes(card.id);
            return (
              <div key={card.id} className="card">
                <div className="image-container">
                  <img src={card.image} alt={card.title} />
                  <span className="tag">{card.tag}</span>
                </div>

                <div className="card-content">
                  <h4
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{card.title}</span>
                    <span>${card.price}</span>
                  </h4>
                  <p>{card.description}</p>
                </div>

                <div className="card-actions">
                  <button className="like" onClick={() => toggleLike(card.id)}>
                    {isLiked ? "Unlike" : "Like"}
                  </button>
                  <button className="open">Open</button>
                </div>
              </div>
            );
          })}
        </div>

        <h1 className="total-price">
          Liked Cards Total Price: ${totalLikedPrice}
        </h1>
      </div>
    </>
  );
}
