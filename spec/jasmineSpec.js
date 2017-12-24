"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ACTIONS_1 = require("../src/static/ACTIONS");
var reducer = require("../src/reducers/app");
describe('Test for reducers', function () {
    describe('Reducers from src/reducer', function () {
        var defaultProps = {
            loader: false,
            loginModal: true,
            snackbar: false
        };
        it('shouldnt return undefined', function () {
            expect(reducer.default(defaultProps, { type: ACTIONS_1.default.ADD_TO_FAVOURITE })).not.toBeUndefined();
        });
        it('should return object', function () {
            expect(typeof (reducer.default(defaultProps, { type: ACTIONS_1.default.ADD_TO_FAVOURITE }))).toEqual('object');
        });
    });
});
