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
      Clientes.find({"comprou" : true}, function(err, clientes){
          if (err) res.status(500).send(err);
          const clientesRetorno = clientes.map(cliente => {
              return{
                  nome: cliente.nome,
                  email: cliente.email
              }
          })
          res.status(200).send(clientesRetorno)          
      })
  }


  exports.getCpf = (req, res) => {
      const cpf = req.params.cpf
    Clientes.find({cpf}, function(err, cliente){
        if (err) res.status(500).send(err);
        
        res.status(200).send(cliente)          
    })
}
  
  // aulas
  exports.updateCliente = (req, res) => {

    if (!validaFormulario(req.body)) return res.status(400).send({ mensagem: "campos inválidos" });

    Clientes.update(
        { cpf: req.params.cpf },
        { $set: req.body },
        { upsert: true },
        function (err) {
            if (err) return res.status(500).send(err);
            res.status(200).send({ mensagem: "Atualizado com sucesso!" });
        })

}

const validaFormulario = (campos) => {

    const schema = {
        nome: Joi.string().min(1).required(),
        email: Joi.string().min(1).required(),
    }

    const validation = Joi.validate(campos, schema);

    if (validation.error) {
        return false;
    }

    return true;

}
