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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const http_respose_1 = require("../../shared/response/http.respose");
class UserController {
    constructor(userServices = new user_service_1.UserServices(), httpResponse = new http_respose_1.HttpResponse()) {
        this.userServices = userServices;
        this.httpResponse = httpResponse;
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userServices.findAllUser();
                if (data.length === 0) {
                    return this.httpResponse.NotFound(res, 'Data users cannot found data');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    getUsersById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userServices.findUserById(id);
                if (data == null) {
                    return this.httpResponse.NotFound(res, 'Data user cannot found');
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userServices.createUser(req.body);
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userServices.updateUser(id, req.body);
                const dataRequest = yield this.userServices.findUserById(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'User cannot be upadated');
                }
                return this.httpResponse.Ok(res, dataRequest);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userServices.deleteUser(id);
                if (data.affected === 0) {
                    return this.httpResponse.NotFound(res, 'User cannot be deleted');
                }
                return this.httpResponse.Ok(res, `Delete User with ID: ${id}`);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
}
exports.UserController = UserController;
