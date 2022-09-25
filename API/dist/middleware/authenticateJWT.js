"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.authenticateJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authenticateJWT = function (req, res, next) {
    try {
        var authorizationHeader = req.headers.authorization;
        // authorization header = bearer tokenvalue
        var token = authorizationHeader.split(' ')[1];
        console.log('token:', token);
        var tokenSecret = process.env.TOKEN_SECRET;
        jsonwebtoken_1["default"].verify(token, tokenSecret);
        next();
    }
    catch (err) {
        res.status(401);
        res.json('right token must be provided');
    }
};
exports.authenticateJWT = authenticateJWT;
