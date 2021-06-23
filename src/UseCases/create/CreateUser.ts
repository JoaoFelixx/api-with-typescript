import { User } from "../../entities/User";
// import { SendEmailInterface } from "../../providers/SendEmailInterface";
import { UserInterfaceRepo } from "../../repositories/UserInterfaceRepo";
import { createUserInterfaceDTO } from "./CreateUserDTO";

export class CreateUser {
  constructor (
   private usersRepository: UserInterfaceRepo,
  // private mailProvider: SendEmailInterface
  ) {}

  async execute (data: createUserInterfaceDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists)
      throw new Error('User already exists');

    const user = new User(data);

    await this.usersRepository.save(user);

    // this.mailProvider.sendEmail({
    //   to: {
    //     name: data.name,
    //     email: data.email
    //   },
    //   from: {
    //     name: 'Equipe Rocket',
    //     email: 'equiperocket@rocket.decolandonavelocidadedaluz'
    //   },
    //   subject: 'Bem vindo a equipe rocket',
    //   body: 'Parábens você passou para equipe rocket e vai trabalhar com a jesse e o james para deitar pokemons'
    // })
  }
}