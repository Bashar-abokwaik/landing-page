import { useState } from "react";
import img1 from "../../assets/Bright Yellow and Black Photographic Fitness Service Website(2).png";
import img2 from "../../assets/Bright Yellow and Black Photographic Fitness Service Website(3).png";
import "./About.css";

function About() {
  // State to manage showing more details
  const [showDetails, setShowDetails] = useState(false);

  // Handle "Learn More" click
  const handleLearnMore = () => {
    setShowDetails(true);
  };
  return (
    <section className="about" id = "about">
      <div className="about-content">
        <h2>ABOUT OUR FIT FAMILY</h2>
        <p>
          Astraeus was founded in 2001 by a husband and wife team, Bobby and
          Dora Graff. Since then, we have expanded to over 115 locations
          nationwide!
        </p>
        <p
          className="link"
          onClick={handleLearnMore}
          style={{ display: showDetails ? "none" : "block" }}
        >
          Learn More
        </p>
        {showDetails && (
          <div className="about-details">
            <p>
              Astraeus is a family-owned business that has been dedicated to
              delivering exceptional fitness experiences for over two decades.
              Our journey began in 2001 when Bobby and Dora Graff, a passionate
              husband and wife team, opened the first
            </p>
            <p className="link" onClick={() => setShowDetails(false)}>
              Hide Details
            </p>
          </div>
        )}
      </div>
      <div className="img1">
        <img src={img1} alt="image 1" />
      </div>
      <div className="img2">
        <img src={img2} alt="image 2" />
      </div>
    </section>
  );
}

export default About;
