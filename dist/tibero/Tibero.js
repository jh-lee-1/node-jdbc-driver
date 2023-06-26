"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IConnectionType_1 = require("../IConnectionType");
var Tibero = /** @class */ (function () {
    function Tibero(config) {
        var _this = this;
        this.driverName = 'com.tmax.tibero.jdbc.TbDriver';
        this.driverVersion = '7';
        this.driver = "tibero".concat(this.driverVersion, "-jdbc.jar");
        this.get_config = function () {
            return {
                url: _this.get_jdbcUrl(),
                drivername: _this.driverName,
                user: _this.config.username,
                password: _this.config.password
            };
        };
        this.get_query = function (tableName, type) {
            if (type === void 0) { type = 'D'; }
            if (IConnectionType_1.QueryType.columns == type) {
                return "SELECT column_name as col_name, data_type FROM information_schema.columns WHERE table_name = '".concat(tableName, "'");
            }
            else {
                // QueryType.describe
                return "SELECT count(*) as total_rows, pg_size_pretty( pg_total_relation_size('".concat(tableName, "') ) as total_size;");
            }
        };
        this.get_version = function () { return _this.driverVersion; };
        this.get_jdbcUrl = function () {
            var _a = _this.config, host = _a.host, port = _a.port, database = _a.database;
            return "jdbc:tibero:thin:@".concat(host, ":").concat(port, ":").concat(database);
        };
        this.config = config;
    }
    return Tibero;
}());
exports.default = Tibero;
