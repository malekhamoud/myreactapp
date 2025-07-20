import React from "react";
import "./bumpups.css";

function Bumpups() {
  return (
    <div className="bumpups">
      <div className="services-grid">
        {/* SEO Card */}
        <div className="service-card seo-card">
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">Search engine optimization</h3>
              <div className="card-icon seo-icon">
                <div className="magnifying-glass">
                  <div className="glass-circle"></div>
                  <div className="glass-handle"></div>
                </div>
                <div className="network-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="globe-icon">🌐</div>
                <div className="play-icon">▶</div>
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="action-button">
                <span className="arrow">→</span>
              </div>
              <span className="action-text">Learn more</span>
            </div>
          </div>
        </div>

        {/* PPC Card */}
        <div className="service-card ppc-card">
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">Pay-per-click advertising</h3>
              <div className="card-icon ppc-icon">
                <div className="computer-window">
                  <div className="window-frame"></div>
                  <div className="mouse-cursor">👆</div>
                  <div className="starburst">💥</div>
                </div>
                <div className="spring-coil"></div>
                <div className="globe-icon">🌐</div>
                <div className="dashed-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="action-button">
                <span className="arrow">→</span>
              </div>
              <span className="action-text">Learn more</span>
            </div>
          </div>
        </div>

        {/* Social Media Marketing Card */}
        <div className="service-card social-card">
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">Social Media Marketing</h3>
              <div className="card-icon social-icon">
                <div className="social-post">
                  <div className="smiley">😊</div>
                  <div className="rating-stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <div className="floating-hearts">
                  <span>❤</span>
                  <span>❤</span>
                  <span>❤</span>
                </div>
                <div className="dots">⋯</div>
              </div>
            </div>
            <div className="card-action">
              <div className="action-button white">
                <span className="arrow">→</span>
              </div>
              <span className="action-text">Learn more</span>
            </div>
          </div>
        </div>

        {/* Email Marketing Card */}
        <div className="service-card email-card">
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">Email Marketing</h3>
              <div className="card-icon email-icon">
                <div className="mailboxes">
                  <div className="mailbox left"></div>
                  <div className="mailbox right"></div>
                </div>
                <div className="flying-envelopes">
                  <div className="envelope">✉</div>
                  <div className="envelope">✉</div>
                  <div className="envelope">✉</div>
                </div>
                <div className="flow-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="action-button">
                <span className="arrow">→</span>
              </div>
              <span className="action-text">Learn more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bumpups;
