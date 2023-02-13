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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseRouter = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const router_1 = require("../shared/router");
const purchase_controller_1 = require("./controller/purchase.controller");
class PurchaseRouter extends router_1.BaseRouter {
    constructor() {
        super(purchase_controller_1.PurchaseController);
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.get('/purchases', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getPurchases(req, res); }));
            this.router.get('/purchase/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getPurchaseById(req, res); }));
            this.router.post('/createPurchase', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.createPurchase(req, res); }));
            this.router.put('/updatePurchase/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.updatePurchase(req, res); }));
            this.router.delete('/deletePurchase/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.deletePurchase(req, res); }));
        });
    }
}
exports.PurchaseRouter = PurchaseRouter;
