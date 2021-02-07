import { DeviceManager } from "./core/devicemanager";


declare global {
  interface Window {
    DeviceManager: any;
    define: any;
  }
}

if (window) {
  window.DeviceManager = DeviceManager;
}

export default DeviceManager;