import { error } from "console";
import { IError } from "./interface";

export enum ErrorCode {
  ERROR_DEVICE_UNKNOWNERROR = 10000,
  ERROR_DEVICE_AUDIODEVICE_NOTFOUND,
  ERROR_DEVICE_VIDEODEVICE_NOTFOUND,
  ERROR_DEVICE_AUDIODEVICE_NOTALLOWED,
  ERROR_DEVICE_VIDEODEVICE_NOTALLOWED,
  ERROR_DEVICE_AUDIODEVICE_NOTREADABLE,
  ERROR_DEVICE_VIDEODEVICE_NOTREADABLE,


  ERROR_DEVICE_NOTSUPPORT = 20000,
}

export class DeviceError implements IError {
  public code: number;
  public reason: string;

  constructor (errorCode: number, reason: string) {
    this.code = errorCode;
    this.reason = reason
  }
}