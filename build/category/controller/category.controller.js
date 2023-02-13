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
const http_respose_1 = require("../../shared/response/http.respose");
class CategoryController {
    constructor(categoryService = new category_services_1.CategoryService(), httpResponse = new http_respose_1.HttpResponse()) {
        this.categoryService = categoryService;
        this.httpResponse = httpResponse;
    }
    getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.categoryService.findAllCategories();
                if (data.length === 0) {
                    return this.httpResponse.NotFound(res, 'Data categories cannot found data');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.categoryService.findCategoryById(id);
                if (data == null) {
                    return this.httpResponse.NotFound(res, 'Data category cannot found');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
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
                const dataRequest = yield this.categoryService.findCategoryById(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'Category cannot be upadated');
                }
                return this.httpResponse.Ok(res, dataRequest);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.categoryService.deleteCategory(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'Category cannot be deleted');
                }
                return this.httpResponse.Ok(res, `Delete Category with ID: ${id}`);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
}
exports.CategoryController = CategoryController;
