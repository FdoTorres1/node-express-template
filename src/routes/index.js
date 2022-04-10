const { Router } = require("express");
const helloRoutes = require("./hello")
const userRoutes = require("./user")

const router = Router();

router.use("/hello", helloRoutes);
router.use("/users", userRoutes)

module.exports = router;