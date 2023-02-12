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
class UserController {
    constructor(userServices = new user_service_1.UserServices()) {
        this.userServices = userServices;
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userServices.findAllUser();
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getUsersById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userServices.findUserById(id);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userServices.createUser(req.body);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userServices.updateUser(id, req.body);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userServices.deleteUser(id);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.UserController = UserController;
