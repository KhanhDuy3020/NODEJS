import express from "express";
import HomeController from "../controllers/HomeController";

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', HomeController.getHomePage);

    return app.use("/", router);
}

module.exports = initWebRouter;