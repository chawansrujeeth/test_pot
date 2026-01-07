
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const Navigation = () => {
  return (
      <nav className="bg-white/80 shadow-md py-4 px-6 flex items-center justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-cartoon-blue-400 to-cartoon-purple-400 p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cartoon-blue-600 to-cartoon-purple-500 bg-clip-text text-transparent">
              CodeTester
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
              <Link to="/submit" className="navbar-link hover:text-cartoon-blue-600 transition-colors">
                Submit
              </Link>
              <Link to="/save" className="navbar-link hover:text-cartoon-blue-600 transition-colors">
                Save
              </Link>
              <Link to="/stories" className="navbar-link hover:text-cartoon-blue-600 transition-colors">
                Stories
              </Link>
              <Link to="/faq" className="navbar-link hover:text-cartoon-blue-600 transition-colors">
                FAQ
              </Link>
          </div>
          
          <Button 
            asChild 
            className="cartoon-button hidden md:inline-flex"
          >
            <Link to="/submit">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

 /**
  * AppNavigation: Main navigation bar for the CodeTester app.
  */
 export default AppNavigation;
