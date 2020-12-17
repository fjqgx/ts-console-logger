/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/logger.ts":
/*!****************************!*
  !*** ./src/core/logger.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TSConsoleLogger = void 0;
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
        if (this.config && this.config.key && document && document.cookie) {
            var arr = document.cookie.split(";");
            for (var i = 0; i < arr.length; ++i) {
                if (arr[i] === (this.config.key + "=true")) {
                    this.enableLog = true;
                    break;
                }
            }
        }
    };
    TSConsoleLogger.prototype.getCurrentTime = function () {
        return "[" + new Date().toISOString() + "]";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1jb25zb2xlLWxvZ2dlci8uL3NyYy9jb3JlL2xvZ2dlci50cyIsIndlYnBhY2s6Ly90cy1jb25zb2xlLWxvZ2dlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cy1jb25zb2xlLWxvZ2dlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1jb25zb2xlLWxvZ2dlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUtFLHlCQUFhLEdBQVk7UUFGakIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUdqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS00sK0JBQUssR0FBWjtRQUNFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxrQkFBSyxHQUFHLEdBQU0sSUFBSSxHQUFFO1NBQzVCO0lBQ0gsQ0FBQztJQUtNLDhCQUFJLEdBQVg7UUFDRSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sa0JBQU0sR0FBRyxHQUFNLElBQUksR0FBRTtTQUM3QjtJQUNILENBQUM7SUFLTSw4QkFBSSxHQUFYO1FBQ0UsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLGtCQUFNLEdBQUcsR0FBTSxJQUFJLEdBQUU7U0FDN0I7SUFDSCxDQUFDO0lBS00sK0JBQUssR0FBWjtRQUNFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLE9BQWIsT0FBTyxrQkFBTyxHQUFHLEdBQU0sSUFBSSxHQUFFO1NBQzlCO0lBQ0gsQ0FBQztJQUtPLDhCQUFJLEdBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDakUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFHTyx3Q0FBYyxHQUF0QjtRQUNFLE9BQU8sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQzlDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUM7QUF6RVksMENBQWU7Ozs7Ozs7Ozs7Ozs7QUNENUIsZ0ZBQWdEO0FBU2hELElBQUksTUFBTSxFQUFFO0lBQ1YsTUFBTSxDQUFDLGVBQWUsR0FBRyx3QkFBZSxDQUFDO0NBQzFDO0FBRUQsa0JBQWUsd0JBQWUsQ0FBQzs7Ozs7OztVQ2IvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InRzLWNvbnNvbGUtbG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgVFNDb25zb2xlTG9nZ2VyIHtcblxuICBwcml2YXRlIGNvbmZpZzogSUNvbmZpZ1xuICBwcml2YXRlIGVuYWJsZUxvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yIChjb246IElDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbjtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBERUJVRyDnuqfliKvnmoTml6Xlv5dcbiAgICovXG4gIHB1YmxpYyBkZWJ1ZyAoKTogdm9pZCB7XG4gICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGxldCBsb2cgPSB0aGlzLmdldEN1cnJlbnRUaW1lKCk7XG4gICAgaWYgKHRoaXMuZW5hYmxlTG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhsb2csIC4uLiBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSU5GTyDnuqfliKvnmoTml6Xlv5dcbiAgICovXG4gIHB1YmxpYyBpbmZvICgpOiB2b2lkIHtcbiAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGxvZyA9IHRoaXMuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICBpZiAodGhpcy5lbmFibGVMb2cpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhsb2csIC4uLiBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV0FSTklORyDnuqfliKvnmoTml6Xlv5dcbiAgICovXG4gIHB1YmxpYyB3YXJuICgpOiB2b2lkIHtcbiAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGxvZyA9IHRoaXMuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICBpZiAodGhpcy5lbmFibGVMb2cpIHtcbiAgICAgIGNvbnNvbGUud2Fybihsb2csIC4uLiBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRVJST1Ig57qn5Yir55qE5pel5b+XXG4gICAqL1xuICBwdWJsaWMgZXJyb3IgKCk6IHZvaWQge1xuICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICBsZXQgbG9nID0gdGhpcy5nZXRDdXJyZW50VGltZSgpO1xuICAgIGlmICh0aGlzLmVuYWJsZUxvZykge1xuICAgICAgY29uc29sZS5lcnJvcihsb2csIC4uLiBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Yid5aeL5YyWXG4gICAqL1xuICBwcml2YXRlIGluaXQgKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5rZXkgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuY29va2llKSB7XG4gICAgICBsZXQgYXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChhcnJbaV0gPT09ICh0aGlzLmNvbmZpZy5rZXkgKyBcIj10cnVlXCIpKSB7XG4gICAgICAgICAgdGhpcy5lbmFibGVMb2cgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudFRpbWUgKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiW1wiICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgXCJdXCI7XG4gIH1cbn0iLCJpbXBvcnQgeyBUU0NvbnNvbGVMb2dnZXIgfSBmcm9tIFwiLi9jb3JlL2xvZ2dlclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIFRTQ29uc29sZUxvZ2dlcjogYW55O1xuICAgIGRlZmluZTogYW55O1xuICB9XG59XG5cbmlmICh3aW5kb3cpIHtcbiAgd2luZG93LlRTQ29uc29sZUxvZ2dlciA9IFRTQ29uc29sZUxvZ2dlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVFNDb25zb2xlTG9nZ2VyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=