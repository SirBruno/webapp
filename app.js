// requer o pkg "Express"
const express = require ('Express');

// atribui a função express à variável "app"
const app = express();

// atribui uma porta à variável PORT (eu não sei o que é o "proccess.env.PORT")
const PORT = process.env.PORT || 5000;

// chama o método "listen" de "app" passando como argumento a porta e uma string template
app.listen(PORT, console.log(`Server started at port ${PORT}`));

/*
nesse ponto, se a gente rodar "npm run dev" no console do node, ele retorna a mensagem de que o server iniciou na porta 5000, porém se tentar acessar a página (localhost:5000) ela retorna um erro pois não existem "rotas". eu não sei o que são as rotas exatamente mas eu estou entendendo a ideia.
*/