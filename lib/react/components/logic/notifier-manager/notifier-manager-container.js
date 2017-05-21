'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _notifierManagerComponent = require('./notifier-manager-component');

var _notifierManagerComponent2 = _interopRequireDefault(_notifierManagerComponent);

var _notifierManagerActions = require('./notifier-manager-actions');

var actions = _interopRequireWildcard(_notifierManagerActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  var notifierManager = state.toJS().reducers.notifierManager;

  return {
    notifiers: notifierManager.notifiers
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, actions);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, mergeProps)(_notifierManagerComponent2.default);