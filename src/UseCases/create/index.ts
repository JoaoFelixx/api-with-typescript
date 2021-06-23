import { PostgresUsersRepository } from "../../repositories/implementations/PostGresUsersRepository";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const postgress = new PostgresUsersRepository() 

const createUser = new CreateUser(
  postgress
)

const createUserCOntroller = new CreateUserController(
  createUser
)

export { createUser, createUserCOntroller }