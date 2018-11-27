'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./../controllers/auth.controllers');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRoute = function UserRoute(app) {

    var controller = (0, _auth2.default)(app);

    var router = _express2.default.Router();

    router.get('/', controller.query);
    router.post('/register', controller.create);
    router.post('/authenticate', controller.login);
    router.get('/forgot_password', controller.forgot_password);
    router.put('/reset_password', controller.reset_password);

    return router;
};

exports.default = UserRoute;
//# sourceMappingURL=user.route.js.map