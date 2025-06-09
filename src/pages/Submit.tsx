
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeEditor from "@/components/CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestResult {
  testCase: number;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
}

const Submit = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Mock test cases for demonstration
  const mockTestCases = {
    python: [
      { input: "5\n3", expected: "8" },
      { input: "10\n-2", expected: "8" },
      { input: "0\n0", expected: "0" }
    ],
    cpp: [
      { input: "5 3", expected: "8" },
      { input: "10 -2", expected: "8" },
      { input: "0 0", expected: "0" }
    ],
    java: [
      { input: "5 3", expected: "8" },
      { input: "10 -2", expected: "8" },
      { input: "0 0", expected: "0" }
    ]
  };

  const runTests = async (code: string, language: string) => {
    setIsRunning(true);
    setTestResults([]);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const testCases = mockTestCases[language as keyof typeof mockTestCases] || [];
    const results: TestResult[] = [];

    testCases.forEach((testCase, index) => {
      // Simple mock logic - checks if code contains basic addition logic
      const hasAddition = code.includes("+") || code.includes("add");
      const [num1, num2] = testCase.input.split(/\s+/).map(Number);
      const expectedSum = num1 + num2;
      
      results.push({
        testCase: index + 1,
        input: testCase.input,
        expectedOutput: testCase.expected,
        actualOutput: hasAddition ? expectedSum.toString() : "Error",
        passed: hasAddition && expectedSum.toString() === testCase.expected
      });
    });

    setTestResults(results);
    setIsRunning(false);
  };

  const passedTests = testResults.filter(r => r.passed).length;
  const totalTests = testResults.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cartoon-blue-50 via-white to-cartoon-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Submit & Test Your Code 🎯
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Write your code, select the language, and let our testing engine give you instant feedback! 
            Perfect for practicing algorithms and debugging your solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CodeEditor onTest={runTests} />
          </div>

          <div>
            <Card className="cartoon-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-cartoon-purple-400 to-cartoon-pink-400 p-2 rounded-lg">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  Test Results
                  {totalTests > 0 && (
                    <Badge 
                      className={`ml-auto ${
                        passedTests === totalTests 
                          ? "bg-cartoon-green-500" 
                          : "bg-cartoon-yellow-500"
                      }`}
                    >
                      {passedTests}/{totalTests} Passed
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isRunning ? (
                  <div className="text-center py-12">
                    <div className="animate-spin w-12 h-12 border-4 border-cartoon-blue-300 border-t-cartoon-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">Running your code... 🏃‍♂️</p>
                  </div>
                ) : testResults.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <div className="text-6xl mb-4">🤖</div>
                    <p>Submit your code to see test results here!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {testResults.map((result) => (
                      <div
                        key={result.testCase}
                        className={`p-4 rounded-xl border-2 ${
                          result.passed
                            ? "border-cartoon-green-300 bg-cartoon-green-50"
                            : "border-red-300 bg-red-50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Test Case {result.testCase}</h4>
                          <Badge className={result.passed ? "bg-cartoon-green-500" : "bg-red-500"}>
                            {result.passed ? "✅ Passed" : "❌ Failed"}
                          </Badge>
                        </div>
                        <div className="text-sm space-y-1">
                          <p><span className="font-medium">Input:</span> {result.input}</p>
                          <p><span className="font-medium">Expected:</span> {result.expectedOutput}</p>
                          <p><span className="font-medium">Your Output:</span> {result.actualOutput}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16">
          <Card className="cartoon-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">💡 Pro Tips for Success!</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🐍</div>
                  <h4 className="font-semibold mb-2">Python</h4>
                  <p className="text-sm text-gray-600">Use input() for reading and print() for output</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <h4 className="font-semibold mb-2">C++</h4>
                  <p className="text-sm text-gray-600">Include iostream and use cin/cout</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">☕</div>
                  <h4 className="font-semibold mb-2">Java</h4>
                  <p className="text-sm text-gray-600">Use Scanner for input and System.out for output</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Submit;
