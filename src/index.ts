import { TSConsoleLogger } from "./core/logger";

declare global {
  interface Window {
    TSConsoleLogger: any;
    define: any;
  }
}

if (window) {
  window.TSConsoleLogger = TSConsoleLogger;
}

export default TSConsoleLogger;