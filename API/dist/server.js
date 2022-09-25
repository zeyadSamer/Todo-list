"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var todos_1 = __importDefault(require("./routes/todos"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var users_1 = __importDefault(require("./routes/users"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'PATCH']
}));
// parse application/json
app.use(body_parser_1["default"].json());
app.use(todos_1["default"]);
app.use(users_1["default"]);
var port = 3000; //important
app.get('/', function (req, res) {
    res.send("to access todos go to /todos");
});
app.listen(port, function () {
    console.log("listening on port:".concat(port));
});
