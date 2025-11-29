import { useState } from "react";
import { createPortal } from "react-dom";

const sampleCards = [
  { id: 1,
    title: "Ocean Retreat", 
    description: "Calming blue tones and gentle waves. Perfect for focus or relaxation.",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop", 
    tag: "Nature", 
    price: 20 
  },
  { id: 2, 
    title: "City Nights", 
    description:"Skylines, neon, and late-night vibes for your urban inspiration.",
    image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop", 
    tag: "Urban", 
    price: 15 
  },
  { id: 3, 
    title: "Forest Walk", 
    description:"A path through pines and light — take a breath and reset.",
    image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop", 
    tag: "Outdoors", 
    price: 30 
  },
  { id: 4, 
    title: "Minimal Desk", 
    description:"Clutter-free workspace for deep work and clean aesthetics.",
    image:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", 
    tag: "Workspace", 
    price: 45 
  },
  { id: 5, 
    title: "Golden Desert", 
    description:"Warm sands and endless dunes to spark wanderlust.",
    image:"https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1200&auto=format&fit=crop", 
    tag: "Travel", 
    price: 50 
  },
  { id: 6, 
    title: "Cozy Reading", 
    description:"Soft light, hot tea, and your favorite book.",
    image:"https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop", 
    tag: "Lifestyle", 
    price: 65 
  },
];

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default function App() {
  const [likedCards, setLikedCards] = useState([]);
  const [sortValue, setSortValue] = useState("default");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); 
  const [cards, setCards] = useState(sampleCards); 

  const toggleLike = (id) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const openDeleteModal = (card) => { 
    setSelectedCard(card);
    setIsOpen(true);
  };

  const handleDelete = () => {
    setCards((prev) => prev.filter((c) => c.id !== selectedCard.id));
    setLikedCards((prev) => prev.filter((id) => id !== selectedCard.id));
    setIsOpen(false);
    setSelectedCard(null);
  };

  const totalPrice = likedCards
    .map((id) => cards.find((c) => c.id === id)?.price || 0)
    .reduce((a, b) => a + b, 0);

  const sortedCards = [...cards].sort((a, b) => {
    if (sortValue === "low") return a.price - b.price;
    if (sortValue === "high") return b.price - a.price;
    if (sortValue === "az") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <>
      <div className="top-bar">
        <h1>Grid Cards</h1>
      </div>

      <div className="container">
        <h3 className="text">Explore</h3>

        {/* ✅ Sort button left + larger radius */}
        <select 
          className="sort-select" 
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="default">Sort by...</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="az">Title A → Z</option>
        </select>

        <div className="grid">
          {sortedCards.map((card) => (
            <div key={card.id} className="card">
              <div className="image-container">
                <img src={card.image} alt={card.title} />
                <span className="tag">{card.tag}</span>
              </div>

              <div className="card-content">
                <h4>{card.title} - {card.price}$</h4>
                <p>{card.description}</p>
              </div>

              <div className="card-actions">
                <button
                  className="like"
                  onClick={() => toggleLike(card.id)}
                  style={{
                    background: likedCards.includes(card.id) ? "black" : "#f3f4f6",
                    color: likedCards.includes(card.id) ? "white" : "#333",
                  }}
                >
                  {likedCards.includes(card.id) ? "★ Liked" : "♡ Like"}
                </button>
                
                <button className="Edit">Edit</button>
                <button className="Delete" onClick={() => openDeleteModal(card)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "20px", fontWeight: "700" }}>
          Liked cards total price is - {totalPrice}$
        </h3>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Delete {selectedCard?.title}?</h2>
        <p>This card will be permanently removed.</p>
        <button onClick={handleDelete}>Yes</button>
      </Modal>
    </>
  );
}
