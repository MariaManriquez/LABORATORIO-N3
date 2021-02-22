import express from "express";
import express from "express";
import ServicesController from "../controller/ServicesController.js";
var services = new ServicesController();
routes.get("/", services.index);
export default routes;
//module.exports = routes;
