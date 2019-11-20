// framework express é importado com require e depois chama a const app
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser') // converte 
const app = express()

mongoose.connect("mongodb://localhost:27017/clientes", {useNewUrlParser: true});

const db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("conexão feita com sucesso.")
})



const clientes = require("./routes/clientesRoutes")
// controla quem vai ter acesso (o *)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })
  

app.use(bodyParser.json())

app.use("/clientes", clientes)

module.exports = app