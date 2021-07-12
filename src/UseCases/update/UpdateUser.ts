import userRepositoryFile from "../../repositories/UserRepositoryFile";
import createHash from "../../services/createHash";

class UpdateUser {
  async edit(id: string, email: string, password: string) {
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
}

export default new UpdateUser();