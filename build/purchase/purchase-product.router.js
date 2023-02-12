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
exports.PurchaseProductRouter = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const router_1 = require("../shared/router");
// import { PurchaseController } from './controller/purchase.controller'
const purchase_product_controler_1 = require("./controller/purchase-product.controler");
class PurchaseProductRouter extends router_1.BaseRouter {
    constructor() {
        super(purchase_product_controler_1.PurchaseProductController);
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.get('/purchaseProducts', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getPurchaseProducts(req, res); }));
            this.router.get('/purchaseProduct/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getPurchaseProductById(req, res); }));
            this.router.post('/createPurchaseProduct', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.createPurchaseProduct(req, res); }));
            this.router.put('/updatePurchaseProduct/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.updatePurchaseProduct(req, res); }));
            this.router.delete('/deletePurchaseProduct/:id', (req, res) => this.controller.deletePurchaseProduct(req, res));
        });
    }
}
exports.PurchaseProductRouter = PurchaseProductRouter;
