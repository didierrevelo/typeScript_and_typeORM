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
const http_respose_1 = require("../../shared/response/http.respose");
class PurchaseController {
    constructor(purchaseService = new purchase_service_1.PurchaseService(), httpResponse = new http_respose_1.HttpResponse()) {
        this.purchaseService = purchaseService;
        this.httpResponse = httpResponse;
    }
    getPurchases(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.purchaseService.findAllPurchases();
                if (data.length === 0) {
                    return this.httpResponse.NotFound(res, 'Data purchases cannot found data');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    getPurchaseById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseService.findPurchaseById(id);
                if (data == null) {
                    return this.httpResponse.NotFound(res, 'Data purchase cannot found');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
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
                const dataRequest = yield this.purchaseService.findPurchaseById(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'Purchase cannot be upadated');
                }
                return this.httpResponse.Ok(res, dataRequest);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    deletePurchase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseService.deletePurchase(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'Purchase cannot be deleted');
                }
                return this.httpResponse.Ok(res, `Delete Purchase with ID: ${id}`);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
}
exports.PurchaseController = PurchaseController;
