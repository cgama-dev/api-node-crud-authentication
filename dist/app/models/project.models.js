'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = require('./../../database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectSchema = new _database2.default.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    user: {
        type: _database2.default.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    tasks: [{
        type: _database2.default.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Project = _database2.default.model('Project', ProjectSchema);

exports.default = Project;
//# sourceMappingURL=project.models.js.map