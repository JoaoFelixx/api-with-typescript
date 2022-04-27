import { userService } from "../../../services";

export const deleteUser = async (id?: string): Promise<void> => await userService.delete(id);