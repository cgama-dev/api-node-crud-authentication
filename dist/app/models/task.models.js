'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskSchema = _mongoose2.default.Schema({
    title: {
        type: String,
        require: true
    },
    project: {
        type: _mongoose2.default.Schema.Types.ObjectId,
        ref: 'Project',
        require: true
    },
    assignedTo: {
        type: _mongoose2.default.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    completed: {
        type: Boolean,
        require: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Task = _mongoose2.default.model('Task', TaskSchema);

exports.default = Task;
//# sourceMappingURL=task.models.js.map