"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const router_1 = require("../shared/router");
const category_controller_1 = require("./controller/category.controller");
class CategoryRouter extends router_1.BaseRouter {
    constructor() {
        super(category_controller_1.CategoryController);
    }
    routes() {
        this.router.get('/categories', (req, res) => this.controller.getCategories(req, res));
        this.router.get('/category/:id', (req, res) => this.controller.getCategoryById(req, res));
        this.router.post('/createCategory', (req, res) => this.controller.createCategory(req, res));
        this.router.put('/updateCategory/:id', (req, res) => this.controller.updateCategory(req, res));
        this.router.delete('/deleteCategory/:id', (req, res) => this.controller.deleteCategory(req, res));
    }
}
exports.CategoryRouter = CategoryRouter;
