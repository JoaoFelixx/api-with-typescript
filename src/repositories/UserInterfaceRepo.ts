import { User } from "../entities/User";

export interface UserInterfaceRepo {
  findByEmail(email: string): Promise<User>
  save(user: User): Promise<void>
} 