import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleSponsorCTA = () => {
    setActiveTab("sponsors");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getWhatsAppLink = (type, name) => {
    const text = encodeURIComponent(
      `Hi, I am interested in inquiring about the "${name}" ${type} for KARA Wedding Expo 2026.`
    );
    return `https://wa.me/919642220596?text=${text}`;
  };

  return (
    <>
      {/* STICKY GLASS HEADER */}
      <header className="header">
        <div className="nav-container">
          <div className="logo-container" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img src={logo} alt="KARA Logo" style={{ height: "55px", width: "auto", borderRadius: "8px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="logo-main" style={{ fontSize: "1.45rem", lineHeight: "1.1", fontWeight: "800" }}>KARA</span>
              <span className="logo-sub" style={{ fontSize: "0.65rem", letterSpacing: "1px" }}>Wedding Expo 2026</span>
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

      {/* ACTIVE TAB CONTENT */}
      <main>
        {activeTab === "home" && (
          <div className="tab-content">
            {/* HERO SECTION */}
            <section className="hero">
              <div className="bg-glow-1"></div>
              <div className="bg-glow-2"></div>
              <div className="hero-overlay">
                <span className="badge" style={{ display: "block", width: "fit-content", margin: "0 auto 24px auto" }}>1st Ever Wedding Expo & Flea Market</span>
                <h1>
                  KARA'S <span>WEDDING EXPO 2026</span>
                </h1>
                <p className="hero-meta">
                  <span>June 13th & 14th</span>
                  <span className="bullet">•</span>
                  <span>A1 Convention Center</span>
                  <span className="bullet">•</span>
                  <span>Ongole</span>
                </p>
                <p className="hero-tagline">
                  Elevate your brand presence in Andhra Pradesh's most lucrative, untapped regional market.
                </p>

                <h3 className="crowd-highlight">
                  Expected Footfall: <span>5,000 - 6,000 Buyers</span>
                </h3>

                <div className="hero-btns">
                  <button className="btn-primary" onClick={handleSponsorCTA}>
                    Become A Sponsor
                  </button>
                  <button className="btn-secondary" onClick={handleSponsorCTA}>
                    Reserve Your Stall
                  </button>
                </div>
              </div>
            </section>

            {/* KEY STATS */}
            <section className="section" style={{ paddingTop: 0 }}>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-num">10,000+</span>
                  <p className="stat-label">Weddings Annually</p>
                  <p className="stat-sub">Massive high-value Prakasam market</p>
                </div>
                <div className="stat-card">
                  <span className="stat-num">5000+</span>
                  <p className="stat-label">Expected Visitors</p>
                  <p className="stat-sub">High-intent active wedding planners</p>
                </div>
                <div className="stat-card">
                  <span className="stat-num">30 Lakh+</span>
                  <p className="stat-label">Audience Reach</p>
                  <p className="stat-sub">AP-wide marketing and campaign reach</p>
                </div>
                <div className="stat-card">
                  <span className="stat-num">0</span>
                  <p className="stat-label">Direct Competitors</p>
                  <p className="stat-sub">First-ever organized wedding expo here</p>
                </div>
              </div>
            </section>

            {/* EVENT HIGHLIGHTS */}
            <section className="section" style={{ borderTop: "1px solid var(--glass-border)" }}>
              <div className="section-title-wrap">
                <span className="section-subtitle">What's Waiting For You</span>
                <h2 className="section-title">Expo Highlights</h2>
              </div>

              <div className="grid-4">
                <div className="highlight-card">
                  <span className="card-icon">🛍️</span>
                  <h3>Exhibition Stalls</h3>
                  <p>Premium stalls presenting direct bridal wear, designer jewelry, styling, photography, and wedding gifts.</p>
                </div>
                <div className="highlight-card">
                  <span className="card-icon">✨</span>
                  <h3>Luxury Setup</h3>
                  <p>World-class, premium exhibition environment inside Ongole's premier A1 Convention Center.</p>
                </div>
                <div className="highlight-card">
                  <span className="card-icon">🎵</span>
                  <h3>Live Anantha Band</h3>
                  <p>Non-stop family entertainment, live concert, food court experiences, and high-energy ambient music.</p>
                </div>
                <div className="highlight-card">
                  <span className="card-icon">💎</span>
                  <h3>Jewellery Pavilion</h3>
                  <p>Exclusive spotlight zone for premium gold, diamond, and handcrafted traditional bridal collections.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "about" && (
          <div className="tab-content">
            {/* ABOUT US INTRO */}
            <section className="section">
              <div className="section-title-wrap">
                <span className="section-subtitle">The Curators</span>
                <h2 className="section-title">About Kara Events</h2>
              </div>

              <div className="about-intro-box">
                <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 30px auto" }}>
                  Kara Events is a professional event management and curation powerhouse specializing in premium weddings, corporate conferences, product launches, high-end exhibitions, and luxury private celebrations.
                </p>

                <div className="services-list">
                  <div className="service-item">
                    <span className="service-dot"></span>
                    Wedding Design & Execution
                  </div>
                  <div className="service-item">
                    <span className="service-dot"></span>
                    Exhibition & Expo Curation
                  </div>
                  <div className="service-item">
                    <span className="service-dot"></span>
                    High-End Corporate Branding
                  </div>
                  <div className="service-item">
                    <span className="service-dot"></span>
                    Vendor Networks & Management
                  </div>
                </div>
              </div>

              {/* MARKET POTENTIAL */}
              <div className="market-box">
                <div className="section-title-wrap" style={{ marginBottom: "30px" }}>
                  <span className="section-subtitle" style={{ color: "var(--accent-light)" }}>The Opportunity</span>
                  <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-heading)" }}>
                    Why Ongole? Why Now?
                  </h3>
                </div>

                <div className="grid-3" style={{ marginTop: "20px" }}>
                  <div className="highlight-card" style={{ background: "rgba(0,0,0,0.15)" }}>
                    <span className="card-icon" style={{ fontSize: "1.8rem" }}>📍</span>
                    <h4 style={{ color: "var(--accent-light)", fontSize: "1.2rem", marginBottom: "8px", fontWeight: "700" }}>
                      Strategic Hub
                    </h4>
                    <p style={{ fontSize: "0.9rem" }}>
                      Directly on NH-16. Catchment of 30 Lakh+ people covering Guntur, Vijayawada, Nellore, Chirala, and Markapur.
                    </p>
                  </div>

                  <div className="highlight-card" style={{ background: "rgba(0,0,0,0.15)" }}>
                    <span className="card-icon" style={{ fontSize: "1.8rem" }}>💍</span>
                    <h4 style={{ color: "var(--accent-light)", fontSize: "1.2rem", marginBottom: "8px", fontWeight: "700" }}>
                      Unrivaled Demand
                    </h4>
                    <p style={{ fontSize: "0.9rem" }}>
                      High regional purchasing power with over 10,000+ premium weddings happening in the district annually.
                    </p>
                  </div>

                  <div className="highlight-card" style={{ background: "rgba(0,0,0,0.15)" }}>
                    <span className="card-icon" style={{ fontSize: "1.8rem" }}>🏆</span>
                    <h4 style={{ color: "var(--accent-light)", fontSize: "1.2rem", marginBottom: "8px", fontWeight: "700" }}>
                      First-Mover Edge
                    </h4>
                    <p style={{ fontSize: "0.9rem" }}>
                      Ongole's first-ever organized wedding exhibition. Zero competing events means 100% audience spotlight.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact-section" style={{ paddingTop: 0 }}>
              <div className="contact-wrap">
                <span className="section-subtitle" style={{ color: "var(--accent-light)" }}>Secure Your Spotlight</span>
                <h2>Let's Do Business</h2>
                <p>Join Andhra Pradesh's most anticipated, premium organized wedding exhibition.</p>

                <div className="phones-grid">
                  <a href="tel:+919642220596" className="phone-card">
                    <span className="phone-icon">📞</span>
                    +91 96422 20596
                  </a>
                  <a href="tel:+918008040090" className="phone-card">
                    <span className="phone-icon">📞</span>
                    +91 80080 40090
                  </a>
                </div>

                <a
                  href="https://wa.me/919642220596?text=Hi,%20I%20am%20interested%20in%20sponsoring/booking%20a%20stall%20at%20KARA%20Wedding%20Expo%202026."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <span>💬</span> Chat on WhatsApp
                </a>
              </div>
            </section>
          </div>
        )}

        {activeTab === "sponsors" && (
          <div className="tab-content">
            {/* EXHIBITOR BENEFITS */}
            <section className="section">
              <div className="section-title-wrap">
                <span className="section-subtitle">Maximize Brand ROI</span>
                <h2 className="section-title">Why Exhibit With Us?</h2>
              </div>

              <div className="grid-4">
                <div className="highlight-card">
                  <span className="card-icon">🎯</span>
                  <h3>Direct Buyers</h3>
                  <p>Engage face-to-face with 5,000+ active wedding shoppers and pre-wedding planning families looking to lock in bookings.</p>
                </div>
                <div className="highlight-card">
                  <span className="card-icon">📈</span>
                  <h3>High Visibility</h3>
                  <p>Receive exceptional promotional visibility across Prakasam district before, during, and after the expo.</p>
                </div>
                <div className="highlight-card">
                  <span className="card-icon">📅</span>
                  <h3>Peak Season Timing</h3>
                  <p>Strategically timed right before the peak wedding calendar to secure massive advanced bookings for your brand.</p>
                </div>
                <div className="highlight-card">
                  <span className="card-icon">📢</span>
                  <h3>360° Promotion</h3>
                  <p>Backed by high-impact hoardings, mobile promotion vans, local theatre ads, and widespread influencer outreach.</p>
                </div>
              </div>
            </section>

            {/* SPONSORSHIP PACKAGES */}
            <section className="section" style={{ paddingTop: 0 }}>
              <div className="section-title-wrap">
                <span className="section-subtitle">Exclusive Opportunities</span>
                <h2 className="section-title">Sponsorship Packages</h2>
              </div>

              <div className="packages-grid">
                <div className="pkg-card">
                  <p className="pkg-name">Brand Partner</p>
                  <div className="pkg-price">
                    <span className="currency">₹</span>
                    <span className="amount">1L</span>
                  </div>
                  <a
                    href={getWhatsAppLink("Sponsorship", "Brand Partner")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-cta"
                    style={{ textDecoration: "none", textAlign: "center", display: "block" }}
                  >
                    Enquire Now
                  </a>
                </div>

                <div className="pkg-card">
                  <p className="pkg-name">Associate Sponsor</p>
                  <div className="pkg-price">
                    <span className="currency">₹</span>
                    <span className="amount">2L</span>
                  </div>
                  <a
                    href={getWhatsAppLink("Sponsorship", "Associate Sponsor")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-cta"
                    style={{ textDecoration: "none", textAlign: "center", display: "block" }}
                  >
                    Apply Now
                  </a>
                </div>

                <div className="pkg-card featured">
                  <span className="pkg-badge">Best ROI</span>
                  <p className="pkg-name">Title Sponsor</p>
                  <div className="pkg-price">
                    <span className="currency">₹</span>
                    <span className="amount">8L</span>
                  </div>
                  <a
                    href={getWhatsAppLink("Sponsorship", "Title Sponsor")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-cta"
                    style={{ textDecoration: "none", textAlign: "center", display: "block" }}
                  >
                    Apply Now
                  </a>
                </div>

                <div className="pkg-card">
                  <p className="pkg-name">Powered By</p>
                  <div className="pkg-price">
                    <span className="currency">₹</span>
                    <span className="amount">5L</span>
                  </div>
                  <a
                    href={getWhatsAppLink("Sponsorship", "Powered By Sponsor")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-cta"
                    style={{ textDecoration: "none", textAlign: "center", display: "block" }}
                  >
                    Apply Now
                  </a>
                </div>

                <div className="pkg-card">
                  <p className="pkg-name">Co-Sponsor</p>
                  <div className="pkg-price">
                    <span className="currency">₹</span>
                    <span className="amount">3L</span>
                  </div>
                  <a
                    href={getWhatsAppLink("Sponsorship", "Co-Sponsor")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-cta"
                    style={{ textDecoration: "none", textAlign: "center", display: "block" }}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </section>

            {/* STALL PRICING */}
            <section className="section" style={{ paddingTop: 0 }}>
              <div className="stalls-wrap">
                <div className="section-title-wrap">
                  <span className="section-subtitle">Reserve Space</span>
                  <h2 className="section-title" style={{ fontSize: "2.2rem" }}>Stall Pricing</h2>
                </div>

                <div className="stalls-grid">
                  <a
                    href={getWhatsAppLink("Stall", "Premium Stall (12x12)")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stall-card"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <p className="stall-name">Premium Stall</p>
                    <p className="stall-price">₹1.5L</p>
                    <p className="stall-details">12 x 12 Prime Location</p>
                    <span style={{ display: "inline-block", marginTop: "12px", fontSize: "0.8rem", color: "var(--accent-light)", fontWeight: "bold" }}>
                      Book on WhatsApp ➜
                    </span>
                  </a>

                  <a
                    href={getWhatsAppLink("Stall", "Exhibitor Stall (10x10)")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stall-card"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <p className="stall-name">Exhibitor Stall</p>
                    <p className="stall-price">₹50K</p>
                    <p className="stall-details">10 x 10 Standard Location</p>
                    <span style={{ display: "inline-block", marginTop: "12px", fontSize: "0.8rem", color: "var(--accent-light)", fontWeight: "bold" }}>
                      Book on WhatsApp ➜
                    </span>
                  </a>

                  <a
                    href={getWhatsAppLink("Stall", "Food Stall")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stall-card"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <p className="stall-name">Food Stall</p>
                    <p className="stall-price">₹30K</p>
                    <p className="stall-details">Exquisite Catering Zone</p>
                    <span style={{ display: "inline-block", marginTop: "12px", fontSize: "0.8rem", color: "var(--accent-light)", fontWeight: "bold" }}>
                      Book on WhatsApp ➜
                    </span>
                  </a>

                  <a
                    href={getWhatsAppLink("Stall", "Flea Market Space")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stall-card"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <p className="stall-name">Flea Market Space</p>
                    <p className="stall-price">₹25K</p>
                    <p className="stall-details">Aesthetic Shopping Zone</p>
                    <span style={{ display: "inline-block", marginTop: "12px", fontSize: "0.8rem", color: "var(--accent-light)", fontWeight: "bold" }}>
                      Book on WhatsApp ➜
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
          <img src={logo} alt="KARA Logo" style={{ height: "35px", width: "auto", borderRadius: "6px" }} />
          <div className="footer-logo" style={{ margin: 0 }}>
            KARA<span> EVENTS</span>
          </div>
        </div>
        <p className="footer-copy">© 2026 Kara Events • Wedding Expo Ongole • All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;