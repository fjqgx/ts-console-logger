import { IVideoConstraints } from "../interface";
import { BaseDeviceManager } from "./basedevicemanager";


export class MobileDeviceManager extends BaseDeviceManager {
  constructor() {
    super();
  }

  /**
   * processing parameters
   * 
   * @param constraints 
   */
  protected createVideoConstraints(constraints: IVideoConstraints): MediaStreamConstraints {
    let videoConstraints: MediaStreamConstraints;
    if (!constraints.deviceId && !constraints.facingMode && !constraints.width && !constraints.height) {
      videoConstraints = { video: true };
    } else {
      videoConstraints = {
        video: {
          deviceId: constraints.facingMode ? constraints.facingMode : constraints.deviceId,
          width: constraints.width,
          height: constraints.height
        }
      };
    }
    return videoConstraints;
  }
}