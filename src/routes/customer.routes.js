const {Router} = require("express")
const {getCustomers, createCustomers, updateCustomers} = require("../controllers/customer.controller")

const router = Router()

router.get("/get-customer", getCustomers);

router.post("/create-customer", createCustomers);

router.put("/update-customer", updateCustomers);

router.delete("/delete-customer", deleteCustomers);

module.exports = router