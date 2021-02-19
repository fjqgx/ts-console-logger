
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
  width ?: number;
  height ?: number;
}

export interface IConstraints {
  audio ?: boolean | IAudioConstraints;
  video ?: boolean | IVideoConstraints;
}

export interface IDeviceManager {
  getCameraList (): Promise<Array<MediaDeviceInfo>>;

  getMicList (): Promise<Array<MediaDeviceInfo>>;

  getAudioTrack (constraints?: IAudioConstraints): Promise<MediaStreamTrack>;

  getVideoTrack (constraints: IVideoConstraints): Promise<MediaStreamTrack>;

  getScreenTrack (constraints: IConstraints): Promise<Array<MediaStreamTrack>>;
}