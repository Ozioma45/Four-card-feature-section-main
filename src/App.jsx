import React from "react";
import "./styles.css";
import FeatureSection from "./components/FeatureSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;
