import { UserRegistered } from "../../../interfaces";
import { userService } from "../../../services";

export async function authUser(email: string): Promise<UserRegistered | Error> {
  const user = userService.auth(email);

  if (!user)
    return new Error('User does not registered');

  return user;
}