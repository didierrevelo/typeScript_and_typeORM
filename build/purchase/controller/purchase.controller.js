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
exports.PurchaseController = void 0;
const purchase_service_1 = require("../services/purchase.service");
class PurchaseController {
    constructor(purchaseService = new purchase_service_1.PurchaseService()) {
        this.purchaseService = purchaseService;
    }
    getPurchases(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.purchaseService.findAllPurchases();
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getPurchaseById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseService.findPurchaseById(id);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    createPurchase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.purchaseService.createPurchase(req.body);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updatePurchase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseService.updatePurchase(id, req.body);
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
                const data = yield this.purchaseService.deletePurchase(id);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.PurchaseController = PurchaseController;
