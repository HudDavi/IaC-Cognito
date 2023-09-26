# AWS Lambda Function para Inserção de Itens no DynamoDB

Este é um AWS Lambda Function que utiliza o SDK AWS SDK para JavaScript (aws-sdk) para inserir itens em uma tabela DynamoDB. A função é ativada por um evento e recebe um objeto JSON contendo um `id` e um `price` que são inseridos na tabela.

## Conteúdo

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Configuração](#configuração)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Esta função AWS Lambda é projetada para inserir itens em uma tabela DynamoDB. Ela é ativada por um evento (por exemplo, uma solicitação HTTP) e recebe um objeto JSON contendo um `id` e um `price`, que são usados para criar um novo item na tabela especificada.

## Requisitos

Certifique-se de que você tenha as seguintes ferramentas e configurações:

- Conta AWS configurada com permissões para acessar o serviço DynamoDB.
- AWS CLI configurada, se necessário.
- A tabela DynamoDB chamada 'Items' criada com a estrutura apropriada (com campos `id` e `price`).

## Configuração

1. Certifique-se de que você configurou sua conta AWS corretamente e tem as permissões necessárias.

2. Crie uma tabela DynamoDB chamada 'Items' com os campos `id` e `price`.

## Como Usar

Esta função AWS Lambda é projetada para ser invocada por um evento. Para usá-la:

1. Configure um evento que acione a função AWS Lambda, por exemplo, uma solicitação HTTP usando o Amazon API Gateway.

2. Envie um objeto JSON no corpo da solicitação com as propriedades `id` e `price`.

3. A função AWS Lambda irá inserir o item na tabela DynamoDB 'Items'.

4. A resposta incluirá um status e uma mensagem indicando se o item foi inserido com sucesso ou se houve algum erro.

## Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Fork o projeto.

2. Crie uma nova branch com a sua funcionalidade: `git checkout -b feature/nova-funcionalidade`.

3. Faça commit das suas alterações: `git commit -am 'Adicionei uma nova funcionalidade'`.

4. Faça push para a branch: `git push origin feature/nova-funcionalidade`.

5. Abra uma solicitação pull no GitHub.

## Licença

Este projeto está licenciado sob os termos da [Licença MIT](LICENSE).