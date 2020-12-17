
export class TSConsoleLogger {

  private config: IConfig
  private enableLog: boolean = false;

  constructor (con: IConfig) {
    this.config = con;
    this.init();
  }

  /**
   * DEBUG 级别的日志
   */
  public debug (): void {
    let args = Array.prototype.slice.call(arguments);
    let log = this.getCurrentTime();
    if (this.enableLog) {
      console.log(log, ... args);
    }
  }

  /**
   * INFO 级别的日志
   */
  public info (): void {
    let args = Array.prototype.slice.call(arguments);
    let log = this.getCurrentTime();
    if (this.enableLog) {
      console.info(log, ... args);
    }
  }

  /**
   * WARNING 级别的日志
   */
  public warn (): void {
    let args = Array.prototype.slice.call(arguments);
    let log = this.getCurrentTime();
    if (this.enableLog) {
      console.warn(log, ... args);
    }
  }

  /**
   * ERROR 级别的日志
   */
  public error (): void {
    let args = Array.prototype.slice.call(arguments);
    let log = this.getCurrentTime();
    if (this.enableLog) {
      console.error(log, ... args);
    }
  }

  /**
   * 初始化
   */
  private init (): void {
    if (this.config && this.config.key && document && document.cookie) {
      let arr = document.cookie.split(";");
      for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === (this.config.key + "=true")) {
          this.enableLog = true;
          break;
        }
      }
    }
  }
  

  private getCurrentTime (): string {
    return "[" + new Date().toISOString() + "]";
  }
}