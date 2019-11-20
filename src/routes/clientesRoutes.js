const express = require("express")
const router = express.Router()
const controller = require("../controller/clientesController")

router.get("/", controller.get)

router.post("/", controller.post)

router.get("/compradores", controller.getCompradores)


module.exports = router