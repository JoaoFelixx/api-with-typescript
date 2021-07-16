import { v4 } from "uuid";
import { UserCreate } from "../../entities/User";
import createHash from "../../services/createHash";
import userRepositoryFile from "../../repositories/UserRepositoryFile";

export async function createUser(email: string, password: string) {
  const id = await v4();
  const hashPassowrd = await createHash(password);

  const user: UserCreate = {
    _id: id,
    email: email.toLocaleLowerCase(),
    password: hashPassowrd.toString(),
  };

  return await userRepositoryFile.save(user);
}