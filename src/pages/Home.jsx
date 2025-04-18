import React, { useState } from "react";
import "./Home.css";
import HomeContent from "./HomeContent";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  const handleLearnMore = () => {
    setShowContent(true);

    setTimeout(() => {
      const element = document.getElementById("about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="home">
      <section className="section hero" id="hero">
        <h1>🚀 Welcome to Our React App</h1>
        <p>Your journey to modern web development starts here.</p>
          <button onClick={handleLearnMore} className="learn-more-btn">
            Learn More
          </button>
      </section>

      {showContent && <HomeContent />}
    </div>
  );
};

export default Home;
