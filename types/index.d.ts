
export enum LoggerLevel {
  // TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  WARNING = 3,
  ERROR = 4,
  // NONE = 5,
}

export enum TimeStampType {
  ms = "millisecond",
  s = "second",
  m = "minute",
  h = "hour",
  d = "day",
}


export interface ILevelConfig {
  level: LoggerLevel;   // 日志等级
  color ?: string;
}

export interface ITimeStampConfig {
  type?: TimeStampType;  // default: ms.   ms: millisecond; s: second; m: minute; h: hour; d: day
}

export interface ITagConfig {
  timestamp ?: ITimeStampConfig;
}

export interface IConfig {
  key?: string;       // 是否开启日志，默认关闭，当cookie中匹配key内容，则开启日志
  tagConfig?: ITagConfig;
  // levelConfigs?: [ILevelConfig];
}