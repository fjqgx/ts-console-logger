
export interface IError {
  code: number;
  reason: string;
}

export interface IDeviceManager {
  getCameraList (): Promise<Array<MediaDeviceInfo>|IError>;

  getMicList (): Promise<Array<MediaDeviceInfo>|IError>;
}