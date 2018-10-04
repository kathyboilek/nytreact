const router = require("express").Router();
const articleRoutes = require("./article");
const savedRoutes = require("./saved");

router.use("/article", articleRoutes);
router.use("/saved", savedRoutes)

module.exports = router;