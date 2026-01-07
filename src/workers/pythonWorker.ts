importScripts('https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js');

let pyodide: any = null;

async function initializePyodide() {
  if (!pyodide) {
    pyodide = await loadPyodide();
    await pyodide.loadPackage('numpy');
  }
  return pyodide;
}

self.onmessage = async (e) => {
  const { code, input } = e.data;
  
  try {
  const pyodide = await initializePyodide();
    
    // Set up input redirection
    let output = '';
    pyodide.setStdin({
      stdin: () => {
        const value = input;
        input = ''; // Clear input after reading
        return value;
      }
    });
    
    pyodide.setStdout({
      write: (text: string) => {
        output += text;
      }
    });
    
    pyodide.setStderr({
      write: (text: string) => {
        output += text;
      }
    });
    
    // Execute the code
    await pyodide.runPythonAsync(code);
    
    self.postMessage({
      output: output.trim(),
      error: null
    });
  } catch (error) {
    self.postMessage({
      output: '',
      error: error.toString()
    });
  }
}; 