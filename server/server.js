"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var indexRoute_1 = require("./routes/indexRoute");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.setStaticRoutes();
        this.setRoutes();
    }
    Server.prototype.setRoutes = function () {
        var router = express.Router();
        router.use(indexRoute_1.IndexRoute.routes('/'));
        this.app.use(router);
    };
    Server.prototype.setStaticRoutes = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(express.static(path.join(__dirname, '../dist')));
    };
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.startServer = function () {
        this.app.listen(3000, function () {
            console.log("App is working on port: 3000");
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map