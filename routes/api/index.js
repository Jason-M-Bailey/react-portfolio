const router = require("express").Router();
const projectRoutes = require("./projects");

// projects routes
router.use("/projects", projectRoutes);

module.exports = router;
