
import { SystemUtil } from "../util/system";
import { IConstraints, IDeviceManager, IError } from "./interface";
import { AndroidDeviceManager } from "./manager/androiddevicemanager";
import { BaseDeviceManager } from "./manager/basedevicemanager";
import { IosDeviceManager } from "./manager/iosdevicemanager";
import { LinuxDeviceManager } from "./manager/linuxdevicemanager";
import { MacDeviceManager } from "./manager/macdevicemanager";
import { WindowsDeviceManager } from "./manager/windowsdevicemanager";

export class BrowserDeviceManager implements IDeviceManager {

  private systemUtil: SystemUtil;
  private deviceManager: IDeviceManager;

  constructor () {
    this.systemUtil = new SystemUtil();
    this.deviceManager = this.createDeviceManager(); 
  }

  public getCameraList (): Promise<Array<MediaDeviceInfo>> {
    return this.deviceManager.getCameraList();
  }

  public getMicList (): Promise<Array<MediaDeviceInfo>> {
    return this.deviceManager.getMicList();
  }

  public getAudioTrack (constraints: IConstraints): Promise<MediaStreamTrack> {
    return this.deviceManager.getAudioTrack(constraints);
  }

  public getMediaStream(): Promise<MediaStream> {
    return this.deviceManager.getMediaStream()
  }

  public getVideoTrack (constraints: IConstraints): Promise<MediaStreamTrack> {
    return this.deviceManager.getVideoTrack(constraints);
  }

  public getScreenTrack (constraints: IConstraints): Promise<Array<MediaStreamTrack>> {
    return this.deviceManager.getScreenTrack(constraints);
  }

  public releaseAllStream(): void {
    return this.deviceManager.releaseAllStream();
  }

  private createDeviceManager ():IDeviceManager {
    if (this.systemUtil.isWindows) {
      return new WindowsDeviceManager();
    } else if (this.systemUtil.isAndroid) {
      return new AndroidDeviceManager();
    } else if (this.systemUtil.isIos) {
      return new IosDeviceManager();
    } else if (this.systemUtil.isMacOS) {
      return new MacDeviceManager();
    } else if (this.systemUtil.isLinux) {
      return new LinuxDeviceManager();
    }
    return new BaseDeviceManager();
  }
}