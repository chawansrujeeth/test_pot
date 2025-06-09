
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cartoon-blue-50 via-white to-cartoon-purple-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy 🔒
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy matters to us. Here's how we protect your data and respect your privacy 
            while you use CodeTester.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: March 2024</p>
        </div>

        <div className="space-y-8">
          <Card className="cartoon-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-cartoon-green-400 to-cartoon-blue-400 p-2 rounded-lg">
                  <span className="text-white text-sm">🛡️</span>
                </div>
                What Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                <strong>Code Submissions:</strong> When you test code on our platform, we temporarily process 
                your code to provide testing results. This code is not stored on our servers unless you 
                explicitly choose to save it.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Saved Code:</strong> Code snippets you choose to save are stored locally in your 
                browser's storage, not on our servers. This means your saved code is private to your device.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Usage Analytics:</strong> We collect basic, anonymized usage statistics to improve 
                our platform, such as which programming languages are most popular and general error patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="cartoon-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-cartoon-purple-400 to-cartoon-pink-400 p-2 rounded-lg">
                  <span className="text-white text-sm">🔐</span>
                </div>
                How We Protect Your Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏗️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Sandboxed Execution</h4>
                    <p className="text-gray-700">
                      Your code runs in isolated, secure containers that prevent any access to our systems or other users' data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⏱️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Temporary Processing</h4>
                    <p className="text-gray-700">
                      Code submitted for testing is processed temporarily and automatically deleted after results are provided.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Storage</h4>
                    <p className="text-gray-700">
                      Your saved code snippets are stored locally in your browser, giving you full control over your data.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cartoon-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-cartoon-yellow-400 to-cartoon-yellow-500 p-2 rounded-lg">
                  <span className="text-white text-sm">🍪</span>
                </div>
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use minimal cookies and local storage to enhance your experience:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cartoon-blue-500">•</span>
                  <span><strong>Session cookies:</strong> To maintain your session while using the platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cartoon-blue-500">•</span>
                  <span><strong>Local storage:</strong> To save your code snippets locally on your device</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cartoon-blue-500">•</span>
                  <span><strong>Analytics cookies:</strong> To understand how our platform is used (anonymized)</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not use third-party tracking cookies or sell your data to advertisers.
              </p>
            </CardContent>
          </Card>

          <Card className="cartoon-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-cartoon-blue-400 to-cartoon-purple-400 p-2 rounded-lg">
                  <span className="text-white text-sm">👤</span>
                </div>
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">🗑️</span>
                    Data Deletion
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You can clear your saved code anytime by deleting it from your browser's local storage or using our clear data feature.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">📥</span>
                    Data Export
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You can export your saved code snippets at any time using our download feature.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">❓</span>
                    Questions
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Contact us at privacy@codetester.com for any privacy-related questions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">📋</span>
                    Updates
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We'll notify users of any significant changes to this privacy policy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cartoon-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-cartoon-green-400 to-cartoon-green-500 p-2 rounded-lg">
                  <span className="text-white text-sm">🤝</span>
                </div>
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl mb-4">💙</div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We believe that learning to code should be safe, private, and accessible to everyone. 
                  Your trust is important to us, and we're committed to protecting your privacy while 
                  providing the best possible coding experience.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Privacy */}
          <Card className="cartoon-card">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about this privacy policy or how we handle your data, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  📧 Privacy Officer: privacy@codetester.com
                </p>
                <p className="text-sm text-gray-500">
                  📮 General Contact: hello@codetester.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
