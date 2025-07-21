import React from "react";
import "./landingpage.css";
import Bumpups from "./componnets/bumpups";
import Footer from "./componnets/footer";
import Navpar from "./componnets/navpar";
import Timestamp from "./componnets/timestamp";
import "./componnets/bumpups.css";
import "./componnets/footer.css";
import "./componnets/navpar.css";
import "./componnets/timestamp.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <Navpar />
      <Bumpups />
      <Timestamp />
      <Footer />
    </div>
  );
}

export default LandingPage;
