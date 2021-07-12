import userRepositoryFile from "../../repositories/UserRepositoryFile"
class FindUser {

  async find(id?: string) {
    const users = await userRepositoryFile.find(id)

    if (!users) throw new Error()

    return users
  }
}

export default new FindUser()