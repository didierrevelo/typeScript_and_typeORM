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
exports.PurchaseProductController = void 0;
const purchase_product_service_1 = require("../services/purchase-product.service");
class PurchaseProductController {
    constructor(purchaseProductService = new purchase_product_service_1.PurchaseProductService()) {
        this.purchaseProductService = purchaseProductService;
    }
    getPurchasesProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.purchaseProductService.findAllPurchasesProducts();
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getPurchaseProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseProductService.findPurchaseProductById(id);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    createPurchaseProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.purchaseProductService.createPurchaseProduct(req.body);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updatePurchaseProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseProductService.updatePurchaseProduct(id, req.body);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    deletePurchase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseProductService.deletePurchaseProduct(id);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.PurchaseProductController = PurchaseProductController;
