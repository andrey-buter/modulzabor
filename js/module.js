(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract = require('./abstract.ResultMessage');

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Install = function (_ResultMessage) {
	_inherits(Install, _ResultMessage);

	function Install(length, installType) {
		_classCallCheck(this, Install);

		var _this = _possibleConstructorReturn(this, (Install.__proto__ || Object.getPrototypeOf(Install)).call(this));

		_this.length = length / 100;
		_this.type = installType;
		return _this;
	}

	_createClass(Install, [{
		key: 'getPrice',
		value: function getPrice() {
			return this.length * this.type.price;
		}
	}, {
		key: 'getLength',
		value: function getLength() {
			return this.length;
		}
	}, {
		key: 'getMsg',
		value: function getMsg() {
			var price = this.getPrice();

			if (0 >= price) return '';

			return this.join([this.title('Установка'), this.message('&nbsp;', this.length + ' \u043C.\u043F.', price)]);
		}
	}]);

	return Install;
}(_abstract2.default);

exports.default = Install;

},{"./abstract.ResultMessage":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract = require('./abstract.Zabor');

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prolet = function (_Zabor) {
	_inherits(Prolet, _Zabor);

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
			return this.stolbSize + this._zokolPlita.size;
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
	}, {
		key: 'getMsg',
		value: function getMsg() {
			return this.join([this.title('Забор'), this.message('\u0441\u0442\u043E\u043B\u0431\u044B <small>' + this.stolbSize + 'x' + this.stolbSize + '</small>', this.stolbCount, this.getStolbPrice()), this.message('пролеты', this.proletCount, this.getProletPrice())]);
		}
	}]);

	return Prolet;
}(_abstract2.default);

exports.default = Prolet;

},{"./abstract.Zabor":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract = require('./abstract.Zabor');

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vorota = function (_Zabor) {
	_inherits(Vorota, _Zabor);

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
	}, {
		key: 'getMsg',
		value: function getMsg() {
			var count = this.stolbCount;

			if (0 >= count) return '';

			return this.join([this.title('Ворота и калитка'), this.message('\u0443\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0442\u043E\u043B\u0431\u044B <small>' + this.stolbSize + 'x' + this.stolbSize + '</small>', count, this.getStolbPrice())]);
		}
	}]);

	return Vorota;
}(_abstract2.default);

