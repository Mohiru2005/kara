import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeTab from "./components/HomeTab";
import AboutTab from "./components/AboutTab";
import SponsorsTab from "./components/SponsorsTab";
import WorkTab from "./components/WorkTab";

/**
 * Main application orchestrator for KARA Wedding Expo 2026.
 * Manages active tab routing and scroll behaviors.
 */
function App() {
  const [activeTab, setActiveTab] = useState("home");

  // Scroll to top automatically when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeTab]);

  const handleSponsorCTA = () => {
    setActiveTab("sponsors");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* STICKY GLASS HEADER */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* ACTIVE TAB CONTENT */}
      <main>
        {activeTab === "home" && <HomeTab onSponsorCTA={handleSponsorCTA} />}
        {activeTab === "work" && <WorkTab />}
        {activeTab === "about" && <AboutTab />}
        {activeTab === "sponsors" && <SponsorsTab />}
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;