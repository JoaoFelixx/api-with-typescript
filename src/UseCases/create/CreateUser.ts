import { User } from "../../entities/User";
// import { SendEmailInterface } from "../../providers/SendEmailInterface";
import { UserCreateInterfaceRepository } from "../../repositories/UserInterfaceRepo";
import { createUserInterfaceDTO } from "./CreateUserDTO";

export class CreateUser {
  constructor(
    private usersRepository: UserCreateInterfaceRepository
  ) // private mailProvider: SendEmailInterface
  {}

  async execute(data: createUserInterfaceDTO) {
    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
