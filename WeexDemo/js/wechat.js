/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/aec1d1241a73d79912e9923aafc45a25', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/aec1d1241a73d79912e9923aafc45a25',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "list"
	      ],
	      "repeat": function () {return this.list},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "cell"
	          ],
	          "events": {
	            "click": "clickWechat"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "content"
	              ],
	              "attr": {
	                "value": function () {return (this.title) + '}'}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "width": 750
	  },
	  "cell": {
	    "left": 20,
	    "width": 730,
	    "height": 80,
	    "flexDirection": "column",
	    "borderStyle": "solid",
	    "borderBottomColor": "#dddddd",
	    "borderBottomWidth": 1
	  },
	  "content": {
	    "top": 30
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var stream = __weex_require__('@weex-module/stream');
	module.exports = {
	    data: function () {return {
	        baseUrl: "http://v.juhe.cn/weixin/query?key=61be1097e33a2ddf7446d6a16d89bcfb&pno=1&dtype=json",
	        list: [{ "": "" }],
	        jsonData: "",
	        resultData: ""
	    }},
	    created: function created() {
	        var self = this;

	        self.getWechatData();
	    },
	    methods: {
	        clickWechat: function clickWechat(eventProperties) {
	            var self = this;
	            var listData = self.list[0];
	            this.$openURL(listData.url);
	        },
	        getWechatData: function getWechatData() {
	            var self = this;

	            stream.sendHttp({
	                method: 'GET',
	                url: this.baseUrl,
	                type: 'json'
	            }, function (ret) {
	                console.log("bytes received:" + ret.length);
	                self.jsonData = JSON.parse(ret);
	                self.resultData = self.jsonData.result;
	                self.list = self.resultData.list;
	            });
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);