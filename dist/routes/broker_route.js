"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broker_controller_1 = require("../controllers/broker_controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", broker_controller_1.brokerController);
exports.default = router;
