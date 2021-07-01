import { MongoUsersRepository } from "../../repositories/implementations/MongoUsersRepository";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const mongo = new MongoUsersRepository() 

const createUser = new CreateUser(
  mongo
)

const createUserCOntroller = new CreateUserController(
  createUser
)

export { createUser, createUserCOntroller }