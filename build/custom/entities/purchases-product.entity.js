"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseProductEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const purchase_entity_1 = require("../../purchase/entities/purchase.entity");
const product_entity_1 = require("../../product/entities/product.entity");
let PurchaseProductEntity = class PurchaseProductEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PurchaseProductEntity.prototype, "quantityProduct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PurchaseProductEntity.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => purchase_entity_1.PurchaseEntity, (purchase) => purchase.purchaseProduct),
    (0, typeorm_1.JoinColumn)({ name: 'purchase_id' }),
    __metadata("design:type", purchase_entity_1.PurchaseEntity)
], PurchaseProductEntity.prototype, "purchase", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.purchaseProduct),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", product_entity_1.ProductEntity)
], PurchaseProductEntity.prototype, "product", void 0);
PurchaseProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'purchases_products' })
], PurchaseProductEntity);
exports.PurchaseProductEntity = PurchaseProductEntity;
