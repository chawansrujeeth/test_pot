import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
}

interface TestCaseManagerProps {
  testCases: TestCase[];
  onTestCasesChange: (testCases: TestCase[]) => void;
}

const TestCaseManager = ({ testCases, onTestCasesChange }: TestCaseManagerProps) => {
  const [newInput, setNewInput] = useState("");
  const [newExpectedOutput, setNewExpectedOutput] = useState("");
  const { toast } = useToast();

  const addTestCase = () => {
    if (!newInput.trim() || !newExpectedOutput.trim()) {
      toast({
        title: "Incomplete test case! ⚠️",
        description: "Please provide both input and expected output.",
        variant: "destructive"
      });
      return;
    }

    const newTestCase: TestCase = {
      id: Date.now().toString(),
      input: newInput.trim(),
      expectedOutput: newExpectedOutput.trim()
    };

    onTestCasesChange([...testCases, newTestCase]);
    setNewInput("");
    setNewExpectedOutput("");
    
    toast({
      title: "Test case added! ✅",
      description: "New test case has been added successfully."
    });
  };

  const removeTestCase = (id: string) => {
    onTestCasesChange(testCases.filter(tc => tc.id !== id));
    toast({
      title: "Test case removed! 🗑️",
      description: "Test case has been removed."
    });
  };

  return (
    <Card className="cartoon-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-cartoon-yellow-400 to-cartoon-orange-400 p-2 rounded-lg">
            <span className="text-white text-sm">🧪</span>
          </div>
          Test Cases ({testCases.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Existing Test Cases */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {testCases.map((testCase, index) => (
            <div key={testCase.id} className="p-3 bg-gray-50 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-sm">Test Case {index + 1}</h4>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeTestCase(testCase.id)}
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="text-xs space-y-1">
                <p><span className="font-medium">Input:</span> <code className="bg-white px-1 rounded">{testCase.input}</code></p>
                <p><span className="font-medium">Expected:</span> <code className="bg-white px-1 rounded">{testCase.expectedOutput}</code></p>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Test Case */}
        <div className="border-t pt-4">
          <h4 className="font-medium mb-3 text-sm">Add New Test Case</h4>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-600">Input</label>
              <Textarea
                placeholder="Enter test input (use \n for new lines)"
                value={newInput}
                onChange={(e) => setNewInput(e.target.value)}
                className="h-20 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">Expected Output</label>
              <Input
                placeholder="Expected result"
                value={newExpectedOutput}
                onChange={(e) => setNewExpectedOutput(e.target.value)}
                className="text-sm"
              />
            </div>
            <Button onClick={addTestCase} className="w-full bg-cartoon-blue-500 hover:bg-cartoon-blue-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Test Case
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestCaseManager;
