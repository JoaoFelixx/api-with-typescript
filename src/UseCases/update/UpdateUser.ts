import userRepositoryFile from "../../repositories/UserRepositoryFile";
import createHash from "../../services/createHash";

export async function updateUser(id: string, email: string, password: string) {
  
    await userRepositoryFile.find(id)
      .then(async () => {
        const newPassword = await createHash(password);
        const user = {
          email: email,
          password: newPassword.toString()
        }

        return await userRepositoryFile.update(id, user);
      })
      .catch((err) => { throw new Error() });
}