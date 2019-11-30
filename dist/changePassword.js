'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['mutation changePassword($oldPassword: HashedPassword!, $newPassword: HashedPassword!) {\n      changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {\n        success\n      }\n    }'], ['mutation changePassword($oldPassword: HashedPassword!, $newPassword: HashedPassword!) {\n      changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {\n        success\n      }\n    }']);

var _hashPassword = require('./hashPassword');

var _hashPassword2 = _interopRequireDefault(_hashPassword);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, apollo) {
    var oldPassword = _ref2.oldPassword,
        newPassword = _ref2.newPassword;
    var result, success;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!oldPassword || !newPassword)) {
              _context.next = 2;
              break;
            }

            throw new Error('Old and new password are required');

          case 2:
            _context.next = 4;
            return apollo.mutate({
              mutation: (0, _graphqlTag2.default)(_templateObject),
              variables: {
                oldPassword: (0, _hashPassword2.default)(oldPassword),
                newPassword: (0, _hashPassword2.default)(newPassword)
              }
            });

          case 4:
            result = _context.sent;
            success = result.data.changePassword.success;
            return _context.abrupt('return', success);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();