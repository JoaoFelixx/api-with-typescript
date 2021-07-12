import userRepositoryFile from "../../repositories/UserRepositoryFile";

class DeleteUser {

  async exclude(id?: string) {
    await userRepositoryFile.find(id)
      .then(async () => { return await userRepositoryFile.delete(id) })
      .catch((err) => { throw new Error() })
  }
}

export default new DeleteUser()