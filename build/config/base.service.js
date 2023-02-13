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
exports.BaseService = void 0;
const config_1 = require("./config");
class BaseService extends config_1.ConfigServer {
    constructor(getEntity) {
        super();
        this.getEntity = getEntity;
        this.execRepository = this.initRepository(getEntity);
    }
    initRepository(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const getConn = yield this.dbConnect();
            return getConn.getRepository(e);
        });
    }
}
exports.BaseService = BaseService;
