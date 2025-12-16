import { services } from "./data";
import { user } from "./data.js";
import "./App.css";
import Header from "./componants/Header/Header.jsx";
import HeroSection from "./componants/HeroSection/HeroSection.jsx";
import About from "./componants/About/About.jsx";
import ServiceCard from "./componants/Services/ServiceCard.jsx";
import User from "./componants/User/User.jsx";
import img from "./assets/cover.png";
import Footer from "./componants/Footer/Footer.jsx";

function App() {
  // Inline style for the background image
  const style = {
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "550px",
    };
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <About  />
      <section className="services-section" id="services">
        <div className="title">
          <h2>WHAT WE OFFER</h2>
          <p>We're committed to bringing you the best workout experience.</p>
        </div>
        <div className="services">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      <section className="user-section" id="user">
        <div className="title">
          <h2>Before and After</h2>
        </div>
        <div className="users">
          {user.map((userData, index) => (
            <User key={index} {...userData} />
          ))}
        </div>
      </section>
      <section className="contactUs-section" id="contact">
        <div style={style} className="image-and-content">
          <h2>GET IN TOUCH <br /> TODAY</h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
