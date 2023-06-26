"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IConnectionType_1 = require("../IConnectionType");
var HiveDriver = /** @class */ (function () {
    function HiveDriver(config) {
        var _this = this;
        this.driverName = 'org.apache.hive.jdbc.HiveDriver';
        this.driverVersion = '2.6.3.0-235';
        this.driver = "hive-jdbc-uber-".concat(this.driverVersion, ".jar");
        this.get_config = function () {
            return {
                url: _this.get_jdbcUrl(),
                drivername: _this.driverName,
                user: _this.config.username,
                password: _this.config.password
            };
        };
        this.get_version = function () { return _this.driverVersion; };
        this.get_query = function (tableName, type) {
            if (type === void 0) { type = 'D'; }
            if (IConnectionType_1.QueryType.columns == type) {
                return "DESCRIBE ".concat(tableName);
            }
            else {
                return "SHOW tblproperties ".concat(tableName);
            }
        };
        this.get_jdbcUrl = function () {
            var _a = _this.config, host = _a.host, port = _a.port, database = _a.database;
            return "jdbc:hive2://".concat(host, ":").concat(port, "/").concat(database);
        };
        this.config = config;
    }
    return HiveDriver;
}());
exports.default = HiveDriver;
