'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerExpressHandlebars = require('nodemailer-express-handlebars');

var _nodemailerExpressHandlebars2 = _interopRequireDefault(_nodemailerExpressHandlebars);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mailer = require('../../config/mailer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transport = _nodemailer2.default.createTransport({ host: _mailer.host, port: _mailer.port, auth: _mailer.auth });

transport.use('compile', (0, _nodemailerExpressHandlebars2.default)({
    viewEngine: 'handlebars',
    viewPath: _path2.default.resolve('./src/resources/mail/'),
    extName: '.html'
}));
exports.default = transport;
//# sourceMappingURL=mail.js.map