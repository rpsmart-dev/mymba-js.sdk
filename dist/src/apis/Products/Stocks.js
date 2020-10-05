"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var _BaseApi_1 = __importDefault(require("../_BaseApi"));
var StockAPI = (function (_super) {
    __extends(StockAPI, _super);
    function StockAPI() {
        return _super.call(this, 'produtos-atributos') || this;
    }
    StockAPI.prototype.List = function () {
        return this.Api().send('GET', 'v1', this.route());
    };
    StockAPI.prototype.Get = function (id) {
        return this.Api().send('GET', 'v1', this.route(id));
    };
    StockAPI.prototype.Create = function (data) {
        return this.Api().send('POST', 'v1', this.route());
    };
    StockAPI.prototype.Update = function (data, id) {
        return this.Api().send('PUT', 'v1', this.route(id));
    };
    StockAPI.prototype.Delete = function (id) {
        return this.Api().send('DELETE', 'v1', this.route(id));
    };
    return StockAPI;
}(_BaseApi_1["default"]));
exports["default"] = StockAPI;
