"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Users = void 0;
var db_connection_1 = __importDefault(require("../db-connection"));
var bcrypt = __importStar(require("bcrypt"));
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.add = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, connection, salt, hashedPassword, query, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        email = user.email, password = user.password;
                        return [4 /*yield*/, db_connection_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        console.log(process.env.SALT_ROUNDS);
                        salt = process.env.SALT_ROUNDS;
                        hashedPassword = bcrypt.hashSync(password, parseInt(salt));
                        console.log('hashed:', hashedPassword);
                        query = "INSERT INTO users(email,password) VALUES($1,$2) returning *";
                        return [4 /*yield*/, connection.query(query, [email, hashedPassword])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_1 = _a.sent();
                        //throw err;
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Users.prototype.show = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, connection, query, result, savedUser, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        email = user.email, password = user.password;
                        return [4 /*yield*/, db_connection_1["default"].connect()];
                    case 1:
                        connection = _a.sent();
                        query = "SELECT * FROM users WHERE email=$1";
                        return [4 /*yield*/, connection.query(query, [email])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        //check if user exist
                        if (result.rows.length) {
                            savedUser = result.rows[0];
                            //check password   
                            if (bcrypt.compareSync(password, savedUser.password)) {
                                //return userdata
                                return [2 /*return*/, result.rows[0]];
                            }
                        }
                        return [2 /*return*/, null];
                    case 3:
                        err_2 = _a.sent();
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Users;
}());
exports.Users = Users;
/*


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4IiwiZW1haWwiOiJoYXplbSIsInBhc3N3b3JkIjoiJDJiJDEyJG9OZ0xPRDh2bkxNNEYuM2RvNWhVVHU0VnFCSi5DQld3Z0ZMLkVHWm9ZbHBMWjdleUNvaUU2IiwiaWF0IjoxNjYzNzE0NzUyfQ.O0R4x21ZZG-L7-MVB38lWV2838PNP2WJZf9-GpwfvQM
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwiZW1haWwiOiJqYXlhbiIsInBhc3N3b3JkIjoiJDJiJDEyJEkycFVQVEV6c25xdmNOWTN2SzV6UXUvY0Q1OWJHcUVsRlB0WXZDQWFybFZoQnVBdVYuT0dDIiwiaWF0IjoxNjYzNzE1Mjk1fQ.2jv4PXmdsAi8IBxGjkk6vLE-OS6UYsFDAH-xgmjAIkg

*/
