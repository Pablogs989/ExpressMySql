const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/", ProductController.insert);
router.put("/", ProductController.update);
router.get("/", ProductController.getAll);
router.get("/productcategory", ProductController.getProductCategory);
router.get("/product/:id", ProductController.getById)
router.get("/iddesc", ProductController.getByIdDesc)
router.get("/productname/:name", ProductController.getByName)
router.get("/productdelete/:id", ProductController.deleteById)

module.exports = router;