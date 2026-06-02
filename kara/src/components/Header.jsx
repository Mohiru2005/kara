import logo from "../assets/logo.png";

/**
 * Sticky Glass Header and Navigation component.
 * 
 * @param {Object} props
 * @param {string} props.activeTab - Current active tab identifier.
 * @param {Function} props.setActiveTab - State setter to switch active tab.
 */
function Header({ activeTab, setActiveTab }) {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo-link" onClick={() => setActiveTab("home")}>
          <img src={logo} alt="KARA Logo" className="logo-img" />
          <div className="logo-info">
            <span className="logo-main">KARA</span>
            <span className="logo-sub">Wedding Expo 2026</span>
          </div>
        </div>

        <nav className="tabs">
          <button
            onClick={() => setActiveTab("home")}
            className={`tab-btn ${activeTab === "home" ? "active" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab("work")}
            className={`tab-btn ${activeTab === "work" ? "active" : ""}`}
          >
            Our Work
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab("sponsors")}
            className={`tab-btn ${activeTab === "sponsors" ? "active" : ""}`}
          >
            Sponsors
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
