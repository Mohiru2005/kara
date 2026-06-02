import stallsLayout from "../assets/stalls_layout.png";
import { getWhatsAppLink } from "../utils/whatsapp";

/**
 * Sponsors and Stalls page view tab component displaying ROI benefits, packages, pricing models, and floor plan.
 * Employs staggered slide-up loading animations to maintain visual alignment across the site.
 */
function SponsorsTab() {
  return (
    <div className="tab-content">
      {/* EXHIBITOR BENEFITS */}
      <section className="section">
        <div className="section-title-wrap animate-slide-up delay-1">
          <span className="section-subtitle">Maximize Brand ROI</span>
          <h2 className="section-title">Why Exhibit With Us?</h2>
        </div>

        <div className="grid-4">
          <div className="highlight-card animate-slide-up delay-2">
            <h3>Direct Buyers</h3>
            <p>Engage face-to-face with 5,000+ active wedding shoppers and pre-wedding planning families looking to lock in bookings.</p>
          </div>
          <div className="highlight-card animate-slide-up delay-3">
            <h3>High Visibility</h3>
            <p>Receive exceptional promotional visibility across Prakasam district before, during, and after the expo.</p>
          </div>
          <div className="highlight-card animate-slide-up delay-4">
            <h3>Peak Season Timing</h3>
            <p>Strategically timed right before the peak wedding calendar to secure massive advanced bookings for your brand.</p>
          </div>
          <div className="highlight-card animate-slide-up delay-5">
            <h3>360° Promotion</h3>
            <p>Backed by high-impact hoardings, mobile promotion vans, local theatre ads, and widespread influencer outreach.</p>
          </div>
        </div>
      </section>

      {/* SPONSORSHIP PACKAGES */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-title-wrap animate-slide-up delay-1">
          <span className="section-subtitle">Exclusive Opportunities</span>
          <h2 className="section-title">Sponsorship Packages</h2>
        </div>

        <div className="packages-grid animate-slide-up delay-2">
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
        </div>
      </section>

      {/* STALL PRICING */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="stalls-wrap animate-slide-up delay-3">
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

          {/* VENUE FLOOR PLAN MAP */}
          <div style={{ marginTop: "50px", borderTop: "1px solid var(--glass-border)", paddingTop: "40px" }}>
            <div className="section-title-wrap">
              <span className="section-subtitle">Venue Map</span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#fff", fontFamily: "var(--font-heading)" }}>Stalls & Exhibition Layout</h3>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "24px", border: "1px solid var(--glass-border)", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", backdropFilter: "blur(12px)" }}>
              <img src={stallsLayout} alt="Stalls Floor Plan Layout" style={{ width: "100%", height: "auto", maxWidth: "800px", borderRadius: "16px", display: "block" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SponsorsTab;
