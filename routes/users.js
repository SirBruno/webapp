// requer o pkg "express"
const express = require ('express');
// passa o método "router" para a variável "router"
const router = express.Router();

// chama o método "get" de router
// o argumento "'/'" indica que o método vai lidar apenas com a homepage (index)
// após isso é passado uma função como argumento com os parâmetros "request" e "response"...
// ...essa função retorna uma resposta com a mensagem "Welcome"
router.get('/', (req, res) => res.send('Welcome'));

// permite a variável "router" ser usada em outros arquivos
module.exports = router;