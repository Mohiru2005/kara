import "./App.css";

function App() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <h3>1st Ever Wedding Expo & Flea Market</h3>

          <h1>KARA'S WEDDING EXPO 2026</h1>

          <p>June 13th & 14th • A1 Convention • Ongole</p>

          <p className="tagline">
            Great Chance To Elevate Your Brand
          </p>

          <div className="btns">
            <button>Become Sponsor</button>
            <button>Book Stall</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="card">
          <h2>10,000+</h2>
          <p>Weddings Annually</p>
        </div>

        <div className="card">
          <h2>5000-6000</h2>
          <p>Expected Visitors</p>
        </div>

        <div className="card">
          <h2>30 Lakh+</h2>
          <p>Audience Reach</p>
        </div>

        <div className="card">
          <h2>0</h2>
          <p>Direct Competitors</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Why Ongole? Why Now?</h2>

        <p>
          Ongole is the headquarters of Prakasam District with
          strong NH16 connectivity. Surrounding towns including
          Chirala, Guntur, Vijayawada, Nellore, Kandukur and
          Markapur create a catchment audience of more than
          30 lakh people.
        </p>

        <p>
          Andhra Pradesh wedding industry is growing rapidly,
          yet Ongole has no organized wedding expo. Kara's
          Wedding Expo 2026 becomes the first mover in this
          growing market.
        </p>
      </section>

      {/* KARA EVENTS */}
      <section className="section light">
        <h2>About Kara Events</h2>

        <div className="grid">
          <div className="box">Wedding Planning</div>
          <div className="box">Corporate Events</div>
          <div className="box">Private Parties</div>
          <div className="box">Expo Organization</div>
          <div className="box">Vendor Management</div>
        </div>
      </section>

      {/* WHY EXHIBIT */}
      <section className="section">
        <h2>Why Exhibit With Us?</h2>

        <div className="grid">
          <div className="box">
            <h3>Massive Audience</h3>
            <p>5000-6000 visitors in two days.</p>
          </div>

          <div className="box">
            <h3>On Spot Conversions</h3>
            <p>Meet serious wedding buyers directly.</p>
          </div>

          <div className="box">
            <h3>Peak Season</h3>
            <p>90 day wedding season advantage.</p>
          </div>

          <div className="box">
            <h3>Brand Trust</h3>
            <p>Increase visibility and credibility.</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section light">
        <h2>Event Highlights</h2>

        <div className="grid">
          <div className="box">Exhibition Stalls</div>
          <div className="box">Premium Expo Setup</div>
          <div className="box">Live Anantha Band</div>
          <div className="box">Jewellery Exhibition</div>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section className="section">
        <h2>Sponsorship Packages</h2>

        <div className="pricing">
          <div className="price-card">
            <h3>Title Sponsor</h3>
            <h1>₹8L</h1>
          </div>

          <div className="price-card">
            <h3>Powered By</h3>
            <h1>₹5L</h1>
          </div>

          <div className="price-card">
            <h3>Co Sponsor</h3>
            <h1>₹3L</h1>
          </div>

          <div className="price-card">
            <h3>Associate Sponsor</h3>
            <h1>₹2L</h1>
          </div>

          <div className="price-card">
            <h3>Brand Partner</h3>
            <h1>₹1L</h1>
          </div>
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="section light">
        <h2>Promotional Activities</h2>

        <div className="grid">
          <div className="box">Hoardings</div>
          <div className="box">Divider Boards</div>
          <div className="box">Flyers</div>
          <div className="box">Media Coverage</div>
          <div className="box">Mobile Campaign</div>
          <div className="box">Social Media</div>
          <div className="box">Theatre Ads</div>
          <div className="box">Influencer Reels</div>
        </div>
      </section>

      {/* STALLS */}
      <section className="section">
        <h2>Stall Pricing</h2>

        <div className="pricing">
          <div className="price-card">
            <h3>Premium Stall</h3>
            <h1>₹1.5L</h1>
            <p>12 x 12</p>
          </div>

          <div className="price-card">
            <h3>Exhibitor Stall</h3>
            <h1>₹50K</h1>
            <p>10 x 10</p>
          </div>

          <div className="price-card">
            <h3>Food Stall</h3>
            <h1>₹30K</h1>
          </div>

          <div className="price-card">
            <h3>Flea Market</h3>
            <h1>₹25K</h1>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Your Brand Deserves The Spotlight</h2>

        <p>And This Is The Stage</p>

        <h3>📞 9642220596</h3>
        <h3>📞 8008040090</h3>
      </section>
    </>
  );
}

export default App;