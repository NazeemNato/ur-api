"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
exports.connection = amqplib_1.default.connect(process.env.RABBITMQ_URL);
