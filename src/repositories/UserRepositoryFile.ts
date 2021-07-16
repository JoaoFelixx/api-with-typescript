import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { UserInterfaceRepository } from "./UserInterfaceRepo";
import { UserCreate, UserUpdate } from "../entities/User";

export class UserRepositoryFile implements UserInterfaceRepository {
  
  readonly file: string = join(__dirname, '..', '..', 'database', 'data.json');

  async __currentFileContent() {
    return await readFile(this.file, 'utf8');
  }

  async __recordAtFile(currentFile?: Array<string> | Array<undefined>) {
    return await writeFile(this.file, JSON.stringify(currentFile), 'utf8');
  }

  async find(id?: string) {
    const allUsers = JSON.parse(await this.__currentFileContent());

    return !id ? allUsers : allUsers.find(({ _id }) => id === _id);  
  }

  async save(user: UserCreate) {
    const currentFile = JSON.parse(await this.__currentFileContent());
    
    if (currentFile.find((({ email }) => email === user.email))) throw new Error(); // if email exists return statusCode(400) saying email exists 
    
    currentFile.push(user); // add user

   return await this.__recordAtFile(currentFile);
  }

  async update(itemID: string,user: UserUpdate) {
    const allUsers = JSON.parse(await this.__currentFileContent());
    const newUser = allUsers.find(({ _id }) => itemID === _id);

    newUser.email = user.email;
    newUser.password = user.password;

    await this.__recordAtFile(allUsers);
  }

  async delete(id?: string) {
    if (!id) return await this.__recordAtFile([]);

    const usersSaved = JSON.parse(await this.__currentFileContent()) 
      .filter(({ _id }) => id != _id);
    
    return await this.__recordAtFile(usersSaved);
  }
}

export default new UserRepositoryFile();