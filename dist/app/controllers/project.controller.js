'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _project = require('./../models/project.models');

var _project2 = _interopRequireDefault(_project);

var _task = require('../models/task.models');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectController = function ProjectController() {

    var Controller = {
        query: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var projects;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _project2.default.find().populate(['user', 'task']);

                            case 3:
                                projects = _context.sent;
                                return _context.abrupt('return', res.send({ projects: projects }));

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt('return', res.status(400).send({ error: 'Erro ao listar projetos' }));

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 7]]);
            }));

            function query(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return query;
        }(),
        get: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
                var projectId, project;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                projectId = req.params.projectId;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return _project2.default.findById(projectId).populate('user');

                            case 4:
                                project = _context2.sent;

                                if (project) {
                                    _context2.next = 7;
                                    break;
                                }

                                return _context2.abrupt('return', res.status(400).send({ error: 'Esse projeto não existe na base de dados' }));

                            case 7:
                                return _context2.abrupt('return', res.send({ project: project }));

                            case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2['catch'](1);
                                return _context2.abrupt('return', res.status(400).send({ error: 'Erro ao buscar projeto' }));

                            case 13:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined, [[1, 10]]);
            }));

            function get(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return get;
        }(),
        create: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
                var _req$body, title, description, tasks, project;

                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _req$body = req.body, title = _req$body.title, description = _req$body.description, tasks = _req$body.tasks;
                                _context4.next = 4;
                                return _project2.default.create({ title: title, description: description, user: req.userId });

                            case 4:
                                project = _context4.sent;
                                _context4.next = 7;
                                return Promise.all(tasks.map(function () {
                                    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(task) {
                                        var projectTask, newTask;
                                        return _regenerator2.default.wrap(function _callee3$(_context3) {
                                            while (1) {
                                                switch (_context3.prev = _context3.next) {
                                                    case 0:
                                                        projectTask = new _task2.default((0, _extends3.default)({}, task, { project: project._id }));
                                                        _context3.next = 3;
                                                        return projectTask.save();

                                                    case 3:
                                                        newTask = _context3.sent;


                                                        project.tasks = [].concat((0, _toConsumableArray3.default)(project.tasks), [newTask]);

                                                    case 5:
                                                    case 'end':
                                                        return _context3.stop();
                                                }
                                            }
                                        }, _callee3, undefined);
                                    }));

                                    return function (_x7) {
                                        return _ref4.apply(this, arguments);
                                    };
                                }()));

                            case 7:
                                _context4.next = 9;
                                return project.save();

                            case 9:
                                return _context4.abrupt('return', res.send({ project: project }));

                            case 12:
                                _context4.prev = 12;
                                _context4.t0 = _context4['catch'](0);
                                return _context4.abrupt('return', res.status(400).send({ error: ' Erro ao criar projeto' }));

                            case 15:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined, [[0, 12]]);
            }));

            function create(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return create;
        }(),
        update: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
                var projectId, _req$body2, title, description, tasks, project;

                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                projectId = req.params.projectId;
                                _context6.prev = 1;
                                _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, tasks = _req$body2.tasks;
                                _context6.next = 5;
                                return _project2.default.findByIdAndUpdate({ _id: projectId }, {
                                    title: title,
                                    description: description
                                }, { new: true });

                            case 5:
                                project = _context6.sent;


                                project.tasks = [];

                                _context6.next = 9;
                                return _task2.default.remove({ project: projectId });

                            case 9:
                                _context6.next = 11;
                                return Promise.all(tasks.map(function () {
                                    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(task) {
                                        var projectTask, newTask;
                                        return _regenerator2.default.wrap(function _callee5$(_context5) {
                                            while (1) {
                                                switch (_context5.prev = _context5.next) {
                                                    case 0:
                                                        projectTask = new _task2.default((0, _extends3.default)({}, task, { project: project._id }));
                                                        _context5.next = 3;
                                                        return projectTask.save();

                                                    case 3:
                                                        newTask = _context5.sent;


                                                        project.tasks = [].concat((0, _toConsumableArray3.default)(project.tasks), [newTask]);

                                                    case 5:
                                                    case 'end':
                                                        return _context5.stop();
                                                }
                                            }
                                        }, _callee5, undefined);
                                    }));

                                    return function (_x10) {
                                        return _ref6.apply(this, arguments);
                                    };
                                }()));

                            case 11:
                                _context6.next = 13;
                                return project.save();

                            case 13:
                                return _context6.abrupt('return', res.send({ project: project }));

                            case 16:
                                _context6.prev = 16;
                                _context6.t0 = _context6['catch'](1);
                                return _context6.abrupt('return', res.status(400).send({ error: ' Erro ao atualizar projeto' }));

                            case 19:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, undefined, [[1, 16]]);
            }));

            function update(_x8, _x9) {
                return _ref5.apply(this, arguments);
            }

            return update;
        }(),
        delete: function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
                var projectId;
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                projectId = req.params.projectId;
                                _context7.prev = 1;
                                _context7.next = 4;
                                return _project2.default.findByIdAndRemove(projectId);

                            case 4:
                                return _context7.abrupt('return', res.send());

                            case 7:
                                _context7.prev = 7;
                                _context7.t0 = _context7['catch'](1);
                                return _context7.abrupt('return', res.status(400).send({ error: 'Erro ao deletar projeto' }));

                            case 10:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, undefined, [[1, 7]]);
            }));

            function _delete(_x11, _x12) {
                return _ref7.apply(this, arguments);
            }

            return _delete;
        }()
    };

    return Controller;
};

exports.default = ProjectController;
//# sourceMappingURL=project.controller.js.map