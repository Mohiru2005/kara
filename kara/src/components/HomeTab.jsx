import liveBandPoster from "../assets/live_band_poster.jpg";
import jewelleryPavilion from "../assets/jewellery_pavilion.png";
import exhibitionStalls from "../assets/exhibition_stalls.png";
import luxurySetup from "../assets/luxury_setup.png";
import rampWalk from "../assets/ramp_walk.png";

/**
 * Home tab view component showcasing the hero section, core statistics, and event highlights.
 * Uses staggered entry slide-up animations to match the premium theme.
 * 
 * @param {Object} props
 * @param {Function} props.onSponsorCTA - Callback triggered to view sponsorship packages and reserve stalls.
 */
function HomeTab({ onSponsorCTA }) {
  return (
    <div className="tab-content">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="hero-overlay">
          <span className="badge animate-slide-up delay-1" style={{ display: "block", width: "fit-content", margin: "0 auto 24px auto" }}>
            1st Ever Wedding Expo & Flea Market
          </span>
          <h1 className="animate-slide-up delay-2">
            KARA'S <span>WEDDING EXPO # 2026</span>
          </h1>
          <p className="hero-tagline animate-slide-up delay-4">
            Elevate your brand presence in Andhra Pradesh's most lucrative, untapped regional market.
          </p>

          <div className="hero-btns animate-slide-up delay-6">
            <button className="btn-primary" onClick={onSponsorCTA}>
              Become A Sponsor
            </button>
            <button className="btn-secondary" onClick={onSponsorCTA}>
              Reserve Your Stall
            </button>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="stats-grid">
          <div className="stat-card animate-slide-up delay-1">
            <span className="stat-num">10,000+</span>
            <p className="stat-label">Weddings Annually</p>
            <p className="stat-sub">Massive high-value Prakasam market</p>
          </div>
          <div className="stat-card animate-slide-up delay-2">
            <span className="stat-num">5000+</span>
            <p className="stat-label">Expected Visitors</p>
            <p className="stat-sub">High-intent active wedding planners</p>
          </div>
          <div className="stat-card animate-slide-up delay-3">
            <span className="stat-num">30 Lakh+</span>
            <p className="stat-label">Audience Reach</p>
            <p className="stat-sub">AP-wide marketing and campaign reach</p>
          </div>
          <div className="stat-card animate-slide-up delay-4">
            <span className="stat-num">0</span>
            <p className="stat-label">Direct Competitors</p>
            <p className="stat-sub">First-ever organized wedding expo here</p>
          </div>
        </div>
      </section>

      {/* EVENT HIGHLIGHTS */}
      <section className="section" style={{ borderTop: "1px solid var(--glass-border)" }}>
        <div className="section-title-wrap animate-slide-up delay-1">
          <span className="section-subtitle">What's Waiting For You</span>
          <h2 className="section-title">Expo Highlights</h2>
        </div>

        <div className="highlights-container">
          <div className="highlights-poster-side animate-slide-up delay-2">
            <img src={liveBandPoster} alt="Live Band Performing at KARA Wedding Expo 2026" className="highlights-poster-img" />
          </div>
          <div className="highlights-cards-side">
            <div className="grid-2">
              <div className="highlight-card animate-slide-up delay-3">
                <div className="highlight-card-image-wrap">
                  <img src={jewelleryPavilion} alt="Traditional Bridal Jewellery" className="highlight-card-img" />
                </div>
                <h3>Jewellery Pavilion</h3>
                <p>Exclusive spotlight zone for premium gold, diamond, and handcrafted traditional bridal collections.</p>
              </div>
              <div className="highlight-card animate-slide-up delay-4">
                <div className="highlight-card-image-wrap">
                  <img src={exhibitionStalls} alt="Exhibition Stalls" className="highlight-card-img" />
                </div>
                <h3>Exhibition Stalls</h3>
                <p>Premium stalls presenting direct bridal wear, designer jewelry, styling, photography, and wedding gifts.</p>
              </div>
              <div className="highlight-card animate-slide-up delay-5">
                <div className="highlight-card-image-wrap">
                  <img src={luxurySetup} alt="Luxury Setup" className="highlight-card-img" />
                </div>
                <h3>Luxury Setup</h3>
                <p>World-class, premium exhibition environment inside Ongole's premier A1 Convention Center.</p>
              </div>
              <div className="highlight-card animate-slide-up delay-6">
                <div className="highlight-card-image-wrap">
                  <img src={rampWalk} alt="Bridal Couture Ramp Walk" className="highlight-card-img" />
                </div>
                <h3>Bridal Ramp Walk</h3>
                <p>Experience the glamour of premium designers showcasing the latest trends in wedding couture and bridal fashion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeTab;
