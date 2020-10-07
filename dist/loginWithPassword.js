"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n      mutation login(\n        $username: String\n        $email: String\n        $password: HashedPassword!\n        $twoFactorToken: String\n      ) {\n        loginWithPassword(\n          username: $username\n          email: $email\n          password: $password\n          twoFactorToken: $twoFactorToken\n        ) {\n          id\n          token\n          tokenExpires\n        }\n      }\n    "], ["\n      mutation login(\n        $username: String\n        $email: String\n        $password: HashedPassword!\n        $twoFactorToken: String\n      ) {\n        loginWithPassword(\n          username: $username\n          email: $email\n          password: $password\n          twoFactorToken: $twoFactorToken\n        ) {\n          id\n          token\n          tokenExpires\n        }\n      }\n    "]);

var _hashPassword = require("./hashPassword");

var _hashPassword2 = _interopRequireDefault(_hashPassword);

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _store = require("./store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, apollo) {
    var username = _ref2.username,
        email = _ref2.email,
        password = _ref2.password,
        twoFactorToken = _ref2.twoFactorToken;

    var result, _result$data$loginWit, id, token, tokenExpires;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return apollo.mutate({
              mutation: (0, _graphqlTag2.default)(_templateObject),
              variables: {
                username: username,
                email: email,
                password: (0, _hashPassword2.default)(password),
                twoFactorToken: twoFactorToken
              }
            });

          case 2:
            result = _context.sent;
            _result$data$loginWit = result.data.loginWithPassword, id = _result$data$loginWit.id, token = _result$data$loginWit.token, tokenExpires = _result$data$loginWit.tokenExpires;
            _context.next = 6;
            return (0, _store.storeLoginToken)(id, token, new Date(tokenExpires));

          case 6:
            return _context.abrupt("return", id);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();