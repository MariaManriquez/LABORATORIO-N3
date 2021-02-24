import express from "express";
import express from "express";
import { routes } from "../app.js";
import ServicesController from "../controller/ServicesController.js";
var services = new ServicesController();
routes.get("/", servicesController.index);
routes.get("/test", servicesController.test);
router.post("/divisas", servicesController.divisa);
router.post("/interes", servicesController.interes)
export default router;