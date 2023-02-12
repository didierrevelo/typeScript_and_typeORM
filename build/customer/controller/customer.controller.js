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
exports.CustomerController = void 0;
const customer_services_1 = require("../services/customer.services");
class CustomerController {
    constructor(customerService = new customer_services_1.CustomerService()) {
        this.customerService = customerService;
    }
    getCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.customerService.findAllCustomers();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.customerService.findCustomerById(id);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    createCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.customerService.createCustomer(req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.customerService.updateCustomer(id, req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.customerService.deleteCustomer(id);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.CustomerController = CustomerController;
