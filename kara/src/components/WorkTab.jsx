import promo1 from "../assets/promo1.jpg";
import promo2 from "../assets/promo2.jpg";
import promo3 from "../assets/promo3.jpg";
import promo4 from "../assets/promo4.jpg";
import promo5 from "../assets/promo5.jpg";
import promo6 from "../assets/promo6.jpg";
import promo7 from "../assets/promo7.jpg";
import promo8 from "../assets/promo8.jpg";
import promo9 from "../assets/promo9.jpg";

/**
 * Our Work tab view component showcasing historical campaign creatives and portfolios.
 * Features staggered entry animations to keep tab transitions fluid.
 */
function WorkTab() {
  return (
    <div className="tab-content">
      <section className="section">
        <div className="section-title-wrap animate-slide-up delay-1">
          <span className="section-subtitle">Portfolio Masterpieces</span>
          <h2 className="section-title">Our Past Work</h2>
          <p style={{ color: "var(--text-muted)", marginTop: "12px", fontSize: "1.1rem" }}>
            A glimpse into the luxurious weddings, high-end exhibitions, and grand scale public events curated by Kara Events.
          </p>
        </div>

        <div className="grid-3" style={{ gap: "30px" }}>
          <div className="highlight-card animate-slide-up delay-2" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo1} alt="KARA Wedding Expo Campaign" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="highlight-card animate-slide-up delay-3" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo2} alt="Ongole Lifestyle Curation" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="highlight-card animate-slide-up delay-4" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo3} alt="Bridal Gown Editorial" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="highlight-card animate-slide-up delay-5" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo4} alt="Saree Campaign Editorial" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="highlight-card animate-slide-up delay-6" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo5} alt="Ongole Junction Curation" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="highlight-card animate-slide-up delay-7" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo6} alt="Beach Expo Campaign Poster" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="highlight-card animate-slide-up delay-8" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo7} alt="KARA Eternal Series Poster" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="highlight-card animate-slide-up delay-2" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo8} alt="Beachfront Wedding Curation" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="highlight-card animate-slide-up delay-3" style={{ padding: "16px" }}>
            <div className="highlight-card-image-wrap" style={{ width: "100%", height: "auto", aspectRatio: "2 / 3", marginBottom: 0 }}>
              <img src={promo9} alt="Pottery & June Campaign Poster" className="highlight-card-img" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkTab;
