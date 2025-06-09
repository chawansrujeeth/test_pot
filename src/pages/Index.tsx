
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code2, TestTube, Save, BookOpen, HelpCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cartoon-blue-50 via-white to-cartoon-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="cartoon-hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce-gentle mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cartoon-blue-400 to-cartoon-purple-400 rounded-3xl mb-6">
              <Code2 className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cartoon-blue-600 to-cartoon-purple-600 bg-clip-text text-transparent">
              CodeTester
            </span>{" "}
            🚀
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The most friendly and fun way to test your code! Whether you're a beginner or a pro, 
            our cartoon-themed platform makes coding feel like an adventure. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="cartoon-button text-lg py-4 px-8">
              <Link to="/submit">Start Testing Code 🎯</Link>
            </Button>
            <Button asChild variant="outline" className="text-lg py-4 px-8 rounded-2xl border-2 border-cartoon-blue-300 hover:bg-cartoon-blue-50">
              <Link to="/stories">Read Our Stories 📚</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What Makes Us Special? ✨
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="cartoon-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-cartoon-blue-400 to-cartoon-blue-500 p-4 rounded-2xl inline-block mb-4">
                  <TestTube className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Submit & Test Code</h3>
                <p className="text-gray-600">
                  Upload your Python, C++, or Java code and get instant feedback with our friendly testing system!
                </p>
                <Button asChild className="mt-4 cartoon-button w-full">
                  <Link to="/submit">Try It Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="cartoon-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-cartoon-green-400 to-cartoon-green-500 p-4 rounded-2xl inline-block mb-4">
                  <Save className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Save Your Code</h3>
                <p className="text-gray-600">
                  Keep track of all your amazing code snippets and access them whenever you need!
                </p>
                <Button asChild className="mt-4 bg-cartoon-green-500 hover:bg-cartoon-green-600 text-white w-full">
                  <Link to="/save">Save Code</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="cartoon-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-cartoon-purple-400 to-cartoon-pink-400 p-4 rounded-2xl inline-block mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Stories</h3>
                <p className="text-gray-600">
                  Read inspiring tales from our community of developers and their coding adventures!
                </p>
                <Button asChild className="mt-4 bg-cartoon-purple-500 hover:bg-cartoon-purple-600 text-white w-full">
                  <Link to="/stories">Read Stories</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="cartoon-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-cartoon-yellow-400 to-cartoon-yellow-500 p-4 rounded-2xl inline-block mb-4">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">FAQ</h3>
                <p className="text-gray-600">
                  Got questions? Find answers to everything you need to know about our platform!
                </p>
                <Button asChild className="mt-4 bg-cartoon-yellow-500 hover:bg-cartoon-yellow-600 text-white w-full">
                  <Link to="/faq">Get Help</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cartoon-blue-600 to-cartoon-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Coding Adventure? 🎮
          </h2>
          <p className="text-xl text-cartoon-blue-100 mb-8">
            Join thousands of developers who are already using CodeTester to improve their skills!
          </p>
          <Button asChild className="bg-white text-cartoon-blue-600 hover:bg-gray-100 text-lg py-4 px-8 rounded-2xl">
            <Link to="/submit">Get Started Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
