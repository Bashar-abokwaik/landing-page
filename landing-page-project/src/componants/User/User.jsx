import "./User.css";
import { useState } from "react";

function User({ img, name, age, description }) {
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter and leave events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="user"
    >
      <div className="user-img-container">
        <img src={img} alt={name} className="user-img" />
      </div>
      {isHovered && (
        <div className="user-info">
          <p className="user-description">{description}</p>
          <p className="user-name">
            {name}, <span className="user-age">{age} </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default User;
