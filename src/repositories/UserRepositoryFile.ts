import { join } from 'path';
import { readFile, writeFile } from 'fs/promises';
import { UserRegistered } from "../interfaces";

class UserRepository {

  readonly file: string = join(__dirname, '..', '..', 'database', 'data.json');

  private async __currentFileContent(): Promise<UserRegistered[]> {
    return JSON.parse(await readFile(this.file, 'utf8'));
  }

  private async __recordAtFile(currentFile?: UserRegistered[] | Array<undefined>): Promise<void> {
    await writeFile(this.file, JSON.stringify(currentFile), 'utf8');
  }

  async find(id?: string): Promise<UserRegistered | UserRegistered[]> {
    const allUsers = await this.__currentFileContent();

    return id ? allUsers.find(({ _id }) => id === _id) : allUsers;
  }

  async save(user: UserRegistered): Promise<void | Error> {
    const currentFile = await this.__currentFileContent();
    const emailIsAlreadyRegistered = await currentFile.find((({ email }) => email === user.email));

    if (emailIsAlreadyRegistered)
      return new Error('Email is already registered');

    currentFile.push(user);

    await this.__recordAtFile(currentFile);
  }

  async update(user: UserRegistered): Promise<void | Error> {
    const allUsers = await this.__currentFileContent();

    const registeredUser = await allUsers.find(({ _id }) => user._id === _id);

    if (!registeredUser)
      return new Error('User does not exists');

    registeredUser.email = user.email;
    registeredUser.password = user.password;
    registeredUser.updatedAt = new Date(); 

    await this.__recordAtFile(allUsers);
  }

  async delete(id?: string): Promise<void> {
    if (!id) return await this.__recordAtFile([]);

    const users = await this.__currentFileContent();

    const usersSaved = users.filter(({ _id }) => id != _id);

    await this.__recordAtFile(usersSaved);
  }
}

export default UserRepository;