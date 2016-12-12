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

	__weex_define__('@weex-component/d387b8ccd0e1886e4869c0eaf4ae8a17', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/d387b8ccd0e1886e4869c0eaf4ae8a17',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "searchBar"
	      ],
	      "children": [
	        {
	          "type": "input",
	          "classList": [
	            "inputBar"
	          ],
	          "id": "inputId",
	          "attr": {
	            "placeholder": "请输入您的星座"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "searchBtn"
	          ],
	          "events": {
	            "click": "searchHoroscope"
	          },
	          "attr": {
	            "value": "查 询"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "searchText"
	              ],
	              "attr": {
	                "value": "查询"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '星座名称：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '日期：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '综合指数：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '幸运色：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '健康指数：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '爱情指数：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '财运指数：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '幸运数字：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '速配星座：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '工作指数：' + (this.$jsonData)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "infoCell"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": function () {return '今日概述：' + (this.$jsonData)}
	                  }
	                }
	              ]
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
	  "searchBar": {
	    "paddingTop": 20,
	    "height": 70,
	    "flexDirection": "row"
	  },
	  "inputBar": {
	    "top": 0,
	    "left": 20,
	    "width": 500,
	    "height": 60,
	    "textAlign": "center",
	    "borderStyle": "solid",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "searchBtn": {
	    "left": 50,
	    "height": 60,
	    "width": 170,
	    "backgroundColor": "#5baef5",
	    "borderRadius": 5
	  },
	  "searchText": {
	    "color": "#FFFFFF",
	    "marginTop": 15,
	    "textAlign": "center"
	  },
	  "info": {
	    "top": 30,
	    "width": 750
	  },
	  "infoCell": {
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

	var stream = __weex_require__('@weex-module/stream');
	__weex_require__('@weex-module/event');
	module.exports = {
	    data: function () {return {
	        baseUrl: "http://web.juhe.cn:8080/constellation/getAll?consName=双鱼座&type=today&key=5c1332d0fd4b0834283fead227efa936",
	        jsonData: ""
	    }},
	    created: function created() {
	        var self = this;

	        self.getWechatData();
	    },
	    methods: {
	        searchHoroscope: function searchHoroscope() {
	            var self = this;
	            var inputText = document.getElementById("inputId").value;
	            self.baseUrl = "http://web.juhe.cn:8080/constellation/getAll?type=today&key=5c1332d0fd4b0834283fead227efa936&consName=" + inputText;
	        },
	        getWechatData: function getWechatData() {
	            var self = this;

	            stream.fetch({
	                method: 'GET',
	                url: this.baseUrl,
	                type: 'json'
	            }, function (ret) {
	                console.log("bytes received:" + ret.length);

	                self.jsonData = ret["result"];
	                console.log("bytes received:" + self.jsonData);
	                this.$openURL(self.jsonData);
	            }, function (ret) {
	                console.log(ret.error_code);
	            });
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);