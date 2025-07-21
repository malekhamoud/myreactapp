import React from "react";
import "./bumpups.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faComments, faVideo, faClapperboard } from "@fortawesome/free-solid-svg-icons";

function Bumpups() {
  return (
    <div className="bumpups">
      <div className="services-grid">
        {/* SEO Card (now Local Video) */}
        <div className="service-card seo-card">
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">local video </h3>
              <div className="card-icon">
                <FontAwesomeIcon icon={faCloudArrowUp} size="3x" />
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
              <h3 className="card-title">video chat</h3>
              <div className="card-icon ppc-icon">
                <FontAwesomeIcon icon={faComments} size="3x" />
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
              <h3 className="card-title">AI youtube</h3>
              <div className="card-icon social-icon">
                <FontAwesomeIcon icon={faVideo} size="3x" />
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
              <h3 className="card-title">API</h3>
              <div className="card-icon email-icon">
                <FontAwesomeIcon icon={faClapperboard} size="3x" />
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
