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
exports.CategoryController = void 0;
const category_services_1 = require("../services/category.services");
class CategoryController {
    constructor(categoryService = new category_services_1.CategoryService()) {
        this.categoryService = categoryService;
    }
    getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.categoryService.findAllCategoties();
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.categoryService.findCategoryById(id);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.categoryService.createCategory(req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.categoryService.updateCategory(id, req.body);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.categoryService.deleteCategory(id);
                res.status(200).json(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.CategoryController = CategoryController;
