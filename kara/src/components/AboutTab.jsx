import founder from "../assets/founder.png";
import cofounder from "../assets/cofounder.png";

/**
 * About Us tab view component highlighting curators, founders, market potential, and contact links.
 * Incorporates premium staggered entry slide-up animations.
 */
function AboutTab() {
  return (
    <div className="tab-content">
      {/* ABOUT US INTRO */}
      <section className="section">
        <div className="section-title-wrap animate-slide-up delay-1">
          <span className="section-subtitle">The Curators</span>
          <h2 className="section-title">About Kara Events</h2>
        </div>

        <div className="about-intro-box animate-slide-up delay-2">
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

        {/* MEET THE FOUNDERS */}
        <div className="section-title-wrap animate-slide-up delay-3" style={{ marginTop: "60px", marginBottom: "40px" }}>
          <span className="section-subtitle">The Visionaries</span>
          <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-heading)" }}>
            Meet Our Founders
          </h3>
        </div>

        <div className="founders-grid">
          {/* FOUNDER 1: Narmada Gorremuchu */}
          <div className="founder-profile-card animate-slide-up delay-4">
            <div className="founder-img-wrapper">
              <img src={cofounder} alt="Narmada Gorremuchu - Founder" className="founder-img" />
            </div>
            <div className="founder-info">
              <span className="badge" style={{ marginBottom: "16px", fontSize: "0.75rem", padding: "4px 12px" }}>
                The Creative Eye
              </span>
              <h4 className="founder-name">Narmada Gorremuchu</h4>
              <h5 className="founder-title">Founder</h5>
              <p className="founder-bio">
                Narmada Gorremuchu is an acclaimed fashion designer and creative director specializing in couture bridal wear, premium styling, and creating breathtaking wedding designs.
              </p>
            </div>
          </div>

          {/* FOUNDER 2: Pradeep Sagar */}
          <div className="founder-profile-card animate-slide-up delay-5">
            <div className="founder-img-wrapper">
              <img src={founder} alt="Pradeep Sagar - Co-Founder" className="founder-img" />
            </div>
            <div className="founder-info">
              <span className="badge" style={{ marginBottom: "16px", fontSize: "0.75rem", padding: "4px 12px" }}>
                The Visionary
              </span>
              <h4 className="founder-name">Pradeep Sagar</h4>
              <h5 className="founder-title">Co-Founder</h5>
              <p className="founder-bio">
                Pradeep Sagar is a highly acclaimed professional photographer and event curator with a vast, stellar experience of over 2 decades in capturing life's finest moments and directing high-end events.
              </p>
            </div>
          </div>
        </div>

        {/* MARKET POTENTIAL */}
        <div className="market-box animate-slide-up delay-6">
          <div className="section-title-wrap" style={{ marginBottom: "30px" }}>
            <span className="section-subtitle" style={{ color: "var(--accent-light)" }}>The Opportunity</span>
            <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-heading)" }}>
              Why Ongole? Why Now?
            </h3>
          </div>
          <div className="grid-3" style={{ marginTop: "20px" }}>
            <div className="highlight-card" style={{ background: "rgba(0,0,0,0.15)" }}>
              <h4 style={{ color: "var(--accent-light)", fontSize: "1.2rem", marginBottom: "8px", fontWeight: "700" }}>
                Strategic Hub
              </h4>
              <p style={{ fontSize: "0.9rem" }}>
                Directly on NH-16. Catchment of 30 Lakh+ people covering Guntur, Vijayawada, Nellore, Chirala, and Markapur.
              </p>
            </div>

            <div className="highlight-card" style={{ background: "rgba(0,0,0,0.15)" }}>
              <h4 style={{ color: "var(--accent-light)", fontSize: "1.2rem", marginBottom: "8px", fontWeight: "700" }}>
                Unrivaled Demand
              </h4>
              <p style={{ fontSize: "0.9rem" }}>
                High regional purchasing power with over 10,000+ premium weddings happening in the district annually.
              </p>
            </div>

            <div className="highlight-card" style={{ background: "rgba(0,0,0,0.15)" }}>
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
        <div className="contact-wrap animate-slide-up delay-7">
          <span className="section-subtitle" style={{ color: "var(--accent-light)" }}>Secure Your Spotlight</span>
          <h2>Join With Us</h2>
          <p>Join Andhra Pradesh's most anticipated, premium organized wedding exhibition.</p>

          <div className="phones-grid">
            <a href="tel:+919642220596" className="phone-card">
              +91 96422 20596
            </a>
            <a href="tel:+918008040090" className="phone-card">
              +91 80080 40090
            </a>
          </div>

          <a
            href="https://wa.me/919642220596?text=Hi,%20I%20am%20interested%20in%20sponsoring/booking%20a%20stall%20at%20KARA%20Wedding%20Expo%202026."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutTab;
