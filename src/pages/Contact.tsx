
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out! We'll get back to you within 24 hours."
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cartoon-blue-50 via-white to-cartoon-purple-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us 📞
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question, suggestion, or just want to say hi? We'd love to hear from you! 
            Our friendly team is here to help with anything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="cartoon-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-cartoon-green-400 to-cartoon-blue-400 p-2 rounded-lg">
                  <span className="text-white text-sm">✉️</span>
                </div>
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cartoon-blue-200 focus:outline-none focus:ring-2 focus:ring-cartoon-blue-400 bg-white/70"
                    placeholder="What should we call you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cartoon-blue-200 focus:outline-none focus:ring-2 focus:ring-cartoon-blue-400 bg-white/70"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cartoon-blue-200 focus:outline-none focus:ring-2 focus:ring-cartoon-blue-400 bg-white/70"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-cartoon-blue-200 focus:outline-none focus:ring-2 focus:ring-cartoon-blue-400 bg-white/70"
                    placeholder="Tell us more about your question or feedback..."
                  />
                </div>

                <Button type="submit" className="cartoon-button w-full">
                  Send Message 🚀
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="cartoon-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">
                    For general inquiries and support
                  </p>
                  <p className="text-cartoon-blue-600 font-medium">
                    hello@codetester.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="cartoon-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                  <p className="text-gray-600 mb-4">
                    We typically respond within 24 hours during business days
                  </p>
                  <p className="text-sm text-gray-500">
                    Monday - Friday, 9AM - 5PM PST
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="cartoon-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🐛</div>
                  <h3 className="text-xl font-semibold mb-2">Found a Bug?</h3>
                  <p className="text-gray-600 mb-4">
                    Help us improve by reporting issues
                  </p>
                  <p className="text-cartoon-blue-600 font-medium">
                    bugs@codetester.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="cartoon-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold mb-2">Feature Ideas</h3>
                  <p className="text-gray-600 mb-4">
                    Share your ideas for new features
                  </p>
                  <p className="text-cartoon-blue-600 font-medium">
                    ideas@codetester.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <Card className="cartoon-card">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="text-2xl font-bold mb-4">Before You Reach Out...</h3>
              <p className="text-gray-600 mb-6">
                Check out our FAQ section! You might find the answer to your question there, 
                and it's the fastest way to get help.
              </p>
              <Button asChild className="cartoon-button">
                <a href="/faq">View FAQ</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
