<div align="center" style="padding: 15px;">
  <img alt="Ilia Digital" title="íliaDigital" src="https://ilia.digital/wp-content/uploads/2020/10/logo.png" width="200px" />
</div>

<p align="center"><i>Imagem feita pela <a href="https://ilia.digital/">Ília Digital</a></i></p>

<h3 align="center">Código desenvolvido para a vaga de backend na Ília Digital 💻</h3>

# RESUMO

API desenvolvida em Node.JS como parte do teste para pleitear a vaga de desenvolvedor *backend* na <a href="https://ilia.digital/">Ília Digital</a>

# OBJETIVO

Construir um micro serviço dockerizado com network compartilhada entre a aplicação e o banco que seja capaz de capturar e indexar as informações de um filme e suas legendas em uma base de dados à partir de chamadas a endpoints.

Você pode construir como quiser, mas temos preferência por:

Docker compose;
ExpressJS;
MongoDB;
PostgreSQL;
Joi;
Jest.

# ÍNDICE

- [Instalação](#instalação)
  - [Clonando o repositório](#clonando-o-repositório)
  - [*Download* de dependências](#download-de-dependências)
  - [Configuração das variáveis ambientes](#configuração-das-variáveis-ambientes)
- [Testes](#testes)
- [Projeto](#projeto)
  - [Executar o servidor](#executar-o-servidor)
  - [Parte 1 - Filmes](#parte-1---filmes)
    - [Cadastro de filme](#cadastro-de-filme)
    - [Atualização de filme](#atualização-de-filme)
    - [Buscar apenas um filme](#buscar-apenas-um-filme)
    - [Buscar todos os filmes](#buscar-todos-os-filmes)
    - [Excluir um filme](#excluir-um-filme)
  - [Parte 2 - Traduções dos filmes](#parte-2---traduções-dos-filmes)
    - [Inserir a tradução de um filme](#inserir-a-tradução-de-um-filme)
- [Contribuição](#contribuição)
- [Dúvidas](#dúvidas)

# Instalação

## Clonando o repositório

Existem duas maneiras de realizar o clone de um repositório, sendo elas: **SSH** e **HTTPS**.

Para clonar utilizando **SSH**, utilize o seguinte comando:
```bash
git clone git@github.com:augustoavg/IliaMovie.git
```

Para clonar utilizando **HTTPS**, utilize o seguinte comando:
```bash
git clone https://github.com/augustoavg/IliaMovie.git
```

## *Download* de dependências

Após o clone do repositório, é necessário realizar o *download* das dependências que foram utilizadas nesse projeto.

Para efetuar o *download*, usando yarn, utilize do seguinte comando:
```bash
yarn
```

Para efetuar o *download*, usando npm, utilize do seguinte comando:
```bash
npm install
```

## Configuração das variáveis ambientes
Para configurar as variáveis ambientes, deve-se criar o arquivo `.env`, copiar as informações contidas
no arquivo `.env.dev` e colar no arquivo recém-criado. Após isso, os dados do arquivo gerado devem ser preenchidos.


Neste projeto, contém as seguintes variáveis de ambiente:
 - O nome do banco, MONGO_DB.
 - A porta do banco, MONGO_PORT.
 - O host do banco, MONGO_HOST.
 - O usuário do banco, MONGO_USERNAME.
 - A senha do banco, MONGO_PASSWORD.
 - A chave de acesso da API The Movie, API_KEY.


# Testes
O seguinte projeto foi construído utilizando-se da metodologia TDD(*Test Driven Development*).

Para rodar os testes, com yarn, execute o seguinte comando no seu *console*:
```bash
yarn test
```

Para rodar os testes, com npm, execute o seguinte comando no seu *console*:
```bash
npm run test
```

# Projeto
O projeto foi desenvolvido por partes, para garantir que todos os requisitos fosse atendidos.

## Executar o servidor
Para iniciar o servidor, usando yarn, utilize do seguinte comando:
```bash
yarn dev
```

Para iniciar o servidor, usando npm, utilize do seguinte comando:
```bash
npm run dev
```


## Parte 1 - Filmes
Na parte de filmes, é possível realizar um CRUD.

### Cadastro de filme
Segue abaixo as informações da rota de cadastro de um filme.

|Rota autenticada? | Método da rota | Nome da rota | Parâmetros (Request Body) | Retorno |
| :---: | :---: | :---: | :--- | :--- |
|Não | POST | /movies | 1 - movieId: Inteiro e obrigatório, que representa o id do filme na API The Movie Database API <br> | Um objeto contendo os dados do filme |

### Atualização de filme
Segue abaixo as informações da rota de atualização de um filme.

|Rota autenticada? | Método da rota | Nome da rota | Parâmetros (Request Params)| Retorno |
| :---: | :---: | :---: | :--- | :--- |
|Não | PUT | /movies/:movieId | 1 - movieId: String e obrigatório, que representa o ID do filme no banco<br>| Um objeto contendo os dados do filme |

### Buscar apenas um filme
Segue abaixo as informações da rota de buscar apenas um filme.

|Rota autenticada? | Método da rota | Nome da rota | Parâmetros (Request Params)| Retorno |
| :---: | :---: | :---: | :--- | :--- |
|Não | GET | /movies/:movieId | 1 - movieId: String e obrigatório, que representa o ID do filme no banco<br>| Um objeto contendo os dados do filme |

### Buscar todos os filmes
Segue abaixo as informações da rota de buscar todos os filme.

|Rota autenticada? | Método da rota | Nome da rota | Retorno |
| :---: | :---: | :---: | :--- |
|Não | GET | /movies | Um array de objetos com os dados dos filmes já cadastrado na aplicação |

### Excluir um filme
Segue abaixo as informações da rota de exclusão de um filme.

|Rota autenticada? | Método da rota | Nome da rota | Parâmetros (Request Params)| Retorno |
| :---: | :---: | :---: | :--- | :--- |
|Não | DELETE | /movies/:movieId | 1 - movieId: String e obrigatório, que representa o ID do filme no banco<br>| Um objeto contendo os dados do filme |

## Parte 2 - Traduções dos filmes
Na parte de traduções dos filmes, é possível inserir os dados das traduções dos filmes.

### Inserir a tradução de um filme
Segue abaixo as informações da rota de inserir a tradução de um filme.

|Rota autenticada? | Método da rota | Nome da rota | Parâmetros (Request Params)| Retorno |
| :---: | :---: | :---: | :--- | :--- |
|Não | PATCH | /movies/:movieId/translations | 1 - movieId: String e obrigatório, que representa o ID no banco<br>| Um objeto contendo os dados do filme |

## Contribuição
Pull requests serão sempre bem-vindas. Para grandes mudanças, crie uma issue para discurtimos o que você gostaria de mudar.

PS: Não se esqueça de atualizar os testes. :wink:

## Dúvidas
Qualquer dúvida em relação ao projeto, crie uma issue ou mande um e-mail para augustoavilag@hotmail.com, ou entre em contato pelo WhatsApp.
