'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = require('../models/user.models');

var _user2 = _interopRequireDefault(_user);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _util = require('./../util');

var _util2 = _interopRequireDefault(_util);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _mail = require('./../modules/mail');

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthController = function AuthController(app) {

    var util = (0, _util2.default)();

    var Auth = {
        query: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var users;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _user2.default.find();

                            case 3:
                                users = _context.sent;

                                if (users) {
                                    _context.next = 6;
                                    break;
                                }

                                return _context.abrupt('return', res.status(400).send({ error: 'Nenhum usuário encontrado' }));

                            case 6:

                                res.send(users);

                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt('return', res.status(400).send({ error: 'Erro ao buscar usuários' }));

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 9]]);
            }));

            function query(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return query;
        }(),
        create: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
                var email, user, token;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                email = req.body.email;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return _user2.default.findOne({ email: email });

                            case 4:
                                if (!_context2.sent) {
                                    _context2.next = 6;
                                    break;
                                }

                                return _context2.abrupt('return', res.status(400).send({
                                    error: 'Email do usuário já existe'
                                }));

                            case 6:
                                _context2.next = 8;
                                return _user2.default.create(req.body);

                            case 8:
                                user = _context2.sent;


                                user.password = undefined;

                                token = util.generateToken(user);
                                return _context2.abrupt('return', res.send({ user: user, token: token }));

                            case 14:
                                _context2.prev = 14;
                                _context2.t0 = _context2['catch'](1);
                                return _context2.abrupt('return', res.status(400).send({
                                    error: 'Erro ao registrar usuário'
                                }));

                            case 17:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined, [[1, 14]]);
            }));

            function create(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return create;
        }(),
        login: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
                var _req$body, email, password, user, token;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                                _context3.next = 3;
                                return _user2.default.findOne({ email: email }).select('+password');

                            case 3:
                                user = _context3.sent;

                                if (user) {
                                    _context3.next = 6;
                                    break;
                                }

                                return _context3.abrupt('return', res.status(400).send({ error: 'Usuário não encontrado' }));

                            case 6:
                                _context3.next = 8;
                                return _bcryptjs2.default.compare(password, user.password);

                            case 8:
                                if (_context3.sent) {
                                    _context3.next = 10;
                                    break;
                                }

                                return _context3.abrupt('return', res.status(400).send({ errro: "Sua senha de usuário está incorreta" }));

                            case 10:

                                user.password = undefined;

                                token = util.generateToken(user);


                                res.send({ user: user, token: token });

                            case 13:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, undefined);
            }));

            function login(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return login;
        }(),
        forgot_password: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
                var email, user, token, now;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                email = req.body.email;
                                _context4.next = 4;
                                return _user2.default.findOne({ email: email });

                            case 4:
                                user = _context4.sent;

                                if (user) {
                                    _context4.next = 7;
                                    break;
                                }

                                return _context4.abrupt('return', res.status(400).send({ error: 'Usuário não encontrado' }));

                            case 7:
                                token = _crypto2.default.randomBytes(20).toString('hex');
                                now = new Date();

                                now.setHours(now.getHours() + 1);

                                _context4.next = 12;
                                return _user2.default.findOneAndUpdate({ _id: user.id }, {
                                    '$set': {
                                        passwordResetToken: token,
                                        passwordResetExpires: now
                                    }
                                });

                            case 12:

                                _mail2.default.sendMail({
                                    to: email,
                                    from: 'cleytongama@gmail.com',
                                    template: '/auth/forgot_password',
                                    context: { token: token }
                                }, function (err) {
                                    if (err) return res.status(400).send({ error: 'Erro ao enviar email' });

                                    return res.send();
                                });

                                _context4.next = 18;
                                break;

                            case 15:
                                _context4.prev = 15;
                                _context4.t0 = _context4['catch'](0);

                                res.status(400).send({ error: 'Error na recuperação de senha, tente novamente' });

                            case 18:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined, [[0, 15]]);
            }));

            function forgot_password(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return forgot_password;
        }(),
        reset_password: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
                var _req$body2, email, password, token, user, now;

                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password, token = _req$body2.token;
                                _context5.prev = 1;
                                _context5.next = 4;
                                return _user2.default.findOne({ email: email }).select('+passwordResetToken passwordResetExpires');

                            case 4:
                                user = _context5.sent;

                                if (user) {
                                    _context5.next = 7;
                                    break;
                                }

                                return _context5.abrupt('return', res.status(400).send({ error: 'Usuário não encontrado' }));

                            case 7:
                                if (!(token !== user.passwordResetToken)) {
                                    _context5.next = 9;
                                    break;
                                }

                                return _context5.abrupt('return', res.status(400).send({ error: 'Token invalido' }));

                            case 9:
                                now = new Date();

                                if (!(now > user.passwordResetExpires)) {
                                    _context5.next = 12;
                                    break;
                                }

                                return _context5.abrupt('return', res.status(400).send({ error: 'Token expirado' }));

                            case 12:

                                user.password = password;

                                _context5.next = 15;
                                return user.save();

                            case 15:
                                return _context5.abrupt('return', res.send());

                            case 18:
                                _context5.prev = 18;
                                _context5.t0 = _context5['catch'](1);

                                res.status(400).send({ error: 'Não foi possivel resetar o password, tente novamente' });

                            case 21:
                                res.send(req.body);

                            case 22:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, undefined, [[1, 18]]);
            }));

            function reset_password(_x9, _x10) {
                return _ref5.apply(this, arguments);
            }

            return reset_password;
        }()
    };

    return Auth;
};

exports.default = AuthController;
//# sourceMappingURL=auth.controllers.js.map