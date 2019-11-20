//primeiro declarar um modelo que tenho conexão com o vbanco de dados
//dentro da pasta model terá o schema
const Clientes = require("../model/clientes");

//exportando a função pra quem vai consumir

exports.post = (req, res) => {
    const cliente = new Clientes(req.body)// aqui ele pega corpo da requisição e coloca no new clientes de acordo com o parametro do schemma
  
    cliente.save(function(err){
      if (err) res.status(500).send(err)
      else {
          res.status(201).send({
              status: true,
              mensagem: "Cliente incluido com sucesso"
          })      
        }
        res.status(201).send(cliente)
      })
  }



  exports.get = (req, res) =>{
      Clientes.find(function(err, clientes){
        if (err) res.status(500).send(err);
        res.status(200).send(clientes)
      })
  }

  exports.getCompradores = (req, res) => {
      Clientes.find(function(err, compradores){
          if (err) res.status(500).send(err);
          res.status(200).send(compradores)
          
      })
  }