exports.default = Vorota;

},{"./abstract.Zabor":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract = require('./abstract.ResultMessage');

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zapolnenie = function (_ResultMessage) {
	_inherits(Zapolnenie, _ResultMessage);

	function Zapolnenie(zokolCount, zapolnenieType) {
		_classCallCheck(this, Zapolnenie);

		var _this = _possibleConstructorReturn(this, (Zapolnenie.__proto__ || Object.getPrototypeOf(Zapolnenie)).call(this));

		_this.zokolCount = zokolCount;
		_this.type = zapolnenieType;
		return _this;
	}

	_createClass(Zapolnenie, [{
		key: 'getPrice',
		value: function getPrice() {
			return this.zokolCount * this.type.price;
		}
	}, {
		key: 'getCount',
		value: function getCount() {
			return this.zokolCount;
		}
	}, {
		key: 'getMsg',
		value: function getMsg() {
			var price = this.getPrice();

			if (0 >= price) return '';

			return this.join([this.title('Деревянное заполнение'), this.message(this.type.label, this.zokolCount, price)]);
		}
	}]);

	return Zapolnenie;
}(_abstract2.default);

exports.default = Zapolnenie;

},{"./abstract.ResultMessage":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResultMessage = function () {
	function ResultMessage() {
		_classCallCheck(this, ResultMessage);
	}

	_createClass(ResultMessage, [{
		key: 'title',
		value: function title(_title) {
			return this._block(_title, 'Кол-во', 'Цена', 'result-title-item');
		}
	}, {
		key: 'message',
		value: function message(title, count, price) {
			return this._block(title, count, '' + price, 'result-message-item');
		}
	}, {
		key: 'result',
		value: function result(price) {
			return this._block('Итого (руб.):', '', '' + price, 'result-item');
		}
	}, {
		key: '_block',
		value: function _block(title, count, price, cssClass) {
			return '\n\t\t\t<div class="result-message-row ' + cssClass + '">\n\t\t\t\t<div class="col-item col-title">\n\t\t\t\t\t' + title + '\n\t\t\t\t</div>\n\t\t\t\t<div class="col-item col-count">\n\t\t\t\t\t' + count + '\n\t\t\t\t</div>\n\t\t\t\t<div class="col-item col-price">\n\t\t\t\t\t' + price + '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
		}
	}, {
		key: 'join',
		value: function join(array) {
			return array.join('');
		}
	}]);

	return ResultMessage;
}();

exports.default = ResultMessage;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract = require('./abstract.ResultMessage');

var _abstract2 = _interopRequireDefault(_abstract);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zabor = function (_ResultMessage) {
	_inherits(Zabor, _ResultMessage);

	function Zabor() {
		_classCallCheck(this, Zabor);

		// vars to set up
		var _this = _possibleConstructorReturn(this, (Zabor.__proto__ || Object.getPrototypeOf(Zabor)).call(this));

		_this.stolbType = 'normal';
		_this.stolbSize = 0;

		// calc vars
		_this.stolbCount = 0;
		_this.proletCount = 0;

		// default var
		_this._zokolPlita = _this._getGlobal('zokolPlita');

		// results vars
		_this._stolbPrice = 0;
		return _this;
	}

	_createClass(Zabor, [{
		key: 'setStolbPrice',
		value: function setStolbPrice() {
			var stolbs = this._getGlobal('stolbs');
			this._stolbPrice = stolbs[this.stolbSize][this.stolbType];
		}
	}, {
		key: 'getPrice',
		value: function getPrice() {
			return this.getStolbPrice() + this.getProletPrice();
		}
	}, {
		key: 'getStolbPrice',
		value: function getStolbPrice() {
			return this._stolbPrice * this.stolbCount;
		}
	}, {
		key: 'getProletPrice',
		value: function getProletPrice() {
			return this.proletCount * this._zokolPlita.price;
		}
	}, {
		key: 'getLength',
		value: function getLength() {
			return this.stolbSize * this.stolbCount + this.proletCount * this._zokolPlita.size;
		}
	}, {
		key: '_getGlobal',
		value: function _getGlobal(key) {
			return _config2.default[key];
		}
	}, {
		key: 'getMsg',
		value: function getMsg() {
			return '';
		}
	}]);

	return Zabor;
}(_abstract2.default);

exports.default = Zabor;

},{"../utils/config":10,"./abstract.ResultMessage":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Prolet = require('../classes/Prolet');

var _Prolet2 = _interopRequireDefault(_Prolet);

var _Vorota = require('../classes/Vorota');

var _Vorota2 = _interopRequireDefault(_Vorota);

var _Install = require('../classes/Install');

var _Install2 = _interopRequireDefault(_Install);

var _Zapolnenie = require('../classes/Zapolnenie');

var _Zapolnenie2 = _interopRequireDefault(_Zapolnenie);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppRootComponent = function () {
	function AppRootComponent() {
		_classCallCheck(this, AppRootComponent);

		this.generalLength = '';
		this.includeVorota = '';
		this.vorotaLength = '';

		this.result = null;

		this.stolbs = Object.keys(_config2.default.stolbs);
		this.stolbSize = this.stolbs[0];

		this.vorotaPositions = _config2.default.vorotaPositions;
		this.vorotaPosition = this.vorotaPositions[0];

		this.installation = _config2.default.installation;
		this.installType = this.installation[0];

		this.delivery = _config2.default.delivery;
		this.deliveryType = this.delivery[0];

		this.zapolnenie = _config2.default.zapolnenie;
		this.zapolnenieType = this.zapolnenie[0];
	}

	_createClass(AppRootComponent, [{
		key: 'calc',
		value: function calc() {
			var length = this.generalLength * 100;

			if (!length) {
				this.result = null;
				return;
			}

			var install = new _Install2.default(length, this.installType);
			var vorota = new _Vorota2.default(this.stolbSize, this.vorotaPosition.id);

			length -= vorota.getLength();

			var prolet = new _Prolet2.default(this.stolbSize, length);

			var zapolnenie = new _Zapolnenie2.default(prolet.proletCount, this.zapolnenieType);

			this.result = {
				vorota: vorota,
				prolet: prolet,
				install: install,
				zapolnenie: zapolnenie
			};
		}
	}]);

	return AppRootComponent;
}();

exports.default = {
	template: '\n\t\t<div class="card">\n\t\t\t<div>\n\t\t\t\t<label for="meters">\n\t\t\t\t\t\u0414\u043B\u0438\u043D\u0430 \u0437\u0430\u0431\u043E\u0440\u0430\n\t\t\t\t\t<input\n\t\t\t\t\t\tid="meters" \n\t\t\t\t\t\ttype="number" \n\t\t\t\t\t\tplaceholder="0"\n\t\t\t\t\t\tng-model="$ctrl.generalLength" \n\t\t\t\t\t\tng-required="true"\n\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t>\n\t\t\t\t</label>\n\t\t\t\t<label ng-if="false" for="with-vorota">\n\t\t\t\t\t\u0421 \u0443\u0447\u0435\u0442\u043E\u043C \u0432\u043E\u0440\u043E\u0442\n\t\t\t\t\t<input\n\t\t\t\t\t\tid="with-vorota"\n\t\t\t\t\t\ttype="checkbox"\n\t\t\t\t\t\tng-model="$ctrl.includeVorota"\n\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div ng-if="+$ctrl.generalLength > 0">\n\t\t\t\t<div>\n\t\t\t\t\t<label ng-repeat="size in $ctrl.stolbs" for="size-{{ size }}">\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tid="size-{{ size }}" \n\t\t\t\t\t\t\ttype="radio" \n\t\t\t\t\t\t\tng-model="$ctrl.stolbSize" \n\t\t\t\t\t\t\tng-value="size"\n\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t{{ size }}\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<hr />\n\t\t\t\t<div>\n\t\t\t\t\t\u0412\u043E\u0440\u043E\u0442\u0430 \u0438 \u043A\u0430\u043B\u0438\u0442\u043A\u0430\n\t\t\t\t\t<div ng-repeat="position in $ctrl.vorotaPositions">\n\t\t\t\t\t\t<label for="position-{{ position.id }}">\n\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\tid="position-{{ position.id }}"\n\t\t\t\t\t\t\t\ttype="radio"\n\t\t\t\t\t\t\t\tng-model="$ctrl.vorotaPosition"\n\t\t\t\t\t\t\t\tng-value="position"\n\t\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ position.label }}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div ng-if="$ctrl.includeVorota">\n\t\t\t\t\t\t<label for="kalitkaLength">\n\t\t\t\t\t\t\t\u0414\u043B\u0438\u043D\u0430 \u043A\u0430\u043B\u0438\u0442\u043A\u0438\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\tid="kalitkaLength" \n\t\t\t\t\t\t\t\ttype="number" \n\t\t\t\t\t\t\t\tplaceholder="0"\n\t\t\t\t\t\t\t\tng-model="$ctrl.kalitkaLength" \n\t\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label for="vorotaLength">\n\t\t\t\t\t\t\t\u0414\u043B\u0438\u043D\u0430 \u0432\u043E\u0440\u043E\u0442\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\tid="vorotaLength" \n\t\t\t\t\t\t\t\ttype="number" \n\t\t\t\t\t\t\t\tplaceholder="0"\n\t\t\t\t\t\t\t\tng-model="$ctrl.vorotaLength" \n\t\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr />\n\t\t\t\t<div>\n\t\t\t\t\t\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430\n\t\t\t\t\t<div ng-repeat="install in $ctrl.installation">\n\t\t\t\t\t\t<label for="install-{{ install.id }}">\n\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\tid="install-{{ install.id }}"\n\t\t\t\t\t\t\t\ttype="radio"\n\t\t\t\t\t\t\t\tng-model="$ctrl.installType"\n\t\t\t\t\t\t\t\tng-value="install"\n\t\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ install.label }}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr />\n\t\t\t\t<div>\n\t\t\t\t\t\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u043B\u0435\u0442\u044B\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<select \n\t\t\t\t\t\t\tng-model="$ctrl.zapolnenieType"\n\t\t\t\t\t\t\tng-options="type.label for type in $ctrl.zapolnenie"\n\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t></select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr />\n\t\t\t\t<div>\n\t\t\t\t\t\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430\n\t\t\t\t\t<div ng-repeat="item in $ctrl.delivery">\n\t\t\t\t\t\t<label for="delivery-{{ item.id }}">\n\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\tid="delivery-{{ item.id }}"\n\t\t\t\t\t\t\t\ttype="radio"\n\t\t\t\t\t\t\t\tng-model="$ctrl.deliveryType"\n\t\t\t\t\t\t\t\tng-value="item"\n\t\t\t\t\t\t\t\tng-change="$ctrl.calc()"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ item.label }}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<result result="$ctrl.result"></result>\n\t',
	controller: AppRootComponent
};

},{"../classes/Install":1,"../classes/Prolet":2,"../classes/Vorota":3,"../classes/Zapolnenie":4,"../utils/config":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Result = function () {
	function Result($sce) {
		_classCallCheck(this, Result);

		this.$sce = $sce;

		this.error = this.trustAsHtml('Введите длину забора.');
	}

	_createClass(Result, [{
		key: 'getResultMessage',
		value: function getResultMessage() {
			var vorota = this.result.vorota;
			var prolet = this.result.prolet;
			var install = this.result.install;
			var zapolnenie = this.result.zapolnenie;

			var price = vorota.getPrice() + prolet.getPrice() + install.getPrice() + zapolnenie.getPrice();

			return '\n\t\t\t' + prolet.getMsg() + '\n\t\t\t' + vorota.getMsg() + '\n\t\t\t' + install.getMsg() + '\n\t\t\t' + zapolnenie.getMsg() + '\n\t\t\t' + prolet.result(price) + '\n\t\t';
		}
	}, {
		key: 'showMessage',
		value: function showMessage() {
			if (!this.result) return this.error;

			return this.trustAsHtml(this.getResultMessage());
		}
	}, {
		key: 'trustAsHtml',
		value: function trustAsHtml(text) {
			return this.$sce.trustAsHtml(text);
		}
	}]);

	return Result;
}();

exports.default = {
	bindings: {
		result: '<'
	},
	template: '\n\t\t<div class="card" ng-bind-html="$ctrl.showMessage()"></div>\n\t',
	controller: Result
};

},{}],9:[function(require,module,exports){
'use strict';

// import ArrayService from './services/array';
// import GlobalsService from './services/globals';
// import DBService from './services/db';
// import DBFavoriteService from './services/db-favorite';

var _appRootComponent = require('./components/app-root-component');

var _appRootComponent2 = _interopRequireDefault(_appRootComponent);

var _result = require('./components/result');

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ConfigUIRouter from './ui-router/config';


angular.module('myApp', ['ui.router'])
// .service( 'arrayService', ArrayService )
// .service( 'globalsService', GlobalsService )
// .service( 'dbService', DBService )
// .service( 'dbFavoriteService', DBFavoriteService )

.component('appRootComponent', _appRootComponent2.default).component('result', _result2.default).config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		template: 'home'
	});
	$stateProvider.state('users', {
		url: '/users',
		template: 'users'
	});
});

},{"./components/app-root-component":7,"./components/result":8}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var GLOBALS = {
	zokolPlita: {
		size: 275,
		price: 45
	},
	stolbs: {
		17: {
			// type : price
			normal: 65,
			reinforced: 75
		},
		20: {
			normal: 70,
			reinforced: 80
		}
	},
	vorotaPositions: [{
		label: 'Без ворот',
		id: 'without'
	}, {
		label: 'Вместе',
		id: 'together'
	}, {
		label: 'Раздельно',
		id: 'different'
	}],
	installation: [{
		id: 'without', // used for element id
		label: 'Без установки',
		price: 0
	}, {
		id: 'with',
		label: 'С установкой',
		price: 22 // за м.п
	}],
	delivery: [{
		id: 'yourself',
		label: 'Без доставки'
	}, {
		id: 'we',
		label: 'С доставкой'
	}],
	zapolnenie: [{
		label: 'Ничего',
		price: 0
	}, {
		label: 'одностор верт штакетник',
		price: 105
	}, {
		label: 'двухстор верт штакетник',
		price: 165
	}, {
		label: 'одностор ранче',
		price: 125
	}, {
		label: 'двухстор ранчё',
		price: 185
	}, {
		label: 'оностр штакет полу круг',
		price: 135
	}, {
		label: 'двухстор штак полукруг',
		price: 195
	}, {
		label: 'плетёнка',
		price: 150
	}]
};

exports.default = GLOBALS;

},{}]},{},[9]);
