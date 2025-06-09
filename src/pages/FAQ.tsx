
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    id: "how-it-works",
    question: "How does the code testing work? 🤔",
    answer: "Our platform runs your code against predefined test cases in a secure environment. You submit your code, select the programming language, and our system provides instant feedback on whether your solution passes all test cases. We show you exactly which tests passed or failed, along with the expected vs actual output."
  },
  {
    id: "languages",
    question: "Which programming languages do you support? 💻",
    answer: "Currently, we support Python 🐍, C++ ⚡, and Java ☕. These are the most popular languages for learning programming and competitive coding. We're constantly working to add more languages based on community feedback!"
  },
  {
    id: "security",
    question: "Is my code safe and secure? 🔒",
    answer: "Absolutely! We take security very seriously. Your code is executed in isolated, sandboxed environments that prevent any harmful operations. We don't store your code on our servers unless you explicitly choose to save it, and all saved code is encrypted and associated only with your session."
  },
  {
    id: "save-code",
    question: "How does the code saving feature work? 💾",
    answer: "When you save code, it's stored locally in your browser's storage. This means your code snippets are private to you and available whenever you return to the same device and browser. You can name your snippets, view timestamps, and easily copy them for reuse."
  },
  {
    id: "test-cases",
    question: "What kind of test cases do you use? 📋",
    answer: "Our test cases cover various scenarios including edge cases, typical inputs, and boundary conditions. For example, if you're solving an addition problem, we might test with positive numbers, negative numbers, and zero. This helps ensure your code works correctly in all situations."
  },
  {
    id: "errors",
    question: "What if my code has syntax errors? ❌",
    answer: "No worries! If your code has syntax errors or runtime issues, our system will provide clear error messages to help you debug. We believe in learning from mistakes, so we make error messages as friendly and helpful as possible."
  },
  {
    id: "beginners",
    question: "Is this platform suitable for beginners? 🌱",
    answer: "Absolutely! CodeTester was designed with beginners in mind. Our cartoon-themed interface makes coding feel less intimidating, and our clear feedback helps you learn from mistakes. Whether you're taking your first programming class or just curious about coding, you're welcome here!"
  },
  {
    id: "mobile",
    question: "Can I use CodeTester on mobile devices? 📱",
    answer: "Yes! Our platform is fully responsive and works great on tablets and mobile phones. While typing long code snippets might be easier on a computer, you can definitely test small snippets and review your saved code on mobile devices."
  },
  {
    id: "free",
    question: "Is CodeTester free to use? 🆓",
    answer: "Yes, CodeTester is completely free! We believe that learning to code should be accessible to everyone. Our mission is to help developers of all skill levels improve their coding abilities without any financial barriers."
  },
  {
    id: "feedback",
    question: "How can I provide feedback or report issues? 💬",
    answer: "We love hearing from our community! You can reach out to us through our Contact page, or send us an email directly. Whether it's a bug report, feature request, or just general feedback, we read and respond to every message."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cartoon-blue-50 via-white to-cartoon-purple-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions 🤔
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers! Here's everything you need to know about CodeTester 
            and how to make the most of our platform.
          </p>
        </div>

        <Card className="cartoon-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-cartoon-purple-400 to-cartoon-pink-400 p-2 rounded-lg">
                <span className="text-white text-sm">❓</span>
              </div>
              Common Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-cartoon-blue-200">
                  <AccordionTrigger className="text-left hover:text-cartoon-blue-600 font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="cartoon-card text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Getting Started</h3>
              <p className="text-sm text-gray-600">
                New to CodeTester? Check out our Submit Code page to try your first test!
              </p>
            </CardContent>
          </Card>

          <Card className="cartoon-card text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-semibold mb-2">Pro Tips</h3>
              <p className="text-sm text-gray-600">
                Read our Stories section for inspiration and coding tips from the community!
              </p>
            </CardContent>
          </Card>

          <Card className="cartoon-card text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600">
                Can't find your answer? Contact us and we'll help you out personally!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Still have questions */}
        <Card className="cartoon-card">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🙋‍♀️</div>
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Don't hesitate to reach out! We're here to help you succeed in your coding journey.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                📧 Email us at: help@codetester.com
              </p>
              <p className="text-sm text-gray-500">
                💬 We typically respond within 24 hours!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
