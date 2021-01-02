/*! ts-console-logger - ver 1.0.1 created:2021/1/2 上午11:30:54 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/interface.ts":
/*!*******************************!*
  !*** ./src/core/interface.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeStampType = exports.LoggerLevel = void 0;
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel[LoggerLevel["DEBUG"] = 1] = "DEBUG";
    LoggerLevel[LoggerLevel["INFO"] = 2] = "INFO";
    LoggerLevel[LoggerLevel["WARNING"] = 3] = "WARNING";
    LoggerLevel[LoggerLevel["ERROR"] = 4] = "ERROR";
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
var TimeStampType;
(function (TimeStampType) {
    TimeStampType["ms"] = "millisecond";
    TimeStampType["s"] = "second";
    TimeStampType["m"] = "minute";
    TimeStampType["h"] = "hour";
    TimeStampType["d"] = "day";
})(TimeStampType = exports.TimeStampType || (exports.TimeStampType = {}));


/***/ }),

/***/ "./src/core/logger.ts":
/*!****************************!*
  !*** ./src/core/logger.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TSConsoleLogger = void 0;
var timestamputil_1 = __webpack_require__(/*! ../util/timestamputil */ "./src/util/timestamputil.ts");
var TSConsoleLogger = (function () {
    function TSConsoleLogger(con) {
        this.enableLog = false;
        this.config = con;
        this.init();
    }
    TSConsoleLogger.prototype.debug = function () {
        var args = Array.prototype.slice.call(arguments);
        var log = this.getCurrentTime();
        if (this.enableLog) {
            console.log.apply(console, __spreadArrays([log], args));
        }
    };
    TSConsoleLogger.prototype.info = function () {
        var args = Array.prototype.slice.call(arguments);
        var log = this.getCurrentTime();
        if (this.enableLog) {
            console.info.apply(console, __spreadArrays([log], args));
        }
    };
    TSConsoleLogger.prototype.warn = function () {
        var args = Array.prototype.slice.call(arguments);
        var log = this.getCurrentTime();
        if (this.enableLog) {
            console.warn.apply(console, __spreadArrays([log], args));
        }
    };
    TSConsoleLogger.prototype.error = function () {
        var args = Array.prototype.slice.call(arguments);
        var log = this.getCurrentTime();
        if (this.enableLog) {
            console.error.apply(console, __spreadArrays([log], args));
        }
    };
    TSConsoleLogger.prototype.init = function () {
        if (this.config) {
            if (this.config.key) {
                if (window && window.localStorage) {
                    this.enableLog = window.localStorage.getItem(this.config.key) === "true";
                }
            }
            if (this.config.tagConfig) {
                this.timeStampUtil = new timestamputil_1.TimeStampUtil(this.config.tagConfig.timestamp);
            }
        }
    };
    TSConsoleLogger.prototype.getCurrentTime = function () {
        if (this.timeStampUtil) {
            var currentTime = this.timeStampUtil.getCurrentTimeStamp();
            if (currentTime) {
                return "[" + currentTime + "]";
            }
        }
        return "";
    };
    return TSConsoleLogger;
}());
exports.TSConsoleLogger = TSConsoleLogger;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var logger_1 = __webpack_require__(/*! ./core/logger */ "./src/core/logger.ts");
if (window) {
    window.TSConsoleLogger = logger_1.TSConsoleLogger;
}
exports.default = logger_1.TSConsoleLogger;


/***/ }),

