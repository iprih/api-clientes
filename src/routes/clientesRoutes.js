const express = require("express")
const router = express.Router()
const controller = require("../controller/clientesController")


router.post("/", controller.post)
router.get("/", controller.get)
router.get("/compradores", controller.getCompradores)
router.get("/:cpf", controller.getCpf)

module.exports = router