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
const http_respose_1 = require("../../shared/response/http.respose");
class PurchaseProductController {
    constructor(purchaseProductService = new purchase_product_service_1.PurchaseProductService(), httpResponse = new http_respose_1.HttpResponse()) {
        this.purchaseProductService = purchaseProductService;
        this.httpResponse = httpResponse;
    }
    getPurchasesProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.purchaseProductService.findAllPurchasesProducts();
                if (data.length === 0) {
                    return this.httpResponse.NotFound(res, 'Data purchases-product cannot found data');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    getPurchaseProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseProductService.findPurchaseProductById(id);
                if (data == null) {
                    return this.httpResponse.NotFound(res, 'Data purchase-product cannot found');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
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
                const dataRequest = yield this.purchaseProductService.findPurchaseProductById(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'Purchase-product cannot be upadated');
                }
                return this.httpResponse.Ok(res, dataRequest);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    deletePurchaseProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.purchaseProductService.deletePurchaseProduct(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'Purchase-product cannot be deleted');
                }
                return this.httpResponse.Ok(res, `Delete Purchase-product with ID: ${id}`);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
}
exports.PurchaseProductController = PurchaseProductController;
