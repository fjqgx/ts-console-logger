
import { TimeStampUtil } from "../util/timestamputil";
import { IConfig } from "./interface";

export class TSConsoleLogger {

  private config: IConfig
  private enableLog: boolean = false;
  private timeStampUtil ?: TimeStampUtil;

  constructor (con: IConfig) {
    this.config = con;
    this.init();
  }

  /**
   * DEBUG Level
   */
  public debug (): void {
    let args = Array.prototype.slice.call(arguments);
    let log = this.getCurrentTime();
    if (this.enableLog) {
      console.log(log, ... args);
    }
  }

  /**
   * INFO Level
   */
  public info (): void {
    let args = Array.prototype.slice.call(arguments);
    let log = this.getCurrentTime();
    if (this.enableLog) {
      console.info(log, ... args);
    }
  }

  /**
   * WARNING Level
   */
  public warn (): void {
    let args = Array.prototype.slice.call(arguments);
    let log = this.getCurrentTime();
    if (this.enableLog) {
      console.warn(log, ... args);
    }
  }

  /**
   * ERROR Level
   */
  public error (): void {
    let args = Array.prototype.slice.call(arguments);
    let log = this.getCurrentTime();
    if (this.enableLog) {
      console.error(log, ... args);
    }
  }

  private init (): void {
    if (this.config) {
      if (this.config.key) {
        if (window && window.localStorage) {
          this.enableLog = window.localStorage.getItem(this.config.key) === "true";
        }
      }

      if (this.config.tagConfig) {
        this.timeStampUtil = new TimeStampUtil(this.config.tagConfig.timestamp);
      }
    }
  }
  
  private getCurrentTime (): string {
    if (this.timeStampUtil) {
      let currentTime = this.timeStampUtil.getCurrentTimeStamp();
      if (currentTime) {
        return "[" + currentTime + "]";
      }
    }
    return "";
  }

}