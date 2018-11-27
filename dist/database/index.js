'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://cgamadev:cgama123@ds115154.mlab.com:15154/dbusers', {
    useNewUrlParser: true
});

_mongoose2.default.Promise = global.Promise;

var db = _mongoose2.default.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no Banco de Dados:'));

db.once('open', function () {
    console.log('Conectado no MongoDB: ' + new Date());
});

exports.default = _mongoose2.default;
//# sourceMappingURL=index.js.map