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
exports.brokerController = void 0;
const index_1 = require("../config/index");
const brokerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check screte header
        if (req.headers.secret !== process.env.SECRET) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        // check if req.body is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'Bad Request'
            });
        }
        (yield index_1.connection).createChannel().then((channel) => {
            channel.assertQueue("queue");
            channel.sendToQueue("queue", Buffer.from(JSON.stringify(Object.assign({}, req.body))));
        });
        return res.status(200).json({
            message: 'Success'
        });
    }
    catch (e) {
        return res.status(500).json({
            message: e === null || e === void 0 ? void 0 : e.message
        });
    }
});
exports.brokerController = brokerController;
