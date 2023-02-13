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
exports.PurchaseService = void 0;
const base_service_1 = require("../../config/base.service");
const purchase_entity_1 = require("../entities/purchase.entity");
class PurchaseService extends base_service_1.BaseService {
    constructor() {
        super(purchase_entity_1.PurchaseEntity);
    }
    findAllPurchases() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).find();
        });
    }
    findPurchaseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).findOneBy({ id });
        });
    }
    createPurchase(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).save(body);
        });
    }
    deletePurchase(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).delete({ id });
        });
    }
    updatePurchase(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).update(id, infoUpdate);
        });
    }
}
exports.PurchaseService = PurchaseService;
