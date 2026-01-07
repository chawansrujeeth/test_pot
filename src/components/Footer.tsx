
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin } from "lucide-react";

/**
 * AppFooter: Main footer for the CodeTester app, includes social links and navigation.
 */
const AppFooter = () => {
  return (
    <footer className="footer-gradient text-white">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">CodeTester 🚀</h3>
            <p className="footer-desc">
              Making code testing fun and accessible for everyone! Join our community of learners and developers who are passionate about coding.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/submit" className="footer-link">Submit & Test Code</Link>
              </li>
              <li>
                <Link to="/save" className="footer-link">Save Your Code</Link>
              </li>
              <li>
                <Link to="/stories" className="footer-link">Our Stories</Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-section-title">Support</h4>
            <ul className="footer-links">
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 CodeTester. Made with 💙 for developers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
