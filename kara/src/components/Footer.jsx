import logo from "../assets/logo.png";

/**
 * Universal Footer component displaying the brand presence and copyright.
 */
function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
        <img src={logo} alt="KARA Logo" style={{ height: "35px", width: "auto", borderRadius: "6px" }} />
        <div className="footer-logo" style={{ margin: 0 }}>
          KARA<span> EVENTS</span>
        </div>
      </div>
      <p className="footer-copy">© 2026 Kara Events • Wedding Expo Ongole • All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
