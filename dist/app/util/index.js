'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _auth = require('../../config/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util = function Util() {

    var utilObject = {
        generateToken: function generateToken(param) {
            return _jsonwebtoken2.default.sign({ id: param.id }, _auth2.default.secret, {
                expiresIn: 86400
            });
        }
    };

    return utilObject;
};

exports.default = Util;
//# sourceMappingURL=index.js.map