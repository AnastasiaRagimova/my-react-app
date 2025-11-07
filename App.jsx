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
  },
  {
    id: 2,
    title: "City Nights",
    description:
      "Skylines, neon, and late-night vibes for your urban inspiration.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    tag: "Urban",
  },
  {
    id: 3,
    title: "Forest Walk",
    description:
      "A path through pines and light — take a breath and reset.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    tag: "Outdoors",
  },
  {
    id: 4,
    title: "Minimal Desk",
    description:
      "Clutter-free workspace for deep work and clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tag: "Workspace",
  },
  {
    id: 5,
    title: "Golden Desert",
    description:
      "Warm sands and endless dunes to spark wanderlust.",
    image:
      "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1200&auto=format&fit=crop",
    tag: "Travel",
  },
  {
    id: 6,
    title: "Cozy Reading",
    description:
      "Soft light, hot tea, and your favorite book.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
    tag: "Lifestyle",
  },
];

export default function App() {
  return (
    <>
      <div className="top-bar">
        <h1>Grid Cards</h1>
      </div>

      <div className="container">
        <h3 className="subtitle">Explore</h3>
        <div className="grid">
          {sampleCards.map((card) => (
            <div key={card.id} className="card">
              <div className="image-container">
                <img src={card.image} alt={card.title} />
                <span className="tag">{card.tag}</span>
              </div>
              <div className="card-content">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
              <div className="card-actions">
                <button className="like"> Like</button>
                <button className="open">Open</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
