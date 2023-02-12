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
exports.ProductRouter = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const router_1 = require("../shared/router");
const product_controller_1 = require("./controller/product.controller");
class ProductRouter extends router_1.BaseRouter {
    constructor() {
        super(product_controller_1.ProductController);
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.get('/products', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getProducts(req, res); }));
            this.router.get('/product/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getProductById(req, res); }));
            this.router.post('/createProduct', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.createProduct(req, res); }));
            this.router.put('/updateProduct/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.updateProduct(req, res); }));
            this.router.delete('/deleteProduct/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.deleteProduct(req, res); }));
        });
    }
}
exports.ProductRouter = ProductRouter;
