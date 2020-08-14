"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetStore = exports.onTokenChange = exports.getUserId = exports.getLoginToken = exports.storeLoginToken = exports.setTokenStore = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChangeCallbacks = [];

var LOGIN_TOKEN_KEY = "Meteor.loginToken";
var LOGIN_TOKEN_EXPIRES_KEY = "Meteor.loginTokenExpires";
var USER_ID_KEY = "Meteor.userId";

var LOCAL_STORAGE_KEYS = [LOGIN_TOKEN_KEY, LOGIN_TOKEN_EXPIRES_KEY, USER_ID_KEY];

var tokenStore = {
  set: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
      var userId = _ref2.userId,
          token = _ref2.token,
          tokenExpires = _ref2.tokenExpires;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              global.localStorage["Meteor.userId"] = userId;
              global.localStorage["Meteor.loginToken"] = token;
              global.localStorage["Meteor.loginTokenExpires"] = tokenExpires.toString();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function set(_x) {
      return _ref.apply(this, arguments);
    }

    return set;
  }(),
  get: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", {
                userId: global.localStorage["Meteor.userId"],
                token: global.localStorage["Meteor.loginToken"],
                tokenExpires: global.localStorage["Meteor.loginTokenExpires"]
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function get() {
      return _ref3.apply(this, arguments);
    }

    return get;
  }()
};

var setTokenStore = exports.setTokenStore = function setTokenStore(newStore) {
  tokenStore = newStore;
};

var storeLoginToken = exports.storeLoginToken = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(userId, token, tokenExpires) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return tokenStore.set({ userId: userId, token: token, tokenExpires: tokenExpires });

          case 2:
            _context3.next = 4;
            return tokenDidChange();

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function storeLoginToken(_x2, _x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var getLoginToken = exports.getLoginToken = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var _ref6, token;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return tokenStore.get();

          case 2:
            _ref6 = _context4.sent;
            token = _ref6.token;
            return _context4.abrupt("return", token);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getLoginToken() {
    return _ref5.apply(this, arguments);
  };
}();

var getUserId = exports.getUserId = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
    var _ref8, userId;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return tokenStore.get();

          case 2:
            _ref8 = _context5.sent;
            userId = _ref8.userId;
            return _context5.abrupt("return", userId);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getUserId() {
    return _ref7.apply(this, arguments);
  };
}();

var tokenDidChange = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var newData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, callback;

    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return tokenStore.get();

          case 2:
            newData = _context6.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context6.prev = 6;

            for (_iterator = onChangeCallbacks[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              callback = _step.value;

              callback(newData);
            }
            _context6.next = 14;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context6.t0;

          case 14:
            _context6.prev = 14;
            _context6.prev = 15;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 17:
            _context6.prev = 17;

            if (!_didIteratorError) {
              _context6.next = 20;
              break;
            }

            throw _iteratorError;

          case 20:
            return _context6.finish(17);

          case 21:
            return _context6.finish(14);

          case 22:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[6, 10, 14, 22], [15,, 17, 21]]);
  }));

  return function tokenDidChange() {
    return _ref9.apply(this, arguments);
  };
}();

var onTokenChange = exports.onTokenChange = function onTokenChange(callback) {
  onChangeCallbacks.push(callback);
};

var resetStore = exports.resetStore = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            clearMeteorOldTokens();
            _context7.next = 3;
            return storeLoginToken("", "", "");

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function resetStore() {
    return _ref10.apply(this, arguments);
  };
}();

var clearMeteorOldTokens = function clearMeteorOldTokens() {
  if (!global.localStorage) {
    return;
  }
  LOCAL_STORAGE_KEYS.forEach(function (key) {
    return global.localStorage.removeItem(key);
  });
};