/***/ "./src/util/timestamputil.ts":
/*!***********************************!*
  !*** ./src/util/timestamputil.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeStampUtil = void 0;
var interface_1 = __webpack_require__(/*! ../core/interface */ "./src/core/interface.ts");
var TimeStampUtil = (function () {
    function TimeStampUtil(type) {
        if (type) {
            if (interface_1.TimeStampType.s === type) {
                this.getTimeStampFunction = this.getCurrentTimeStampSecond;
            }
            else if (interface_1.TimeStampType.m === type) {
                this.getTimeStampFunction = this.getCurrentTimeStampMinute;
            }
            else if (interface_1.TimeStampType.h === type) {
                this.getTimeStampFunction = this.getCurrentTimeStampHour;
            }
            else if (interface_1.TimeStampType.d === type) {
                this.getTimeStampFunction = this.getCurrentTimeStampDay;
            }
            else {
                this.getTimeStampFunction = this.getCurrentTimeStampMilliSecond;
            }
        }
    }
    TimeStampUtil.prototype.getCurrentTimeStamp = function () {
        if (this.getTimeStampFunction) {
            return this.getTimeStampFunction();
        }
        return "";
    };
    TimeStampUtil.prototype.getCurrentTimeStampDay = function () {
        var date = new Date();
        return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date);
    };
    TimeStampUtil.prototype.getCurrentTimeStampHour = function () {
        var date = new Date();
        return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date);
    };
    TimeStampUtil.prototype.getCurrentTimeStampMinute = function () {
        var date = new Date();
        return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date) + ":" + this.getMinute(date);
    };
    TimeStampUtil.prototype.getCurrentTimeStampSecond = function () {
        var date = new Date();
        return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date) + ":" + this.getMinute(date) + ":" + this.getSecond(date);
    };
    TimeStampUtil.prototype.getCurrentTimeStampMilliSecond = function () {
        var date = new Date();
        return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date) + ":" + this.getMinute(date) + ":" + this.getSecond(date) + ":" + date.getUTCMilliseconds();
    };
    TimeStampUtil.prototype.getYear = function (date) {
        return date.getFullYear();
    };
    TimeStampUtil.prototype.getMonth = function (date) {
        var month = date.getMonth() + 1;
        var monthStr = "";
        if (month < 10) {
            monthStr = "0" + month;
        }
        else {
            monthStr = month.toString();
        }
        return monthStr;
    };
    TimeStampUtil.prototype.getDay = function (date) {
        var day = date.getDate();
        var dayStr = "";
        if (day < 10) {
            dayStr = "0" + day;
        }
        else {
            dayStr = day.toString();
        }
        return dayStr;
    };
    TimeStampUtil.prototype.getHour = function (date) {
        var hour = date.getHours();
        var hourStr = "";
        if (hour < 10) {
            hourStr = "0" + hour;
        }
        else {
            hourStr = hour.toString();
        }
        return hourStr;
    };
    TimeStampUtil.prototype.getMinute = function (date) {
        var minute = date.getMinutes();
        var minuteStr = "";
        if (minute < 10) {
            minuteStr = "0" + minute;
        }
        else {
            minuteStr = minute.toString();
        }
        return minuteStr;
    };
    TimeStampUtil.prototype.getSecond = function (date) {
        var second = date.getSeconds();
        var secondStr = "";
        if (second < 10) {
            secondStr = "0" + second;
        }
        else {
            secondStr = second.toString();
        }
        return secondStr;
    };
    return TimeStampUtil;
}());
exports.TimeStampUtil = TimeStampUtil;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1jb25zb2xlLWxvZ2dlci8uL3NyYy9jb3JlL2ludGVyZmFjZS50cyIsIndlYnBhY2s6Ly90cy1jb25zb2xlLWxvZ2dlci8uL3NyYy9jb3JlL2xvZ2dlci50cyIsIndlYnBhY2s6Ly90cy1jb25zb2xlLWxvZ2dlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cy1jb25zb2xlLWxvZ2dlci8uL3NyYy91dGlsL3RpbWVzdGFtcHV0aWwudHMiLCJ3ZWJwYWNrOi8vdHMtY29uc29sZS1sb2dnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtY29uc29sZS1sb2dnZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBRXJCLCtDQUFTO0lBQ1QsNkNBQVE7SUFDUixtREFBVztJQUNYLCtDQUFTO0FBRVgsQ0FBQyxFQVBXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBT3RCO0FBRUQsSUFBWSxhQU1YO0FBTkQsV0FBWSxhQUFhO0lBQ3ZCLG1DQUFrQjtJQUNsQiw2QkFBWTtJQUNaLDZCQUFZO0lBQ1osMkJBQVU7SUFDViwwQkFBUztBQUNYLENBQUMsRUFOVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU14Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkQsc0dBQXNEO0FBR3REO0lBTUUseUJBQWEsR0FBWTtRQUhqQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBSWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLTSwrQkFBSyxHQUFaO1FBQ0UsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksR0FBRyxHQUFHLElBQUksQ0FB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T0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMzQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxpQ0FBUyxHQUFqQixVQUFtQixJQUFVO1FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7U0FDMUI7YUFBTTtZQUNMLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDL0I7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU8saUNBQVMsR0FBakIsVUFBbUIsSUFBVTtRQUMzQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUNmLFNBQVMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1NBQzFCO2FBQU07WUFDTCxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQztBQTlHWSxzQ0FBYTs7Ozs7OztVQ0YxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InRzLWNvbnNvbGUtbG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZW51bSBMb2dnZXJMZXZlbCB7XG4gIC8vIFRSQUNFID0gMCxcbiAgREVCVUcgPSAxLFxuICBJTkZPID0gMixcbiAgV0FSTklORyA9IDMsXG4gIEVSUk9SID0gNCxcbiAgLy8gTk9ORSA9IDUsXG59XG5cbmV4cG9ydCBlbnVtIFRpbWVTdGFtcFR5cGUge1xuICBtcyA9IFwibWlsbGlzZWNvbmRcIixcbiAgcyA9IFwic2Vjb25kXCIsXG4gIG0gPSBcIm1pbnV0ZVwiLFxuICBoID0gXCJob3VyXCIsXG4gIGQgPSBcImRheVwiLFxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxldmVsQ29uZmlnIHtcbiAgbGV2ZWw6IExvZ2dlckxldmVsOyAgIC8vIOaXpeW/l+etiee6p1xuICBjb2xvciA/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhZ0NvbmZpZyB7XG4gIHRpbWVzdGFtcCA/OiBUaW1lU3RhbXBUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWcge1xuICBrZXk/OiBzdHJpbmc7ICAgICAgIC8vIOaYr+WQpuW8gOWQr+aXpeW/l++8jOm7mOiupOWFs+mXre+8jOW9k2Nvb2tpZeS4reWMuemFjWtleeWGheWuue+8jOWImeW8gOWQr+aXpeW/l1xuICB0YWdDb25maWc/OiBJVGFnQ29uZmlnO1xuICAvLyBsZXZlbENvbmZpZ3M/OiBbSUxldmVsQ29uZmlnXTtcbn0iLCJcbmltcG9ydCB7IFRpbWVTdGFtcFV0aWwgfSBmcm9tIFwiLi4vdXRpbC90aW1lc3RhbXB1dGlsXCI7XG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUU0NvbnNvbGVMb2dnZXIge1xuXG4gIHByaXZhdGUgY29uZmlnOiBJQ29uZmlnXG4gIHByaXZhdGUgZW5hYmxlTG9nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgdGltZVN0YW1wVXRpbCA/OiBUaW1lU3RhbXBVdGlsO1xuXG4gIGNvbnN0cnVjdG9yIChjb246IElDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbjtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBERUJVRyBMZXZlbFxuICAgKi9cbiAgcHVibGljIGRlYnVnICgpOiB2b2lkIHtcbiAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGxvZyA9IHRoaXMuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICBpZiAodGhpcy5lbmFibGVMb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGxvZywgLi4uIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJTkZPIExldmVsXG4gICAqL1xuICBwdWJsaWMgaW5mbyAoKTogdm9pZCB7XG4gICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGxldCBsb2cgPSB0aGlzLmdldEN1cnJlbnRUaW1lKCk7XG4gICAgaWYgKHRoaXMuZW5hYmxlTG9nKSB7XG4gICAgICBjb25zb2xlLmluZm8obG9nLCAuLi4gYXJncyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdBUk5JTkcgTGV2ZWxcbiAgICovXG4gIHB1YmxpYyB3YXJuICgpOiB2b2lkIHtcbiAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGxvZyA9IHRoaXMuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICBpZiAodGhpcy5lbmFibGVMb2cpIHtcbiAgICAgIGNvbnNvbGUud2Fybihsb2csIC4uLiBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRVJST1IgTGV2ZWxcbiAgICovXG4gIHB1YmxpYyBlcnJvciAoKTogdm9pZCB7XG4gICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGxldCBsb2cgPSB0aGlzLmdldEN1cnJlbnRUaW1lKCk7XG4gICAgaWYgKHRoaXMuZW5hYmxlTG9nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGxvZywgLi4uIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdCAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcua2V5KSB7XG4gICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgIHRoaXMuZW5hYmxlTG9nID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuY29uZmlnLmtleSkgPT09IFwidHJ1ZVwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy50YWdDb25maWcpIHtcbiAgICAgICAgdGhpcy50aW1lU3RhbXBVdGlsID0gbmV3IFRpbWVTdGFtcFV0aWwodGhpcy5jb25maWcudGFnQ29uZmlnLnRpbWVzdGFtcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIGdldEN1cnJlbnRUaW1lICgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnRpbWVTdGFtcFV0aWwpIHtcbiAgICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMudGltZVN0YW1wVXRpbC5nZXRDdXJyZW50VGltZVN0YW1wKCk7XG4gICAgICBpZiAoY3VycmVudFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgY3VycmVudFRpbWUgKyBcIl1cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxufSIsImltcG9ydCB7IFRTQ29uc29sZUxvZ2dlciB9IGZyb20gXCIuL2NvcmUvbG9nZ2VyXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgVFNDb25zb2xlTG9nZ2VyOiBhbnk7XG4gICAgZGVmaW5lOiBhbnk7XG4gIH1cbn1cblxuaWYgKHdpbmRvdykge1xuICB3aW5kb3cuVFNDb25zb2xlTG9nZ2VyID0gVFNDb25zb2xlTG9nZ2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUU0NvbnNvbGVMb2dnZXI7IiwiaW1wb3J0IHsgVGltZVN0YW1wVHlwZSB9IGZyb20gXCIuLi9jb3JlL2ludGVyZmFjZVwiXG5cbmV4cG9ydCBjbGFzcyBUaW1lU3RhbXBVdGlsIHtcblxuICBwcml2YXRlIGdldFRpbWVTdGFtcEZ1bmN0aW9uPzogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IgKHR5cGUgPzogVGltZVN0YW1wVHlwZSkge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBpZiAoVGltZVN0YW1wVHlwZS5zID09PSB0eXBlKSB7XG4gICAgICAgIHRoaXMuZ2V0VGltZVN0YW1wRnVuY3Rpb24gPSB0aGlzLmdldEN1cnJlbnRUaW1lU3RhbXBTZWNvbmQ7XG4gICAgICB9IGVsc2UgaWYgKFRpbWVTdGFtcFR5cGUubSA9PT0gdHlwZSkge1xuICAgICAgICB0aGlzLmdldFRpbWVTdGFtcEZ1bmN0aW9uID0gdGhpcy5nZXRDdXJyZW50VGltZVN0YW1wTWludXRlO1xuICAgICAgfSBlbHNlIGlmIChUaW1lU3RhbXBUeXBlLmggPT09IHR5cGUpIHtcbiAgICAgICAgdGhpcy5nZXRUaW1lU3RhbXBGdW5jdGlvbiA9IHRoaXMuZ2V0Q3VycmVudFRpbWVTdGFtcEhvdXI7XG4gICAgICB9IGVsc2UgaWYgKFRpbWVTdGFtcFR5cGUuZCA9PT0gdHlwZSkge1xuICAgICAgICB0aGlzLmdldFRpbWVTdGFtcEZ1bmN0aW9uID0gdGhpcy5nZXRDdXJyZW50VGltZVN0YW1wRGF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRUaW1lU3RhbXBGdW5jdGlvbiA9IHRoaXMuZ2V0Q3VycmVudFRpbWVTdGFtcE1pbGxpU2Vjb25kO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50VGltZVN0YW1wICgpOlN0cmluZyB7XG4gICAgaWYgKHRoaXMuZ2V0VGltZVN0YW1wRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRpbWVTdGFtcEZ1bmN0aW9uKCk7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50VGltZVN0YW1wRGF5ICgpOiBzdHJpbmcge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRZZWFyKGRhdGUpICsgXCItXCIgKyB0aGlzLmdldE1vbnRoKGRhdGUpICsgXCItXCIgKyB0aGlzLmdldERheShkYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudFRpbWVTdGFtcEhvdXIoKTogc3RyaW5nIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0WWVhcihkYXRlKSArIFwiLVwiICsgdGhpcy5nZXRNb250aChkYXRlKSArIFwiLVwiICsgdGhpcy5nZXREYXkoZGF0ZSkgKyBcIiBcIiArIHRoaXMuZ2V0SG91cihkYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudFRpbWVTdGFtcE1pbnV0ZSgpOiBzdHJpbmcge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRZZWFyKGRhdGUpICsgXCItXCIgKyB0aGlzLmdldE1vbnRoKGRhdGUpICsgXCItXCIgKyB0aGlzLmdldERheShkYXRlKSArIFwiIFwiICsgdGhpcy5nZXRIb3VyKGRhdGUpICsgXCI6XCIgKyB0aGlzLmdldE1pbnV0ZShkYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudFRpbWVTdGFtcFNlY29uZCgpOiBzdHJpbmcge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRZZWFyKGRhdGUpICsgXCItXCIgKyB0aGlzLmdldE1vbnRoKGRhdGUpICsgXCItXCIgKyB0aGlzLmdldERheShkYXRlKSArIFwiIFwiICsgdGhpcy5nZXRIb3VyKGRhdGUpICsgXCI6XCIgKyB0aGlzLmdldE1pbnV0ZShkYXRlKSArIFwiOlwiICsgdGhpcy5nZXRTZWNvbmQoZGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRUaW1lU3RhbXBNaWxsaVNlY29uZCgpOiBzdHJpbmcge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRZZWFyKGRhdGUpICsgXCItXCIgKyB0aGlzLmdldE1vbnRoKGRhdGUpICsgXCItXCIgKyB0aGlzLmdldERheShkYXRlKSArIFwiIFwiICsgdGhpcy5nZXRIb3VyKGRhdGUpICsgXCI6XCIgKyB0aGlzLmdldE1pbnV0ZShkYXRlKSArIFwiOlwiICsgdGhpcy5nZXRTZWNvbmQoZGF0ZSkgKyBcIjpcIiArIGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFllYXIoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TW9udGgoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgbW9udGhTdHIgPSBcIlwiXG4gICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgIG1vbnRoU3RyID0gXCIwXCIgKyBtb250aDtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9udGhTdHIgPSBtb250aC50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbW9udGhTdHI7XG4gIH1cblxuICBwcml2YXRlIGdldERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IGRheVN0ciA9IFwiXCI7XG4gICAgaWYgKGRheSA8IDEwKSB7XG4gICAgICBkYXlTdHIgPSBcIjBcIiArIGRheTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5U3RyID0gZGF5LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBkYXlTdHI7XG4gIH1cblxuICBwcml2YXRlIGdldEhvdXIgKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBob3VyU3RyID0gXCJcIjtcbiAgICBpZiAoaG91ciA8IDEwKSB7XG4gICAgICBob3VyU3RyID0gXCIwXCIgKyBob3VyO1xuICAgIH0gZWxzZSB7XG4gICAgICBob3VyU3RyID0gaG91ci50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gaG91clN0cjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWludXRlIChkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IG1pbnV0ZVN0ciA9IFwiXCI7XG4gICAgaWYgKG1pbnV0ZSA8IDEwKSB7XG4gICAgICBtaW51dGVTdHIgPSBcIjBcIiArIG1pbnV0ZTsgXG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbnV0ZVN0ciA9IG1pbnV0ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbWludXRlU3RyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWNvbmQgKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGxldCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBsZXQgc2Vjb25kU3RyID0gXCJcIjtcbiAgICBpZiAoc2Vjb25kIDwgMTApIHtcbiAgICAgIHNlY29uZFN0ciA9IFwiMFwiICsgc2Vjb25kO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWNvbmRTdHIgPSBzZWNvbmQudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlY29uZFN0cjtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=