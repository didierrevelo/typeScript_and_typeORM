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
exports.PurchaseProductService = void 0;
const base_service_1 = require("../../config/base.service");
const purchases_product_entity_1 = require("../entities/purchases-product.entity");
class PurchaseProductService extends base_service_1.BaseService {
    constructor() {
        super(purchases_product_entity_1.PurchaseProductEntity);
    }
    findAllPurchasesProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).find();
        });
    }
    findPurchaseProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).findOneBy({ id });
        });
    }
    createPurchaseProduct(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).save(body);
        });
    }
    deletePurchaseProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).delete({ id });
        });
    }
    updatePurchaseProduct(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).update(id, infoUpdate);
        });
    }
}
exports.PurchaseProductService = PurchaseProductService;
