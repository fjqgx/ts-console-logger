import { TimeStampType } from "../core/interface"

export class TimeStampUtil {

  private getTimeStampFunction?: Function;

  constructor (type ?: TimeStampType) {
    if (type) {
      if (TimeStampType.s === type) {
        this.getTimeStampFunction = this.getCurrentTimeStampSecond;
      } else if (TimeStampType.m === type) {
        this.getTimeStampFunction = this.getCurrentTimeStampMinute;
      } else if (TimeStampType.h === type) {
        this.getTimeStampFunction = this.getCurrentTimeStampHour;
      } else if (TimeStampType.d === type) {
        this.getTimeStampFunction = this.getCurrentTimeStampDay;
      } else {
        this.getTimeStampFunction = this.getCurrentTimeStampMilliSecond;
      }
    }
  }

  public getCurrentTimeStamp ():String {
    if (this.getTimeStampFunction) {
      return this.getTimeStampFunction();
    }
    return "";
  }

  private getCurrentTimeStampDay (): string {
    let date = new Date();
    return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date);
  }

  private getCurrentTimeStampHour(): string {
    let date = new Date();
    return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date);
  }

  private getCurrentTimeStampMinute(): string {
    let date = new Date();
    return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date) + ":" + this.getMinute(date);
  }

  private getCurrentTimeStampSecond(): string {
    let date = new Date();
    return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date) + ":" + this.getMinute(date) + ":" + this.getSecond(date);
  }

  private getCurrentTimeStampMilliSecond(): string {
    let date = new Date();
    return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date) + ":" + this.getMinute(date) + ":" + this.getSecond(date) + ":" + date.getUTCMilliseconds();
  }

  private getYear(date: Date): number {
    return date.getFullYear();
  }

  private getMonth(date: Date): string {
    let month = date.getMonth() + 1;
    let monthStr = ""
    if (month < 10) {
      monthStr = "0" + month;
    } else {
      monthStr = month.toString();
    }
    return monthStr;
  }

  private getDay(date: Date): string {
    let day = date.getDate();
    let dayStr = "";
    if (day < 10) {
      dayStr = "0" + day;
    } else {
      dayStr = day.toString();
    }
    return dayStr;
  }

  private getHour (date: Date): string {
    let hour = date.getHours();
    let hourStr = "";
    if (hour < 10) {
      hourStr = "0" + hour;
    } else {
      hourStr = hour.toString();
    }
    return hourStr;
  }

  private getMinute (date: Date): string {
    let minute = date.getMinutes();
    let minuteStr = "";
    if (minute < 10) {
      minuteStr = "0" + minute; 
    } else {
      minuteStr = minute.toString();
    }
    return minuteStr;
  }

  private getSecond (date: Date): string {
    let second = date.getSeconds();
    let secondStr = "";
    if (second < 10) {
      secondStr = "0" + second;
    } else {
      secondStr = second.toString();
    }
    return secondStr;
  }
}