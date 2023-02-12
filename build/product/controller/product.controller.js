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
exports.ProductController = void 0;
const product_service_1 = require("../services/product.service");
class ProductController {
    constructor(productService = new product_service_1.ProductService()) {
        this.productService = productService;
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.productService.findAllProducts();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.productService.findProductById(id);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.productService.createProduct(req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.productService.updateProduct(id, req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.productService.deleteProduct(id);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.ProductController = ProductController;
