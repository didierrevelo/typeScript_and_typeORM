"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const index_1 = require("../shared/router/index");
const user_controller_1 = require("./controller/user.controller");
class UserRouter extends index_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController);
    }
    routes() {
        this.router.get('/user', (req, res) => this.controller.getUsers(req, res));
    }
}
exports.UserRouter = UserRouter;
