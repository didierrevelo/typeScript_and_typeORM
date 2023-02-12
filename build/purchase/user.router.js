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
exports.UserRouter = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const index_1 = require("../shared/router/index");
const user_controller_1 = require("./controller/user.controller");
class UserRouter extends index_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController);
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.get('/users', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getUsers(req, res); }));
            this.router.get('/user/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getUsersById(req, res); }));
            this.router.post('/createUser', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.createUser(req, res); }));
            this.router.put('/updateUser/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.updateUser(req, res); }));
            this.router.delete('/deleteUser/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.deleteUser(req, res); }));
        });
    }
}
exports.UserRouter = UserRouter;
