import { UserRegistered } from "../../interfaces";
import { userRepository } from "../../repositories";

const findUser = async (id?: string): Promise<UserRegistered[] | UserRegistered> =>
    await userRepository.find(id);

export default findUser;