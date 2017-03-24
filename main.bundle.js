webpackJsonp([1,4],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultComponent = (function () {
    function ResultComponent() {
        this.resultString = "";
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], ResultComponent.prototype, "resultString");
    ResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-result',
            template: __webpack_require__(619),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResultComponent);
    return ResultComponent;
}());
//# sourceMappingURL=/Users/Alex/Documents/Projects/random/src/result.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Alex/Documents/Projects/random/src/main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(616),
            styles: [__webpack_require__(610)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Alex/Documents/Projects/random/src/app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_input_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__result_result_component__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__input_input_component__["a" /* InputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__result_result_component__["a" /* ResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Alex/Documents/Projects/random/src/app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(617),
            styles: [__webpack_require__(611)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/Alex/Documents/Projects/random/src/footer.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__result_result_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__random_item_service__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputComponent = (function () {
    function InputComponent(_randomItemService) {
        this._randomItemService = _randomItemService;
    }
    InputComponent.prototype.submit = function (input) {
        this.inputString = input;
        // Parse the string for valid items 
        var itemMap = this._randomItemService.parseString(this.inputString);
        // Generate the random assignments for items and print it
        this.results = this._randomItemService.generateItems(itemMap);
    };
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-input',
            template: __webpack_require__(618),
            styles: [__webpack_require__(612)],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__result_result_component__["a" /* ResultComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__random_item_service__["a" /* RandomItemService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__random_item_service__["a" /* RandomItemService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__random_item_service__["a" /* RandomItemService */]) === 'function' && _a) || Object])
    ], InputComponent);
    return InputComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Alex/Documents/Projects/random/src/input.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomItemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var colorsJson = __webpack_require__(614);
