# REST (Representational State Transfer)

Uma API REST é um conjunto de regras para criar serviços web. Ela usa padrões HTTP para criar, ler, atualizar e deletar dados de forma padronizada. Isso permite que diferentes sistemas se comuniquem pela internet de maneira eficiente.

Vamos quebrar um pouco isso:

1. Representacional 
Os recursos da web (como dados) são representados por recursos web acessíveis por meio de URLs.

2. State Transfer
 Indica que cada solicitação do cliente contém todas as informações necessárias para processar a solicitação. Em outras palavras, não há estado armazenado no servidor entre solicitações.

 Comunicacao baseada no protocolo HTTP, usando URLs e verbos HTTP para realizar operacoes no servidor.

 Me de um exemplo?

GET https://meusite.com.br/api/noticias

POST https://meusite.com.br/api/noticias
{
    "titulo": "Noticia 1",
    "texto": "Aqui vai o texto da noticia"
}

PUT https://meusite.com.br/api/noticias/1
{
    "titulo": "Noticia 1 editado",
    "texto": "Aqui vai o texto da noticia"
}

DELETE https://meusite.com.br/api/noticias/1

200 -> Sucesso 
201 -> Faz criacao de um objeto no servidor (Created)
404 -> Not found 
400 -> Bad Request
500 -> Internal Server Error
204 -> Sucesso sem body!