'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _halogenium = require('halogenium');

var _Paint = require('./Paint');

var _Paint2 = _interopRequireDefault(_Paint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STLViewer = function (_Component) {
  _inherits(STLViewer, _Component);

  function STLViewer() {
    _classCallCheck(this, STLViewer);

    return _possibleConstructorReturn(this, (STLViewer.__proto__ || Object.getPrototypeOf(STLViewer)).apply(this, arguments));
  }

  _createClass(STLViewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.paint = new _Paint2.default();
      this.paint.init(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return JSON.stringify(nextProps) !== JSON.stringify(this.props);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.props = nextProps;
      this.paint.init(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.paint.clean();
      delete this.paint;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          modelColor = _props.modelColor;

      return _react2.default.createElement(
        'div',
        {
          className: this.props.className,
          style: {
            width: width,
            height: height,
            overflow: 'hidden'
          }
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
          },
          _react2.default.createElement(_halogenium.ScaleLoader, { color: modelColor, size: '16px' })
        )
      );
    }
  }]);

  return STLViewer;
}(_react.Component);

STLViewer.propTypes = {
  className: _propTypes2.default.string,
  url: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  backgroundColor: _propTypes2.default.string,
  modelColor: _propTypes2.default.string,
  rotate: _propTypes2.default.bool,
  orbitControls: _propTypes2.default.bool,
  cameraX: _propTypes2.default.number,
  cameraY: _propTypes2.default.number,
  cameraZ: _propTypes2.default.number,
  lightX: _propTypes2.default.number,
  lightY: _propTypes2.default.number,
  lightZ: _propTypes2.default.number,
  lightColor: _propTypes2.default.string,
  rotationSpeeds: _propTypes2.default.arrayOf(_propTypes2.default.number)
};
STLViewer.defaultProps = {
  backgroundColor: '#EAEAEA',
  modelColor: '#B92C2C',
  height: 400,
  width: 400,
  rotate: true,
  orbitControls: true,
  cameraX: 0,
  cameraY: 0,
  cameraZ: null,
  lightX: 0,
  lightY: 0,
  lightZ: 1,
  lightColor: '#ffffff',
  rotationSpeeds: [0, 0, 0.02]
};


module.exports = STLViewer;