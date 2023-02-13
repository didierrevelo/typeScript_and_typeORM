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
const http_respose_1 = require("../../shared/response/http.respose");
class CustomerController {
    constructor(customerService = new customer_services_1.CustomerService(), httpResponse = new http_respose_1.HttpResponse()) {
        this.customerService = customerService;
        this.httpResponse = httpResponse;
    }
    getCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.customerService.findAllCustomers();
                if (data.length === 0) {
                    return this.httpResponse.NotFound(res, 'Data customers cannot found data');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.customerService.findCustomerById(id);
                if (data == null) {
                    return this.httpResponse.NotFound(res, 'Data customer cannot found');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
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
                const dataRequest = yield this.customerService.findCustomerById(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'customer cannot be upadated');
                }
                return this.httpResponse.Ok(res, dataRequest);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.customerService.deleteCustomer(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'customer cannot be deleted');
                }
                return this.httpResponse.Ok(res, `Delete Customer with ID: ${id}`);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
}
exports.CustomerController = CustomerController;
