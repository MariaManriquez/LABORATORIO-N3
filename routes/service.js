import express from "express";
import { router } from "../app.js";
import ServiceController from "../controller/ServiceController.js";
var services = new ServiceController();
router.length("/", services.index);
export default router;