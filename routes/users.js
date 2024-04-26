const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

router.post("/", UserController.insert);
router.put("/", UserController.update);
router.get("/", UserController.getAll);
router.get("/users/:id", UserController.getById)
router.delete("/:id", UserController.deleteById)
router.get("/userorders/:id", UserController.getUserOrders)

module.exports = router;