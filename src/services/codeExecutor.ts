
interface RunResult {
  result: string;
  err: string | null;
  timeMs: number;
}

/**
 * CodeExecutorService handles the execution of code in different programming languages.
 * - Python: Uses Pyodide in a web worker for safe, in-browser execution.
 * - C++/Java: Placeholder workers for future support.
 *
 * Usage:
 *   await CodeExecutorService.run(source, lang, stdin);
 */
export class CodeExecutorService {
  /**
   * Execute Python code using a Pyodide web worker.
   * @param source Python source code
   * @param stdin Input string for the code
   * @returns RunResult with output, error, and execution time
   */
  private static async runPython(source: string, stdin: string): Promise<RunResult> {
    try {
      const startTime = performance.now();
      const pyWorker = new Worker(new URL('../workers/pythonWorker.ts', import.meta.url));
      return new Promise((resolve) => {
        pyWorker.onmessage = (e) => {
          const endTime = performance.now();
          resolve({
            result: e.data.output,
            err: e.data.error,
            timeMs: endTime - startTime
          });
          pyWorker.terminate();
        };
        pyWorker.postMessage({ code: source, input: stdin });
      });
    } catch (error) {
      return {
        result: '',
        err: 'Failed to run Python code',
        timeMs: 0
      };
    }
  }

  /**
   * Placeholder for C++ code execution using a web worker.
   */
  private static async runCpp(source: string, stdin: string): Promise<RunResult> {
    try {
      const startTime = performance.now();
      const cppWorker = new Worker(new URL('../workers/cppWorker.ts', import.meta.url));
      return new Promise((resolve) => {
        cppWorker.onmessage = (e) => {
          const endTime = performance.now();
          resolve({
            result: e.data.output,
            err: e.data.error,
            timeMs: endTime - startTime
          });
          cppWorker.terminate();
        };
        cppWorker.postMessage({ code: source, input: stdin });
      });
    } catch (error) {
      return {
        result: '',
        err: 'Failed to run C++ code',
        timeMs: 0
      };
    }
  }

  /**
   * Placeholder for Java code execution using a web worker.
   */
  private static async runJava(source: string, stdin: string): Promise<RunResult> {
    try {
      const startTime = performance.now();
      const javaWorker = new Worker(new URL('../workers/javaWorker.ts', import.meta.url));
      return new Promise((resolve) => {
        javaWorker.onmessage = (e) => {
          const endTime = performance.now();
          resolve({
            result: e.data.output,
            err: e.data.error,
            timeMs: endTime - startTime
          });
          javaWorker.terminate();
        };
        javaWorker.postMessage({ code: source, input: stdin });
      });
    } catch (error) {
      return {
        result: '',
        err: 'Failed to run Java code',
        timeMs: 0
      };
    }
  }

  /**
   * Run code in the specified language.
   * @param source Source code
   * @param lang Language identifier (python, cpp, java)
   * @param stdin Input string
   * @returns RunResult
   */
  public static async run(source: string, lang: string, stdin: string): Promise<RunResult> {
    switch (lang.toLowerCase()) {
      case 'python':
        return this.runPython(source, stdin);
      case 'cpp':
        return this.runCpp(source, stdin);
      case 'java':
        return this.runJava(source, stdin);
      default:
        return {
          result: '',
          err: 'Unsupported language',
          timeMs: 0
        };
    }
  }
} 