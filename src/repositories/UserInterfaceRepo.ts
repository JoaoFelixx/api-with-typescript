import { UserCreate, UserUpdate } from "../entities/User";

export interface UserInterfaceRepository {
  find(id?: string): Promise<void>
  save(user: UserCreate): Promise<void>
  delete(id: string): Promise<void>
  update(id:string, user: UserUpdate): Promise<void>
}  