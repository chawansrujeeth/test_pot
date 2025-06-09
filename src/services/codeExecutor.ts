interface ExecutionResult {
  output: string;
  error: string | null;
  executionTime: number;
}

export class CodeExecutor {
  private static async executePython(code: string, input: string): Promise<ExecutionResult> {
    try {
      const startTime = performance.now();
      
      // Create a worker to execute Python code
      const worker = new Worker(new URL('../workers/pythonWorker.ts', import.meta.url));
      
      return new Promise((resolve) => {
        worker.onmessage = (e) => {
          const endTime = performance.now();
          resolve({
            output: e.data.output,
            error: e.data.error,
            executionTime: endTime - startTime
          });
          worker.terminate();
        };
        
        worker.postMessage({ code, input });
      });
    } catch (error) {
      return {
        output: '',
        error: 'Failed to execute Python code',
        executionTime: 0
      };
    }
  }

  private static async executeCpp(code: string, input: string): Promise<ExecutionResult> {
    try {
      const startTime = performance.now();
      
      // Create a worker to execute C++ code
      const worker = new Worker(new URL('../workers/cppWorker.ts', import.meta.url));
      
      return new Promise((resolve) => {
        worker.onmessage = (e) => {
          const endTime = performance.now();
          resolve({
            output: e.data.output,
            error: e.data.error,
            executionTime: endTime - startTime
          });
          worker.terminate();
        };
        
        worker.postMessage({ code, input });
      });
    } catch (error) {
      return {
        output: '',
        error: 'Failed to execute C++ code',
        executionTime: 0
      };
    }
  }

  private static async executeJava(code: string, input: string): Promise<ExecutionResult> {
    try {
      const startTime = performance.now();
      
      // Create a worker to execute Java code
      const worker = new Worker(new URL('../workers/javaWorker.ts', import.meta.url));
      
      return new Promise((resolve) => {
        worker.onmessage = (e) => {
          const endTime = performance.now();
          resolve({
            output: e.data.output,
            error: e.data.error,
            executionTime: endTime - startTime
          });
          worker.terminate();
        };
        
        worker.postMessage({ code, input });
      });
    } catch (error) {
      return {
        output: '',
        error: 'Failed to execute Java code',
        executionTime: 0
      };
    }
  }

  public static async executeCode(code: string, language: string, input: string): Promise<ExecutionResult> {
    switch (language.toLowerCase()) {
      case 'python':
        return this.executePython(code, input);
      case 'cpp':
        return this.executeCpp(code, input);
      case 'java':
        return this.executeJava(code, input);
      default:
        return {
          output: '',
          error: 'Unsupported programming language',
          executionTime: 0
        };
    }
  }
} 