
export = DeviceManager;
export as namespace DeviceManager;

declare namespace DeviceManager {
  export enum FacingMode {
    USER = "user",
    ENVIRONMENT = "environment",
  }
  
  export interface IError {
    code: number;
    reason: string;
  }
  
  export interface IAudioConstraints {
    deviceId: string;
  }
  
  export interface IVideoConstraints {
    deviceId ?: string;
    facingMode ?: FacingMode;
  }
  
  export interface IConstraints {
    audio ?: boolean | IAudioConstraints;
    video ?: boolean | IVideoConstraints;
  }
  
  export class BrowserDeviceManager {
  
    getCameraList (): Promise<Array<MediaDeviceInfo>>;
  
    getMicList (): Promise<Array<MediaDeviceInfo>>;
  
    getAudioTrack (constraints: IConstraints): Promise<MediaStreamTrack>;
  
    getVideoTrack (constraints: IConstraints): Promise<MediaStreamTrack>;
  }
}




