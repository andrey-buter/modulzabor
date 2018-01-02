(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Result2 = require('./Result');

var _Result3 = _interopRequireDefault(_Result2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prolet = function (_Result) {
		_inherits(Prolet, _Result);

		function Prolet(stolbSize) {
				var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
				var isCalcFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

				_classCallCheck(this, Prolet);

				var _this = _possibleConstructorReturn(this, (Prolet.__proto__ || Object.getPrototypeOf(Prolet)).call(this));

				_this.stolbType = 'normal';
				_this.stolbSize = +stolbSize;

				_this.length = length;
				_this.isCalcFirst = isCalcFirst;

				_this.calcCount();
				_this.setStolbPrice();
				return _this;
		}

		_createClass(Prolet, [{
				key: 'get',
				value: function get() {
						return this.stolbSize + this._prolet.size;
				}
		}, {
				key: 'calcCount',
				value: function calcCount() {
						var length = this.length;

						if (this.isCalcFirst) {
								this.stolbCount = 1;
								length -= this.stolbSize;
						}

						this.proletCount = length > 0 ? Math.ceil(length / this.get()) : 1;

						this.stolbCount += this.proletCount;
				}
		}]);

		return Prolet;
}(_Result3.default);

exports.default = Prolet;

},{"./Result":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Result = function () {
	function Result() {
		_classCallCheck(this, Result);

		// vars to set up
		this.stolbType = 'normal';
		this.stolbSize = 0;

		// calc vars
		this.stolbCount = 0;
		this.proletCount = 0;

		// default var
		this._prolet = _config2.default.prolet;

		// results vars
		this._stolbPrice = 0;
	}

	_createClass(Result, [{
		key: 'setStolbPrice',
		value: function setStolbPrice() {
			this._stolbPrice = _config2.default.stolbs[this.stolbSize][this.stolbType];
		}
	}, {
		key: 'getPrice',
		value: function getPrice() {
			return this._stolbPrice * this.stolbCount + this.proletCount * this._prolet.price;
		}
	}, {
		key: 'getLength',
		value: function getLength() {
			return this.stolbSize * this.stolbCount + this.proletCount * this._prolet.size;
		}
	}, {
		key: 'getStolbCount',
		value: function getStolbCount() {
			return this.stolbCount;
		}
	}, {
		key: 'getProletCount',
		value: function getProletCount() {
			return this.proletCount;
		}
	}]);

	return Result;
}();

exports.default = Result;

},{"../utils/config":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Result2 = require('./Result');

var _Result3 = _interopRequireDefault(_Result2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vorota = function (_Result) {
	_inherits(Vorota, _Result);

	function Vorota(stolbSize) {
		var vorotaPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'without';

		_classCallCheck(this, Vorota);

		var _this = _possibleConstructorReturn(this, (Vorota.__proto__ || Object.getPrototypeOf(Vorota)).call(this));

		_this.stolbType = 'reinforced';
		_this.stolbSize = +stolbSize;

		_this.vorotaPosition = vorotaPosition;

		_this.calcCount();
		_this.setStolbPrice();
		return _this;
	}

	_createClass(Vorota, [{
		key: 'calcCount',
		value: function calcCount() {
			switch (this.vorotaPosition) {
				case 'without':
					this.proletCount = 0;
					break;
				case 'together':
					this.stolbCount = 3;
					break;
				case 'different':
					this.stolbCount = 4;
					break;
			}
		}
	}]);

	return Vorota;
}(_Result3.default);

exports.default = Vorota;

},{"./Result":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Prolet = require('../classes/Prolet');

var _Prolet2 = _interopRequireDefault(_Prolet);

var _Vorota = require('../classes/Vorota');

var _Vorota2 = _interopRequireDefault(_Vorota);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppRootComponent = function () {
	function AppRootComponent($sce) {
		_classCallCheck(this, AppRootComponent);

		this.$sce = $sce;

		this.generalLength = '';
		this.includeVorota = '';
		this.vorotaLength = '';

		this.error = 'Введите длину забора.';
		this.result = this.error;

		this.stolbs = Object.keys(_config2.default.stolbs);
		this.stolbSize = this.stolbs[0];
		this.vorotaPositions = _config2.default.vorotaPositions;
		this.vorotaPosition = this.vorotaPositions[0];
	}

	_createClass(AppRootComponent, [{
		key: 'calc',
		value: function calc() {
			var length = this.generalLength * 100;

			if (!length) {
				this.result = this.error;
				return;
			}

			var vorota = new _Vorota2.default(this.stolbSize, this.vorotaPosition.id);

			length -= vorota.getLength();

			var prolet = new _Prolet2.default(this.stolbSize, length);

			this.result = this.showResultMessage(vorota, prolet);
		}
	}, {
		key: 'showResultMessage',
		value: function showResultMessage(vorota, prolet) {
			var price = vorota.getPrice() + prolet.getPrice();
			var vorotaMsg = '';

			if (vorota.getStolbCount() > 0) {
				vorotaMsg = '\n\t\t\t\t\u0412\u043E\u0440\u043E\u0442\u0430 \u0438 \u043A\u0430\u043B\u0438\u0442\u043A\u0430: (' + vorota.getPrice() + ' \u0440\u0443\u0431.) <br>\n\t\t\t\t- \u0443\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0442\u043E\u043B\u0431\u044B: ' + vorota.getStolbCount() + ' <br>\n\t\t\t';
			}

			return '\n\t\t\t' + vorotaMsg + '\n\t\t\t\u0417\u0430\u0431\u043E\u0440: (' + prolet.getPrice() + ' \u0440\u0443\u0431.) <br> \n\t\t\t- \u0441\u0442\u043E\u043B\u0431\u044B: ' + prolet.getStolbCount() + ' <br>\n\t\t\t- \u043F\u0440\u043E\u043B\u0435\u0442\u044B: ' + prolet.getProletCount() + ' <br>\n\t\t\t\u0421\u0443\u043C\u043C\u0430: <br>\n\t\t\t' + price + ' \u0440\u0443\u0431.\n\t\t';
		}
	}, {
		key: 'trustAsHtml',
		value: function trustAsHtml(text) {
			return this.$sce.trustAsHtml(text);
		}
	}]);

	return AppRootComponent;
}();

exports.default = {
	template: '\n\t\t<div class="card">\n\t\t\t<div>\n\t\t\t\t<label for="meters">\n\t\t\t\t\t\u0414\u043B\u0438\u043D\u0430 \u0437\u0430\u0431\u043E\u0440\u0430\n\t\t\t\t\t<input\n\t\t\t\t\t\tid="meters" \n\t\t\t\t\t\ttype="number" \n\t\t\t\t\t\tplaceholder="0"\n\t\t\t\t\t\tng-model="$ctrl.generalLength" \n\t\t\t\t\t\tng-required="true"\n\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t>\n\t\t\t\t</label>\n\t\t\t\t<label ng-if="false" for="with-vorota">\n\t\t\t\t\t\u0421 \u0443\u0447\u0435\u0442\u043E\u043C \u0432\u043E\u0440\u043E\u0442\n\t\t\t\t\t<input\n\t\t\t\t\t\tid="with-vorota"\n\t\t\t\t\t\ttype="checkbox"\n\t\t\t\t\t\tng-model="$ctrl.includeVorota"\n\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label ng-repeat="size in $ctrl.stolbs" for="size-{{ size }}">\n\t\t\t\t\t<input\n\t\t\t\t\t\tid="size-{{ size }}" \n\t\t\t\t\t\ttype="radio" \n\t\t\t\t\t\tng-model="$ctrl.stolbSize" \n\t\t\t\t\t\tng-value="size"\n\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t>\n\t\t\t\t\t{{ size }}\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label ng-repeat="position in $ctrl.vorotaPositions" for="position-{{ position.id }}">\n\t\t\t\t\t<input \n\t\t\t\t\t\tid="position-{{ position.id }}"\n\t\t\t\t\t\ttype="radio"\n\t\t\t\t\t\tng-model="$ctrl.vorotaPosition"\n\t\t\t\t\t\tng-value="position"\n\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t>\n\t\t\t\t\t{{ position.label }}\n\t\t\t\t</label>\n\t\t\t\t<div ng-if="$ctrl.includeVorota">\n\t\t\t\t\t<label for="kalitkaLength">\n\t\t\t\t\t\t\u0414\u043B\u0438\u043D\u0430 \u043A\u0430\u043B\u0438\u0442\u043A\u0438\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tid="kalitkaLength" \n\t\t\t\t\t\t\ttype="number" \n\t\t\t\t\t\t\tplaceholder="0"\n\t\t\t\t\t\t\tng-model="$ctrl.kalitkaLength" \n\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label for="vorotaLength">\n\t\t\t\t\t\t\u0414\u043B\u0438\u043D\u0430 \u0432\u043E\u0440\u043E\u0442\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tid="vorotaLength" \n\t\t\t\t\t\t\ttype="number" \n\t\t\t\t\t\t\tplaceholder="0"\n\t\t\t\t\t\t\tng-model="$ctrl.vorotaLength" \n\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="card" ng-bind-html="$ctrl.trustAsHtml( $ctrl.result )"></div>\n\t',
	controller: AppRootComponent
};

},{"../classes/Prolet":1,"../classes/Vorota":3,"../utils/config":6}],5:[function(require,module,exports){
'use strict';

// import ArrayService from './services/array';
// import GlobalsService from './services/globals';
// import DBService from './services/db';
// import DBFavoriteService from './services/db-favorite';

var _appRootComponent = require('./components/app-root-component');

var _appRootComponent2 = _interopRequireDefault(_appRootComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ConfigUIRouter from './ui-router/config';


angular.module('myApp', ['ui.router'])
// .service( 'arrayService', ArrayService )
// .service( 'globalsService', GlobalsService )
// .service( 'dbService', DBService )
// .service( 'dbFavoriteService', DBFavoriteService )

.component('appRootComponent', _appRootComponent2.default).config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		template: 'home'
	});
	$stateProvider.state('users', {
		url: '/users',
		template: 'users'
	});
});

},{"./components/app-root-component":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var GLOBALS = {
	prolet: {
		size: 275,
		price: 5
	},
	stolbs: {
		17: {
			// type : price
			normal: 10,
			reinforced: 12
		},
		20: {
			normal: 14,
			reinforced: 16
		}
	},
	vorotaPositions: [{
		label: 'Без ворот',
		id: 'without'
	}, {
		label: 'Ворота и калитка вместе',
		id: 'together'
	}, {
		label: 'Ворота и калитка раздельно',
		id: 'different'
	}]
};

exports.default = GLOBALS;

},{}]},{},[5]);
