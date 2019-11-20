### Passo a Passo - API Clientes

- npm init 
- npm install express (npm i express)
- criar estrutura das pastas:
SRC (source)
> model - 
> controller - 
> routes - 

App.js - 
/* framework express é importado com require e depois chama a const app

Server.js - (Estabelece todas as conexões, porém nesse caso deixamos no app)

- Instalar mongoose -
- Installar nodemon
- SchemmaClientes


### Resumos

// Por que deixar tudo separado/organizado na SRC?
Padrao de arquitetura MVC
* View - Visualização do cliente
* Routes - representam a view (porta de entrada)
* Model - configuração e conexão com banco de dados
* Controller - faz a ponte com model e view (ou routes pois nao temos front) - tudo de filtro fica 
