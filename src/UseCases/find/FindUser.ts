import userRepositoryFile from "../../repositories/UserRepositoryFile";

export async function findUser(id?: string) {

    const users = await userRepositoryFile.find(id);

    if (!users) throw new Error();

    return users;
}