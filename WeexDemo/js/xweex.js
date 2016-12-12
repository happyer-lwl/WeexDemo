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

	__weex_define__('@weex-component/9859f7c45116264f92d4a374ec5f498e', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/9859f7c45116264f92d4a374ec5f498e',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "content"
	  ],
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
	            "value": "微信精选"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "cell"
	      ],
	      "events": {
	        "click": "clickJoke"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "content"
	          ],
	          "attr": {
	            "value": "笑话大全"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "cell"
	      ],
	      "events": {
	        "click": "clickHoroscope"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "content"
	          ],
	          "attr": {
	            "value": "星座运势"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "cell"
	      ],
	      "events": {
	        "click": "clickNews"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "content"
	          ],
	          "attr": {
	            "value": "今日新闻"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
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

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {}},
	    methods: {
	        clickWechat: function clickWechat(eventProperties) {
	            console.log(eventProperties);

	            this.$openURL('wechat');
	        },
	        clickJoke: function clickJoke(eventProperties) {
	            console.log(eventProperties);
	            this.$openURL('joke');
	        },
	        clickHoroscope: function clickHoroscope(eventProperties) {
	            console.log(eventProperties);
	            this.$openURL('horoscope');
	        },
	        clickNews: function clickNews(eventProperties) {
	            console.log(eventProperties);
	            this.$openURL('news');
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);