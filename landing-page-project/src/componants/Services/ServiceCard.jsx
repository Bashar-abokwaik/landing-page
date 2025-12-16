import { useState } from "react";
import "./ServiceCard.css";

function ServiceCard({ img, title, description }) {
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0; // Detect if the device is touch-enabled

  // Handle hover effect
  function handleHover() {
    if (!isTouchDevice) {
      const card = document.querySelector(".card"); // Select the card element
      card.classList.toggle("hovered"); // Toggle the 'hovered' class
      setIsHovered(true); // Update state to indicate hover
    }
  }

  // Handle mouse leave effect
  function handleMouseLeave() {
    if (!isTouchDevice) {
      const card = document.querySelector(".card"); // Select the card element
      card.classList.remove("hovered"); // Remove the 'hovered' class
      setIsHovered(false); // Update state to indicate mouse leave
    }
  }

  // Handle click for touch devices
  function handleClick() {
    if (isTouchDevice) {
      const card = document.querySelector(".card");
      const isCurrentlyHovered = card.classList.contains("hovered");
      card.classList.toggle("hovered");
      setIsHovered(!isCurrentlyHovered); // Toggle hover state on click
    }
  }
  return (
    <div
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="card"
    >
      <div className="card-image">
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
      {isHovered ? <p>{description}</p> : null}
    </div>
  );
}

export default ServiceCard;
