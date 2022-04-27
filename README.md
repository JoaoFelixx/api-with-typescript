## API NodeJS with Typescript 

Este projeto é uma api de controle de rotas, ela cria usuários e o usuário que loga tem acesso a rota privada `api/v1//data` se não logar é retornado status(401) `UNAUTHORIZED` por falta do token.

Pacotes utilizados:

* express
* jsonwebtoken
* cors
* bcryptjs
* dotenv

Obs. Para quem não conhece, o dotenv serve para criar variaveis de ambientes.
[Doc do dotenv](https://www.npmjs.com/package/dotenv)

Sistema de rotas

| HTTP | ROUTE | Autenticação | BODY | DESCRIÇÃO |
| ---- | ---------- | ------------ | ---- | ---------
| GET | /api/v1/data/ | Sim | Bearer TOKEN | Protegida (JWT) 
| POST | /api/v1/auth/ | Não | JSON (email: string, password: string) | Cria token 
| POST | /api/v1/users/ | Não | JSON (email: string, password: string) | Cria usuários 
| PUT | /api/v1/users/:id | Sim | JSON(email?: string, password?: string) token (Bearer) | Edita usuários 
| DELETE | /api/v1/users/:id | Sim | PARAMS(id: string) | Deleta usuários
