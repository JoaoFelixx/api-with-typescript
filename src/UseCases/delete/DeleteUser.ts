import userRepositoryFile from "../../repositories/UserRepositoryFile";

export async function deleteUser(id?: string) {
  
  await userRepositoryFile
    .find(id)
      .then(async () => {
        return await userRepositoryFile.delete(id);
      })
      .catch((err) => { throw new Error() });
}