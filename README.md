# API with Node.js and Express 🌟

Anotações de uma aula sobre a construção de uma API simples. Eu já tinha o Node.js instalado, tive que instalar o yarn através de um comando npm. Isso criou um `package.json` e o `yarn.lock`.

Depois, instalei a dependência do `express` e criei um arquivo chamado `server.json`

No arquivo `server.json`, algumas coisas foram feitas, como as chamadas dos verbos http: `GET`, `POST`, `PUT`, `DELETE` (tem outras, mas essas são as mais usadas).

No arquivo `data.json` foram colocados vários objetos pra que a gente pudesse simular essas chamadas, ora buscando cliente, ora atualizando, ora deletando. Foi bem inicial, mesmo, viu, pra começar a entender melhor como funciona o back-end da parada toda. 

## 😴 Insomnia
Essa visualização das chamadas dos verbos http foi feita dentro do ambiente da aplicação insomnia, que também é relativamente fácil de entender.

## 💕 Boas práticas: 
➡️ Utilizar verbos HTTP para nossas requisições.

➡️ Não faz diferença usar plural ou singular na criação dos endpoints, a questão é aderir a um padrão

➡️ Não deixar barra no final do endpoint

➡️ Nunca deixar o cliente sem resposta!

_mais infos sobre boas práticas aqui:_ <https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/_>


## ✨ Status de respostas: 
- 1xx: Informação
- 2xx: Sucesso
- 200: OK
- 201: CREATED
- 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
- 400: Bad Request
- 404: Not Found!
- 5xx: Server Error 500: Internal Server Error

_mais infos sobre status de respostas aqui:_ <https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status>

## _link do repositório da aula tá aqui:_

<https://github.com/rocketseat-content/youtube-api-rest-restful>

