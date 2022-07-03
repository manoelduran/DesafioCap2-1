import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findedUser = this.usersRepository.findById(user_id);
    if (!findedUser) {
      throw new Error("User not found!");
    }
    return findedUser;
  }
}

export { ShowUserProfileUseCase };
