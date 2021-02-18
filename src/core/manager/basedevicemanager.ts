import { DeviceError, ErrorCode } from "../error";
import { IConstraints, IDeviceManager, IError } from "../interface";

enum DeviceType {
  Camera = "videoinput",
  Mic = "audioinput",
}

export class BaseDeviceManager implements IDeviceManager {

  protected mediaStream: MediaStream;


  constructor () {
    this.mediaStream = new MediaStream();
  }

  public getCameraList (): Promise<Array<MediaDeviceInfo>> {
    return new Promise((resolve, reject) => {
      if (this.checkSupport()) {
        this.getDeviceRight(DeviceType.Camera).then(() => {
          this.getDeviceList(DeviceType.Camera).then((list) => {
            resolve(list)
          }).catch((err) => {
            reject(err);
          })
        }).catch((err) => {
          reject(err);
        })
      } else {
        reject(new DeviceError(ErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"))
      }
    })
  }

  public getMicList (): Promise<Array<MediaDeviceInfo>> {
    return new Promise((resolve, reject) => {
      if (this.checkSupport()) {
        this.getDeviceRight(DeviceType.Mic).then(() => {
          this.getDeviceList(DeviceType.Mic).then((list) => {
            resolve(list);
          }).catch((err) => {
            reject(err)
          })
        }).catch((err) => {
          reject(err);
        })
      } else {
        reject(new DeviceError(ErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"))
      }
    })
  }

  public getMediaStream(): Promise<MediaStream> {
    return new Promise((resolve, reject) => {
      if (this.checkSupport()) {
        navigator.mediaDevices.getUserMedia({video: true}).then((mediastream) => {
          this.mediaStream = mediastream;
          resolve(mediastream);
        }).catch((err) => {
          reject(this.parseError(DeviceType.Camera, err))
        })
      } else {
        reject(new DeviceError(ErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"))
      }
    })
  }

  public getAudioTrack (constraints: IConstraints): Promise<MediaStreamTrack> {
    return new Promise((resolve, reject) => {
      if (this.checkSupport()) {
        navigator.mediaDevices.getUserMedia({audio: true}).then((mediastream) => {
          resolve(mediastream.getAudioTracks()[0]);
        }).catch((err) => {
          reject(this.parseError(DeviceType.Mic, err));
        })
      } else {
        reject(new DeviceError(ErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"));
      }
    })
  }

  public getVideoTrack (constraints: IConstraints): Promise<MediaStreamTrack> {
    return new Promise((resolve, reject) => {
      if (this.checkSupport()) {
        navigator.mediaDevices.getUserMedia({video: true}).then((mediastream) => {
          resolve(mediastream.getVideoTracks()[0]);
        }).catch((err) => {
          reject(this.parseError(DeviceType.Camera, err))
        })
      } else {
        reject(new DeviceError(ErrorCode.ERROR_DEVICE_NOTSUPPORT, "not support navigator.mediaDevices"))
      }
    })
  }

  public getScreenTrack (constraints: IConstraints): Promise<Array<MediaStreamTrack>> {
    return new Promise((resolve, reject) => {

    })
  }

  public releaseAllStream(): void {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => {
        this.mediaStream.removeTrack(track);
        track.stop();
      })
    }
  }

  private checkSupport (): boolean {
    if (navigator && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.getUserMedia) {
      return true
    }
    return false
  }

  protected getDeviceList (deviceType: DeviceType): Promise<Array<MediaDeviceInfo>> {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices.enumerateDevices().then((deviceList) => {
        let arr: Array<MediaDeviceInfo> = [];
        deviceList.forEach((device: MediaDeviceInfo) => {
          if (device.kind === deviceType) {
            arr.push(device);
          }
        })
        resolve(arr);
      }).catch((err) => {
        reject(err);
      })
    })
  }

  protected getDeviceRight (deviceType: DeviceType): Promise<IError | undefined > {
    return new Promise((resolve, reject) => {
      let constraints;
      if (DeviceType.Camera === deviceType) {
        constraints = {video: true};
      } else if (DeviceType.Mic === deviceType) {
        constraints = {audio: true}
      }
      navigator.mediaDevices.getUserMedia(constraints).then((mediastream) => {
        mediastream.getVideoTracks().forEach((track) => {
          track.stop();
        })
        resolve(undefined);
      }).catch((err) => {
        reject(err);
      })
    })
  }

  protected parseError (deviceType: DeviceType, err:Error): IError {


    return new DeviceError(ErrorCode.ERROR_DEVICE_UNKNOWNERROR, "");
  }
}