var RandomItemService = (function () {
    function RandomItemService() {
        this.validItems = ['d4', 'd6', 'd10', 'd20', 'coin', 'coins', 'color', 'colors', 'horoscope', 'horoscopes'];
    }
    RandomItemService.prototype.randomItem = function (item, quantity) {
        var itemResult = item + ": | ";
        // Set upper bound of rolls to be 500
        if (quantity > 500) {
            return item + " error: The max limit for any object is 500 results, please try again\n";
        }
        // Dice roll 
        if (item[0] == 'd') {
            var count = 0;
            var diceValue = parseInt(item.substr(1));
            if (isNaN(diceValue)) {
                return item + " error: Not a valid dice value";
            }
            for (var i_1 = 0; i_1 < quantity; i_1++) {
                // Get a random number between 1 and diceValue (inclusive)
                var roll = Math.floor(Math.random() * diceValue) + 1;
                count += roll;
                itemResult += roll + " | ";
            }
            if (quantity > 1) {
                itemResult += "\n\t The sum of " + quantity + " " + item + "s is " + count;
            }
            else {
                itemResult += "\n\t The sum of " + quantity + " " + item + " is " + count;
            }
        }
        else if (item.substr(0, 5) == "color") {
            // Colors from Google's Material Design color palette 
            // Imported using npm i material-colors-json
            var colorsArray = Object.keys(colorsJson);
            for (var i = 0; i < quantity; i++) {
                var randomColorIndex = Math.floor(Math.random() * colorsArray.length);
                itemResult += colorsArray[randomColorIndex] + ' | ';
            }
        }
        else if (item.substr(0, 4) == "coin") {
            var heads = 0, tails = 0;
            for (var i_2 = 0; i_2 < quantity; i_2++) {
                var flip = Math.floor(Math.random() * 2) == 0;
                if (flip) {
                    itemResult += "Head | ";
                    heads++;
                }
                else {
                    itemResult += "Tail | ";
                    tails++;
                }
            }
            itemResult += "\n\t Heads: " + heads + " | Tails: " + tails;
        }
        else if (item.substr(0, 9) == "horoscope") {
            var horoscopes = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo',
                'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
            for (var i_3 = 0; i_3 < quantity; i_3++) {
                itemResult += horoscopes[Math.floor(Math.random() * horoscopes.length)] + " | ";
            }
        }
        else {
        }
        // Add last new line 
        itemResult += "\n";
        return itemResult;
    };
    RandomItemService.prototype.parseString = function (inputString) {
        //var map : { [type: string]: number; } = {};
        var map = new Map();
        // Convert string to lower case and split by comma delimiter
        inputString = inputString.toLowerCase();
        var items = inputString.split(',');
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var itemString = items_1[_i];
            // Boolean flags for successful parsing of string
            var foundValidItem = false;
            var foundValidQuantity = false;
            // Item
            var item;
            var quantity;
            // Split string into words
            var keywords = itemString.split(' ');
            // Remove empty string elements
            keywords = keywords.filter(function (v) { return v != ''; });
            // As a start, make sure only one or two words are found
            if (keywords.length >= 1 && keywords.length <= 2) {
                // Attempt to parse for a validItem
                // If more than one is found, the input is invalid
                for (var _a = 0, keywords_1 = keywords; _a < keywords_1.length; _a++) {
                    var keyword = keywords_1[_a];
                    if (this.validItems.indexOf(keyword, 0) >= 0) {
                        // If you already looped over a valid item, this input becomes invalid
                        if (foundValidItem) {
                            foundValidItem = false;
                            break;
                        }
                        foundValidItem = true;
                        // Keep track of the item
                        item = keyword;
                        // Remove item from keywords
                        var index = keywords.indexOf(item, 0);
                        keywords.splice(index, 1);
                    }
                }
                // Then attempt to parse for a quantity
                // If no quantity can be found, assume 1
                if (foundValidItem) {
                    // If the split array is now empty, assume 1 item
                    if (keywords.length == 0) {
                        quantity = 1;
                        foundValidQuantity = true;
                    }
                    else if (keywords.length == 1) {
                        quantity = parseInt(keywords[0], 10);
                        // If the value is not a number or is not a positive number
                        if (quantity == NaN || quantity <= 0) {
                            foundValidQuantity = false;
                        }
                        else {
                            foundValidQuantity = true;
                        }
                    }
                }
                if (foundValidItem && foundValidQuantity) {
                    if (map.has(item)) {
                        map.set(item, map.get(item) + quantity);
                    }
                    else {
                        map.set(item, quantity);
                    }
                }
            }
        }
        return map;
    };
    RandomItemService.prototype.generateItems = function (itemMap) {
        var _this = this;
        var result = "";
        itemMap.forEach(function (value, key) {
            //result += key + ": " + value + "\n";
            result += _this.randomItem(key, value);
        });
        return result;
    };
    RandomItemService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], RandomItemService);
    return RandomItemService;
}());
//# sourceMappingURL=/Users/Alex/Documents/Projects/random/src/random-item.service.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Alex/Documents/Projects/random/src/environment.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "h1 {\n  padding-top: 30px;\n  text-align: center; }\n\n#wrapper {\n  background-color: #F6F6EF;\n  position: relative;\n  width: 85%;\n  min-height: 100%;\n  margin: 0 auto;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 15px;\n  height: 500%; }\n  @media only screen and (max-width: 768px) {\n    #wrapper {\n      width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "#footer {\n  position: relative;\n  padding: 10px;\n  height: 60px;\n  border-top: 1px solid #b92b27;\n  letter-spacing: 0.7px;\n  text-align: center; }\n  #footer a {\n    color: #b92b27;\n    font-weight: bold;\n    text-decoration: none; }\n    #footer a:hover {\n      text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "#submitField {\n  background-color: #F6F6EF;\n  position: relative;\n  min-height: 85px;\n  padding-top: 10px;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 15px;\n  height: 100%; }\n\np {\n  text-align: center; }\n\ninput[type=text] {\n  position: relative;\n  width: 35%;\n  margin-left: 30%; }\n\nbutton {\n  position: relative;\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "#result {\n  background-color: #F6F6EF;\n  position: relative;\n  width: 90%;\n  min-height: 200px;\n  padding-bottom: 90px;\n  margin: 0 auto;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 15px;\n  height: 100%; }\n\ntextarea {\n  outline: none;\n  resize: none;\n  position: relative;\n  margin-left: 20%;\n  margin-right: 20%;\n  max-width: 60%;\n  min-width: 60%; }\n  @media only screen and (max-width: 768px) {\n    textarea {\n      margin-left: 15%;\n      margin-right: 15%;\n      max-width: 70%;\n      min-width: 70%; } }\n\nh3 {\n  position: relative;\n  margin-left: 20%;\n  margin-right: 20%; }\n  @media only screen and (max-width: 768px) {\n    h3 {\n      margin-left: 15%;\n      margin-right: 15%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<h1> Random * Generator </h1>\n\t<app-input></app-input>\n\t<app-footer></app-footer>\n</div>"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n    <p> Made with <a href=\"https://cli.angular.io\">Angular CLI</a>. For more suggestions, email site admin </p>\n    <p> hongalex@usc.edu- 2017 </p>\n </div>\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<div id=submitField>\n  <p> Universal random object generator! </p>\n  <input type=\"text\" #inputText (keyup.enter)=\"submit(inputText.value)\" \n  \tplaceholder=\"1 d20, 3 d6, color, horoscope\">\n  <button (click)=\"submit(inputText.value)\" >Submit</button>\n</div>\n<app-result [resultString]=\"results\"></app-result>\n"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<div id=result>\n<h3> Results: </h3>\n<textarea rows=\"20\" placeholder=\"D20: 17 ...\" disabled>\n{{ resultString }}\n</textarea>\n</div>"

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ })

},[632]);
//# sourceMappingURL=main.bundle.js.map