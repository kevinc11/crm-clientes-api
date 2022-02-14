const {Router} = require("express")
const {getProducts, createProducts, updateProducts} = require("../controllers/product.controller")

const router = Router()

router.get("/get-product", getProducts);

router.post("/create-product", createProducts);

router.put("/update-product", updateProducts);

router.delete("/delete-product", deleteProducts);

module.exports = router