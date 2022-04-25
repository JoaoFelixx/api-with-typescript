import { userRepository } from "../../repositories";

const deleteUser = async (id?: string): Promise<void> => await userRepository.delete(id);

export default deleteUser;