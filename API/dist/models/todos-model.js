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
        while (_) try {
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
exports.__esModule = true;
var db_connection_1 = __importDefault(require("../db-connection"));
var Todos = /** @class */ (function () {
    function Todos() {
    }
    Todos.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sqlQuery, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_connection_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        sqlQuery = 'SELECT * FROM todos ';
                        return [4 /*yield*/, connection.query(sqlQuery)];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("error happened :".concat(err_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Todos.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sqlQuery, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_connection_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        sqlQuery = "SELECT * FROM todos WHERE id=$1";
                        return [4 /*yield*/, connection.query(sqlQuery, [id])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("error:".concat(err_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Todos.prototype.add = function (todo) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sqlQuery, id, name_1, completed, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_connection_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        sqlQuery = "insert into todos(id,name,completed) values($1,$2,$3) returning * ";
                        id = todo.id, name_1 = todo.name, completed = todo.completed;
                        return [4 /*yield*/, connection.query(sqlQuery, [id, name_1, completed])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        console.log(result.rows[0]);
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_3 = _a.sent();
                        throw err_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //update
    Todos.prototype.update = function (id, todo) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sqlQuery, _a, name_2, _b, completed, result, err_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_connection_1["default"].connect()];
                    case 1:
                        connection = _c.sent();
                        sqlQuery = "UPDATE todos SET  name=$1, completed=$2  WHERE id=$3 returning *";
                        _a = todo.name, name_2 = _a === void 0 ? todo.name : _a, _b = todo.completed, completed = _b === void 0 ? todo.completed : _b;
                        return [4 /*yield*/, connection.query(sqlQuery, [name_2, completed, id])];
                    case 2:
                        result = _c.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_4 = _c.sent();
                        throw err_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //delete
    Todos.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sqlQuery, result, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_connection_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        sqlQuery = "DELETE FROM todos WHERE id=$1 returning *";
                        return [4 /*yield*/, connection.query(sqlQuery, [id])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_5 = _a.sent();
                        throw err_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Todos;
}());
exports["default"] = Todos;