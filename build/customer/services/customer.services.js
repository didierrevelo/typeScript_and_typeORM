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
exports.CustomerService = void 0;
const base_service_1 = require("../../config/base.service");
const customer_entity_1 = require("../entities/customer.entity");
class CustomerService extends base_service_1.BaseService {
    constructor() {
        super(customer_entity_1.CustomerEntity);
    }
    findAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).find();
        });
    }
    findCustomerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).findOneBy({ id });
        });
    }
    createCustomer(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).save(body);
        });
    }
    deleteCustomer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).delete({ id });
        });
    }
    updateCustomer(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.execRepository).update(id, infoUpdate);
        });
    }
}
exports.CustomerService = CustomerService;
