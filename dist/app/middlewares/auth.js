'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _auth = require('../../config/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthMiddleware = function AuthMiddleware(req, res, next) {

  var authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "Usuário não possui token para acessar " });
  }

  var parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Token error" });
  }

  var _parts = (0, _slicedToArray3.default)(parts, 2),
      scheme = _parts[0],
      token = _parts[1];

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token invalid formater' });
  }

  _jsonwebtoken2.default.verify(token, _auth2.default.secret, function (err, decoded) {
    if (err) {
      return res.status(401).send({ error: 'Token invalid' });
    }

    req.userId = decoded.id;
  });

  return next();
};

exports.default = AuthMiddleware;
//# sourceMappingURL=auth.js.map