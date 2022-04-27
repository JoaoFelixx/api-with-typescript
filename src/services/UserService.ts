import { userRepository } from '../repositories';
import { UserRegistered } from '../interfaces';

interface Methods {
  auth(emailReceived: string): Promise<UserRegistered | null>
  save(user: UserRegistered): Promise<UserRegistered | Error>
  update(user: UserRegistered): Promise<UserRegistered | Error>
  delete(_id: string): Promise<void>
}

export class UserService implements Methods {
  async auth(email: string) {
    return await userRepository.auth(email);
  }

  async save(user: UserRegistered) {
    return await userRepository.save(user);
  } 

  async delete(_id: string) {
    return await userRepository.delete(_id);
  }

  async update(user: UserRegistered) {
    return await userRepository.update(user);
  }
}