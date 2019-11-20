const mongoose = require('mongoose');//estabelece a conexão

const ClientesSchema = new mongoose.Schema({

nome: {type: String},
email: {type: String}, // required:true <- deixa como obrigatorio
cpf: {type: Number},
dataNascimento: {type: Date},
estadoCivil: {type: String},
telefone: {type: Number},
comprou: {type: Boolean}},
{versionKey: false}) //sempre que altera o mongo versiona e para nao existir cria essa funcao

const Clientes = mongoose.model('Clientes', ClientesSchema)

module.exports = Clientes