"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionType = void 0;
// Import interface
var IConnectionType_1 = require("./IConnectionType");
// Import all drivers
var HiveDriver_1 = __importDefault(require("./hive/HiveDriver"));
var PostgreSQL_1 = __importDefault(require("./postgresql/PostgreSQL"));
var Tibero_1 = __importDefault(require("./tibero/Tibero"));
// Import dependecies
var jdbc = require('jdbc');
var jinst = require('jdbc/lib/jinst');
var path = require('path');
// Connection Type
var ConnectionType;
(function (ConnectionType) {
    ConnectionType["hive"] = "H";
    ConnectionType["tibero"] = "T";
    ConnectionType["postgreSql"] = "P";
})(ConnectionType || (exports.ConnectionType = ConnectionType = {}));
var CType = {
    H: HiveDriver_1.default,
    T: Tibero_1.default,
    P: PostgreSQL_1.default,
};
var JdbcDriver = /** @class */ (function () {
    function JdbcDriver(type, connectionConfig) {
        var _this = this;
        this.jarPath = '../drivers/';
        this.get_version = function () { return _this.driverInstance.get_version(); };
        this.get_columns = function (tableName) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.sql(this.driverInstance.get_query(tableName, IConnectionType_1.QueryType.columns))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        this.get_table_properties = function (tableName) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.sql(this.driverInstance.get_query(tableName, IConnectionType_1.QueryType.describe))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        this.findAll = function (tableName) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.sql("SELECT * FROM ".concat(tableName))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        this.count = function (tableName) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.sql("SELECT COUNT(*)  from ".concat(tableName))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        this.find = function (tableName, where) {
            if (where === void 0) { where = 1; }
            return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sql("SELECT * FROM ".concat(tableName, " WHERE ").concat(where))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); });
        };
        this.connection_count = function () { return JdbcDriver.connection.size; };
        this.connection_details = function () { return JdbcDriver.connection.entries(); };
        this.sql = function (sql) { return __awaiter(_this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                try {
                    res = this.executeQuery(sql);
                    return [2 /*return*/, res];
                }
                catch (err) {
                    console.log('Error in sql:::', err);
                }
                return [2 /*return*/];
            });
        }); };
        this.ddl = function (sql) { return __awaiter(_this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                try {
                    res = this.executeUpdate(sql);
                    return [2 /*return*/, res];
                }
                catch (err) {
                    console.log('Error in ddl:::', err);
                }
                return [2 /*return*/];
            });
        }); };
        this.close = function (connObj) { return __awaiter(_this, void 0, void 0, function () {
            var coon;
            return __generator(this, function (_a) {
                try {
                    coon = JdbcDriver.connection.get(this.type);
                    if (coon) {
                        if (coon._reserved && coon._reserved.length) {
                            coon.release(connObj, function (err) {
                                if (err)
                                    console.log('Connection relase issues::::');
                                else
                                    console.log('Connection relase');
                            });
                        }
                        else {
                            console.log('connection not found!');
                        }
                    }
                }
                catch (err) {
                    console.log('Connection close error:::::', err);
                }
                return [2 /*return*/];
            });
        }); };
        this.executeQuery = function (sql) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var stat;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.createStatement()];
                                case 1:
                                    stat = _a.sent();
                                    stat.statement.executeQuery(sql, function (err, resultset) { return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!err) return [3 /*break*/, 1];
                                                    reject(err);
                                                    return [3 /*break*/, 3];
                                                case 1: return [4 /*yield*/, resultset.toObjArray(function (err, rows) {
                                                        if (err)
                                                            reject(err);
                                                        else
                                                            resolve(rows);
                                                        stat.statement.close(function (err) {
                                                            if (err)
                                                                console.log('Statement closing issues::::');
                                                            else {
                                                                console.log('Statement closed');
                                                                _this.close(stat.connObj);
                                                            }
                                                        });
                                                    })];
                                                case 2:
                                                    _a.sent();
                                                    _a.label = 3;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        }); };
        this.executeUpdate = function (sql) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var stat;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.createStatement()];
                                case 1:
                                    stat = _a.sent();
                                    stat.statement.executeUpdate(sql, function (err, count) { return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            if (err)
                                                reject(err);
                                            else
                                                resolve(count);
                                            stat.statement.close(function (err) {
                                                if (err)
                                                    console.log('Statement closing issues::::');
                                                else {
                                                    console.log('Statement closed');
                                                    _this.close(stat.connObj);
                                                }
                                            });
                                            return [2 /*return*/];
                                        });
                                    }); });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        }); };
        this.createStatement = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var connObj, conn;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.open()];
                                case 1:
                                    connObj = _a.sent();
                                    if (connObj) {
                                        console.log("Using connection: " + connObj.uuid);
                                        conn = connObj.conn;
                                        conn.createStatement(function (err, statement) {
                                            if (err)
                                                reject(err);
                                            else
                                                resolve([statement, connObj]);
                                        });
                                    }
                                    else {
                                        reject('Connection object not found');
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        }); };
        this.open = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var connection;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    connection = JdbcDriver.connection.get(this.type);
                                    if (!this.is_init(connection)) return [3 /*break*/, 1];
                                    resolve(connection._reserved[0]);
                                    return [3 /*break*/, 3];
                                case 1: return [4 /*yield*/, this.init(connection)];
                                case 2:
                                    _a.sent();
                                    connection.reserve(function (err, connObj) {
                                        if (err) {
                                            reject(err);
                                        }
                                        else {
                                            resolve(connObj);
                                        }
                                    });
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        }); };
        this.is_init = function (conn) {
            return conn._reserved.length;
        };
        this.init = function (connection) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            connection.initialize(function (err) {
                                if (err)
                                    reject(err);
                                else {
                                    JdbcDriver.connection.set(_this.type, connection);
                                    resolve('');
                                }
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        }); };
        this.type = type;
        this.driverInstance = new CType[type](connectionConfig);
        if (!jinst.isJvmCreated()) {
            jinst.addOption('-Xrs');
            jinst.setupClasspath([path.join(__dirname, this.jarPath + this.driverInstance.driver)]);
        }
        var connection = new jdbc(this.driverInstance.get_config());
        JdbcDriver.connection.set(this.type, connection);
    }
    JdbcDriver.connection = new Map();
    return JdbcDriver;
}());
exports.default = JdbcDriver;
