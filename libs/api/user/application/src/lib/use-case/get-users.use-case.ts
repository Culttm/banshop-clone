import {User, UserRepository} from "@banshop/api/user/domain";

export class GetUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async invoke(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
