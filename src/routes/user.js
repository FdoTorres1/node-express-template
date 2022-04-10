const { Router } = require("express");
const controller = require("../controllers/users");

const userRouter = Router();

userRouter.get("/", controller.allUsers);

module.exports = userRouter;