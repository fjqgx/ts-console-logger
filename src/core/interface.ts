
export enum MobileCameraType {
  USER = 0,
  ENV = 1,
}

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

export interface IDeviceManager {
  getCameraList (): Promise<Array<MediaDeviceInfo>|IError>;

  getMicList (): Promise<Array<MediaDeviceInfo>|IError>;

  getAudioTrack (constraints: IConstraints): Promise<MediaStreamTrack | IError>;

  getVideoTrack (constraints: IConstraints): Promise<MediaStreamTrack | IError>;

  getScreenTrack (constraints: IConstraints): Promise<Array<MediaStreamTrack> | IError>;
  
  getMediaStream(): Promise<MediaStream | IError>;

  releaseAllStream(): void;
}