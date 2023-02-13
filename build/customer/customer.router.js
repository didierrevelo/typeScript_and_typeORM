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
exports.CustomerRouter = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const router_1 = require("../shared/router");
const customer_controller_1 = require("./controller/customer.controller");
class CustomerRouter extends router_1.BaseRouter {
    constructor() {
        super(customer_controller_1.CustomerController);
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.get('/customers', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getCustomers(req, res); }));
            this.router.get('/customer/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getCustomerById(req, res); }));
            this.router.post('/createCustomer', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.createCustomer(req, res); }));
            this.router.put('/updateCustomer/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.updateCustomer(req, res); }));
            this.router.delete('/deleteCustomer/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.deleteCustomer(req, res); }));
        });
    }
}
exports.CustomerRouter = CustomerRouter;
