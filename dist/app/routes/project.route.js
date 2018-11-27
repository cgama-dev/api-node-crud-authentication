'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _project = require('./../controllers/project.controller');

var _project2 = _interopRequireDefault(_project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectRoute = function ProjectRoute(app) {
    var controller = (0, _project2.default)();

    var router = _express2.default.Router();

    router.get('/', controller.query);
    router.get('/:projectId', controller.get);
    router.post('/', controller.create);
    router.put('/:projectId', controller.update);
    router.delete('/:projectId', controller.delete);

    return router;
};

exports.default = ProjectRoute;
//# sourceMappingURL=project.route.js.map