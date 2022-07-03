import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const findedUser = this.usersRepository.findById(user_id);
    if (findedUser.admin === false) {
      throw new Error("User not found!");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
