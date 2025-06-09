
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cartoon-blue-600 to-cartoon-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CodeTester 🚀</h3>
            <p className="text-cartoon-blue-100 mb-4 leading-relaxed">
              Making code testing fun and accessible for everyone! Join our community of 
              learners and developers who are passionate about coding.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/submit" className="text-cartoon-blue-100 hover:text-white transition-colors">
                  Submit & Test Code
                </Link>
              </li>
              <li>
                <Link to="/save" className="text-cartoon-blue-100 hover:text-white transition-colors">
                  Save Your Code
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-cartoon-blue-100 hover:text-white transition-colors">
                  Our Stories
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-cartoon-blue-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-cartoon-blue-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-cartoon-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cartoon-blue-400 mt-8 pt-8 text-center text-cartoon-blue-100">
          <p>&copy; 2024 CodeTester. Made with 💙 for developers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
