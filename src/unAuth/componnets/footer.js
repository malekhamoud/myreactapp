import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="footer-title"><span className="highlight">#1 AI VIDEO MODEL</span></div>
          <div className="footer-desc">
            Bump AI will watch any video<br />
            and deliver insights across all<br />
            industries.
          </div>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span className="icon linkedin" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><span className="icon twitter" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><span className="icon youtube" /></a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Product</div>
          <ul>
            <li>News</li>
            <li>Pricing</li>
            <li>Product Changelog</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Features</div>
          <ul>
            <li>Workspaces</li>
            <li>Creator Studio</li>
            <li>YouTube Videos</li>
            <li>Local Videos</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-heading">API</div>
          <ul>
            <li>Startups</li>
            <li>Zapier</li>
            <li>Enterprise</li>
            <li>API Documentation</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
