(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_test2.default, null), document.getElementById('app_content'));

},{"./test":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
	_inherits(Test, _React$Component);

	function Test() {
		_classCallCheck(this, Test);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Test).call(this));

		_this.state = { text: 'first text', loggedIn: 'false', mail: '', pass: '' };
		console.log("start");
		return _this;
	}

	_createClass(Test, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log("willMount");
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					this.state.text
				),
				'Text',
				_react2.default.createElement(
					'form',
					{ className: 'signInForm', onSubmit: this.handleSubmit },
					_react2.default.createElement('input', {
						type: 'text',
						placeholder: 'Your mail',
						value: this.state.mail
					}),
					_react2.default.createElement('input', {
						type: 'text',
						placeholder: 'Your pass',
						refs: 'inputPass'
					}),
					_react2.default.createElement('input', { type: 'submit', value: 'Potvrdit' })
				)
			);
		}
	}]);

	return Test;
}(_react2.default.Component);

exports.default = Test;

},{"react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxtQkFBUyxNQUFULENBQWdCLG1EQUFoQixFQUEwQixTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBMUI7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFFcEIsaUJBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLLEtBQUwsR0FBYSxFQUFDLE1BQU0sWUFBUCxFQUFxQixVQUFVLE9BQS9CLEVBQXdDLE1BQU0sRUFBOUMsRUFBa0QsTUFBTSxFQUF4RCxFQUFiO0FBQ0EsVUFBUSxHQUFSLENBQVksT0FBWjtBQUhhO0FBSWI7Ozs7c0NBRW1CO0FBQ25CLFdBQVEsR0FBUixDQUFZLFdBQVo7QUFDQTs7OzJCQUdRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBSyxVQUFLLEtBQUwsQ0FBVztBQUFoQixLQUREO0FBQUE7QUFJQztBQUFBO0FBQUEsT0FBTSxXQUFVLFlBQWhCLEVBQTZCLFVBQVUsS0FBSyxZQUE1QztBQUNLO0FBQ0UsWUFBSyxNQURQO0FBRUUsbUJBQVksV0FGZDtBQUdFLGFBQU8sS0FBSyxLQUFMLENBQVc7QUFIcEIsT0FETDtBQU9LO0FBQ0UsWUFBSyxNQURQO0FBRUUsbUJBQVksV0FGZDtBQUdFLFlBQUs7QUFIUCxPQVBMO0FBYUssOENBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sVUFBM0I7QUFiTDtBQUpELElBREQ7QUFzQkE7Ozs7RUFwQ2dDLGdCQUFNLFM7O2tCQUFuQixJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUZXN0IGZyb20gJy4vdGVzdCc7XG5cblJlYWN0RE9NLnJlbmRlcig8VGVzdCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcF9jb250ZW50JykgKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7dGV4dDogJ2ZpcnN0IHRleHQnLCBsb2dnZWRJbjogJ2ZhbHNlJywgbWFpbDogJycsIHBhc3M6ICcnfTtcclxuXHRcdGNvbnNvbGUubG9nKFwic3RhcnRcIik7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwid2lsbE1vdW50XCIpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcdFx0XHRcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aDE+e3RoaXMuc3RhdGUudGV4dH08L2gxPlxyXG5cdFx0XHRcdFRleHRcclxuXHJcblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwic2lnbkluRm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcblx0ICAgICAgICA8aW5wdXRcclxuXHQgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG5cdCAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbWFpbFwiXHJcblx0ICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1haWx9XHJcblx0ICAgICAgICAvPlxyXG5cclxuXHQgICAgICAgIDxpbnB1dFxyXG5cdCAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcblx0ICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzXCJcclxuXHQgICAgICAgICAgcmVmcz1cImlucHV0UGFzc1wiXHJcblx0ICAgICAgICAvPlxyXG5cclxuXHQgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQb3R2cmRpdFwiIC8+XHJcblx0XHQgICAgPC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG59Il19
