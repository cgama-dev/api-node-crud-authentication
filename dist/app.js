'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _user = require('./app/routes/user.route');

var _user2 = _interopRequireDefault(_user);

var _project = require('./app/routes/project.route');

var _project2 = _interopRequireDefault(_project);

var _auth = require('./app/middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'babel-polyfill';

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.use(_bodyParser2.default.urlencoded({
    extended: true
}));

app.use((0, _cors2.default)());

app.use('/auth', (0, _user2.default)(app));
app.use('/projects', _auth2.default, (0, _project2.default)(app));

app.listen(5001, function () {
    return console.log('Servidor rodando ');
});

exports.default = app;
//# sourceMappingURL=app.js.map