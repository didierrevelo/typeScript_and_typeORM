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
exports.CategoryRouter = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const router_1 = require("../shared/router");
const category_controller_1 = require("./controller/category.controller");
class CategoryRouter extends router_1.BaseRouter {
    constructor() {
        super(category_controller_1.CategoryController);
    }
    routes() {
        this.router.get('/categories', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getCategories(req, res); }));
        this.router.get('/category/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getCategoryById(req, res); }));
        this.router.post('/createCategory', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.createCategory(req, res); }));
        this.router.put('/updateCategory/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.updateCategory(req, res); }));
        this.router.delete('/deleteCategory/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.deleteCategory(req, res); }));
    }
}
exports.CategoryRouter = CategoryRouter;
