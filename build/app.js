"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//let port = process.env.PORT || 3000;
var port = 3000;
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World YASH');
});
app.listen(port, function () {
    console.log("App listening on port " + port + "!");
});
//# sourceMappingURL=app.js.map