import { UserDeleteInterfaceRepository } from "../../repositories/UserInterfaceRepo";

export class DeleteUser {
  constructor(
    private userRepository: UserDeleteInterfaceRepository
  ) {}

  async exclude(id: string, password: string) {
    await this.userRepository.delete(id, password)
      .then(() =>  { return true  })
      .catch(() => { return false });
  }
}
