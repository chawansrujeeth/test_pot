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

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const onTestClick = () => {
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

  const onSaveClick = () => {
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
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Code Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Input type="file" accept=".py,.cpp,.cc,.cxx,.java" onChange={onFileUpload} />
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
                <SelectItem value="java">Java</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Enter code name (for saving)"
              value={codeName}
              onChange={(e) => setCodeName(e.target.value)}
            />
            <textarea
              className="w-full h-64 p-2 border rounded"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write or upload your code here..."
            />
            <div className="flex gap-2">
              <Button onClick={onTestClick} variant="default">
                <Play className="w-4 h-4 mr-2" /> Test
              </Button>
              <Button onClick={onSaveClick} variant="secondary">
                <Save className="w-4 h-4 mr-2" /> Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
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
