import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="addrees">
          <h2>Mailing Address</h2>
          <p>123 Anywhere St., Any City, ST 12345</p>
        </div>
        <div className="email">
          <h2>Email Address </h2>
          <p>
            <a href="hello@reallygreatsite.com">hello@reallygreatsite.com</a>
          </p>
        </div>
        <div className="phone">
          <h2>Phone Number</h2>
          <p>+1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
