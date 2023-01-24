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
exports.PurchaseEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const customer_entity_1 = require("../../customer/entities/customer.entity");
const purchases_product_entity_1 = require("../../custom/entities/purchases-product.entity");
let PurchaseEntity = class PurchaseEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PurchaseEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PurchaseEntity.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.CustomerEntity, (customer) => customer.purchases),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", customer_entity_1.CustomerEntity)
], PurchaseEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => purchases_product_entity_1.PurchaseProductEntity, (purchaseProduct) => purchaseProduct.product),
    __metadata("design:type", Array)
], PurchaseEntity.prototype, "purchaseProduct", void 0);
PurchaseEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'purchase' })
], PurchaseEntity);
exports.PurchaseEntity = PurchaseEntity;
