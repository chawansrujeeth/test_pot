
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeEditor from "@/components/CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SavedCode {
  id: string;
  name: string;
  code: string;
  language: string;
  timestamp: string;
}

const Save = () => {
  const [savedCodes, setSavedCodes] = useState<SavedCode[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("savedCodes");
    if (saved) {
      setSavedCodes(JSON.parse(saved));
    }
  }, []);

  const saveCode = (code: string, language: string, name: string) => {
    const newCode: SavedCode = {
      id: Date.now().toString(),
      name,
      code,
      language,
      timestamp: new Date().toLocaleString()
    };

    const updated = [newCode, ...savedCodes];
    setSavedCodes(updated);
    localStorage.setItem("savedCodes", JSON.stringify(updated));
  };

  const deleteCode = (id: string) => {
    const updated = savedCodes.filter(c => c.id !== id);
    setSavedCodes(updated);
    localStorage.setItem("savedCodes", JSON.stringify(updated));
    toast({
      title: "Code deleted! 🗑️",
      description: "Your code snippet has been removed."
    });
  };

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Code copied! 📋",
        description: "The code has been copied to your clipboard."
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy code to clipboard.",
        variant: "destructive"
      });
    }
  };

  const getLanguageEmoji = (language: string) => {
    switch (language) {
      case "python": return "🐍";
      case "cpp": return "⚡";
      case "java": return "☕";
      default: return "💻";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cartoon-blue-50 via-white to-cartoon-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Save Your Code 💾
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep track of all your amazing code snippets! Save your work and access it anytime you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CodeEditor onSave={saveCode} />
          </div>

          <div>
            <Card className="cartoon-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-cartoon-green-400 to-cartoon-blue-400 p-2 rounded-lg">
                    <span className="text-white text-sm">📂</span>
                  </div>
                  Your Saved Code
                  <Badge className="ml-auto bg-cartoon-blue-500">
                    {savedCodes.length} snippets
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {savedCodes.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <div className="text-6xl mb-4">📝</div>
                    <p>No saved code yet!</p>
                    <p className="text-sm">Start by saving your first code snippet.</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {savedCodes.map((savedCode) => (
                      <div
                        key={savedCode.id}
                        className="p-4 rounded-xl border border-cartoon-blue-200 bg-white/60 hover:bg-white/80 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                              {getLanguageEmoji(savedCode.language)} {savedCode.name}
                            </h4>
                            <p className="text-sm text-gray-500">{savedCode.timestamp}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyCode(savedCode.code)}
                              className="h-8 w-8 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => deleteCode(savedCode.id)}
                              className="h-8 w-8 p-0 hover:bg-red-50 hover:border-red-300"
                            >
                              <Trash2 className="h-3 w-3 text-red-500" />
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 mt-2">
                          <pre className="text-xs text-gray-700 overflow-x-auto">
                            {savedCode.code.length > 200 
                              ? savedCode.code.substring(0, 200) + "..." 
                              : savedCode.code}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-16">
          <Card className="cartoon-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">💡 Organization Tips!</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏷️</div>
                  <h4 className="font-semibold mb-2">Use Clear Names</h4>
                  <p className="text-sm text-gray-600">Give your code snippets descriptive names for easy finding</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📅</div>
                  <h4 className="font-semibold mb-2">Track Progress</h4>
                  <p className="text-sm text-gray-600">See when you saved each snippet to track your coding journey</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📋</div>
                  <h4 className="font-semibold mb-2">Easy Copy</h4>
                  <p className="text-sm text-gray-600">Quickly copy any saved code to reuse in new projects</p>
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

export default Save;
