const express = require("express");
const OrderController = require("../controllers/OrderController");
const router = express.Router();

router.post("/", OrderController.insert);
router.get("/", OrderController.getAll);
module.exports = router;