
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-cartoon-blue-200 sticky top-0 z-50">
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
            <Link to="/submit" className="text-gray-700 hover:text-cartoon-blue-600 font-medium transition-colors">
              Submit Code
            </Link>
            <Link to="/save" className="text-gray-700 hover:text-cartoon-blue-600 font-medium transition-colors">
              Saved Code
            </Link>
            <Link to="/stories" className="text-gray-700 hover:text-cartoon-blue-600 font-medium transition-colors">
              Our Stories
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-cartoon-blue-600 font-medium transition-colors">
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

export default Navigation;
