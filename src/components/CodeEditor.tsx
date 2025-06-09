import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Save, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

interface CodeEditorProps {
  onSave?: (code: string, language: string, name: string) => void;
  onTest?: (code: string, language: string) => void;
}

const CodeEditor = ({ onSave, onTest }: CodeEditorProps) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [codeName, setCodeName] = useState("");
  const [fileName, setFileName] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setCode(content);
      setFileName(file.name);
      
      // Auto-detect language from file extension
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (extension === 'py') {
        setLanguage('python');
      } else if (extension === 'cpp' || extension === 'cc' || extension === 'cxx') {
        setLanguage('cpp');
      } else if (extension === 'java') {
        setLanguage('java');
      }

      toast({
        title: "File uploaded! 📁",
        description: `Successfully loaded ${file.name}`
      });
    };
    reader.readAsText(file);
  };

  const handleTest = () => {
    if (!code.trim()) {
      toast({
        title: "No code to test! 🤔",
        description: "Please upload a file first.",
        variant: "destructive"
      });
      return;
    }
    onTest?.(code, language);
  };

  const handleSave = () => {
    if (!code.trim()) {
      toast({
        title: "No code to save! 📝",
        description: "Please upload a file first.",
        variant: "destructive"
      });
      return;
    }
    if (!codeName.trim()) {
      toast({
        title: "Missing name! 🏷️",
        description: "Please give your code a name.",
        variant: "destructive"
      });
      return;
    }
    onSave?.(code, language, codeName);
    setCodeName("");
    toast({
      title: "Code saved! ✨",
      description: `Your ${language} code "${codeName}" has been saved successfully.`
    });
  };

  return (
    <Card className="cartoon-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-cartoon-green-400 to-cartoon-blue-400 p-2 rounded-lg">
            <span className="text-white text-sm">💻</span>
          </div>
          Code Submission
          {fileName && (
            <span className="text-sm text-gray-600 ml-auto">📁 {fileName}</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* File Upload Section */}
        <div className="p-4 border-2 border-dashed border-cartoon-blue-200 rounded-xl">
          <div className="text-center">
            <Upload className="mx-auto h-8 w-8 text-cartoon-blue-400 mb-2" />
            <p className="text-sm text-gray-600 mb-3">Upload your code file (.py, .cpp, .java)</p>
            <Input
              type="file"
              accept=".py,.cpp,.cc,.cxx,.java"
              onChange={handleFileUpload}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full sm:w-48 rounded-xl">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="python">🐍 Python</SelectItem>
              <SelectItem value="cpp">⚡ C++</SelectItem>
              <SelectItem value="java">☕ Java</SelectItem>
            </SelectContent>
          </Select>
          
          {onSave && (
            <input
              type="text"
              placeholder="Give your code a name..."
              value={codeName}
              onChange={(e) => setCodeName(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border border-cartoon-blue-200 focus:outline-none focus:ring-2 focus:ring-cartoon-blue-400"
            />
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {onTest && (
            <Button onClick={handleTest} className="cartoon-button flex-1">
              <Play className="h-4 w-4 mr-2" />
              Test Code 🎯
            </Button>
          )}
          {onSave && (
            <Button onClick={handleSave} className="bg-cartoon-green-500 hover:bg-cartoon-green-600 text-white flex-1">
              <Save className="h-4 w-4 mr-2" />
              Save Code 💾
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeEditor;
