// EU COMENTEI ESSE ARQUIVO BASEADO NO QUE EU ENTENDI ENQUANTO ESTAVA FAZENDO O APP

// inclui o módulo "express"
// o "require" em nodejs serve pra usar módulos locais que ficam em outros arquivos
// a função require lê o arquivo em questão e retorna o que estiver em "exports"
const express = require('express');

// atribui uma função do módulo express à variável "app"
// a função cria uma aplicação express
const app = express();

// inclui o módulo "path", que serve pra resolver caminhos de arquivos
// dispensa a necessidade de digitar todo o caminho absoluto explicitamente (ex. C:\Users\admin...)
const path = require('path');

// inclui uma função do express à variável "router"
// o router aqui é usado pra fazer o sistema de roteamento (definir rotas)
const router = express.Router();

// realiza uma requisição http que retorna uma página html como resposta
router.get('/',function(req,res){
  // transfere o arquivo passado como parâmetro em "sendFile" para o cliente
  res.sendFile(path.join(__dirname+'/index.html'));
});

// define a rota como sendo a raíz do servidor
// da pra definir qualquer rota aqui (ex. /home, /public_html/site, etc.)
app.use('/', router);

// inicia o servidor local na porta 3000
// o argumento dentro de "listen" diz basicamente pra usar a porta 3000, a menos que já exista uma porta pré configurada
app.listen(process.env.port || 3000);

// loga no console uma mensagem de que o servidor está ativo
console.log('Servidor iniciado em localhost:3000');