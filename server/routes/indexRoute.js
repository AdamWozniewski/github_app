"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path = require("path");
var IndexRoute = /** @class */ (function () {
    function IndexRoute() {
        this.favouriteItems = [];
    }
    IndexRoute.prototype.index = function (req, res) {
        return res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
    };
    IndexRoute.prototype.login = function (req, res) {
        if (req.body.data.login === 'admin' && req.body.data.psswd === 'admin') {
            return res.json(req.body.data);
        }
    };
    IndexRoute.prototype.favouriteAdd = function (req, res) {
        this.favouriteItems.push(req.body.data);
        return res.json({ favourite: this.favouriteItems });
    };
    IndexRoute.prototype.favouriteRemove = function (req, res) {
        var newFavouriteArray = this.favouriteItems.filter(function (item) { return item !== req.body.data; });
        return res.json({ favourite: newFavouriteArray });
    };
    IndexRoute.prototype.loadFavourite = function (req, res) {
        return res.json({ favourite: this.favouriteItems });
    };
    IndexRoute.routes = function (prefix) {
        var router = express_1.Router();
        var indexRoute = new IndexRoute();
        router.post('/login', indexRoute.login.bind(indexRoute));
        router.post('/favourite/:id', indexRoute.favouriteAdd.bind(indexRoute));
        router.post('/favourite/remove/:id', indexRoute.favouriteRemove.bind(indexRoute));
        router.get('/favourite', indexRoute.loadFavourite.bind(indexRoute));
        router.get(prefix, indexRoute.index.bind(indexRoute));
        return router;
    };
    return IndexRoute;
}());
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=indexRoute.js.map