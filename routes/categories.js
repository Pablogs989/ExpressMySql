const express = require("express");
const CategoriesController = require("../controllers/CategoriesController");
const router = express.Router();

router.post("/", CategoriesController.insert);
router.put("/", CategoriesController.update);
router.get("/", CategoriesController.getAll);
router.get("/category/:id", CategoriesController.getById)

module.exports = router;